---
name: Victor Gonçalves — Teatro de Circuito Luminoso
description: Um instrumento técnico aceso sobre um fundo quase preto contínuo — luz vira gradiente de título e traço fino de circuito, nunca bolha de gradiente atrás de vidro.
colors:
  canvas: "#05060f"
  canvas-2: "#030309"
  head-1: "#d8ecf8"
  head-2: "#98c0ef"
  ink: "#e7f0fa"
  ink-action: "#d1e4fa"
  quote: "#c7d3ea"
  body-c: "rgb(200 212 234 / .78)"
  muted: "rgb(199 211 234 / .64)"
  glow: "#c2ccff"
  led: "#6fa8ff"
  led-hot: "#9fc9ff"
  emitter: "#bfe0ff"
  tile: "rgb(186 214 247 / .015)"
  tile-edge: "rgb(186 214 247 / .07)"
  tile-edge-hover: "rgb(134 182 255 / .38)"
  glass: "rgb(186 207 247 / .025)"
  glass-edge: "rgb(186 207 247 / .14)"
  wash: "rgb(186 214 247 / .06)"
  wash-strong: "rgb(186 214 247 / .1)"
  hairline: "rgb(186 207 247 / .1)"
  hairline-soft: "rgb(186 207 247 / .18)"
  alert: "#FF8A8A"
  alert-ink: "#FFB4B4"
  alert-deep: "#2A0808"
  alert-ring: "rgb(255 138 138 / .16)"
  wa-1: "#2FC24E"
  wa-2: "#1BA33C"
  wa-ink: "#04140A"
typography:
  display:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.3rem, 5.8vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.8rem, 4.2vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1.3
  lede:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  hair: "4px"
  sm: "10px"
  tile: "16px"
  panel-sm: "20px"
  browser: "12px"
  panel: "28px"
  pill: "9999px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4rem"
  s9: "6rem"
  s10: "8rem"
  gutter: "clamp(1.25rem, 5vw, 2.5rem)"
  course-y: "clamp(4rem, 9vw, 7rem)"
  shell: "76rem"
components:
  button-lit:
    backgroundColor: "linear-gradient(180deg, rgb(186 214 247 / .14), rgb(186 214 247 / .07))"
    textColor: "{colors.ink-action}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3rem"
    typography: "{typography.body}"
  button-lit-hover:
    backgroundColor: "linear-gradient(180deg, rgb(186 214 247 / .2), rgb(186 214 247 / .1))"
  button-vinyl:
    backgroundColor: "rgb(186 207 247 / .02)"
    textColor: "{colors.ink-action}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3rem"
  button-vinyl-hover:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.led-hot}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0 1.15rem"
    height: "2.5rem"
  chip:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: ".4rem .9rem"
    typography: "{typography.label}"
  input-field:
    backgroundColor: "rgb(5 6 15 / .55)"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: ".8rem .9rem"
    height: "2.9rem"
  tile-glass:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "clamp(1.5rem, 4vw, 1.9rem)"
  panel-glass:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 5vw, 2.25rem)"
---

# Design System: Victor Gonçalves — Teatro de Circuito Luminoso

## Overview

**Creative North Star: "O Teatro de Circuito Luminoso"**

A página é um instrumento técnico aceso sobre um fundo quase preto e contínuo. Onde o mundo anterior ("Letreiro Luminoso") fazia da parede azul-petróleo a superfície dominante e mantinha a luz presa a uma placa fabricada, este mundo inverte a física: o fundo (`--canvas`, `#05060f`) é escuridão quase absoluta e ininterrupta, e a luz mora inteiramente na tipografia e no circuito — um gradiente vertical claro→azul-gelo preenchendo títulos e a única palavra em destaque do H1, traços finos de circuito e emissores de ponto (registration dots) ligando cabeçalho, retrato e janelas de projeto num único sistema visual contínuo. Vidro é tratamento específico — aresta fria por dentro (`--rim`) mais uma queda de sombra suave (`--lift`) — nunca decoração genérica aplicada a qualquer superfície.

A referência pinada pelo usuário ("AuthKit — luminous circuit theater") nomeou o mundo e a experiência de primeira tela; o build adaptou dois pontos por necessidade concreta do produto: Manrope substitui aeonikPro e Inter substitui Untitled Sans — ambas são as próprias substituições documentadas na referência, já que as fontes originais são comerciais. O "ruled eyebrow" (rótulo sobre régua, acima de título) da referência foi deliberadamente omitido: nenhum `course__head` do build carrega uma etiqueta acima do H2, porque kickers/eyebrows são um dispositivo banido pelo piso de artesanato deste harness — a referência nomeia o padrão, mas o build não o herda. Os cartões "Conversion choice" de preço também não existem, porque os planos de preço foram removidos do produto antes deste build; depoimentos e FAQ reaproveitam, em vez disso, a "Testimonial cell" e o padrão de campo com contorno (outline-field) da própria referência. Os ícones de benefício ganharam um tratamento de "módulo de instrumento" autoral — um chip escuro com emissor de canto e traço de conexão, o componente `.perk__mech` — para não cair no cartão genérico ícone+título+texto que a referência evita com sua "illustrated feature tile".

**Key Characteristics:**
- Fundo quase preto contínuo (`#05060f`); a cor azul mora na luz (gradiente de título, circuito), não na superfície de base.
- Títulos acendem com gradiente vertical claro→azul-gelo mais um glow de texto frio e sutil; corpo de texto permanece flat.
- Vidro é efeito específico: aresta fria interna (`--rim`) + queda de sombra deslocada (`--lift`), nunca `box-shadow` genérico centrado.
- Emissores de ponto (≤9px, brilho sem deslocamento) são o único lugar onde glow centrado é permitido — é o que um emissor real faz.
- Botões são cápsulas pill pequenas: lavagem azul de 6–14% e anel interno frio, nunca um bloco sólido.
- Manrope carrega títulos, Inter carrega corpo e rótulos — dois arquivos variáveis self-hospedados, sem terceiro.
- Sem kickers/eyebrows acima de título, sem cartão de preço: ambos fora do produto atual.

## Colors

Uma paleta de instrumento: um único azul-gelo em muitas transparências sobre um quase-preto, mais um vermelho de alerta isolado e o verde de terceiro do WhatsApp.

### Primary
- **Azul-Gelo Frost** (`#98c0ef` / `--head-2`): A extremidade azul do gradiente de título e do traço de circuito aceso.
- **Frost Highlight** (`#d8ecf8` / `--head-1`): A extremidade clara do mesmo gradiente — título, palavra em destaque do H1, numeral de etapa aceso, iniciais de depoimento.
- **Ice Action Ink** (`#d1e4fa` / `--ink-action`): Texto de cápsula e ícones pequenos sobre fundo escuro.

### Secondary
- **LED** (`#6fa8ff` / `--led`): Sublinhado de link de navegação, borda de foco em campos.
- **LED Hot** (`#9fc9ff` / `--led-hot`): O ponto mais brilhante funcional — hover de chip, hover de link de projeto, estrelas de depoimento preenchidas, ícone de benefício dentro do módulo, marcador de FAQ aberto.
- **Emitter** (`#bfe0ff` / `--emitter`): Os emissores de ponto genuínos (≤9px): o pino da marca, os pontos da régua de confiança, os registros de canto do retrato e do módulo de benefício.

### Neutral
- **Canvas** (`#05060f`): Fundo contínuo de página.
- **Canvas 2** (`#030309`): Stop mais escuro do fallback do hero e do gradiente de rodapé.
- **Ink** (`#e7f0fa`): Títulos sem gradiente, marca na testeira, texto forte.
- **Quote** (`#c7d3ea`): Corpo de depoimento.
- **Body** (`rgb(200 212 234 / .78)`): Corpo de texto padrão — lede do hero, parágrafos de contato.
- **Muted** (`rgb(199 211 234 / .64)`): Texto secundário — ledes de seção, descrições de cartão, rótulos de campo.
- **Glow** (`#c2ccff`): Anel de foco visível e o perímetro da cápsula de ação.
- **Vidro quase invisível** (`tile`, `tile-edge`, `glass`, `glass-edge`, `wash`, `hairline` e suas variantes): a mesma escuridão do fundo com aresta fria — nunca um cinza opaco.

### Alert e WhatsApp (quarentenados)
- **Alert** (`#FF8A8A` / `--alert`, `#FFB4B4` / `--alert-ink`): Única família quente do sistema, reservada exclusivamente para erro de validação de formulário.
- **WhatsApp** (`#2FC24E` / `--wa-1`, `#1BA33C` / `--wa-2`): Marca de terceiro, isolada no CTA flutuante e no link de contato direto. Não pode emprestar verde para nenhum outro uso.

### Named Rules

**The Light-In-Type Rule.** A cor só acende como gradiente de título ou traço de circuito; a superfície de base nunca carrega a cor — ela é sempre `--canvas` quase preto. Isso inverte deliberadamente o mundo anterior, onde a parede azul-petróleo era a superfície dominante.

**The Bounded Emitter Rule.** Brilho sem deslocamento (glow centrado) só é permitido em emissores de ponto genuínos ≤9px — pino de marca, pontos da régua, registros de canto. Em qualquer outra superfície, a sombra é sempre `--rim` (aresta interna) + `--lift` (queda deslocada): nunca uma bolha de gradiente solta atrás de um cartão de vidro.

## Typography

**Display/Headline Font:** Manrope (substitui `aeonikPro`, comercial — a própria referência documenta esta troca), com `system-ui, -apple-system, 'Segoe UI', sans-serif` de fallback.
**Body/Label Font:** Inter (substitui `Untitled Sans`, comercial — mesma lógica), mesmo fallback.

**Character:** Manrope em peso médio (500) carrega o registro iluminado — títulos e a palavra em destaque, sempre em gradiente de texto, nunca peso 700+. Inter em 400 carrega o corpo plano e sóbrio; nenhuma das duas famílias usa tracking expandido ou caixa alta como voz própria.

### Hierarchy
- **Display** (500, `clamp(2.3rem, 5.8vw, 3.4rem)`, 1.05, `-.01em`): O H1 do hero apenas, com `.hl`/`<em>` acendendo uma palavra em gradiente de texto.
- **Headline** (500, `clamp(1.8rem, 4.2vw, 2.75rem)`, 1.08, `-.01em`): Todo H2 de seção (`.h2`).
- **Title** (600, `1.05rem`, 1.3): H3 — nome de projeto, título de benefício, etapa, pergunta de FAQ.
- **Lede** (400, `clamp(1.05rem, 2.2vw, 1.3rem)`, 1.5): Subtítulo do hero e introduções de seção, até 46–56ch.
- **Body** (400, `1rem`, 1.5): Padrão; parágrafos longos de "Sobre" e contato capados em 68ch.
- **Label** (500, `.85rem`): Rótulos de campo, chips, texto de régua de confiança.

### Named Rules

**The No-Eyebrow Rule.** Nenhum rótulo em caixa alta ou régua dupla senta acima de um título de seção (`.course__head`). A referência pinada nomeia o padrão ("Ruled eyebrow"); ele não existe neste build porque o piso de artesanato deste harness bane kickers/eyebrows sobre título. Isto é uma restrição de processo, não uma ausência casual — não reintroduzir.

**The Closed Ramp Rule.** A escala tipográfica é só tokens, de `--fs-display` a `--fs-xs`; adicionar um tamanho significa adicionar um token, nunca um valor literal solto no CSS.

## Layout

Mobile-first em dois arquivos: `style.css` é o build completo de telefone; `responsive.css` só adiciona breakpoints — 30em, 40em, 48em, 63.98em/64em, 80em, 100em, mais um teto de 1023.98px para o menu móvel e passes de paisagem curta e impressão.

O contêiner é `.shell` (máx. `76rem`, `padding-inline: var(--gutter)`), com `.shell--narrow` em `46rem` para colunas de leitura. O ritmo vertical é a seção `.course`: `padding-block: clamp(4rem, 9vw, 7rem)`, com um filete de circuito de 1px entre cursos consecutivos que esmaece nas duas pontas — nunca uma borda sólida de ponta a ponta.

Espaço é uma rampa base de 4px, `--s1`…`--s10` (0.25rem a 8rem), igual em todo o arquivo. As grades crescem com o conteúdo, nunca forçadas a uma matriz: projetos 1 coluna → multi-coluna com spans largos, benefícios centralizados e quebrando por linha (flex-wrap, não grid fixo), depoimentos e FAQ como um único campo com filetes de 1px em vez de cartões soltos.

## Elevation & Depth

Profundidade é vidro de instrumento, não uma escala de sombra genérica. Toda superfície de vidro compõe duas coisas num só `box-shadow`: a aresta fria interna (`--rim`) e a queda deslocada para fora (`--lift`). Não há parede física nem pino de fixação como no mundo anterior — o vidro aqui é quase invisível (1–6% de opacidade azul) e só se revela pela aresta e pela luz interna.

### Shadow Vocabulary
- **Rim** (`--rim`: `inset 0 1px 1px rgb(216 236 248 / .18), inset 0 24px 48px rgb(168 216 245 / .05)`): A luz entrando pela aresta superior de qualquer superfície de vidro — cartões, FAQ, formulário, retrato. Presente em praticamente toda superfície elevada.
- **Rim Soft** (`--rim-soft`: `inset 0 1px 0 rgb(216 236 248 / .12)`): Versão mais discreta, usada na placa de identificação do retrato.
- **Lift** (`--lift`: `0 26px 60px -32px rgb(2 4 12 / .9)`): A queda de sombra deslocada para baixo que separa a superfície do fundo — sempre junto ao rim, nunca sozinha.
- **Glow Sm** (`--glow-sm`: `0 0 10px 1px rgb(159 201 255 / .55)`): Reservado a emissores de ponto genuínos ≤9px.
- **Glow Ring** (`--glow-ring`: `0 0 0 3px rgb(194 204 255 / .22)`): Anel de foco de campo de formulário.

### Named Rules

**The Rim-Plus-Lift Rule.** Toda superfície de vidro elevada compõe `var(--rim), var(--lift)` (às vezes com um halo de hover adicional); nunca um `box-shadow` solto e centrado, que leria como orb flutuante — exatamente o que a tese da direção recusa.

## Shapes

Cantos generosos em vidro, nunca retos. A rampa de raio é: `4px` fio (sublinhado de link, filetes), `10px` pequeno (campos, módulo de benefício), `16px` cartão (`.work`, `.perk`, `.stage`), `20px` moldura de retrato (`.portrait__frame` e sua variante compacta no celular), `12px` moldura de navegador do projeto (`.chrome`/`.work__window`), `28px` painel grande (`.quotes`, `.faq`, `.form`), `9999px` pill total (botões, chips, retrato-plate). Bordas são filetes de 1px na família azul-gelo entre 7–18% de opacidade, nunca cor sólida opaca. Onde um grupo pertence a um único campo — depoimentos e FAQ — o build usa uma única superfície com filete dividindo (`gap: 1px` sobre fundo `--hairline`), não cartões espalhados. Ícones são um único sistema de traço: inline SVG, `stroke: currentColor`, sem fonte de ícone.

## Components

### Buttons
- **Shape:** Cápsula pill (`9999px`), altura mínima 3rem, `0 1.6rem` de padding, peso 600. `.btn--sm` cai para 2.5rem / `0 1.15rem`.
- **Lit (primary, `.btn--lit`):** Lavagem azul interna em gradiente (`rgb(186 214 247 / .14→.07)`), anel interno frio (`inset 0 0 0 1px`), halo deslocado para baixo. Hover sobe 2px e intensifica a lavagem e o halo.
- **Vinyl (secondary, `.btn--vinyl`):** Só contorno — 1px `--glass-edge` sobre fundo quase transparente. Hover acende borda e texto para `--led-hot`, fundo para `--wash`.

### Perk Instrument Module (signature, `.perk__mech`)
Um chip escuro de `3.25rem` com o ícone de benefício dentro, um emissor de ponto no canto superior-direito e um traço fino de 1px descendo para o texto — a instância mínima do "instrumento de circuito" em escala de benefício, deliberadamente autoral para evitar o padrão genérico ícone+título+texto da referência.

### Project Window (signature, `.work`/`.chrome`/`.work__window`)
Cada projeto senta numa janela "de navegador": barra `.chrome` com três pontos e uma pílula de URL falsa, sobre um `.work__window` 16:10 que contém uma miniatura `.mini` — um site fictício de cliente desenhado inteiramente em CSS, dimensionado em `cqi` para escalar com a janela, cada um com sua própria paleta (`--acc/--pap/--gry/--tx/--tx2`) isolada da paleta do site.

### Cards / Containers
- **Corner Style:** `16px` (`.work`, `.perk`, `.stage`), `28px` (`.quotes`, `.faq`, `.form`).
- **Background:** `--tile` ou `--glass` — 1.5–2.5% de lavagem azul sobre o canvas, quase invisível.
- **Shadow Strategy:** `var(--rim), var(--lift)` em repouso; cartões de projeto e benefício sobem `-3px`/`-4px` no hover e acendem a borda para `--tile-edge-hover`.
- **Border:** 1px filete em `--tile-edge` ou `--glass-edge`.
- **Internal Padding:** `clamp(1.5rem, 4vw, 1.9rem)` para tiles; `clamp(1.5rem, 5vw, 2.25rem)` para o painel do formulário.

### Inputs / Fields
- **Style:** Recuado — fundo `rgb(5 6 15 / .55)`, 1px `--hairline-soft`, `10px` de raio, `inset 0 1px 2px` de sombra, altura mínima 2.9rem, `caret-color: --led-hot`.
- **Focus:** Borda vira `--led`, mais `--glow-ring` (anel de 3px) somado à sombra interna.
- **Error:** Borda `--alert`, anel `--alert-ring`; mensagem em `--alert-ink` atrás de um disco `!` preenchido.

### Testimonial Cell e FAQ Plate (`.quotes`/`.quote`, `.faq`/`.qa`)
Um único campo de contorno dividido por filetes de 1px (`gap: 1px` sobre `--hairline`), reaproveitando o padrão "Testimonial cell"/outline-field da referência pinada — não quatro cartões soltos. Depoimentos trazem estrelas preenchidas em `--led-hot` e um disco de iniciais em gradiente de título; FAQ expande com um marcador que gira 180° e acende para `--led-hot`.

### Portrait Frame (signature, `.portrait__frame`)
Painel de vidro contendo o retrato — aresta fria (`--tile-edge`), sheen de vidro diagonal sutil, dois registros de canto de 4px no topo (o mesmo emissor do pino da marca), e uma placa de identificação em vidro pill sobreposta à base, sem moldura dura nem hardware de fixação visível — o retrato do mundo anterior tinha pinos de montagem; este não tem.

### Navigation
- **Fascia:** Fixa, transparente em repouso; ao rolar (`.is-stuck`) ganha corpo — `rgb(5 6 15 / .78)` com `blur(14px) saturate(140%)`.
- **Links:** Peso 500, `--muted` → `--ink` no hover, com um traço LED de 2px que escala a partir da esquerda sob o link (`--led` → `--led-hot`, glow de 8px). A seção atual mantém o traço aceso.
- **Mobile (<1024px):** Gaveta com `blur(18px) saturate(140%)`; o hambúrguer é três barras que cruzam ao abrir.

## Do's and Don'ts

### Do:
- **Do** manter a cor presa à tipografia e ao circuito (gradiente de título, traço LED, emissor de ponto) — nunca pintar a superfície de base com azul.
- **Do** compor toda sombra de vidro como `var(--rim), var(--lift)`; adicionar halo só no hover, nunca em repouso.
- **Do** usar brilho sem deslocamento apenas em emissores de ponto genuínos ≤9px.
- **Do** manter os dois registros tipográficos: Manrope médio (500) iluminado para título, Inter 400 plano para corpo.
- **Do** agrupar itens que pertencem a um único campo (depoimentos, FAQ) numa única superfície com filete divisório, não em cartões espalhados.
- **Do** dar a cada ícone de benefício seu módulo de instrumento (`.perk__mech`) — chip, emissor de canto, traço de conexão — em vez de ícone solto sobre título e texto.
- **Do** manter cada projeto numa janela de navegador (`.chrome`/`.work__window`) com a paleta da miniatura isolada da paleta do site.

### Don't:
- **Don't** colocar um rótulo/kicker em caixa alta ou régua dupla acima de um título de seção — banido pelo piso de artesanato deste harness; a referência pinada o documenta, mas o build não o herda como regra do sistema.
- **Don't** reintroduzir cartões de "escolha de preço" (conversion choice) — os planos saíram do produto antes deste build; depoimentos e FAQ cobrem esse papel com o padrão de campo de contorno.
- **Don't** usar sombra externa solta e centrada (orb) atrás de um cartão de vidro — a sombra é sempre aresta interna + queda deslocada.
- **Don't** introduzir uma nova fonte além de Manrope e Inter; são as substituições documentadas da própria referência pinada para aeonikPro/Untitled Sans, comerciais.
- **Don't** emprestar o verde do WhatsApp ou o vermelho de alerta para qualquer uso fora de sua quarentena (CTA de contato / erro de formulário).
- **Don't** alterar artificialmente a aparência de Victor nas fotos (recorte, sombra, glow e máscara são permitidos; mudar como ele parece não é) — compromisso de marca herdado de PRODUCT.md.
