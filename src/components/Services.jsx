import React from "react";

function Services() {
  return (
    <section className="content-box services-section">
      <h1 className="heading">Szolgáltatások</h1>
      <div className="services column-3">
        <ServiceCard
          title="Logó- és arculattervezés, webdesign"
          items={[
            "Kis- és nagyarculat",
            "Logó, logócsalád- vektoros tervezés",
            "Betűtípus ajánlás, arculat kialakítás ",
            "Névjegykártya, Sopcial Media sablonok, mockupok",
            "Webdesign irányelvek",
          ]}
          buttonText="Ajánlatkérés"
        />
        <ServiceCard
          title="Egyedi weboldalak készítése"
          description=" gyors, kompakt megoldás egyéni vállalkozók és magánszemélyek részére"
          items={[
            "One page és landing oldalak",
            "Reszponzív kialakítás mobilra, tabletre",
            "1-3 oldalas design",
            "Kapcsolatfelvételi űrlap, hírlevél integráció",
            "SEO- barát kialakítás",
            "Domain és tárhely regisztráció, SSL (HTTPS)",
          ]}
          buttonText="Ajánlatkérés"
        />
        <ServiceCard
          title="Üzleti weboldalak"
          description="kisvállalkozásoknak, szolgáltatóknak"
          items={[
            "5-8 aloldal",
            "Adminisztrációs felület- kezelési segítséggel",
            "Blog oldal",
            "Kapcslatfelvételi űrlap, hírlevél integráció",
            "1 hónap support ",
          ]}
          buttonText="Ajánlatkérés"
        />
      </div>
    </section>
  );
  function ServiceCard({ icon, title, description, items, buttonText }) {
    return (
      <div className="services-card">
        <div className="services-svg">
          {/* ide jön majd az SVG */}
          {icon}
        </div>

        <h3>{title}</h3>
        <p className="services-desc">{description}</p>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="services-btn">{buttonText}</button>
      </div>
    );
  }
}

export default Services;
