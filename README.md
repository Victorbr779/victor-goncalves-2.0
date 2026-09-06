# Victor Gonçalves — Landing page comercial

Página única de venda para o serviço de criação de sites. HTML5, CSS3 e
JavaScript Vanilla. Sem framework, sem build, sem back-end — é só subir a pasta
em qualquer hospedagem estática.

---

## Como rodar

Abrir `index.html` direto no navegador funciona para a maior parte das coisas,
mas o vídeo e a fonte podem falhar pelo protocolo `file://`. Para ver o site
como ele realmente é, suba um servidor local:

```bash
npx serve -l 4173 .
```

Depois acesse `http://localhost:4173`.

---

## Estrutura

```
/
├── index.html          todo o conteúdo e todos os textos comerciais
├── css/
│   ├── style.css       base mobile-first, tokens e componentes
│   └── responsive.css  só os pontos de quebra
├── js/
│   └── script.js       navegação, FAQ, vídeo e formulário
├── assets/
│   ├── fonts/          Archivo variável (self-hospedada)
│   ├── images/         as três fotos
│   └── videos/
├── docs/               os arquivos originais, como você entregou
└── README.md
```

`docs/` é a pasta original preservada. O site consome `assets/`.

---

## Editando os planos e preços

**Tudo o que é comercial está no `index.html`, em texto puro.** Nada de preço,
nome de plano ou benefício mora no JavaScript. Procure o bloco:

```html
<!-- ÁREA DE EDIÇÃO COMERCIAL -->
```

Dentro da seção `#planos`, cada plano é um `<article class="plan">`:

| O que mudar | Onde |
|---|---|
| Nome do plano | `<h3 class="plan__name">` |
| Para quem é | `<p class="plan__for">` |
| Mensalidade (o número grande) | `<span class="plan__val">` |
| Rótulo sob o número | `<p class="plan__note">` |
| Preço de criação | `<p class="plan__rec">` |
| Lista de benefícios | `<ul class="plan__list">` — um `<li>` por item |
| Texto do botão | `<a class="btn ... plan__cta">` |

**Para mudar qual plano é o destacado**, mova a classe `plan--on` e o
`<span class="violator">` para o `<article>` que deve ficar aceso. O texto do
selo ("Mais escolhido") está dentro do próprio `violator`.

O `data-plan-cta="Pro"` no botão é o que preenche automaticamente o campo
"Plano de interesse" do formulário. Se você renomear um plano, renomeie também
esse atributo e a `<option>` correspondente no `<select id="f-plano">`.

Se editar os preços, atualize também o bloco `application/ld+json` no `<head>`
(`hasOfferCatalog`), que é o que o Google lê.

---

## Sobre os arquivos que você entregou

A pasta trouxe cinco arquivos. Duas observações importantes:

**O briefing pedia `video-home-azul.mp4`, que não veio.** Mas `video-2.mp4` é
exatamente esse conteúdo — riscos de luz azul, 4K, 10 segundos. Foi só
renomeado. A seu pedido, ele ficou na seção de contato e não no Hero.

**O briefing também citava `circuito-1-bg.png`, que não veio.** Em vez de
pedir o arquivo, desenhei o traçado de circuito em SVG dentro do próprio CSS
(procure `.hero__conduit`). Fica mais leve que um PNG, é nítido em qualquer
resolução e a cor sai de um token — se quiser mudar, é um valor só.

**Onde cada vídeo está:** `video-1.mp4` (campo de partículas) no Hero,
`video-2.mp4` (riscos de luz) na seção de contato — como você pediu.

**Atenção ao `video-1.mp4`: ele tem 154 MB.** Está no Hero, que é a primeira
coisa que o visitante encontra. O carregamento é adiado e cortado em conexão
ruim (detalhe abaixo), mas num celular com Wi-Fi bom ele baixa. **Recomprimir
antes de publicar deixou de ser recomendação e é pré-requisito.**

---

## Performance

O site foi construído para carregar rápido: nenhum framework, nenhuma requisição
a terceiros, fonte self-hospedada em um único arquivo variável e imagens com
dimensões declaradas (nenhum salto de layout).

Os vídeos **nunca entram no caminho crítico**. O fundo do herói é pintado em
CSS antes de qualquer mídia, e o vídeo só é baixado depois que a página carregou
e o navegador ficou ocioso. O fundo estático foi desenhado para ficar bom
sozinho, não para ser um buraco esperando o vídeo.

Quem baixa o quê, medido na rede:

| Situação | O que baixa |
|---|---|
| Desktop, banda larga | os dois vídeos |
| Celular, 4G bom | só o do Hero |
| Celular ou desktop em 3G | nenhum |
| 2G | nenhum |
| Economia de dados ligada | nenhum |

O vídeo do contato nunca desce abaixo de 640px de largura: ali ele quase não
apareceria e não vale os megabytes. O corte usa `effectiveType` da API de
informação de rede, que é o sinal feito para isso — `downlink` só entra como
rede de segurança, porque o Chrome arredonda o valor e reporta um padrão
conservador mesmo em banda larga.

### Antes de publicar: recomprima a mídia

Este é o ponto que mais vale a pena atacar, e é o que separa o site atual de um
Lighthouse 90+.

| Arquivo | Onde | Hoje | Alvo |
|---|---|---|---|
| `video-1.mp4` | Hero | **154 MB, 4K** | **3–5 MB em 1920×1080 — prioridade máxima** |
| `video-2.mp4` | Contato | 28 MB, 4K | 3–5 MB em 1920×1080 |
| `perfil-*.png` | Hero e Sobre | ~1,7 MB cada | ~150 KB em WebP |

O herói não precisa de 4K: em tela cheia, 1080p com um bitrate honesto é
indistinguível e economiza mais de 20 MB. Com o `ffmpeg` instalado:

```bash
ffmpeg -i assets/videos/video-1.mp4 -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart assets/videos/video-1-web.mp4
ffmpeg -i assets/videos/video-2.mp4 -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart assets/videos/video-2-web.mp4
```

O `-an` remove o áudio (os vídeos são mudos de qualquer forma) e o `+faststart`
deixa o vídeo começar a tocar antes de terminar o download. Depois é só apontar
os `data-src` (em `.hero__video` e `.contato__video`) para os arquivos novos.

Para as fotos, com o `cwebp`:

```bash
cwebp -q 82 assets/images/perfil-2.png -o assets/images/perfil-2.webp
```

E trocar a extensão nos `src` do HTML. Nenhuma dessas otimizações foi feita aqui
porque `ffmpeg` e `cwebp` não estavam disponíveis na máquina onde o site foi
construído.

---

## O que precisa ser substituído antes de publicar

Tudo está marcado com `<!-- SUBSTITUIR -->` no HTML. Busque por essa palavra.

- **Projetos de exemplo** — `Studio Marina Alves`, `Oficina Duarte` e
  `Dra. Helena Prado` são ilustrativos. `Teccerâmica` é real, mas o link ainda
  é `#`. Troque os `href="#"` pelas URLs verdadeiras.
- **Depoimentos** — os quatro são ilustrativos. Troque nomes, empresas e textos
  por depoimentos reais.
- **Redes sociais** — os `href="#"` do rodapé esperam Instagram, LinkedIn e
  GitHub reais.
- **E-mail** — `contato@victorgoncalves.com.br` é um endereço de exemplo.
- **Domínio** — o `<link rel="canonical">` e as tags Open Graph apontam para
  `https://victorgoncalves.com.br/`. Ajuste para o domínio real.
- **Política de Privacidade e Termos de Uso** — as páginas ainda não existem.

O WhatsApp **(22) 99289-9127** já está funcionando em todos os pontos.

### As miniaturas dos projetos

Os "prints" dos sites dos clientes são desenhados em HTML/CSS, não são imagens.
Ficam nítidos em qualquer tela e não pesam nada. Quando você tiver capturas
reais, é só trocar o `<div class="mini ...">` por uma `<img>` dentro do
`.work__window` — o resto do card continua igual.

---

## Acessibilidade

- Um único `<h1>`, hierarquia `h1 → h2 → h3` sem pulos.
- Navegação completa por teclado, com foco visível em tudo e link "Pular para o
  conteúdo" no primeiro Tab.
- Todo campo tem `<label>`; os erros são anunciados por leitor de tela
  (`role="alert"`) e o foco vai para o primeiro campo com problema.
- Contraste de texto medido acima de 4,5:1 em todo o conteúdo.
- `prefers-reduced-motion` respeitado: quem pede menos movimento recebe a página
  inteira já visível e sem animação.

---

## Detalhes que valem saber

**A identidade é "letreiro luminoso"** — uma fachada comercial à noite. A regra
que segura o visual: *a luz é sempre contida por uma borda fabricada*. Face de
acrílico acesa, perfil de alumínio com fio de luz na aresta de cima, halo curto
só na parede atrás. Nada acende solto no espaço. É isso que separa o site de uma
estética "gamer" — se um dia você adicionar um elemento novo, siga essa regra.

**Um único gesto de movimento**: as coisas acendem quando entram na tela. Não
há efeito espalhado por toda parte; é o mesmo gesto repetido.

**O plano em destaque é o letreiro aceso da fileira.** O Pro não é "o card
azul" — ele é o único painel ligado, e os outros dois são faces apagadas, mais
escuras que a parede. Se mudar o destaque, mova a classe, não adicione cor nova.

**Nenhum tamanho de fonte é literal.** Toda a escala está em tokens no topo do
`style.css` (`--fs-display` até `--fs-label`). Precisando de um tamanho novo,
crie um token — é o que mantém o site consistente com o tempo.

**O formulário não usa servidor.** Ele valida os campos, monta a mensagem e
abre o WhatsApp com tudo preenchido. O visitante confere antes de enviar.
