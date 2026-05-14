import React from "react";
import aboutImg from "../assets/images/about.jpg";

function About() {
  return (
    <div className="content-box">
      <div>
        <h1 className="heading">Rólam</h1>
        <div className="row about">
          {" "}
          <div className="column-1-2">
            <img src={aboutImg} alt="About kép" className="about-img" />
          </div>
          <div className="column-1-3 about-text">
            <p>
              Hiszek abban, hogy egy jó weboldal nem csupán szép, hanem élményt
              ad és bizalmat épít. A Pixelliberty-ben UX/UI szemléletre építem a
              digitális szabadságot- letisztult, modern és átgondolt
              megoldásokkal. Több mint 5 éve foglalkozom logótervezéssel és
              webdesignnal, amit az elmúlt időszakban a webfejlesztés egészített
              ki. Így nemcsak megtervezem a vizuális megjelenést, hanem egyedi,
              működő weboldalakat is készítek- a tervezéstől egészen a
              megvalósításig. A webdesign számomra nem csak munka, hanem kreatív
              önkifejezés is. Nagyon hamar beszippantott az a világ, ahol a
              design és a technológia együtt teremtenek valami igazán egyedit.
              Szeretem, hogy minden projekt egy új történet: egy lehetőség arra,
              hogy a márka valódi karaktere vizuálisan is életre keljen.
            </p>
            <button className="contact-btn">Kapcsolatfelvétel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
