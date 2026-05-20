import { useEffect, useState } from "react";
import { getAllPosts } from "../services/blogService";
import { Link } from "react-router-dom";

function BlogPreview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data.slice(0, 3));
    });
  }, []);

  return (
    <section>
      <h2>Latest posts</h2>

      {posts.map((post) => (
        <div key={post.slug}>
          <Link to={`/blog/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </section>
  );
}

export default BlogPreview;
