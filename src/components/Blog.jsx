import React from "react";
import BlogPreview from "./BlogPreview";
import blogs from "../blog/blogs.json";

function Blog({ fooldal }) {
  const blogsFiltered = fooldal ? blogs.slice(0, 3) : blogs;

  const blogItem = blogsFiltered.map((blog) => (
    <BlogPreview
      link={blog.link}
      image={blog.image}
      cim={blog.cim}
      excerpt={blog.excerpt}
    ></BlogPreview>
  ));

  return (
    <div className="content-box">
      <h1 className="heading">Blog</h1>
      <h3>
        Webdesign, UX/UI trendek, webfejlesztés és minden, ami egy digitális
        játszótérbe belelfér.
      </h3>
      <div className="column-3">{blogItem}</div>
      {fooldal?
      (<></>):
      (
      <div>
        <a className="back-button" href="/">
          ← Vissza
        </a>
      </div>
      )}
    </div>
  );
}

export default Blog;
