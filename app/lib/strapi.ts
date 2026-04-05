// app/lib/strapi.ts
export async function fetchStrapi(path: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 },
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch from Strapi");
    }
  
    return res.json();
  }
  
