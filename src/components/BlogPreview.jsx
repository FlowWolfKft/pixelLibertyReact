import React from "react";
import { Link } from "react-router-dom";

function BlogPreview({ link, image, cim, excerpt }) {
  return (
    <div id="services" className="content-box">
      <div className="services-card">
        <h2>{cim}</h2>
        <div>
          <p>{excerpt}</p>
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
    </div>
  );
}

export default BlogPreview;
