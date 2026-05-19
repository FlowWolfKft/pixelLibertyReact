import React from "react";
import ContactForm from "../ContactForm";

function QuoteRequest() {
  return (
    <div className="content-box">
      <h1>Ajánlatkérés</h1>
      <h3>Dolgozzunk együtt! Írd le néhány mondatban, hogy hogyan tudok neked segíteni. Hamarosan felveszem Veled a kapcsolatot!</h3>

      <ContactForm forras={'QuoteRequest'}/>
    </div>
  );
}

export default QuoteRequest;