import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

function BlogContent() {
  const { bloglink } = useParams();

  const [mdContent, setMdContent] = useState("");

  useEffect(() => {
    async function loadPost() {
      const posts = import.meta.glob("../blog/*.md", {
        query: "?raw",
        import: "default",
      });

      const postEntry = Object.entries(posts).find(([path]) =>
        path.includes(`${bloglink}.md`),
      );

      console.log(postEntry);
      if (!postEntry) {
        setMdContent("# Nincs ilyen poszt");
        return;
      }

      const [, loader] = postEntry;

      const content = await loader();

      console.log(content);
      setMdContent(content);
    }

    loadPost();
  }, [bloglink]);

  return (
    <div className="content-box">
      <Markdown>{mdContent}</Markdown>
    </div>
  );
}

export default BlogContent;
