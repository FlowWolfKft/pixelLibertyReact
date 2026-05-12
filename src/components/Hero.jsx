import React from "react";
import pixellibertyImg from "../assets/images/pixelliberty.png";

function Hero() {
  return (
    <div className="hero content-box">
      <div className="row"><div class="col-1-3"><img src={pixellibertyImg} alt="About kép" className="pixelliberty-img" />
      </div><div class="col-2-3">
      <h1>Köszöntelek a Pixelliberty világában!</h1>
      <p>
        Letisztult weboldalak szolgáltatóknak- amelyek nem csak szépek,
        ügyfeleket is hoznak. Modern és átgondolt megoldások. Legyen szó logó-
        vagy arculattervezésről, webdesignról vagy egyedi weboldalak
        tervezéséről, itt a legjobb helyen vagy! A munkám során szem előtt
        tartom az aktuális trendeket, a mai modern eszközöket használva,
        vizuálisan vonzó és funkcionálisan is profi anyagokat készítek Neked.
      </p>
      <button className="contact-btn">Kapcsolatfelvétel</button>
    </div></div></div>
  );
}

export default Hero;
