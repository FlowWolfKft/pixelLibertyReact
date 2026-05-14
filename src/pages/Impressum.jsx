import React from "react";

function Impressum() {
  return (
    <div className="content-box services-card">
      <div>
        <h1>Tulajdonos és tárhelyszolgáltató</h1>
      </div>

      <div>
        <ul>
          <li>Név: Flow-Wolf Kft.</li>
          <li>Székhely: 1031 Budapest, Vízimolnár utca 24. 3. em. 8.</li>
          <li>Adószám: 14805080-2-41</li>
          <li>Cégjegyzékszám: 01-09-920694</li>
          <li>Nyilvántartásba vevő hatóság: Fővárosi Cégbíróság</li>
          <li>E-mail: info@flowwolf.hu</li>
        </ul>
      </div>

      <div>
        <a className="contact-btn" href="/">
          Vissza
        </a>
      </div>
    </div>
  );
}

export default Impressum;
