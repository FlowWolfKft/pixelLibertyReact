import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/blogService";
import ReactMarkdown from "react-markdown";

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function loadPost() {
      const posts = await getAllPosts();
      const found = posts.find((p) => p.slug === slug);
      setPost(found);
    }

    loadPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;