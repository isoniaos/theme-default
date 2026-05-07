import type { ThemeBrand } from "./tokens.js";

export const ISONIA_LOGO_PATH = "./assets/logo.svg";
export const ISONIA_LOGO_DARK_PATH = "./assets/logo-dark.svg";
export const ISONIA_LEGACY_LOGO_PATH = "./assets/isonia-logo.svg";
export const ISONIA_DEFAULT_LOGO_PATH = ISONIA_LOGO_PATH;

export const defaultThemeBrand = {
  productName: "IsoniaOS",
  companyName: "Isonia",
  logo: ISONIA_LOGO_PATH,
  logoDark: ISONIA_LOGO_DARK_PATH,
  mark: "I",
} as const satisfies ThemeBrand;
