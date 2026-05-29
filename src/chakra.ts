import type {
  IsoniaThemeModule,
  ThemeColorTokens,
  ThemeLayoutConfig,
  ThemeRadiusTokens,
  ThemeShadowTokens,
  ThemeSpacingTokens,
  ThemeTypographyTokens,
} from "./tokens.js";
import { defaultTheme } from "./index.js";

export interface IsoniaChakraThemeOptions {
  preflight?: boolean;
  theme?: IsoniaThemeModule;
}

export interface IsoniaChakraTokenValue {
  value: string;
}

export interface IsoniaChakraThemeConfig {
  preflight: boolean;
  theme: {
    tokens: {
      colors: {
        isonia: Record<keyof ThemeColorTokens, IsoniaChakraTokenValue>;
      };
      fonts: {
        body: IsoniaChakraTokenValue;
        condensed: IsoniaChakraTokenValue;
        heading: IsoniaChakraTokenValue;
        mono: IsoniaChakraTokenValue;
      };
      fontWeights: {
        bold: IsoniaChakraTokenValue;
        normal: IsoniaChakraTokenValue;
      };
      letterSpacings: {
        body: IsoniaChakraTokenValue;
      };
      lineHeights: {
        body: IsoniaChakraTokenValue;
      };
      radii: Record<`iso${Capitalize<keyof ThemeRadiusTokens>}`, IsoniaChakraTokenValue>;
      shadows: Record<
        `iso${Capitalize<keyof ThemeShadowTokens>}`,
        IsoniaChakraTokenValue
      >;
      sizes: Record<
        `iso${Capitalize<keyof ThemeLayoutConfig>}`,
        IsoniaChakraTokenValue
      >;
      spacing: Record<
        `iso${Capitalize<keyof ThemeSpacingTokens>}`,
        IsoniaChakraTokenValue
      >;
    };
  };
}

export function createIsoniaChakraThemeConfig({
  preflight = false,
  theme = defaultTheme,
}: IsoniaChakraThemeOptions = {}): IsoniaChakraThemeConfig {
  return {
    preflight,
    theme: {
      tokens: {
        colors: {
          isonia: createColorTokenReferences(theme.tokens.colors),
        },
        fonts: createFontTokenReferences(theme.tokens.typography),
        fontWeights: createFontWeightTokenReferences(theme.tokens.typography),
        letterSpacings: createLetterSpacingTokenReferences(
          theme.tokens.typography,
        ),
        lineHeights: createLineHeightTokenReferences(theme.tokens.typography),
        radii: createRadiusTokenReferences(theme.tokens.radius),
        shadows: createShadowTokenReferences(theme.tokens.shadows),
        sizes: createLayoutTokenReferences(theme.layout),
        spacing: createSpacingTokenReferences(theme.tokens.spacing),
      },
    },
  };
}

export const defaultIsoniaChakraThemeConfig =
  createIsoniaChakraThemeConfig();

function token(value: string): IsoniaChakraTokenValue {
  return { value };
}

function createColorTokenReferences(
  _colors: ThemeColorTokens,
): Record<keyof ThemeColorTokens, IsoniaChakraTokenValue> {
  return {
    accent: token("var(--iso-color-accent)"),
    accentSurface: token("var(--iso-color-accent-surface)"),
    background: token("var(--iso-color-background)"),
    border: token("var(--iso-color-border)"),
    danger: token("var(--iso-color-danger)"),
    dangerSurface: token("var(--iso-color-danger-surface)"),
    foreground: token("var(--iso-color-foreground)"),
    infoSurface: token("var(--iso-color-info-surface)"),
    muted: token("var(--iso-color-muted)"),
    policy: token("var(--iso-color-policy)"),
    policySurface: token("var(--iso-color-policy-surface)"),
    primary: token("var(--iso-color-primary)"),
    primaryForeground: token("var(--iso-color-primary-foreground)"),
    primaryStrong: token("var(--iso-color-primary-strong)"),
    shell: token("var(--iso-color-shell)"),
    sidebar: token("var(--iso-color-sidebar)"),
    success: token("var(--iso-color-success)"),
    successSurface: token("var(--iso-color-success-surface)"),
    surface: token("var(--iso-color-surface)"),
    surfaceRaised: token("var(--iso-color-surface-raised)"),
    surfaceSubtle: token("var(--iso-color-surface-subtle)"),
    topbar: token("var(--iso-color-topbar)"),
    topbarBorder: token("var(--iso-color-topbar-border)"),
    warning: token("var(--iso-color-warning)"),
    warningSurface: token("var(--iso-color-warning-surface)"),
  };
}

function createFontTokenReferences(
  typography: ThemeTypographyTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["fonts"] {
  return {
    body: token("var(--iso-font-sans)"),
    condensed: token("var(--iso-font-condensed)"),
    heading: token("var(--iso-font-heading)"),
    mono: token("var(--iso-font-mono)"),
  };
}

function createFontWeightTokenReferences(
  _typography: ThemeTypographyTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["fontWeights"] {
  return {
    bold: token("var(--iso-font-weight-bold)"),
    normal: token("var(--iso-font-weight-normal)"),
  };
}

function createLetterSpacingTokenReferences(
  _typography: ThemeTypographyTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["letterSpacings"] {
  return {
    body: token("var(--iso-font-letter-spacing)"),
  };
}

function createLineHeightTokenReferences(
  _typography: ThemeTypographyTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["lineHeights"] {
  return {
    body: token("var(--iso-font-line-height)"),
  };
}

function createRadiusTokenReferences(
  _radius: ThemeRadiusTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["radii"] {
  return {
    isoLg: token("var(--iso-radius-lg)"),
    isoMd: token("var(--iso-radius-md)"),
    isoSm: token("var(--iso-radius-sm)"),
    isoXl: token("var(--iso-radius-xl)"),
  };
}

function createShadowTokenReferences(
  _shadows: ThemeShadowTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["shadows"] {
  return {
    isoCard: token("var(--iso-shadow-card)"),
    isoLg: token("var(--iso-shadow-lg)"),
    isoShell: token("var(--iso-shadow-shell)"),
  };
}

function createLayoutTokenReferences(
  layout: ThemeLayoutConfig | undefined,
): IsoniaChakraThemeConfig["theme"]["tokens"]["sizes"] {
  return {
    isoContentMaxWidth: token("var(--iso-layout-content-max-width)"),
    isoSidebarWidth: token("var(--iso-layout-sidebar-width)"),
    isoTopbarHeight: token("var(--iso-layout-topbar-height)"),
  };
}

function createSpacingTokenReferences(
  _spacing: ThemeSpacingTokens,
): IsoniaChakraThemeConfig["theme"]["tokens"]["spacing"] {
  return {
    isoLg: token("var(--iso-space-lg)"),
    isoMd: token("var(--iso-space-md)"),
    isoSm: token("var(--iso-space-sm)"),
    isoXl: token("var(--iso-space-xl)"),
    isoXs: token("var(--iso-space-xs)"),
  };
}
