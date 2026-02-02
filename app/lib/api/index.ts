import { apiClient } from "./apiClient";



export const getHomepage = async () => {
  const res = await apiClient<any>("/api/homepage");
  return res.data?.attributes ?? null;
};
