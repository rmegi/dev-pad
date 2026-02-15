# DevPad 

DevPad is a lightweight, frontend-only developer notebook inspired by Notepad++. It’s built for saving, organizing, and quickly copying code snippets, notes, and ideas no backend, no accounts, no friction.

Everything lives locally in your browser, so it’s fast, private, and always available.


## Tech Stack

- **React** (with TypeScript)
- **Vite** for development & build
- **Tailwind CSS** for styling
- **Jotai** for state management

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm or pnpm

### Build & run local

```bash
npm install
```

```bash
npm run dev
```
### Build & run the Docker image

```bash
docker build -t dev-pad .
```

```bash
docker run --rm -it -p 5173:5173 dev-pad
```

## Philosophy

DevPad is intentionally **simple**:

- No backend
- No authentication
- No sync (yet)

It’s meant to be your **personal scratchpad for code**, not another heavy editor.
