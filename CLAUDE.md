# CLAUDE.md — Filos Editora

> Este arquivo é lido automaticamente pelo Claude Code ao iniciar uma sessão neste projeto.
> Ele documenta as diretrizes de design, arquitetura e convenções para edição segura e consistente.

---

## Visão Geral do Projeto

Site institucional da **Filos Editora** — editora independente brasileira.
Stack: **Astro 4** (geração estática), HTML/CSS vanilla, JavaScript puro.

- Sem framework frontend (React, Vue, etc.) nas páginas
- CSS global sem scoping de componente (tudo em `src/styles/global.css`)
- JavaScript em `public/js/main.js` (sem bundler, carregado direto no browser)
- Conteúdo em arquivos JSON em `src/data/`

---

## Design System

### Paleta de Cores — Escala de Cinza

A identidade visual é **preto e branco** com escala de cinza como sistema de acento.
**Nunca adicionar cores saturadas.** Toda nova cor deve ser um cinza.

```css
/* src/styles/global.css — bloco :root */

--accent:     #333333   /* Principal — botões primários, badges, destaques */
--secondary:  #666666   /* Secundário — elementos médios, sombras */
--tertiary:   #999999   /* Terciário — decorativos sutis, highlights */
--quaternary: #AAAAAA   /* Quaternário — elementos muito suaves */

--fg:         #111111   /* Texto principal */
--muted-fg:   #666666   /* Texto secundário */
--bg:         #FAFAF8   /* Fundo principal (off-white quente) */
--muted:      #F0F0F0   /* Fundo alternativo (seções alternadas) */
--card:       #FFFFFF   /* Background de cards */
--border:     #DDDDDD   /* Bordas */
```

### Tipografia

| Função   | Fonte               | Pesos     |
|----------|---------------------|-----------|
| Títulos  | Outfit              | 700, 800  |
| Corpo    | Plus Jakarta Sans   | 400, 500, 600 |

Carregadas via Google Fonts em `src/layouts/Base.astro`.
**Não trocar as fontes sem atualizar o Base.astro.**

### Sombras — Estilo Neobrutalist

Sombras sólidas com offset, sem blur. Característica visual central do projeto.

```css
--shadow:    4px 4px 0px 0px #111111   /* padrão */
--shadow-lg: 8px 8px 0px 0px #111111   /* cards grandes */
--shadow-pink:   6px 6px 0px 0px #666666   /* sombra secundária */
--shadow-yellow: 6px 6px 0px 0px #999999   /* sombra terciária */
--shadow-green:  6px 6px 0px 0px #AAAAAA   /* sombra quaternária */
```

### Border Radius

```css
--r-sm:   8px
--r-md:   16px
--r-lg:   24px
--r-full: 9999px  /* pílulas */
```

### Animação

```css
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1)  /* bounce suave */
```
Usada em hovers de botões e cards. Não remover.

---

## Estrutura de Arquivos

```
filos-astro/
├── public/
│   └── js/
│       └── main.js          ← TODA a interatividade (slides, filtros, scroll)
├── src/
│   ├── components/          ← Uma seção por arquivo .astro
│   │   ├── Header.astro
│   │   ├── Hero.astro       ← 3 slides com navegação JS
│   │   ├── Partners.astro   ← Marquee de parceiros
│   │   ├── Services.astro   ← Loop em services.json
│   │   ├── About.astro      ← Ilustração + stats do site.json
│   │   ├── Testimonials.astro ← Loop em testimonials.json
│   │   ├── Vitrine.astro    ← Loop em books.json + capas SVG geradas
│   │   ├── CTA.astro
│   │   ├── Contact.astro    ← Formulário → WhatsApp
│   │   ├── Footer.astro
│   │   └── WhatsAppFloat.astro
│   ├── data/                ← EDITE AQUI para atualizar conteúdo
│   │   ├── site.json        ← Config global (WhatsApp, email, redes, stats)
│   │   ├── books.json       ← Vitrine de livros
│   │   ├── services.json    ← Serviços oferecidos
│   │   └── testimonials.json ← Depoimentos
│   ├── layouts/
│   │   └── Base.astro       ← HTML shell: <head>, fontes, CSS, JS
│   ├── pages/
│   │   └── index.astro      ← Página principal (importa todos os componentes)
│   └── styles/
│       └── global.css       ← TODO o CSS do site
├── astro.config.mjs
├── package.json
└── CLAUDE.md                ← Este arquivo
```

---

## Como Editar Conteúdo

### Alterar informações de contato / WhatsApp / e-mail
→ Editar `src/data/site.json`

```json
{
  "whatsapp": "5581999999999",
  "whatsappDisplay": "(81) 99999-9999",
  "email": "contato@filoseditora.com.br",
  "instagram": "filoseditora"
}
```

### Adicionar um livro na Vitrine
→ Editar `src/data/books.json`, adicionar objeto ao array:

```json
{
  "id": "meu-livro",
  "title": "Título do Livro",
  "author": "Nome do Autor",
  "genre": "romance",
  "tags": ["Romance", "Drama"],
  "pages": 280,
  "badge": null,
  "cover": {
    "bgStart": "#1A1A1A",
    "bgEnd": "#333333",
    "accent": "#888888",
    "pattern": "moon"
  },
  "waMessage": "Quero saber mais sobre Título do Livro!"
}
```

**Padrões de capa disponíveis** (`cover.pattern`):
- `moon` — céu noturno com lua
- `quill` — pena/canuma
- `planet` — planeta com anel
- `arrow` — figura com seta para cima (autoajuda)
- `sun` — sol com raios (infantil)
- `lines` — linhas de texto (acadêmico)
- `stars` — constelação de estrelas

**Gêneros disponíveis** para os filtros:
`romance` · `poesia` · `ficcao` · `autoajuda` · `infantil` · `academico`

**Substituir capas por imagens reais:** trocar o `<svg set:html={...}>` por
`<img src={"/covers/" + book.id + ".jpg"} alt={book.title} />` em `Vitrine.astro`
e colocar as imagens em `public/covers/`.

### Adicionar um serviço
→ Editar `src/data/services.json`, adicionar ao array.
Os campos obrigatórios são: `id`, `title`, `tag`, `iconColor`, `shadowVar`,
`description`, `features` (array de strings), `cta`, `waMessage`.

### Editar depoimentos
→ Editar `src/data/testimonials.json`.
Apenas um depoimento deve ter `"featured": true`.

### Editar estatísticas do "Sobre"
→ Editar os campos em `src/data/site.json`:
`authorsServed`, `titlesPublished`, `yearsExperience`, `satisfactionRate`

---

## Como Editar Estilos

**Tokens globais (cores, fontes, raios, sombras):**
→ Seção `:root` no início de `src/styles/global.css`

**Estilos de um componente específico:**
→ Buscar o comentário `/* =========== NOME =========== */` em `global.css`

**Regra importante:** o CSS não tem scoping. Classes definidas em `global.css`
valem para todos os componentes. Prefixar novas classes com o nome do componente
(ex: `.vitrine-nova-classe`) para evitar colisão.

---

## Como Adicionar uma Nova Seção

1. Criar `src/components/NomeDaSecao.astro`
2. Importar e usar em `src/pages/index.astro`
3. Adicionar estilos em `src/styles/global.css` com comentário `/* === NOME === */`
4. Se precisar de JS interativo, adicionar em `public/js/main.js`

---

## JavaScript — public/js/main.js

Todas as funções de interatividade ficam aqui. Principais:

| Função            | Descrição                                     |
|-------------------|-----------------------------------------------|
| `goToSlide(n)`    | Navega para o slide n do Hero                 |
| `nextSlide()`     | Próximo slide                                 |
| `prevSlide()`     | Slide anterior                                |
| `filterBooks(g, btn)` | Filtra vitrine pelo gênero `g`            |
| `sendToWhatsApp()` | Lê o formulário de contato e abre WhatsApp   |
| `closeMobileNav()` | Fecha o menu mobile                          |

---

## Deploy

### Vercel (recomendado)
1. Fazer push para GitHub
2. Importar repositório no [vercel.com](https://vercel.com)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node.js version: 18+

### GitHub Pages
```bash
npm run build
# Fazer push da pasta dist/ para branch gh-pages
```

---

## Comandos Disponíveis

```bash
npm run dev      # Servidor local em http://localhost:4321
npm run build    # Build de produção → pasta dist/
npm run preview  # Preview do build de produção
```

---

## Convenções de Código

- Componentes Astro em **PascalCase**: `Services.astro`
- Dados em **camelCase**: `waMessage`, `bgStart`, `isNew`
- Classes CSS em **kebab-case**: `.service-card`, `.book-card-title`
- Variáveis CSS com `--`: `--accent`, `--shadow-lg`
- IDs de âncora em **kebab-case**: `#servicos`, `#vitrine`, `#sobre`
- Nunca usar cores absolutas em componentes — sempre usar variáveis CSS (`var(--accent)`)

---

## Checklist ao Fazer Alterações

- [ ] Testei com `npm run dev` antes de fazer push
- [ ] Novos livros têm `id` único (sem espaços ou caracteres especiais)
- [ ] Novos IDs de gradiente SVG são únicos (formato `cg-{book.id}`)
- [ ] Número do WhatsApp está no formato `55DDNXXXXXXXX` (sem espaços ou símbolos)
- [ ] Build sem erros: `npm run build`
