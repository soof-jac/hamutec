# HAMUTEC — Plano Diretor: Site Institucional
> Documento de referência para construção via Gemini CLI  
> Empresa: Hamutec — Segurança Eletrónica | Lubango, Angola  
> Versão: 2.0

---

## 1. VISÃO GERAL DO PROJETO

**Objetivo:** Site institucional profissional que converte visitantes em contactos/clientes.  
**Stack:** HTML5 + CSS3 + Vanilla JS + Three.js (CDN) — zero build tools  
**Hosting sugerido:** Netlify (free tier) ou GitHub Pages  
**Domínio sugerido:** `hamutec.ao` ou `hamutec.co.ao`

---

## 2. PALETA DE CORES (Design System)

```css
:root {
  --primary:       #0047FF;
  --primary-dark:  #0033CC;
  --bg-dark:       #050A1A;
  --bg-card:       #0A0F2C;
  --bg-section:    #080D22;
  --text-white:    #FFFFFF;
  --text-muted:    #8A9BC0;
  --border:        rgba(0, 71, 255, 0.2);
  --gradient-hero: linear-gradient(135deg, #050A1A 0%, #0A0F2C 50%, #0D1A4A 100%);
  --gradient-btn:  linear-gradient(90deg, #0047FF, #0033CC);
  --shadow-glow:   0 0 40px rgba(0, 71, 255, 0.3);
}
```

---

## 3. TIPOGRAFIA

```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: 'Syne', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}
```

---

## 4. ESTRUTURA DE FICHEIROS DO PROJETO

```
hamutec-site/
├── index.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── three-bg.js        ← animação Three.js
│   └── whatsapp.js
└── assets/
    ├── logo.png
    ├── logo-white.png
    ├── og-image.jpg
    └── team/              ← pasta para fotos da equipa (adicionar manualmente)
        ├── equipa-01.jpg
        ├── equipa-02.jpg
        └── equipa-03.jpg
```

> **NOTA:** A pasta `assets/team/` deve ser criada manualmente e as fotos da equipa  
> adicionadas antes de executar os prompts de construção.

---

## 5. WIREFRAMES POR SEÇÃO

### 5.1 NAVBAR
```
[LOGO HAMUTEC]   Início  Sobre  Serviços  Pacotes  Equipa  Contacto   [Pedir Orçamento →]
```
- Transparente → fundo sólido ao scroll
- Mobile: hamburger → drawer lateral animado

### 5.2 HERO
```
┌─────────────────────────────────────────────────────┐
│  [canvas Three.js — fundo]                          │
│  BADGE: ⚡ Segurança Eletrónica em Lubango           │
│  H1: Protegemos o que mais importa para si.         │
│  P:  Câmeras, alarmes, cercas elétricas e redes.    │
│  [Pedir Orçamento →]   [Ver Serviços ↓]             │
│  ─────────────────────────────────────────          │
│  +200 instalações · 5 anos · Garantia               │
└─────────────────────────────────────────────────────┘
```

### 5.3 SOBRE
```
┌────────────────────────┬─────────────────────────┐
│ [Texto institucional]  │ [Foto equipa / obra]    │
│ Quote slogan           │                         │
│ 📍 Morada              │                         │
│ 📞 921 449 989         │                         │
└────────────────────────┴─────────────────────────┘
```

### 5.4 SERVIÇOS (Grid 3×2)
```
[ 🚨 Alarmes ] [ 📷 Wi-Fi ] [ 🎥 CCTV ]
[ ⚡ Cerca   ] [ 🌐 Redes ] [ 🏠 Auto  ]
```

### 5.5 PACOTES (Tabs + Cards)
```
[Alarmes] [Câmeras Wi-Fi] [CCTV] [Cerca Elétrica]
┌──────────┐ ┌──────────┐ ┌──────────┐
│  BÁSICO  │ │STANDARD★ │ │ PREMIUM  │
│ 180.000  │ │ 350.000  │ │ 780.000  │
│ Kz       │ │ Kz       │ │ Kz       │
│[WhatsApp]│ │[WhatsApp]│ │[WhatsApp]│
└──────────┘ └──────────┘ └──────────┘
```

### 5.6 EQUIPA (Nova seção)
```
┌──────────────────────────────────────────────┐
│  A nossa equipa                              │
│  [ foto 1 ] [ foto 2 ] [ foto 3 ]           │
│  Nome       Nome       Nome                  │
│  Cargo      Cargo      Cargo                 │
└──────────────────────────────────────────────┘
```

### 5.7 DIFERENCIAIS (Grid 2×2)
```
[ ⚡ Instalação Rápida ] [ 🛡 Rigor Técnico  ]
[ 📞 Suporte Dedicado  ] [ 📍 Presença Local ]
```

### 5.8 CONTACTO
```
┌──────────────────────┬────────────────────────┐
│ Nome / Tel / Serviço │ 📍 Morada              │
│ Mensagem             │ 📞 921 449 989          │
│ [Enviar WhatsApp]    │ [Horário funcionamento] │
└──────────────────────┴────────────────────────┘
```

### 5.9 FOOTER
```
[LOGO]  Hamutec — Segurança Eletrónica · Lubango, Angola
Alarmes | Câmeras | CCTV | Cerca Elétrica
© 2026 Hamutec. Todos os direitos reservados.
```

---

## 6. DADOS REAIS DA EMPRESA

| Campo | Valor |
|-------|-------|
| Nome | HAMUTEC |
| Slogan | Tecnologia. Segurança. Inteligência. |
| Morada | Bairro Mapunda, Zona 6A, Rua Principal do Pululukwa |
| Cidade | Lubango, Huíla, Angola |
| Telefone | 921 449 989 |
| WhatsApp | wa.me/244921449989 |

---

## 7. CATÁLOGO DE PREÇOS COMPLETO

### Alarmes
| Pacote | Preço | Prazo |
|--------|-------|-------|
| Básico Residencial | 180.000 Kz | 1 dia útil |
| Standard | 350.000 Kz | 2 dias úteis |
| Premium Empresarial | 780.000 Kz | 3–5 dias úteis |
| Personalizado | Sob orçamento | — |

**Básico:** 1 central, 2 campainhas, 2 sensores fumaça, 1 sensor gás  
**Standard:** 1 central inteligente, 4 campainhas, 4 sensores incêndio, 2 gás, 2 sirenes  
**Premium:** Central profissional, 8 sensores incêndio, 4 gás, 4 sirenes industriais, backup energia

### Câmeras Wi-Fi
| Pacote | Preço | Equipamento |
|--------|-------|-------------|
| Essencial | 150.000 Kz | 2 câmeras HD |
| Plus | 280.000 Kz | 4 câmeras Full HD |
| Empresarial | 450.000 Kz | 6 câmeras inteligentes |
| Premium | 750.000 Kz | 10 câmeras Ultra HD |

### CCTV Cabeado (DVR)
| Pacote | Preço |
|--------|-------|
| 4 Câmeras | 250.000 Kz |
| 8 Câmeras | 450.000 Kz |
| 16 Câmeras | 800.000 Kz |
| 32 Câmeras | 1.500.000 Kz |

### Cerca Elétrica
| Pacote | Perímetro | Preço |
|--------|-----------|-------|
| Residencial Básico | Até 20m | 350.000 Kz |
| Residencial Plus | Até 40m | 650.000 Kz |
| Empresarial Premium | Até 80m | 1.200.000 Kz |
| Industrial Ultra | Até 150m | 2.000.000 Kz |

---

## 8. SUBPROMPTS POR SEÇÃO

> Usar cada subprompt individualmente no Gemini CLI, na ordem abaixo.  
> Começar sempre com: `gemini -f hamutec_plano_diretor_site.md`  
> e depois adicionar o subprompt correspondente.

---

### SUBPROMPT 0 — INICIALIZAÇÃO DO PROJETO

```
Com base no plano diretor do ficheiro anexado, cria a estrutura completa de pastas e ficheiros
do projeto hamutec-site/ no diretório atual:

- index.html (esqueleto base com <head> completo, Google Fonts, meta tags SEO, link para todos os CSS e JS)
- css/variables.css (todas as custom properties CSS da paleta e tipografia)
- css/base.css (reset CSS, estilos base do body, tipografia global)
- css/components.css (ficheiro vazio com comentários de organização)
- css/sections.css (ficheiro vazio com comentários de organização)
- css/responsive.css (ficheiro vazio com breakpoints comentados)
- js/main.js (ficheiro vazio com comentários de organização)
- js/three-bg.js (ficheiro vazio)
- js/whatsapp.js (ficheiro vazio)
- assets/team/ (pasta vazia com README.md explicando que as fotos devem ser adicionadas aqui)

Não geres conteúdo ainda. Apenas a estrutura base funcional.
```

---

### SUBPROMPT 1 — NAVBAR

```
Com base no plano diretor anexado, cria o componente NAVBAR do site Hamutec.

REQUISITOS:
- HTML semântico com <nav> e <header>
- Logo à esquerda (usa assets/logo.png com fallback texto "HAMUTEC")
- Links: Início · Sobre · Serviços · Pacotes · Equipa · Contacto
- Botão CTA "Pedir Orçamento →" à direita — ao clicar abre WhatsApp wa.me/244921449989
- Efeito scroll: transparente → fundo #0A0F2C sólido com border-bottom ao descer 60px
- Mobile: hamburger icon (3 linhas SVG) → drawer lateral animado (slide-in da direita)
- Cor ativa no link da seção atual (JS IntersectionObserver)
- Adiciona o HTML em index.html e os estilos em css/components.css e o JS em js/main.js
```

---

### SUBPROMPT 2 — HERO SECTION

```
Com base no plano diretor anexado, cria a seção HERO do site Hamutec.

REQUISITOS:
- Canvas Three.js ocupando 100% do fundo (importar via CDN: https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js)
- O canvas deve ser posicionado como fundo (position: absolute, z-index: 0)
- Todo o conteúdo do hero deve estar acima do canvas (z-index: 1)
- Conteúdo: badge pill "⚡ Segurança Eletrónica em Lubango", H1 "Protegemos o que mais importa para si.", parágrafo descritivo, dois botões CTA
- Botão primário "Pedir Orçamento →" abre WhatsApp
- Botão secundário "Ver Serviços ↓" faz scroll suave para #servicos
- Barra de estatísticas inferior: "+200 Instalações · 5 Anos de Experiência · Garantia Técnica"
- Animação de entrada: fade-in staggered com animation-delay crescente em cada elemento
- Adiciona HTML em index.html, estilos em css/sections.css, Three.js em js/three-bg.js
- O script Three.js deve ser chamado APÓS o DOM estar carregado
```

---

### SUBPROMPT 3 — ANIMAÇÃO THREE.JS (FUNDO HERO)

```
Cria o ficheiro js/three-bg.js com uma animação Three.js de alta qualidade para o fundo
do hero do site Hamutec (empresa de segurança eletrónica).

ESPECIFICAÇÕES TÉCNICAS:
- Usar Three.js r160 (importado via CDN no index.html, disponível como THREE global)
- Canvas com id="hero-canvas", 100% width/height, position absolute, z-index 0
- Fundo: cor #050A1A (igual ao var(--bg-dark))
- Resize handler: atualizar renderer e câmera ao redimensionar janela

CENA A CRIAR — "Rede de Vigilância":
- 120 pontos (esferas pequenas, raio 0.08) espalhados aleatoriamente no espaço 3D
- Cor dos pontos: #0047FF com emissive #0033CC
- Linhas conectando pontos próximos (distância < 4 unidades) — cor rgba(0, 71, 255, 0.15)
- Animação contínua: rotação lenta de toda a cena (rotationY += 0.0008, rotationX += 0.0003)
- 3 a 5 pontos "ativos" pulsam (escala oscila entre 1 e 2.5 com Math.sin do tempo)
- Esses pontos ativos emitem uma "onda" — anel (RingGeometry) que expande e desaparece
- Mouse parallax suave: a cena inclina levemente ao mover o mouse (fator 0.05)
- Performance: usar requestAnimationFrame, desativar antialias em mobile (navigator.userAgent)
- Comentários explicando cada bloco de código

O resultado deve parecer uma rede de câmeras/sensores de vigilância conectados.
```

---

### SUBPROMPT 4 — SEÇÃO SOBRE

```
Com base no plano diretor anexado, cria a seção SOBRE (#sobre) do site Hamutec.

REQUISITOS:
- Layout dois colunas: texto à esquerda, imagem à direita
- Coluna texto: label "Quem Somos" com linha azul à esquerda, H2, parágrafo institucional
- Quote em destaque: "Tecnologia. Segurança. Inteligência." com borda esquerda azul
- Linha de localização: ícone pin + "Bairro Mapunda, Zona 6A, Lubango — Angola"
- Coluna imagem: usa assets/team/IMG-20260604-WA0001.jpg com border-radius e glow azul sutil
  — onerror: mostrar placeholder estilizado com ícone escudo
- Fundo: var(--bg-section)
- Mobile: colunas empilham (texto acima, imagem abaixo)
- Adiciona HTML em index.html, estilos em css/sections.css
```

---

### SUBPROMPT 5 — SEÇÃO SERVIÇOS

```
Com base no plano diretor anexado, cria a seção SERVIÇOS (#servicos) do site Hamutec.

REQUISITOS:
- H2 "Os Nossos Serviços" centralizado com subtítulo
- Grid 3×2 (desktop) / 2×3 (tablet) / 1×6 (mobile) de cards de serviço
- 6 cards com: ícone SVG inline (não emoji), título, descrição, link "Ver pacotes →"

SERVIÇOS E DESCRIÇÕES:
1. Sistema de Alerta — Sensores de fumaça, gás, sirenes e centrais inteligentes de prevenção
2. Câmeras Wi-Fi — Monitorização remota HD/4K com app no telemóvel e visão noturna
3. CCTV Cabeado (DVR) — Gravação contínua robusta com DVR profissional e alta fidelidade
4. Cerca Elétrica — Proteção perimetral com eletrificação, sirene e anti-sabotagem
5. Redes Informáticas — Infraestrutura de rede cabeada e Wi-Fi para empresas
6. Automação — Controlo inteligente de acessos, iluminação e ambientes

CARD VISUAL:
- Background: var(--bg-card), border: 1px solid var(--border)
- Hover: border-color → var(--primary), box-shadow → var(--shadow-glow), translateY(-4px)
- Transição suave 0.25s
- Ícone: SVG 40×40px, cor var(--primary)
- Adiciona HTML em index.html, estilos em css/sections.css e css/components.css
```

---

### SUBPROMPT 6 — SEÇÃO PACOTES / PREÇOS

```
Com base no plano diretor anexado (catálogo completo na seção 7), cria a seção PACOTES
(#pacotes) do site Hamutec.

REQUISITOS:
- H2 "Pacotes e Preços" + subtítulo
- Sistema de abas (tabs): [Alarmes] [Câmeras Wi-Fi] [CCTV] [Cerca Elétrica]
- Tab ativa: fundo var(--primary), texto branco; inativa: borda var(--border)
- Cada tab mostra grid de cards de preço (3 a 4 cards por tab conforme catálogo)

CARD DE PREÇO:
- Nome do pacote em H3
- Preço em destaque grande (ex: "350.000 Kz")
- Badge "Mais Popular" no pacote intermédio (border var(--primary))
- Lista de itens inclusos com ícone check ✓ em azul
- Botão "Solicitar Este Pacote" → abre WhatsApp com mensagem pré-preenchida:
  "Olá! Tenho interesse no [NOME DO PACOTE] da Hamutec. Podem enviar mais informações?"
- Prazo de instalação visível (ex: "Instalação em 2 dias úteis")
- Último card de cada tab: "Pacote Personalizado" com CTA "Pedir Orçamento Especial"

TODOS OS PREÇOS E ITENS estão na seção 7 deste documento.
Adiciona HTML em index.html, JS de tabs em js/main.js, estilos em css/sections.css
```

---

### SUBPROMPT 7 — SEÇÃO EQUIPA

```
Com base no plano diretor anexado, cria a seção EQUIPA (#equipa) do site Hamutec.

REQUISITOS:
- H2 "A Nossa Equipa" + subtítulo sobre profissionalismo
- Grid de cards de membro: foto circular, nome, cargo
- Usar AS SEGUINTES IMAGENS REAIS (já existem em assets/team/):
    assets/team/IMG-20260324-WA0004.jpg
    assets/team/IMG-20260324-WA0006.jpg
    assets/team/IMG-20260324-WA0007.jpg
    assets/team/IMG-20260324-WA0008.jpg
    assets/team/IMG-20260518-WA0006.jpg
    assets/team/IMG-20260604-WA0001.jpg
    assets/team/IMG-20260604-WA0002.jpg
    assets/team/IMG-20260604-WA0005.jpg
    assets/team/IMG-20260604-WA0006.jpg
- Usar as primeiras 4 a 6 imagens no grid principal; as restantes podem aparecer numa
  segunda linha ou num carrossel simples (sem bibliotecas externas)
- Nome e cargo: usar placeholders "Técnico Hamutec" e "Especialista em Segurança" até
  que os nomes reais sejam fornecidos — deixar comentários HTML indicando onde substituir
- Foto: object-fit cover em container circular (border-radius 50%), border 2px solid var(--border)
- Hover no card: border-color → var(--primary), foto escala levemente (1.05)
- Se alguma imagem falhar ao carregar: onerror → mostrar placeholder com iniciais + fundo azul
- Texto de reforço abaixo do grid:
  "Equipa técnica certificada com mais de 5 anos de experiência em instalações em Angola."
- Fundo: var(--bg-dark)
- Mobile: grid 2 colunas ou 1 coluna
- Adiciona HTML em index.html, estilos em css/sections.css
```

---

### SUBPROMPT 8 — SEÇÃO DIFERENCIAIS

```
Com base no plano diretor anexado, cria a seção DIFERENCIAIS (#porque-nos) do site Hamutec.

REQUISITOS:
- H2 "Porque Escolher a Hamutec?" + subtítulo
- Grid 2×2 de cards de diferencial com ícone SVG, título e descrição

4 DIFERENCIAIS:
1. Instalação Rápida — Concluímos em 1 a 5 dias úteis, conforme o pacote escolhido
2. Rigor Técnico — Equipamentos testados, cablagem limpa e sistemas configurados a fundo
3. Suporte Dedicado — Assistência técnica pós-instalação e acompanhamento contínuo
4. Presença Local — Sediados em Lubango, com resposta rápida e visita técnica ao local

- Cards com fundo var(--bg-card), linha de topo em var(--primary) (border-top 3px)
- Ícone SVG 36px em azul
- Seção com fundo ligeiramente diferente (var(--bg-section)) para contrastar
- Adiciona HTML em index.html, estilos em css/sections.css
```

---

### SUBPROMPT 9 — SEÇÃO CONTACTO

```
Com base no plano diretor anexado, cria a seção CONTACTO (#contacto) do site Hamutec.

REQUISITOS:
- H2 "Entre em Contacto" + subtítulo
- Layout dois colunas: formulário à esquerda, informações à direita

FORMULÁRIO (esquerda):
- Campos: Nome completo, Telefone, Serviço de interesse (dropdown com os 4 serviços), Mensagem
- Botão "Enviar pelo WhatsApp" → constrói URL wa.me/244921449989?text=... com todos os campos
- Validação básica em JS: todos os campos obrigatórios antes de abrir WhatsApp
- Estilo: inputs com fundo #0A0F2C, border var(--border), focus border var(--primary)

INFORMAÇÕES (direita):
- 📍 Bairro Mapunda, Zona 6A, Rua Principal do Pululukwa, Lubango — Angola
- 📞 921 449 989 (link tel:)
- 💬 WhatsApp: 921 449 989 (link wa.me)
- Horário: Segunda a Sábado, 08h–18h
- Card de destaque: "Resposta em menos de 2 horas durante o horário de funcionamento"

BOTÃO FLUTUANTE WHATSAPP:
- Posição: fixed, bottom: 24px, right: 24px, z-index: 999
- Círculo verde (#25D366) com ícone WhatsApp SVG branco
- Pulse animation suave
- Tooltip "Falar connosco" ao hover
- Presente em TODAS as páginas (adicionar fora das seções, no body)

Adiciona HTML em index.html, JS em js/whatsapp.js, estilos em css/sections.css
```

---

### SUBPROMPT 10 — FOOTER

```
Com base no plano diretor anexado, cria o FOOTER do site Hamutec.

REQUISITOS:
- Fundo: #030712 (mais escuro que o body)
- Layout 3 colunas: marca / serviços / contacto
- Coluna 1: Logo + "Hamutec — Segurança Eletrónica" + slogan + descrição breve
- Coluna 2: "Serviços" — lista de links âncora para cada seção de serviço
- Coluna 3: "Contacto" — morada, telefone, horário
- Linha divisória: border-top 1px solid var(--border)
- Rodapé inferior: "© 2026 Hamutec. Todos os direitos reservados. · Lubango, Angola"
- Mobile: colunas empilham em coluna única
- Adiciona HTML em index.html, estilos em css/sections.css
```

---

### SUBPROMPT 11 — RESPONSIVIDADE E POLISH FINAL

```
Com base em todo o código HTML/CSS/JS gerado até agora para o site Hamutec, aplica
responsividade completa e ajustes de polish final.

RESPONSIVIDADE (em css/responsive.css):
- Mobile (<768px): navbar hamburger, hero coluna única, grids 1 coluna, fontes menores
- Tablet (768–1023px): grids 2 colunas, hero layout ajustado
- Desktop (≥1024px): layout completo conforme wireframes
- Garantir que o canvas Three.js nunca quebre o layout em mobile

POLISH:
- Scroll suave global: html { scroll-behavior: smooth; }
- Scroll reveal: elementos das seções surgem com fade-in ao entrar no viewport (IntersectionObserver)
- Active link na navbar: atualiza ao fazer scroll (IntersectionObserver nas seções)
- Loading: preloader simples (logo + spinner azul) que desaparece quando o DOM está pronto
- Todas as imagens com loading="lazy" e alt descritivos
- Testar mentalmente o fluxo: Navbar → Hero → Sobre → Serviços → Pacotes → Equipa → Diferenciais → Contacto → Footer

Entrega o código final revisado e limpo.
```

---

### SUBPROMPT 12 — REVISÃO E AUDITORIA FINAL

```
Faz uma auditoria completa do site Hamutec gerado e corrige os seguintes pontos:

1. SEO: todas as meta tags presentes (title, description, keywords, og:title, og:image)?
2. Acessibilidade: todos os botões têm aria-label? Imagens têm alt?
3. WhatsApp: todos os CTAs abrem wa.me/244921449989 com mensagem pré-preenchida correta?
4. Three.js: o canvas não bloqueia interação com o conteúdo do hero (pointer-events: none)?
5. Mobile: o hamburger menu funciona e fecha ao clicar num link?
6. Preços: todos os valores do catálogo estão corretos em Kwanza?
7. Paths de imagem: todos usando ./assets/ com fallback quando imagem não existe?
8. Performance: CSS e JS desnecessários removidos? Imagens com loading="lazy"?

Lista todos os problemas encontrados com a linha de código correspondente e aplica as correções.
```

---

## 9. COMPONENTES TÉCNICOS DE REFERÊNCIA

### WhatsApp CTA
```javascript
function openWhatsApp(pacote = '') {
  const msg = pacote
    ? `Olá! Tenho interesse no ${pacote} da Hamutec. Podem enviar mais informações?`
    : `Olá! Gostaria de um orçamento da Hamutec.`;
  window.open(`https://wa.me/244921449989?text=${encodeURIComponent(msg)}`, '_blank');
}
```

### Scroll Reveal (IntersectionObserver)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### CSS Reveal
```css
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.55s ease, transform 0.55s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

---

## 10. SEO META TAGS (index.html)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hamutec — Segurança Eletrónica em Lubango, Angola</title>
<meta name="description" content="Câmeras, alarmes, CCTV e cercas elétricas em Lubango. Instalação profissional com garantia. Contacte: 921 449 989">
<meta name="keywords" content="segurança eletrónica Lubango, câmeras vigilância Angola, alarmes Lubango, CCTV Angola, cerca elétrica Lubango">
<meta property="og:title" content="Hamutec — Segurança Eletrónica">
<meta property="og:description" content="Protegemos o que mais importa. Lubango, Angola.">
<meta property="og:image" content="./assets/og-image.jpg">
```

---

## 11. CDNs NECESSÁRIOS (no index.html)

```html
<!-- Three.js -->
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

---

*Documento gerado para uso direto no Gemini CLI — Hamutec © 2026*
