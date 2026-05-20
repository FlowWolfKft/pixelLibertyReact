// src/services/blogService.js

const modules = import.meta.glob("../blog/*.md", {
  query: "?raw",
  import: "default",
});

export async function getAllPosts() {
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const content = await resolver();

      return {
        slug: path.split("/").pop().replace(".md", ""),
        content,
      };
    })
  );

  // opcionálisan: legújabb elöl (ha dátum nincs, fájlnév alapján)
  return posts.reverse();
}