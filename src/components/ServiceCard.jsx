import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({
  icon,
  title,
  description,
  price,
  items,
  buttonText,
  quoterequestforras,
}) {
  return (
    <div className="services-card">
      <div className="services-svg">
        {/* ide jön majd az SVG */}
        {icon}
      </div>

      <h3>{title}</h3>
      <p className="services-desc">{description}</p>
      <div className="price">
        <h3>{price}</h3>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link
        to={{
          pathname: "/ajanlatkeres",
          search: `?forras=${quoterequestforras}`,
        }}
        className="services-btn"
      >
        Ajánlatkérés
      </Link>
    </div>
  );
}

export default ServiceCard;
