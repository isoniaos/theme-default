import type { ThemeBrand } from "./tokens.js";

export const ISONIA_DEFAULT_LOGO_PATH = "./assets/isonia-logo.svg";

export const defaultThemeBrand = {
  productName: "IsoniaOS",
  companyName: "Isonia",
  logo: ISONIA_DEFAULT_LOGO_PATH,
  mark: "I",
} as const satisfies ThemeBrand;
