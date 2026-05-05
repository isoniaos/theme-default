export interface ThemeTokens {
  readonly colors: {
    readonly background: string;
    readonly foreground: string;
    readonly surface: string;
    readonly surfaceSubtle: string;
    readonly muted: string;
    readonly border: string;
    readonly primary: string;
    readonly primaryStrong: string;
    readonly primaryForeground: string;
    readonly accent: string;
    readonly accentSurface: string;
    readonly danger: string;
    readonly dangerSurface: string;
    readonly warning: string;
    readonly warningSurface: string;
    readonly success: string;
    readonly successSurface: string;
    readonly infoSurface: string;
  };
  readonly radius: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
  };
  readonly spacing: {
    readonly xs: string;
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
  };
  readonly typography: {
    readonly fontFamily: string;
    readonly headingFontFamily?: string;
    readonly monoFontFamily: string;
  };
}

export interface ThemeBrand {
  readonly productName: string;
  readonly companyName?: string;
  readonly logo?: string;
  readonly mark?: string;
  readonly favicon?: string;
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
  readonly address?: {
    readonly avatarSize: string;
    readonly avatarRadius: string;
    readonly letterSpacing: string;
  };
}

export interface ThemeLayoutConfig {
  readonly topbarHeight: string;
  readonly sidebarWidth: string;
  readonly contentMaxWidth: string;
}

export type ThemeCssVariables = Readonly<Record<`--iso-${string}`, string>>;

export interface IsoniaThemeModule {
  readonly id: string;
  readonly name: string;
  readonly tokens: ThemeTokens;
  readonly brand: ThemeBrand;
  readonly cssVariables: ThemeCssVariables;
  readonly components?: ThemeComponentVariants;
  readonly layout?: ThemeLayoutConfig;
}

export const defaultThemeTokens = {
  colors: {
    background: "#f7f8fb",
    foreground: "#17202a",
    surface: "#ffffff",
    surfaceSubtle: "#eef3f2",
    muted: "#687381",
    border: "#d9e1e7",
    primary: "#126a73",
    primaryStrong: "#0d525a",
    primaryForeground: "#ffffff",
    accent: "#126a73",
    accentSurface: "#dcebef",
    danger: "#a23a48",
    dangerSurface: "#f5dde1",
    warning: "#9a6418",
    warningSurface: "#f6ead5",
    success: "#1f7a4d",
    successSurface: "#ddf1e6",
    infoSurface: "#dcebef",
  },
  radius: {
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
  },
  spacing: {
    xs: "0.35rem",
    sm: "0.55rem",
    md: "0.85rem",
    lg: "1.25rem",
    xl: "1.75rem",
  },
  typography: {
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    headingFontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    monoFontFamily:
      "IBM Plex Mono, ui-monospace, SFMono-Regular, Consolas, Liberation Mono, monospace",
  },
} as const satisfies ThemeTokens;

export const defaultThemeCssVariables = {
  "--iso-color-background": defaultThemeTokens.colors.background,
  "--iso-color-foreground": defaultThemeTokens.colors.foreground,
  "--iso-color-surface": defaultThemeTokens.colors.surface,
  "--iso-color-surface-subtle": defaultThemeTokens.colors.surfaceSubtle,
  "--iso-color-muted": defaultThemeTokens.colors.muted,
  "--iso-color-border": defaultThemeTokens.colors.border,
  "--iso-color-primary": defaultThemeTokens.colors.primary,
  "--iso-color-primary-strong": defaultThemeTokens.colors.primaryStrong,
  "--iso-color-primary-foreground": defaultThemeTokens.colors.primaryForeground,
  "--iso-color-accent": defaultThemeTokens.colors.accent,
  "--iso-color-accent-surface": defaultThemeTokens.colors.accentSurface,
  "--iso-color-danger": defaultThemeTokens.colors.danger,
  "--iso-color-danger-surface": defaultThemeTokens.colors.dangerSurface,
  "--iso-color-warning": defaultThemeTokens.colors.warning,
  "--iso-color-warning-surface": defaultThemeTokens.colors.warningSurface,
  "--iso-color-success": defaultThemeTokens.colors.success,
  "--iso-color-success-surface": defaultThemeTokens.colors.successSurface,
  "--iso-color-info-surface": defaultThemeTokens.colors.infoSurface,
  "--iso-radius-sm": defaultThemeTokens.radius.sm,
  "--iso-radius-md": defaultThemeTokens.radius.md,
  "--iso-radius-lg": defaultThemeTokens.radius.lg,
  "--iso-radius-xl": defaultThemeTokens.radius.xl,
  "--iso-space-xs": defaultThemeTokens.spacing.xs,
  "--iso-space-sm": defaultThemeTokens.spacing.sm,
  "--iso-space-md": defaultThemeTokens.spacing.md,
  "--iso-space-lg": defaultThemeTokens.spacing.lg,
  "--iso-space-xl": defaultThemeTokens.spacing.xl,
  "--iso-font-sans": defaultThemeTokens.typography.fontFamily,
  "--iso-font-heading": defaultThemeTokens.typography.headingFontFamily,
  "--iso-font-mono": defaultThemeTokens.typography.monoFontFamily,
  "--iso-address-avatar-size": "22px",
  "--iso-address-avatar-radius": "2px",
  "--iso-address-letter-spacing": "0.004em",
} as const satisfies ThemeCssVariables;

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
  address: {
    avatarRadius: "2px",
    avatarSize: "22px",
    letterSpacing: "0.004em",
  },
} as const satisfies ThemeComponentVariants;

export const defaultThemeLayout = {
  topbarHeight: "64px",
  sidebarWidth: "244px",
  contentMaxWidth: "1180px",
} as const satisfies ThemeLayoutConfig;
