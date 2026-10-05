import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="services" className="content-box services-section features">
      <h1 className="heading">Szolgáltatások</h1>
      <div className="services column-3">
        <ServiceCard
          title="Logó- és arculattervezés, webdesign"
          description="Brand- és márkaépítés, a vállalkozásod arca"
          price="49000 Ft-tól"
          items={[
            "Kis- és nagyarculat",
            "Logó, logócsalád- vektoros tervezés",
            "Betűtípus ajánlás, arculat kialakítás ",
            "Névjegykártya, Sopcial Media sablonok, mockupok",
            "Webdesign irányelvek",
          ]}
          buttonText="Ajánlatkérés"
          quoterequestforras="logo"
        />
        <ServiceCard
          title="Egyedi weboldalak"
          description=" Gyors, kompakt megoldás egyéni vállalkozók és magánszemélyek részére"
          price="190 000 Ft-tól"
          items={[
            "One page és landing oldalak",
            "Reszponzív kialakítás mobilra, tabletre",
            "1-3 oldalas design",
            "Kapcsolatfelvételi űrlap, hírlevél integráció",
            "SEO- barát kialakítás",
            "Domain és tárhely regisztráció, SSL (HTTPS)",
          ]}
          buttonText="Ajánlatkérés"
          quoterequestforras="onepage"
        />
        <ServiceCard
          title="Üzleti weboldalak"
          description="Kisvállalkozásoknak, szolgáltatóknak"
          price="250 000 Ft-tól"
          items={[
            "5-8 aloldal",
            "Adminisztrációs felület- kezelési útmutatással",
            "Blog oldal",
            "SEO- barát kialakítás",
            "Kapcslatfelvételi űrlap, hírlevél integráció",
            "Domain és tárhely regisztráció, SSL (HTTPS)",
            "1 hónap support",
          ]}
          buttonText="Ajánlatkérés"
          quoterequestforras="business"
        />
      </div>
    </section>
  );
}

export default Services;
