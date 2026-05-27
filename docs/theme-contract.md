# Theme Contract

This package owns the replaceable default IsoniaOS theme contract. It exports theme primitives only: typed tokens, CSS variables, color-mode values, brand metadata, assets, and an optional Chakra-compatible config adapter.

It does not own governance, protocol, wallet, provider, Control Plane, SDK, SaaS, token, or App Core feature behavior.

## Package Exports

- `@isonia/theme-default` exports `defaultTheme`, token objects, CSS variable maps, brand metadata, and public theme types.
- `@isonia/theme-default/tokens` exports token objects, color-mode maps, helper types, and `createThemeCssVariables`.
- `@isonia/theme-default/brand` exports brand metadata and package asset paths.
- `@isonia/theme-default/chakra` exports `createIsoniaChakraThemeConfig` and `defaultIsoniaChakraThemeConfig`.
- `@isonia/theme-default/theme.css` exports the default `--iso-*` CSS variables and state classes.
- `@isonia/theme-default/assets/logo.svg`, `logo-dark.svg`, and `isonia-logo.svg` export package assets.

## Color Modes

`defaultTheme.colorModes.light` and `defaultTheme.colorModes.dark` each expose:

- `colors`;
- `shadows`;
- `cssVariables`.

`defaultTheme.tokens` represents the light default token set. Consumers that support color mode should read `defaultTheme.colorModes[mode]` for mode-specific values and import `theme.css` once during app bootstrap.

The CSS supports:

- light defaults on `:root`;
- dark values under `:root[data-theme="dark"]`;
- dark values under `:root[data-isonia-color-mode="dark"]`;
- default theme selectors for `data-isonia-theme="default"` and `data-isonia-theme="isonia-default"`.

## Stable Token Groups

Color tokens:

- base: `background`, `foreground`, `surface`, `surfaceRaised`, `surfaceSubtle`, `muted`, `border`;
- shell: `shell`, `sidebar`, `topbar`, `topbarBorder`;
- action/accent: `primary`, `primaryStrong`, `primaryForeground`, `accent`, `accentSurface`;
- status: `danger`, `dangerSurface`, `warning`, `warningSurface`, `success`, `successSurface`, `infoSurface`;
- reusable policy styling: `policy`, `policySurface`.

Typography tokens:

- `fontFamily`;
- `headingFontFamily`;
- `condensedFontFamily`;
- `monoFontFamily`.

Layout tokens:

- `topbarHeight`;
- `sidebarWidth`;
- `contentMaxWidth`.

Shadow tokens:

- `card`;
- `shell`;
- `lg`.

Address component tokens:

- `avatarSize`;
- `avatarRadius`;
- `letterSpacing`.

Radius and spacing tokens use the existing `sm`, `md`, `lg`, and related scale names.

## CSS Variables

Public CSS variables mirror the typed token contract:

- colors use `--iso-color-*`;
- radii use `--iso-radius-*`;
- spacing uses `--iso-space-*`;
- typography uses `--iso-font-*`;
- layout uses `--iso-layout-*`;
- shadows use `--iso-shadow-*`;
- address component variables use `--iso-address-*`.

The theme CSS also provides `.iso-state-neutral`, `.iso-state-success`, `.iso-state-warning`, `.iso-state-danger`, and `.iso-state-accent` classes that assign `--iso-state-color`, `--iso-state-border`, and `--iso-state-surface`.

## Chakra Adapter

`createIsoniaChakraThemeConfig({ preflight })` returns a plain Chakra-compatible config object. It does not import Chakra or App Core. Consumers pass the result into their Chakra setup, for example:

```ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { createIsoniaChakraThemeConfig } from "@isonia/theme-default/chakra";

const system = createSystem(
  defaultConfig,
  defineConfig(createIsoniaChakraThemeConfig({ preflight: false })),
);
```

The adapter maps Chakra token values to CSS variable references so color-mode changes continue to flow through `theme.css` and the typed theme module.
