import React from "react";
import { useNavigate } from "react-router-dom";
import SpecularButton from "./ui/SpecularButton";
import pixellibertyImg from "../../assets/images/pixelliberty.png";
//csak git test
function Hero() {
  const navigate = useNavigate();
  return (
  <section className="hero content-box">
    <div className="hero-content">
    <div
  className="hero-bird"
  style={{ "--bird-mask": `url("${pixellibertyImg}")` }}
>
  <img
    src={pixellibertyImg}
    alt=""
    className="pixelliberty-img"
  />
  <span className="bird-aurora" aria-hidden="true" />
</div>
      <h1>
        Egyedi weboldal a vállalkozásodhoz,
        <br />
        tervezéstől az élesítésig.
      </h1>

      <p>
        Átgondolt felépítés, egyedi design és mobilon is jól használható
        megjelenés. Olyan weboldalt tervezek és fejlesztek, amely érthetően
        mutatja be a szolgáltatásaidat, bizalmat épít, és megkönnyíti a
        kapcsolatfelvételt. A teljes folyamat során közvetlenül velem
        dolgozol.
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
        onClick={() => navigate("/#services")}
      >
        Weboldalcsomagok megtekintése
      </SpecularButton>
    </div>
  </section>
);
}

export default Hero;
