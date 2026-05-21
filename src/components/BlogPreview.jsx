import React from "react";
import { Link } from "react-router-dom";

function BlogPreview({ link, image, cim, extract }) {
  return (
    <div className="content-box">
      <div className="services-card">
        <h2>{cim}</h2>
        <div>{extract}</div>
        <Link
          to={{
            pathname: `/blog/${link}`,
          }}
          className="services-btn"
        >
          Tovább olvasok
        </Link>
      </div>
    </div>
  );
}

export default BlogPreview;
