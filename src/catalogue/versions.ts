export const CATALOGUE_SCHEMA_VERSION = 1 as const;

export const PRODUCT_CATALOGUE_VERSION = "product-runtime-1.0.0" as const;

export const PRODUCT_COMPILER_VERSION = "product-molds-1.0.0" as const;

export const PRODUCT_PROFILE_VERSION = "1.0.0" as const;

export const PRODUCT_UI_LOCALE = "en" as const;

export type CatalogueSchemaVersion = typeof CATALOGUE_SCHEMA_VERSION;

export type ProductCatalogueVersion = typeof PRODUCT_CATALOGUE_VERSION;

export type ProductCompilerVersion = typeof PRODUCT_COMPILER_VERSION;

export type ProductProfileVersion = typeof PRODUCT_PROFILE_VERSION;

export type ProductUiLocale = typeof PRODUCT_UI_LOCALE;
