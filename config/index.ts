export const CONFIG = {
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  githubToken: process.env.GITHUB_TOKEN || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://thesinan.dev",
};
