import React from "react";
import ContactForm from "../ContactForm";
import { useSearchParams } from "react-router-dom";

function QuoteRequest() {
  const [searchParams] = useSearchParams();
  const forras = searchParams.get("forras");
  return (
    <div className="content-box">
      <h1>Ajánlatkérés</h1>
      <h3>
        Dolgozzunk együtt! Írd le néhány mondatban, hogy hogyan tudok neked
        segíteni. Hamarosan felveszem Veled a kapcsolatot!
      </h3>

      <ContactForm forras={forras} />
    </div>
  );
}

export default QuoteRequest;
