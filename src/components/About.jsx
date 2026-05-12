import React from "react";
import aboutImg from "../assets/images/about.jpg";

function About() {
  return (
    <div className="content-box">
      <div>
        <h1 className="heading">Rólam</h1>
        <div className="column-2">
          {" "}
          <div>
            <img src={aboutImg} alt="About kép" className="about-img" />
          </div>
          <div>
            <p>
              Hiszek abban, hogy a jó weboldal nem dísz, hanem élmény. A
              Pixelliberty-ben UX/UI alapokra építem a digitális szabadságot. A
              webdesign számomra nem csak munka, hanem egy újfajta szabadság is.
              Nagyon hamar beszippantott a vizuális világ, ahol a kreativitás és
              a technika kéz a kézben jár. A Pixelliberty az a hely, ahol
              mindezt megélhetem: letisztult, modern weboldalakat és karakteres
              logókat tervezek, amelyek valóban illenek a márkákhoz. Szeretem,
              hogy minden projekt egy új történet, ahol a design segítségével
              lehet igazán kibontani a lényeget, a tervezéstől a megvalósításig.
            </p>
            <button className="contact-btn">Kapcsolatfelvétel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
