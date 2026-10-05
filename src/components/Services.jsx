import React from "react";
import { useNavigate } from "react-router-dom";
import SpecularButton from "./ui/SpecularButton";
import ServiceCard from "./ServiceCard";

function Services() {
  const navigate = useNavigate();
  return (
    <section id="services" className="content-box services-section features">
      <h2 className="heading">Weboldal a vállalkozásodhoz</h2>

      <p className="align-center">
        A tervezéstől az élesítésig velem dolgozol. Válaszd a céljaidhoz illő
        megoldást.
      </p>

      <div className="services column-2">
        <ServiceCard
          title="Egyoldalas weboldal"
          description="Egy fő szolgáltatás vagy kisebb vállalkozás bemutatására, egyetlen átgondolt oldalon."
          price="349 000 Ft-tól (+Áfa)-tól"
          items={[
            "Legfeljebb 7 tartalmi szekció",
            "Egyedi UX/UI-tervezés és React-fejlesztés",
            "Mobilon, tableten és számítógépen is használható megjelenés",
            "Kapcsolati űrlap, technikai SEO-alapok és élesítés",
          ]}
          buttonText="Részletek"
          to="/weboldal-keszites#onepage"
          quoterequestforras="onepage"
        />

        <ServiceCard
          title="Többoldalas weboldal"
          description="Több szolgáltatás és részletesebb bemutatkozás számára, külön oldalakkal és átgondolt navigációval."
          price="599 000 Ft (+Áfa)-tól"
          items={[
            "Legfeljebb 5 tartalmi oldal",
            "Egyedi UX/UI-tervezés és React-fejlesztés",
            "Egységes, mobilra is tervezett megjelenés",
            "Kapcsolati űrlap, technikai SEO-alapok és élesítés",
          ]}
          buttonText="Részletek"
          to="/weboldal-keszites#tobboldalas"
          quoterequestforras="business"
        />
      </div>

      <div className="services-card logo-addon">
        <h3>Logó és vizuális alapok</h3>

        <p>
          Még nincs kialakult vizuális megjelenésed? A weboldalad mellé logót,
          színpalettát és betűtípus-javaslatot is készítek, hogy vállalkozásod
          egységesen jelenjen meg.
        </p>

        <div className="price">
          <h3>119 000 Ft (+Áfa)-tól</h3>
        </div>

        <p>Weboldal mellé kérhető kiegészítő.</p>

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
          onClick={() => navigate("/weboldal-keszites#vizualis-alapok")}
        >
          Részletek
        </SpecularButton>
      </div>
    </section>
  );
}

export default Services;
