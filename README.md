# Filos Editora — Site Institucional

Site da Filos Editora, construído com [Astro](https://astro.build).
Identidade visual em escala de cinza, com tipografia editorial e interatividade via JavaScript puro.

## Início rápido

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:4321

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Editar conteúdo

Todo o conteúdo editável está na pasta `src/data/`:

| Arquivo | O que controla |
|---|---|
| `site.json` | WhatsApp, e-mail, Instagram, estatísticas |
| `books.json` | Livros na vitrine |
| `services.json` | Serviços oferecidos |
| `testimonials.json` | Depoimentos de autores |

> Para instruções detalhadas de edição, consulte o [CLAUDE.md](./CLAUDE.md).

## Estrutura

```
src/
├── components/   # Uma seção por arquivo .astro
├── data/         # Conteúdo em JSON — edite aqui
├── layouts/      # Base.astro (HTML shell)
├── pages/        # index.astro (página principal)
└── styles/       # global.css (todo o CSS)
public/
└── js/main.js    # Toda a interatividade
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Conecte o repositório GitHub no dashboard da Vercel.
Build command: `npm run build` · Output: `dist/`
