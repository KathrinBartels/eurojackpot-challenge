# eurojackpot

This litle app shows the last 20 draws of the eurojackpot

## Key Features

- 📐 Prettier & ESLint
  🔢 Pre-configured [VSCode settings](./.vscode/settings.json)

## Prerequisites

Before getting started, please make sure you have installed the recommended setup.

- **Node.js**<sup>\*</sup> (the latest LTS version) 👉 [[Download](https://nodejs.org/en/download/)]
- **pnpm**<sup>\*</sup> 👉 (the fast and disk space efficient package manager) 👉 [[Download](https://pnpm.io/)]

## Project Setup

```sh
pnpm install
```

### Use proxy (to avoid cors issues)

```sh
pnpm proxy
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Stack

Appollo, GraphQL, Pinia, Vue, TypeScript, Tailwind