/* ==========================================================================
   VICTOR GONÇALVES — Comportamento
   --------------------------------------------------------------------------
   JavaScript Vanilla, sem dependências. Cada bloco é independente: se um
   falhar, os outros continuam funcionando e a página segue utilizável.

   Nenhum conteúdo comercial mora aqui. Preços, planos, textos e benefícios
   estão todos no index.html.

   01. Utilidades
   02. Testeira / navegação
   03. Acender ao rolar
   04. Vídeos sob demanda
   05. FAQ
   06. Planos → formulário
   07. Formulário → WhatsApp
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- 01. Utilidades --------------------------------------------- */
  var $  = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Conexão fraca ou economia de dados: nada de mídia pesada. */
  function connectionIsPoor() {
    var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!c) return false;
    if (c.saveData) return true;
    if (/(^|\b)(slow-)?2g$/.test(c.effectiveType || '')) return true;
    /* 3g entra no corte porque o vídeo do herói é grande: numa rede assim o
       download vira a conta de internet do visitante, e o fundo pintado em
       CSS já entrega a primeira tela completa sem ele. */
    if (c.effectiveType === '3g') return true;
    /* downlink NÃO serve de portão principal: o Chrome arredonda o valor,
       limita em 10 Mbps por privacidade e reporta um padrão conservador
       (1.6) mesmo em banda larga. Usar como piso alto barraria gente com
       conexão boa. Fica só como rede de segurança para o caso patológico. */
    if (typeof c.downlink === 'number' && c.downlink > 0 && c.downlink < 1) return true;
    return false;
  }

  var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 200); };

  /* ---------- 02. Testeira / navegação ------------------------------------ */
  (function nav() {
    var fascia = $('#fascia');
    var toggle = $('#menu-toggle');
    var menu   = $('#nav-principal');
    if (!fascia) return;

    /* A testeira ganha corpo depois que a página sai do topo */
    var stuck = false;
    var onScroll = function () {
      var should = window.scrollY > 24;
      if (should !== stuck) {
        stuck = should;
        fascia.classList.toggle('is-stuck', stuck);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (!toggle || !menu) return;

    var open = function (state) {
      toggle.setAttribute('aria-expanded', String(state));
      toggle.setAttribute('aria-label', state ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
      menu.classList.toggle('is-open', state);
      document.body.classList.toggle('is-locked', state);
    };

    toggle.addEventListener('click', function () {
      open(toggle.getAttribute('aria-expanded') !== 'true');
    });

    /* Escolher um destino fecha a porta */
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) open(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        open(false);
        toggle.focus();
      }
    });

    /* Se a tela cresce para desktop, a porta some sem deixar o body travado */
    window.matchMedia('(min-width: 64em)').addEventListener('change', function (e) {
      if (e.matches) open(false);
    });

    /* Marca no menu a seção que está na tela */
    var links = $$('.nav__link');
    var targets = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    if (targets.length && 'IntersectionObserver' in window) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      targets.forEach(function (t) { spy.observe(t); });
    }
  }());

  /* ---------- 03. Acender ao rolar ----------------------------------------
     Um único gesto na página inteira: as coisas acendem quando entram em cena.
     O atributo data-lit só é aplicado por JS — sem script, tudo já está
     visível, e com prefers-reduced-motion nada é escondido.                 */
  (function reveal() {
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    var groups = [
      ['.hero__title, .hero__lede, .hero__actions, .strip, .portrait--hero', 90],
      ['.course__head > *, .sobre__media, .sobre__copy > p, .marks, .chips', 70],
      ['.work, .perk, .quote, .plan, .qa, .contato__copy > *, .form', 60]
    ];

    /* Acende e, terminada a transição, devolve o elemento ao estado natural.
       Remover o atributo é o que torna isso à prova de falha: se a aba estiver
       em segundo plano e nenhum quadro for desenhado, o elemento não fica
       preso invisível — ele simplesmente volta a ser um elemento normal. */
    var TRANSITION = 700;
    function lightUp(el) {
      var delay = Number(el.dataset.litDelay) || 0;
      setTimeout(function () {
        el.classList.add('is-on');
        setTimeout(function () {
          el.removeAttribute('data-lit');
          el.classList.remove('is-on');
        }, TRANSITION + 60);
      }, delay);
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        lightUp(entry.target);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    groups.forEach(function (group) {
      var sel = group[0], step = group[1];
      /* Agrupa por seção para o escalonamento reiniciar a cada faixa */
      $$('section, footer').forEach(function (section) {
        $$(sel, section).forEach(function (el, i) {
          el.setAttribute('data-lit', '');
          el.dataset.litDelay = String(Math.min(i * step, step * 5));
          io.observe(el);
        });
      });
    });

    /* As etapas do processo acendem em ordem e ficam acesas: aqui a sequência
       é a informação, então o estado final é permanente e não é revertido. */
    var stageIo = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        setTimeout(function () { el.classList.add('is-on'); },
                   Number(el.dataset.stageDelay) || 0);
        obs.unobserve(el);
      });
    }, { threshold: 0.3 });
    $$('.stages').forEach(function (list) {
      $$('.stage', list).forEach(function (el, i) {
        el.dataset.stageDelay = String(i * 140);
        stageIo.observe(el);
      });
    });
  }());

  /* ---------- 04. Vídeos sob demanda --------------------------------------
     O arquivo de origem é 4K. Ele não entra no caminho crítico: o fundo
     pintado já está na tela e o vídeo só chega depois, se a conexão
     permitir.                                                              */
  (function video() {
    var poor = connectionIsPoor();

    /* Se o navegador barrar o autoplay silencioso, o primeiro toque do
       visitante libera todos os vídeos de uma vez. */
    var blocked = [];
    function releaseOnGesture() {
      blocked.splice(0).forEach(function (el) { el.play().catch(function () {}); });
    }
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, releaseOnGesture, { passive: true });
    });

    function start(el) {
      if (!el || el.dataset.started) return;
      el.dataset.started = '1';

      /* Autoplay silencioso só é permitido se o elemento estiver realmente
         mudo no momento do play — a propriedade, não só o atributo. */
      el.muted = true;
      el.defaultMuted = true;
      el.setAttribute('muted', '');

      el.addEventListener('playing', function () {
        el.classList.add('is-playing');
      }, { once: true });

      el.src = el.dataset.src;
      el.load();

      var p = el.play();
      if (p && p.catch) {
        p.catch(function () {
          /* Fundo estático segue valendo até o visitante interagir */
          if (blocked.indexOf(el) === -1) blocked.push(el);
        });
      }
    }

    /* Herói: só depois de a página estar carregada e ociosa */
    var hero = $('#hero-video');
    if (hero && !poor) {
      var kick = function () { idle(function () { start(hero); }); };
      if (document.readyState === 'complete') kick();
      else window.addEventListener('load', kick, { once: true });
    }

    /* Demais vídeos: apenas ao se aproximarem, e só em telas maiores.
       Abaixo disso o fundo estático é visualmente equivalente e o visitante
       não paga megabytes por uma textura que quase não aparece.             */
    var wide = window.matchMedia('(min-width: 40em)').matches;
    if (poor || !wide || !('IntersectionObserver' in window)) return;

    var lazy = $$('video[data-src]').filter(function (v) { return v !== hero; });
    if (!lazy.length) return;

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        start(entry.target);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '300px 0px' });

    lazy.forEach(function (v) { io.observe(v); });
  }());

  /* ---------- 05. FAQ ------------------------------------------------------ */
  (function faq() {
    $$('.qa__q').forEach(function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;

      panel.style.height = '0px';
      panel.style.transition = reduceMotion ? 'none' : 'height .34s cubic-bezier(.16,.84,.34,1)';

      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
          panel.style.height = panel.scrollHeight + 'px';
          requestAnimationFrame(function () {
            requestAnimationFrame(function () { panel.style.height = '0px'; });
          });
          btn.setAttribute('aria-expanded', 'false');
          var hide = function () {
            if (btn.getAttribute('aria-expanded') === 'false') panel.hidden = true;
            panel.removeEventListener('transitionend', hide);
          };
          if (reduceMotion) hide();
          else panel.addEventListener('transitionend', hide);
        } else {
          panel.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
          panel.style.height = panel.scrollHeight + 'px';
          var done = function () {
            if (btn.getAttribute('aria-expanded') === 'true') panel.style.height = 'auto';
            panel.removeEventListener('transitionend', done);
          };
          if (reduceMotion) done();
          else panel.addEventListener('transitionend', done);
        }
      });
    });
  }());

  /* ---------- 06. Planos → formulário --------------------------------------
     Escolher um plano marca o campo correspondente lá embaixo: uma ação que
     atravessa a página, para o visitante não digitar duas vezes.            */
  (function plans() {
    var select = $('#f-plano');
    if (!select) return;

    $$('[data-plan-cta]').forEach(function (cta) {
      cta.addEventListener('click', function () {
        var plano = cta.getAttribute('data-plan-cta');
        var match = $$('option', select).some(function (o) {
          if (o.value === plano || o.textContent.trim() === plano) {
            select.value = o.value || o.textContent.trim();
            return true;
          }
          return false;
        });
        if (match) {
          select.classList.remove('is-bad');
          /* Um pulso curto para o visitante ver o que mudou */
          if (!reduceMotion) {
            select.animate(
              [{ boxShadow: '0 0 0 0 rgba(47,134,255,.55)' },
               { boxShadow: '0 0 0 8px rgba(47,134,255,0)' }],
              { duration: 700, easing: 'cubic-bezier(.16,.84,.34,1)' }
            );
          }
        }
      });
    });
  }());

  /* ---------- 07. Formulário → WhatsApp ------------------------------------
     Sem back-end: os campos viram uma mensagem pronta e o WhatsApp abre.    */
  (function form() {
    var WHATSAPP = '5522992899127';

    var f = $('#form-orcamento');
    if (!f) return;

    var status = $('#form-status');
    var nome   = $('#f-nome');
    var fone   = $('#f-fone');
    var email  = $('#f-email');
    var neg    = $('#f-neg');
    var plano  = $('#f-plano');
    var msg    = $('#f-msg');

    /* Máscara de telefone: escreve como brasileiro escreve */
    fone.addEventListener('input', function () {
      var d = fone.value.replace(/\D/g, '').slice(0, 11);
      var out = d;
      if (d.length > 2 && d.length <= 6)       out = '(' + d.slice(0, 2) + ') ' + d.slice(2);
      else if (d.length > 6 && d.length <= 10) out = '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
      else if (d.length > 10)                  out = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
      fone.value = out;
    });

    function setError(field, errorId, message) {
      var box = document.getElementById(errorId);
      field.classList.toggle('is-bad', Boolean(message));
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (!box) return;
      box.textContent = message || '';
      box.hidden = !message;
    }

    /* Erros somem assim que o visitante começa a corrigir */
    [[nome, 'e-nome'], [fone, 'e-fone'], [email, 'e-email'], [neg, 'e-neg']]
      .forEach(function (pair) {
        var ev = pair[0].tagName === 'SELECT' ? 'change' : 'input';
        pair[0].addEventListener(ev, function () {
          if (pair[0].classList.contains('is-bad')) setError(pair[0], pair[1], '');
        });
      });

    function validate() {
      var bad = [];

      if (nome.value.trim().length < 2) {
        setError(nome, 'e-nome', 'Escreva seu nome para eu saber com quem falo.');
        bad.push(nome);
      } else setError(nome, 'e-nome', '');

      var digits = fone.value.replace(/\D/g, '');
      if (digits.length < 10 || digits.length > 11) {
        setError(fone, 'e-fone', 'Informe o WhatsApp com DDD, como (22) 99289-9127.');
        bad.push(fone);
      } else setError(fone, 'e-fone', '');

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
        setError(email, 'e-email', 'Confira o e-mail: parece faltar algo, como o "@" ou o final.');
        bad.push(email);
      } else setError(email, 'e-email', '');

      if (!neg.value) {
        setError(neg, 'e-neg', 'Escolha o tipo de negócio para eu preparar a proposta certa.');
        bad.push(neg);
      } else setError(neg, 'e-neg', '');

      return bad;
    }

    f.addEventListener('submit', function (e) {
      e.preventDefault();

      var bad = validate();
      if (bad.length) {
        status.textContent = 'Faltou preencher ' + bad.length +
          (bad.length === 1 ? ' campo.' : ' campos.') + ' Corrija os itens marcados acima.';
        status.className = 'form__note is-bad';
        bad[0].focus();
        return;
      }

      var texto =
        'Olá, Victor! Meu nome é ' + nome.value.trim() + '. ' +
        'Tenho interesse em criar um site para meu negócio (' + neg.value + '). ' +
        'Meu WhatsApp é ' + fone.value.trim() + ' e meu e-mail é ' + email.value.trim() + '. ' +
        'Tenho interesse no plano ' + plano.value + '.' +
        (msg.value.trim() ? ' Minha mensagem: ' + msg.value.trim() : '');

      status.textContent = 'Tudo certo — abrindo o WhatsApp com a sua mensagem pronta.';
      status.className = 'form__note is-ok';

      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto),
                  '_blank', 'noopener');
    });
  }());

}());
