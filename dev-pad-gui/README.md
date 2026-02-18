# DevPad GUI

React + Vite frontend for DevPad, with Electron desktop support.

## Prerequisites

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Web development

```bash
npm run dev:web
```

## Electron development

```bash
npm run dev:electron
```

This starts Vite on `http://localhost:5173` and launches Electron against that dev server.

## Build web app

```bash
npm run build:web
```

## Build desktop app installers

```bash
npm run build:electron
```

Packaged artifacts are generated in `release/`.

## Run Electron against local production build

1. Build frontend:

```bash
npm run build:web
```

2. Start Electron:

```bash
npm run start:electron
```
