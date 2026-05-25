# IsoniaOS Theme Default Agent Instructions

## Scope

This repository owns the default public theme package for IsoniaOS: CSS variables, typed design tokens, brand metadata, and package assets.

It does not own governance logic, protocol authority, Control Plane behavior, SDK clients, wallet flows, provider integrations, App Core feature logic, SaaS behavior, or integration-lab fixtures.

## Workspace Instruction Chain

When working inside the private IsoniaOS workspace, read:

1. `../AGENTS.md`
2. `../CURRENT_ROADMAP.md`
3. relevant `../private-docs/` index, governance, roadmap, and migration docs
4. this repository `AGENTS.md`
5. this repository `/docs` and `README.md`
6. current source/config files before editing

If this repository is cloned standalone, use this file as the local agent entry point and avoid relying on private workspace-only paths.

## Stack and Commands

- TypeScript package source under `src/`
- CSS variables in `src/theme.css`
- Typed tokens in `src/tokens.ts`
- Brand metadata in `src/brand.ts`
- Assets in `src/assets/`

Useful commands:

```bash
corepack pnpm install
corepack pnpm build
corepack pnpm typecheck
git diff --check
```

No repository-local lint or test script is currently declared.

## Development Principles

- Keep this package focused on reusable theme primitives and assets.
- Add stable token names in `src/tokens.ts` before consumers rely on them.
- Mirror public token contracts as CSS variables in `src/theme.css`.
- Keep concrete App Core feature styling in App Core until a reusable theme contract is clear.
- Do not introduce governance, protocol, wallet, provider, SaaS, Control Plane, or SDK behavior.
- Do not make production, audit, public beta, legal, SaaS, provider-completeness, grant, ISO launch, or token launch readiness claims.

## Documentation Rules

Update [`README.md`](README.md), local [`docs/`](docs/), and `CHANGELOG.md` under `Unreleased` when package exports, token names, CSS variables, assets, or brand metadata change.

Update the public docs repository when theme behavior affects public developers, operators, users, or public claims.

## Testing and Validation

For theme package changes, run:

```bash
corepack pnpm typecheck
corepack pnpm build
git diff --check
```

For documentation-only changes, `git diff --check` is normally sufficient.
