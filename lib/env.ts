export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
export const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

if (!STRAPI_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_URL is missing");
}
