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
      extract={blog.extract}
    ></BlogPreview>
  ));

  return (
    <div className="content-box">
      <h1 className="heading">Blog</h1>
      <p>Ez itt a csodás blog oldalam, Markdown-nal :)</p>
      <div className="column-3">{blogItem}</div>
      <button className="contact-btn">Kapcsolatfelvétel</button>
    </div>
  );
}

export default Blog;
