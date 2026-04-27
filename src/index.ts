import { defaultThemeBrand } from "./brand.js";
import {
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
  components: defaultThemeComponents,
  layout: defaultThemeLayout,
} as const satisfies IsoniaThemeModule;

export { ISONIA_DEFAULT_LOGO_PATH, defaultThemeBrand } from "./brand.js";
export {
  defaultThemeComponents,
  defaultThemeCssVariables,
  defaultThemeLayout,
  defaultThemeTokens,
} from "./tokens.js";
export type {
  IsoniaThemeModule,
  ThemeBrand,
  ThemeComponentVariants,
  ThemeCssVariables,
  ThemeLayoutConfig,
  ThemeTokens,
} from "./tokens.js";
