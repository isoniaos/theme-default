# Address Component Theme Support

This note records the current theme support for address-related App Core components.

## Theme Homes

- `src/theme.css` defines exported CSS variables with the `--iso-*` prefix.
- `src/tokens.ts` defines typed color, radius, spacing, typography, component, and layout tokens.
- `src/index.ts` exports the default theme module.

## State Coverage

Current color tokens cover foreground, muted, border, primary, danger, warning, success, and info surfaces. Address components can consume stable state names:

- neutral
- success
- warning
- danger
- accent

The default theme exposes:

- `--iso-color-accent`
- `--iso-color-accent-surface`
- `--iso-address-avatar-size`
- `--iso-address-avatar-radius`
- `--iso-address-letter-spacing`
- `.iso-state-neutral`
- `.iso-state-success`
- `.iso-state-warning`
- `.iso-state-danger`
- `.iso-state-accent`

## Maintenance Notes

- Add future typed token names in `src/tokens.ts` before consumers rely on them.
- Mirror future public token names as CSS variables in `src/theme.css`.
- Extend component variant metadata only when App Core needs a stable theme contract beyond the existing address defaults.
- Keep concrete address component CSS in App Core until the reusable public theme contract is clear.
