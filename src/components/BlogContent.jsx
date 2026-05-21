import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BlogContent() {
  const { bloglink } = useParams(); // URL-ből kiolvassa a groupId-t
  return (
    <div className="content-box">
      BlogContent
      {bloglink}
    </div>
  );
}

export default BlogContent;
