// app/api/index.ts
import { apiClient } from "./api/apiClient";

/* ================= HOME ================= */

export type HomePageData = {
  heroTitle: string;
  heroSubtitle: string;
  about: string;
  ctaText: string;
  ctaLink: string;
};

export async function getHomePage() {
  const res = await apiClient<{
    data: {
      attributes: HomePageData;
    } | null;
  }>("/api/homepage", {
    params: {
      populate: "*",
    },
    revalidate: 60,
  });

  return res.data?.attributes ?? null;
}
