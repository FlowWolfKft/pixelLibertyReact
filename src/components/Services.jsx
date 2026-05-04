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
  function ServiceCard({ title, description, items, buttonText }) {
    return (
      <div className="services-card">
        <div className="services-svg">
          {/* ide jön majd az SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2h-2" />
          </svg>
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
