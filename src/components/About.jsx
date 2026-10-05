import React from "react";
import { useNavigate } from "react-router-dom";
import SpecularButton from "./ui/SpecularButton";
import aboutImg from "../../assets/images/about.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <div className="content-box">
      <div>
        <h2 className="heading">Kivel dolgozol együtt?</h2>
        <div className="row about">
          {" "}
          <div className="about-photo">
            <img
              src={aboutImg}
              alt="Farkas-Gyovai Mónika, a Pixelliberty webdesignere és frontend fejlesztője"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <p>
              Farkas-Gyovai Mónika vagyok, webdesigner és frontend fejlesztő.
              Egyedi weboldalakat tervezek és készítek vállalkozásoknak, a
              tartalmi felépítéstől a vizuális megjelenésen át az élesítésig.
            </p>

            <p>
              Fontos számomra, hogy a weboldalad érthetően mutassa be, amit
              kínálsz, és mobilon is könnyen használható legyen. Közvetlenül
              velem egyeztetsz, a terveket közösen véglegesítjük, a feladatokat
              és a módosítási kereteket pedig előre rögzítjük.
            </p>
            <SpecularButton
              size="md"
              radius={18}
              tint="#ffffff"
              tintOpacity={0}
              blur={0}
              textColor="#f5f5f5"
              lineColor="#e9a9c4"
              baseColor="#cb2cbe"
              intensity={1.4}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => navigate("/contact")}
            >
              Beszéljünk a weboldaladról
            </SpecularButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
