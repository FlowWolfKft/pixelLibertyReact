import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import blogs from "../blog/blogs.json";

function BlogContent() {
  const { bloglink } = useParams();

  const [mdContent, setMdContent] = useState("");
  const [postImage, setPostImage] = useState("");

  useEffect(() => {
    async function loadPost() {
      const posts = import.meta.glob("../blog/*.md", {
        query: "?raw",
        import: "default",
      });

      const postEntry = Object.entries(posts).find(([path]) =>
        path.includes(`${bloglink}.md`),
      );

      blogs.map((x) => {
        // console.log(x);
        if (x.link === bloglink) {
          setPostImage(x.image);
        }
      });

      //setPostImage(postEntry.image)
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
    <section className="content-box">
      <div className="blog-content">
        <img src={postImage} alt={bloglink} />
        <Markdown>{mdContent}</Markdown>
        <Link to="/blog" className="back-button">
          ← Vissza a blogra
        </Link>
      </div>
    </section>
  );
}

export default BlogContent;
