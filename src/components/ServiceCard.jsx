import React from "react";
import { useNavigate } from "react-router-dom";
import SpecularButton from "./ui/SpecularButton";

function ServiceCard({
  icon,
  title,
  description,
  price,
  items,
  buttonText = "Ajánlatot kérek",
  quoterequestforras,
  to,
}) {
  const navigate = useNavigate();

  return (
    <div className="services-card">
      {icon && <div className="services-svg">{icon}</div>}

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

      <SpecularButton
        size="md"
        radius={18}
        textColor="#f5f5f5"
        lineColor="#e9a9c4"
        baseColor="#cb2cbe"
        intensity={1.4}
        followMouse
        autoAnimate={false}
        className="package-button"
        onClick={() =>
          navigate(
            to ||
              `/ajanlatkeres?forras=${encodeURIComponent(
                quoterequestforras || "egyeb",
              )}`,
          )
        }
      >
        {buttonText}
      </SpecularButton>
    </div>
  );
}

export default ServiceCard;
