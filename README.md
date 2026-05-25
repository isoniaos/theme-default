# @isonia/theme-default

`@isonia/theme-default` owns the default public theme package for IsoniaOS. It provides CSS variables, typed design tokens, brand metadata, and logo assets consumed by App Core and other frontends.

The public repository map describes where this package fits in the wider system: [site/developers/repository-map.md](https://github.com/isoniaos/docs/blob/main/site/developers/repository-map.md).

## Installation

Requires Node.js 22 or newer and pnpm through Corepack.

```bash
corepack pnpm install
```

For local workspace development, App Core can link the adjacent package:

```json
{
  "dependencies": {
    "@isonia/theme-default": "link:../theme-default"
  }
}
```

For application or deployment code outside the workspace, depend on a released package, pinned Git tag, or immutable commit SHA rather than a floating branch.

## Configuration

This package has no runtime environment variables.

Theme source files:

- `src/theme.css` exports default `--iso-*` CSS variables.
- `src/tokens.ts` exports typed token values.
- `src/brand.ts` exports brand metadata and asset paths.
- `src/assets/logo.svg`, `src/assets/logo-dark.svg`, and `src/assets/isonia-logo.svg` are exported package assets.
- `src/index.ts` exports the default theme module.

Package exports and CSS side effects are declared in [`package.json`](package.json).

## Run / Usage

Build:

```bash
corepack pnpm build
```

Typecheck without emitting output:

```bash
corepack pnpm typecheck
```

Import the CSS variables once during app bootstrap:

```ts
import "@isonia/theme-default/theme.css";
```

Import typed theme metadata where needed:

```ts
import { defaultTheme } from "@isonia/theme-default";
```

Import logo assets through bundler URL handling when rendering images:

```ts
import logoUrl from "@isonia/theme-default/assets/logo.svg?url";
```

## Troubleshooting

- If consumers cannot resolve CSS, confirm the package export is `@isonia/theme-default/theme.css`.
- If declarations are stale, run `corepack pnpm build`.
- If App Core needs new stable theme variables, add typed tokens in `src/tokens.ts`, mirror CSS variables in `src/theme.css`, and document the local contract in `docs/`.

## Contribution

Read [`AGENTS.md`](AGENTS.md) before editing. Keep this package focused on theme tokens, CSS variables, brand metadata, and assets. Do not add governance logic, wallet logic, provider integrations, Control Plane behavior, SDK clients, SaaS behavior, or authority decisions.

Update local docs and the public docs repository when theme package behavior affects users, developers, operators, or public claims.

## License

MIT. See [`LICENSE`](LICENSE).
