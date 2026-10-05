import React from "react";
import { useNavigate } from "react-router-dom";
import SpecularButton from "./ui/SpecularButton";
import pixellibertyImg from "../../assets/images/pixelliberty.png";
//csak git test
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero content-box">
      <div className="row">
        <div className="col-1-3">
          <img
            src={pixellibertyImg}
            alt="About kép"
            className="pixelliberty-img"
          />
        </div>
        <div className="col-2-3">
          <h1>
            Egyedi weboldal a vállalkozásodhoz, tervezéstől az élesítésig.
          </h1>
          <p>
            Átgondolt felépítés, egyedi design és mobilon is jól használható
            megjelenés. Olyan weboldalt tervezek és fejlesztek, amely érthetően
            mutatja be a szolgáltatásaidat, bizalmat épít, és megkönnyíti a
            kapcsolatfelvételt. A teljes folyamat során közvetlenül velem
            dolgozol.
          </p>
          <SpecularButton
            size="lg"
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
      </div>
    </div>
  );
}

export default Hero;
