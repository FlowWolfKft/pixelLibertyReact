import React from "react";
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
        />
      </div>
    </section>
  );
  function ServiceCard({ icon, title, description, price, items, buttonText }) {
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
        <button className="services-btn">{buttonText}</button>
      </div>
    );
  }
}

export default Services;
