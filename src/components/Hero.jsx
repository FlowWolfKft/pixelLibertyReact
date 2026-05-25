import React from "react";
import { Link } from "react-router-dom";
import pixellibertyImg from "../../assets/images/pixelliberty.png";

function Hero() {
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
          <h1>Köszöntelek a Pixelliberty világában!</h1>
          <p>
            Letisztult weboldalak és látványos arculatok — amelyek nemcsak
            szépek, hanem ügyfeleket is hoznak. A logótervezéstől az egyedi,
            többoldalas weboldalakig modern és átgondolt megoldásokkal dolgozom.
            Naprakész szemlélettel, vizuálisan vonzó és funkcionálisan is profi
            megjelenést készítek Neked.
          </p>
          <Link to="/contact" className="contact-btn">
            Kapcsolatfelvétel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
