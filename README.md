# @isonia/theme-default

`@isonia/theme-default` owns the default public theme package for IsoniaOS. It provides CSS variables, typed design tokens, brand metadata, and logo assets consumed by App Core and other frontends.

The public developer overview describes where this package fits in the wider system: [site/developers/index.md](https://github.com/isoniaos/docs/blob/main/site/developers/index.md).

## Installation

Requires Node.js 22 or newer and pnpm through Corepack.

```bash
corepack pnpm install
```

For local workspace development, App Core can link the adjacent package:

```bash
corepack pnpm install
```

The private workspace resolves `@isonia/theme-default` through the root pnpm workspace and `workspace:*` dependencies. Do not use ad hoc manual link dependencies as the primary workspace path.

For application or deployment code outside the workspace, depend on a released package, pinned Git tag, or immutable commit SHA rather than a floating branch or workspace-only manifest.

## Configuration

This package has no runtime environment variables.

Theme source files:

- `src/theme.css` exports default `--iso-*` CSS variables.
- `src/tokens.ts` exports typed light/dark color-mode tokens, CSS variable maps, typography, shadows, layout slots, address component tokens, and helper types.
- `src/brand.ts` exports brand metadata and asset paths.
- `src/chakra.ts` exports a dependency-light Chakra-compatible config adapter.
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

Import Chakra-compatible config data when wiring a Chakra system:

```ts
import { createIsoniaChakraThemeConfig } from "@isonia/theme-default/chakra";
```

Import logo assets through bundler URL handling when rendering images:

```ts
import logoUrl from "@isonia/theme-default/assets/logo.svg?url";
```

## Troubleshooting

- If consumers cannot resolve CSS, confirm the package export is `@isonia/theme-default/theme.css`.
- If declarations are stale, run `corepack pnpm build`.
- If App Core needs new stable theme variables, add typed tokens in `src/tokens.ts`, mirror CSS variables in `src/theme.css`, and document the local contract in `docs/`.
- If Chakra config imports fail, confirm the subpath export is `@isonia/theme-default/chakra` and rebuild the package.

## Contribution

Read [`AGENTS.md`](AGENTS.md) before editing. Keep this package focused on theme tokens, CSS variables, brand metadata, and assets. Do not add governance logic, wallet logic, provider integrations, Control Plane behavior, SDK clients, SaaS behavior, or authority decisions.

Update local docs and the public docs repository when theme package behavior affects users, developers, operators, or public claims.

## License

MIT. See [`LICENSE`](LICENSE).
