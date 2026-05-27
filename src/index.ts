import { defaultThemeBrand } from "./brand.js";
import {
  defaultThemeColorModes,
  defaultThemeComponents,
  defaultThemeCssVariables,
  defaultThemeLayout,
  defaultThemeTokens,
} from "./tokens.js";
import type { IsoniaThemeModule } from "./tokens.js";

export const defaultTheme = {
  id: "isonia-default",
  name: "Isonia Default",
  tokens: defaultThemeTokens,
  brand: defaultThemeBrand,
  cssVariables: defaultThemeCssVariables,
  colorModes: defaultThemeColorModes,
  components: defaultThemeComponents,
  layout: defaultThemeLayout,
} as const satisfies IsoniaThemeModule;

export {
  ISONIA_DEFAULT_LOGO_PATH,
  ISONIA_LEGACY_LOGO_PATH,
  ISONIA_LOGO_DARK_PATH,
  ISONIA_LOGO_PATH,
  defaultThemeBrand,
} from "./brand.js";
export {
  createThemeCssVariables,
  defaultThemeAddress,
  defaultThemeColorModes,
  defaultThemeComponents,
  defaultThemeCssVariables,
  defaultThemeDarkColors,
  defaultThemeDarkShadows,
  defaultThemeLayout,
  defaultThemeLightColors,
  defaultThemeLightShadows,
  defaultThemeRadius,
  defaultThemeSpacing,
  defaultThemeTokens,
  defaultThemeTypography,
} from "./tokens.js";
export type {
  CreateThemeCssVariablesInput,
  IsoniaThemeModule,
  ThemeAddressComponentTokens,
  ThemeBrand,
  ThemeColorModeMap,
  ThemeColorModeName,
  ThemeColorModeTheme,
  ThemeColorTokens,
  ThemeComponentVariants,
  ThemeCssVariables,
  ThemeLayoutConfig,
  ThemeRadiusTokens,
  ThemeShadowTokens,
  ThemeSpacingTokens,
  ThemeTokens,
  ThemeTypographyTokens,
} from "./tokens.js";
