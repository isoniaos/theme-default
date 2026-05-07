# @isonia/theme-default

Default public theme package for IsoniaOS.

This package provides CSS variables, design tokens, brand metadata, and static assets for app-core. It is not a React app and has no runtime dependencies.

## Scope

- `src/theme.css` defines the default `--iso-*` CSS variables.
- `src/tokens.ts` exports typed design tokens and CSS variable values.
- `src/brand.ts` exports IsoniaOS brand metadata.
- `src/assets/logo.svg` and `src/assets/logo-dark.svg` provide the light and dark IsoniaOS logo assets.
- `src/assets/isonia-logo.svg` remains exported for existing consumers.
- `src/index.ts` exports the default theme module.

## Install During Early Development

For local workspace development, app-core can depend on the adjacent package:

```json
{
  "dependencies": {
    "@isonia/theme-default": "link:../theme-default"
  }
}
```

For deployable builds, use a pinned GitHub tag or immutable commit SHA:

```json
{
  "dependencies": {
    "@isonia/theme-default": "github:isoniaos/theme-default#v0.5.0-alpha.2"
  }
}
```

Do not depend on a floating branch for application or deployment code.

## App Core Usage

Import the CSS variables once during app bootstrap, before app-core global styles:

```ts
import "@isonia/theme-default/theme.css";
import "./styles/global.css";
```

Import the typed theme module where app-core needs tokens or brand metadata:

```ts
import { defaultTheme } from "@isonia/theme-default";

for (const [name, value] of Object.entries(defaultTheme.cssVariables)) {
  document.documentElement.style.setProperty(name, value);
}
```

With Vite, import the logo assets as URLs when rendering images:

```ts
import logoUrl from "@isonia/theme-default/assets/logo.svg?url";
import logoDarkUrl from "@isonia/theme-default/assets/logo-dark.svg?url";
```

The exported brand metadata also includes package-relative `logo` and `logoDark` paths for non-bundled consumers.

## Scripts

```txt
pnpm install
pnpm typecheck
pnpm build
```
