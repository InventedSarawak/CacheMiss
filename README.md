# CacheMiss 📝

<img src="public/cachemiss-og.png" alt="CacheMiss" width="400" height="300" style="display: block; margin: 0 auto;">

**CacheMiss** is a clean, minimal, accessible, and SEO-friendly personal blog site — a place to share thoughts, technical deep dives, CTF writeups, photography rants, and occasional poetry.

---

## 🔥 Features

- [x] 🧾 Minimal and distraction-free layout
- [x] ✍️ Markdown-based blog posts with type-safety
- [x] 🚀 Blazing fast performance with Astro
- [x] ♿ Accessible design (keyboard + screen readers)
- [x] 📱 Fully responsive (mobile to desktop)
- [x] 🔍 Fuzzy search with Pagefind
- [x] 🌗 Light and dark mode toggle
- [x] 🗂️ Pagination, drafts, and custom slugs
- [x] 📰 RSS feed and automated sitemap
- [x] 📸 Dynamic Open Graph image generation

---

## 🚀 Project Structure

```bash
/
├── public/
│   ├── assets/
│   ├── pagefind/
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── toggle-theme.js
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── config.ts
│   ├── constants.ts
│   ├── content.config.ts
└── astro.config.ts
```

---

## 💻 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Search**: [Pagefind](https://pagefind.app/)
- **Icons**: [Tabler Icons](https://tabler-icons.io/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Linting**: [ESLint](https://eslint.org)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🧑‍💻 Getting Started

```bash
pnpm create astro@latest --template yourusername/cachemiss
pnpm install
pnpm run dev
```

Or using Docker:

```bash
docker build -t cachemiss .
docker run -p 4321:80 cachemiss
```

---

## 🧞 Commands

| Command                           | Description               |
| --------------------------------- | ------------------------- |
| `pnpm install`                    | Install dependencies      |
| `pnpm run dev`                    | Start local dev server    |
| `pnpm run build`                  | Build production site     |
| `pnpm run preview`                | Preview built site        |
| `pnpm run format`                 | Format code with Prettier |
| `pnpm run lint`                   | Lint project with ESLint  |
| `docker build -t cachemiss .`     | Build Docker image        |
| `docker run -p 4321:80 cachemiss` | Run site using Docker     |

---

## 📜 License

MIT © 2025

---

Made with 🤍 by [Vedant](https://github.com/inventedsarawak).
