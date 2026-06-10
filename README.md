<div align="center">

# ✦ Lumin UI

### Built to Be Seen. Designed to Be Used.

A growing collection of **animated, accessible UI components** for modern React applications — crafted in the spirit of [shadcn/ui](https://ui.shadcn.com), with motion baked in.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-React-FF0080?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev)

[**Live Demo**](http://localhost:3000) · [**Components**](#-components) · [**Getting Started**](#-getting-started)

</div>

---

## ✨ Features

- 🎬 **Animated by default** — every component ships with thoughtful motion via `motion/react`
- 🌗 **Dark mode** — global theme toggle plus per-component preview switching
- ♿ **Accessible** — built on top of shadcn/ui primitives
- 📋 **Copy & paste** — no install step; grab the source straight from the gallery
- ⚡ **Modern stack** — Next.js App Router, React 19, Tailwind CSS v4

## 🧱 Tech Stack

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | Next.js (App Router)                    |
| Language     | TypeScript                              |
| Styling      | Tailwind CSS v4                         |
| Animation    | `motion/react` (Framer Motion)          |
| Primitives   | shadcn/ui                               |
| Icons        | `@tabler/icons-react` + custom SVGs     |
| Theming      | `next-themes`                           |

## 🧩 Components

| Component          | Description                                          |
| ------------------ | ---------------------------------------------------- |
| Animated Button    | Button with layered hover and press animations       |
| Card Stack         | Stacked, swappable cards with depth                  |
| Launch Page        | Polished product launch / coming-soon layout         |
| Integration        | Animated integrations showcase                       |
| Pricing            | Responsive pricing table                             |
| Dotted Background  | Canvas dot grid with a cursor-reactive spotlight     |
| Sliding Number     | Animated number transitions with digit rolling       |
| Content Card       | Content card with an animated integrations list      |

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/aryanpatel99/lumin-ui.git
cd lumin-ui

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component gallery.

## 📋 Using a Component

> **Note:** Lumin UI is **copy & paste** — there's no `npm` package or CLI yet.

1. Open the gallery and click any component to view its page
2. Switch to the **Code** tab and copy the source
3. Paste it into your project under `components/` (or wherever you keep UI)
4. Make sure you have the shared dependencies installed:

```bash
npm install motion clsx tailwind-merge
```

5. Add the `cn()` helper if you don't have one:

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

That's it — the component is yours to edit.

> 💡 A `npx` CLI installer (shadcn-style) is on the roadmap.

## 📁 Project Structure

```
registry/                 # All showcase components live here
  <component-name>/
    <component-name>.tsx
  index.ts                # Central registry: slug → metadata
  client-registry.tsx     # slug → live component map

app/
  page.tsx                # Homepage component grid
  components/[slug]/       # Individual component pages (Preview / Code / Usage)
  icons/index.tsx          # Custom SVG icons

components/ui/             # shadcn primitives only
lib/utils.ts               # cn() helper
providers/                 # Theme provider
```

## ➕ Adding a Component

1. Create `registry/<name>/<name>.tsx` (kebab-case, `@/` imports only)
2. Register it in `registry/index.ts` and `registry/client-registry.tsx`
3. Add a `ComponentCard` to `app/page.tsx` with an appropriate preview scale

---

<div align="center">

Built with ✦ by [Aryan Patel](https://github.com/aryanpatel99)

</div>
