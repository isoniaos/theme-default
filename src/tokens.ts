export type ThemeColorModeName = "light" | "dark";

export type ThemeColorModeMap<T> = Readonly<Record<ThemeColorModeName, T>>;

export interface ThemeColorTokens {
  readonly accent: string;
  readonly accentSurface: string;
  readonly background: string;
  readonly border: string;
  readonly danger: string;
  readonly dangerSurface: string;
  readonly foreground: string;
  readonly infoSurface: string;
  readonly muted: string;
  readonly policy: string;
  readonly policySurface: string;
  readonly primary: string;
  readonly primaryForeground: string;
  readonly primaryStrong: string;
  readonly shell: string;
  readonly sidebar: string;
  readonly success: string;
  readonly successSurface: string;
  readonly surface: string;
  readonly surfaceRaised: string;
  readonly surfaceSubtle: string;
  readonly topbar: string;
  readonly topbarBorder: string;
  readonly warning: string;
  readonly warningSurface: string;
}

export interface ThemeRadiusTokens {
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
}

export interface ThemeSpacingTokens {
  readonly xs: string;
  readonly sm: string;
  readonly md: string;
  readonly lg: string;
  readonly xl: string;
}

export interface ThemeTypographyTokens {
  readonly fontFamily: string;
  readonly headingFontFamily?: string;
  readonly condensedFontFamily?: string;
  readonly monoFontFamily: string;
}

export interface ThemeShadowTokens {
  readonly card: string;
  readonly shell: string;
  readonly lg: string;
}

export interface ThemeTokens {
  readonly colors: ThemeColorTokens;
  readonly radius: ThemeRadiusTokens;
  readonly spacing: ThemeSpacingTokens;
  readonly typography: ThemeTypographyTokens;
  readonly shadows: ThemeShadowTokens;
}

export interface ThemeBrand {
  readonly productName: string;
  readonly companyName?: string;
  readonly logo?: string;
  readonly logoDark?: string;
  readonly mark?: string;
  readonly favicon?: string;
}

export interface ThemeAddressComponentTokens {
  readonly avatarSize: string;
  readonly avatarRadius: string;
  readonly letterSpacing: string;
}

export interface ThemeComponentVariants {
  readonly button: {
    readonly radius: keyof ThemeTokens["radius"];
    readonly minHeight: string;
  };
  readonly panel: {
    readonly radius: keyof ThemeTokens["radius"];
  };
  readonly badge: {
    readonly radius: keyof ThemeTokens["radius"];
  };
  readonly address?: ThemeAddressComponentTokens;
}

export interface ThemeLayoutConfig {
  readonly topbarHeight: string;
  readonly sidebarWidth: string;
  readonly contentMaxWidth: string;
}

export type ThemeCssVariables = Readonly<Record<`--iso-${string}`, string>>;

export interface ThemeColorModeTheme {
  readonly colors: ThemeColorTokens;
  readonly shadows: ThemeShadowTokens;
  readonly cssVariables: ThemeCssVariables;
}

export interface IsoniaThemeModule {
  readonly id: string;
  readonly name: string;
  readonly tokens: ThemeTokens;
  readonly brand: ThemeBrand;
  readonly cssVariables: ThemeCssVariables;
  readonly colorModes: ThemeColorModeMap<ThemeColorModeTheme>;
  readonly components?: ThemeComponentVariants;
  readonly layout?: ThemeLayoutConfig;
}

export interface CreateThemeCssVariablesInput {
  readonly colors: ThemeColorTokens;
  readonly radius?: ThemeRadiusTokens;
  readonly spacing?: ThemeSpacingTokens;
  readonly typography?: ThemeTypographyTokens;
  readonly shadows?: ThemeShadowTokens;
  readonly layout?: ThemeLayoutConfig;
  readonly address?: ThemeAddressComponentTokens;
}

const palette = {
  amber: "#D97706",
  amberBright: "#F59E0B",
  amberSoft: "#FBBF24",
  blue: "#2563EB",
  blueBright: "#3B82F6",
  blueCalm: "#7AA7F7",
  blueMist: "#9ABCFB",
  blueStrong: "#2F6FED",
  deepNavy: "#071120",
  emerald: "#10B981",
  emeraldSoft: "#34D399",
  ivory: "#F8F7F2",
  ivoryBright: "#FAFAF7",
  ivoryMuted: "#F5F1E8",
  navy: "#0B1220",
  navySurface: "#111D2E",
  navySurfaceRaised: "#142338",
  navySurfaceSubtle: "#182A42",
  purple: "#6D5DFB",
  purpleSoft: "#A78BFA",
  red: "#DC2626",
  redSoft: "#F87171",
  slate: "#475569",
  slateLight: "#64748B",
  slateLighter: "#AAB7C7",
  warmWhite: "#F7F3EA",
  white: "#FFFFFF",
} as const;

export const defaultThemeLightColors = {
  accent: palette.blueBright,
  accentSurface: `color-mix(in srgb, ${palette.blueBright} 12%, ${palette.ivoryBright})`,
  background: palette.ivory,
  border: `color-mix(in srgb, ${palette.slateLight} 36%, ${palette.ivory})`,
  danger: palette.red,
  dangerSurface: `color-mix(in srgb, ${palette.red} 11%, ${palette.ivoryBright})`,
  foreground: palette.navy,
  infoSurface: `color-mix(in srgb, ${palette.blue} 10%, ${palette.ivoryBright})`,
  muted: palette.slate,
  policy: palette.purple,
  policySurface: `color-mix(in srgb, ${palette.purple} 11%, ${palette.ivoryBright})`,
  primary: palette.blue,
  primaryForeground: palette.ivoryBright,
  primaryStrong: palette.blueStrong,
  shell: palette.ivory,
  sidebar: `color-mix(in srgb, ${palette.ivoryBright} 76%, ${palette.ivory})`,
  success: palette.emerald,
  successSurface: `color-mix(in srgb, ${palette.emerald} 12%, ${palette.ivoryBright})`,
  surface: palette.ivoryBright,
  surfaceRaised: palette.white,
  surfaceSubtle: palette.ivoryMuted,
  topbar: `color-mix(in srgb, ${palette.ivoryBright} 88%, transparent)`,
  topbarBorder: `color-mix(in srgb, ${palette.slateLight} 24%, transparent)`,
  warning: palette.amber,
  warningSurface: `color-mix(in srgb, ${palette.amberBright} 15%, ${palette.ivoryBright})`,
} as const satisfies ThemeColorTokens;

export const defaultThemeDarkColors = {
  accent: palette.blueCalm,
  accentSurface: `color-mix(in srgb, ${palette.blueCalm} 16%, ${palette.navySurface})`,
  background: palette.deepNavy,
  border: `color-mix(in srgb, ${palette.slateLight} 34%, ${palette.navySurface})`,
  danger: palette.redSoft,
  dangerSurface: `color-mix(in srgb, ${palette.redSoft} 14%, ${palette.navySurface})`,
  foreground: palette.warmWhite,
  infoSurface: `color-mix(in srgb, ${palette.blueCalm} 14%, ${palette.navySurface})`,
  muted: palette.slateLighter,
  policy: palette.purpleSoft,
  policySurface: `color-mix(in srgb, ${palette.purpleSoft} 14%, ${palette.navySurface})`,
  primary: palette.blueCalm,
  primaryForeground: palette.deepNavy,
  primaryStrong: palette.blueMist,
  shell: palette.deepNavy,
  sidebar: `color-mix(in srgb, ${palette.navySurface} 86%, ${palette.deepNavy})`,
  success: palette.emeraldSoft,
  successSurface: `color-mix(in srgb, ${palette.emeraldSoft} 13%, ${palette.navySurface})`,
  surface: palette.navySurface,
  surfaceRaised: palette.navySurfaceRaised,
  surfaceSubtle: palette.navySurfaceSubtle,
  topbar: `color-mix(in srgb, ${palette.navySurface} 88%, transparent)`,
  topbarBorder: `color-mix(in srgb, ${palette.slateLight} 30%, transparent)`,
  warning: palette.amberSoft,
  warningSurface: `color-mix(in srgb, ${palette.amberSoft} 14%, ${palette.navySurface})`,
} as const satisfies ThemeColorTokens;

export const defaultThemeRadius = {
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
} as const satisfies ThemeRadiusTokens;

export const defaultThemeSpacing = {
  xs: "0.35rem",
  sm: "0.55rem",
  md: "0.85rem",
  lg: "1.25rem",
  xl: "1.75rem",
} as const satisfies ThemeSpacingTokens;

export const defaultThemeTypography = {
  condensedFontFamily:
    '"IBM Plex Sans Condensed", "Arial Narrow", "Segoe UI", sans-serif',
  fontFamily:
    '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  headingFontFamily:
    '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  monoFontFamily:
    '"IBM Plex Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace',
} as const satisfies ThemeTypographyTokens;

export const defaultThemeLightShadows = {
  card:
    "0 1px 2px color-mix(in srgb, #0B1220 7%, transparent), 0 12px 30px color-mix(in srgb, #0B1220 4%, transparent)",
  lg:
    "0 1px 2px color-mix(in srgb, #0B1220 7%, transparent), 0 18px 48px color-mix(in srgb, #0B1220 8%, transparent)",
  shell: "0 18px 48px color-mix(in srgb, #0B1220 8%, transparent)",
} as const satisfies ThemeShadowTokens;

export const defaultThemeDarkShadows = {
  card:
    "0 1px 2px color-mix(in srgb, #000000 28%, transparent), 0 16px 36px color-mix(in srgb, #000000 22%, transparent)",
  lg:
    "0 1px 2px color-mix(in srgb, #000000 28%, transparent), 0 18px 48px color-mix(in srgb, #000000 30%, transparent)",
  shell: "0 18px 48px color-mix(in srgb, #000000 30%, transparent)",
} as const satisfies ThemeShadowTokens;

export const defaultThemeLayout = {
  topbarHeight: "64px",
  sidebarWidth: "248px",
  contentMaxWidth: "1180px",
} as const satisfies ThemeLayoutConfig;

export const defaultThemeAddress = {
  avatarRadius: "2px",
  avatarSize: "22px",
  letterSpacing: "0.004em",
} as const satisfies ThemeAddressComponentTokens;

export const defaultThemeTokens = {
  colors: defaultThemeLightColors,
  radius: defaultThemeRadius,
  shadows: defaultThemeLightShadows,
  spacing: defaultThemeSpacing,
  typography: defaultThemeTypography,
} as const satisfies ThemeTokens;

export const defaultThemeComponents = {
  button: {
    radius: "md",
    minHeight: "38px",
  },
  panel: {
    radius: "lg",
  },
  badge: {
    radius: "sm",
  },
  address: defaultThemeAddress,
} as const satisfies ThemeComponentVariants;

export const defaultThemeColorModes = {
  light: {
    colors: defaultThemeLightColors,
    cssVariables: createThemeCssVariables({
      colors: defaultThemeLightColors,
      shadows: defaultThemeLightShadows,
    }),
    shadows: defaultThemeLightShadows,
  },
  dark: {
    colors: defaultThemeDarkColors,
    cssVariables: createThemeCssVariables({
      colors: defaultThemeDarkColors,
      shadows: defaultThemeDarkShadows,
    }),
    shadows: defaultThemeDarkShadows,
  },
} as const satisfies ThemeColorModeMap<ThemeColorModeTheme>;

export const defaultThemeCssVariables = createThemeCssVariables({
  address: defaultThemeAddress,
  colors: defaultThemeLightColors,
  layout: defaultThemeLayout,
  radius: defaultThemeRadius,
  shadows: defaultThemeLightShadows,
  spacing: defaultThemeSpacing,
  typography: defaultThemeTypography,
}) satisfies ThemeCssVariables;

export function createThemeCssVariables({
  address,
  colors,
  layout,
  radius,
  shadows,
  spacing,
  typography,
}: CreateThemeCssVariablesInput): ThemeCssVariables {
  const variables: Record<`--iso-${string}`, string> = {
    "--iso-color-accent": colors.accent,
    "--iso-color-accent-surface": colors.accentSurface,
    "--iso-color-background": colors.background,
    "--iso-color-border": colors.border,
    "--iso-color-danger": colors.danger,
    "--iso-color-danger-surface": colors.dangerSurface,
    "--iso-color-foreground": colors.foreground,
    "--iso-color-info-surface": colors.infoSurface,
    "--iso-color-muted": colors.muted,
    "--iso-color-policy": colors.policy,
    "--iso-color-policy-surface": colors.policySurface,
    "--iso-color-primary": colors.primary,
    "--iso-color-primary-foreground": colors.primaryForeground,
    "--iso-color-primary-strong": colors.primaryStrong,
    "--iso-color-shell": colors.shell,
    "--iso-color-sidebar": colors.sidebar,
    "--iso-color-success": colors.success,
    "--iso-color-success-surface": colors.successSurface,
    "--iso-color-surface": colors.surface,
    "--iso-color-surface-raised": colors.surfaceRaised,
    "--iso-color-surface-subtle": colors.surfaceSubtle,
    "--iso-color-topbar": colors.topbar,
    "--iso-color-topbar-border": colors.topbarBorder,
    "--iso-color-warning": colors.warning,
    "--iso-color-warning-surface": colors.warningSurface,
  };

  if (radius) {
    variables["--iso-radius-sm"] = radius.sm;
    variables["--iso-radius-md"] = radius.md;
    variables["--iso-radius-lg"] = radius.lg;
    variables["--iso-radius-xl"] = radius.xl;
  }

  if (spacing) {
    variables["--iso-space-xs"] = spacing.xs;
    variables["--iso-space-sm"] = spacing.sm;
    variables["--iso-space-md"] = spacing.md;
    variables["--iso-space-lg"] = spacing.lg;
    variables["--iso-space-xl"] = spacing.xl;
  }

  if (typography) {
    variables["--iso-font-sans"] = typography.fontFamily;
    variables["--iso-font-heading"] =
      typography.headingFontFamily ?? typography.fontFamily;
    variables["--iso-font-mono"] = typography.monoFontFamily;

    if (typography.condensedFontFamily) {
      variables["--iso-font-condensed"] = typography.condensedFontFamily;
    }
  }

  if (shadows) {
    variables["--iso-shadow-card"] = shadows.card;
    variables["--iso-shadow-shell"] = shadows.shell;
    variables["--iso-shadow-lg"] = shadows.lg;
  }

  if (layout) {
    variables["--iso-layout-content-max-width"] = layout.contentMaxWidth;
    variables["--iso-layout-sidebar-width"] = layout.sidebarWidth;
    variables["--iso-layout-topbar-height"] = layout.topbarHeight;
  }

  if (address) {
    variables["--iso-address-avatar-size"] = address.avatarSize;
    variables["--iso-address-avatar-radius"] = address.avatarRadius;
    variables["--iso-address-letter-spacing"] = address.letterSpacing;
    variables["--iso-address-size"] = address.avatarSize;
  }

  return variables;
}
