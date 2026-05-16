import React from "react";

function Privacy() {
  return (
    <>
      <div id="gdprcontent" className="content-box">
        <div className="column col-sm">
          <h1>Adatkezelési tájékoztató</h1>

          <p>
            Tájékoztatásunk a{" "}
            <a
              href="https://pixelliberty.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pixelliberty.hu/
            </a>{" "}
            weboldal működésével kapcsolatos adatkezelési tevékenységeinkre
            terjed ki.
          </p>

          <h3>Az adatkezelő</h3>

          <p>
            Neve: Flow-Wolf Informatikai Korlátolt Felelősségű Társaság
            (Flow-Wolf Kft.)
          </p>

          <p>Elérhetősége: info@simpleflow.hu</p>

          <p>Képviselő neve: Farkas-Gyovai Mónika ügyvezető</p>

          <p>
            Hivatalos levelezési cím: 1031 Budapest, Vízimolnár utca 24. 3. em.
            8.
          </p>

          <p>
            Adatkezelő honlapjának címe:{" "}
            <a
              href="https://virtualisasszisztencia.simpleflow.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://virtualisasszisztencia.simpleflow.hu/
            </a>
          </p>

          <p>Cégjegyzékszám: 01-09-920694</p>

          <h3>Adatvédelmi tisztviselő elérhetősége</h3>

          <p>
            Nem folytatunk olyan tevékenységet, amely indokolttá tenné
            adatvédelmi tisztviselő alkalmazását.
          </p>

          <h3>ADATKEZELÉSI TEVÉKENYSÉGEINK RÉSZLETESEN</h3>

          <p>
            Kapcsolatfelvétel telefonon: nyilvános telefonszámunkon keresztül
            (+36 30 530 4375)
          </p>

          <p>
            Adatkezelés célja: kapcsolatfelvételi lehetőség biztosítása,
            tájékoztatás nyújtása a szolgáltatásainkról az érdeklődőknek, leendő
            partnereinknek telefonon.
          </p>

          <p>
            Az adatkezelés jogalapja: GDPR 6. cikk 1. bekezdés a, pont az
            érintett hozzájárulása.
          </p>

          <p>
            Telefonhívása során megismerjük a következő személyes adatok
            kategóriákat: hívó neve, telefonszáma.
          </p>

          <p>
            A személyes adatok forrása: minden esetben a hívó fél bocsájtja
            rendelkezésünkre a személyes adatokat.
          </p>

          <p>
            Címzettek: a személyes adatokat nem továbbítjuk más személynek,
            azokat kizárólag az adatkezelő és a munkatársai ismerik meg.
          </p>

          <p>
            A személyes adatok tárolásának időtartama: hozzájárulás
            visszavonásáig, a híváslistában 1 hónapig tárolódnak a
            telefonszámok.
          </p>

          <p>
            Hozzájárulás visszavonása: hozzájárulását bármikor visszavonhatja
            egy üzenettel, amelyet az{" "}
            <a href="mailto:info@simpleflow.hu">info@simpleflow.hu</a> e-mail
            címre várunk.
          </p>

          {/*
            IDE JÖN A TOVÁBBI GDPR SZÖVEG

            A fennmaradó tartalmat ugyanebben a formában kell folytatni:
            - class -> className
            - onclick -> onClick
            - target="_blank" mellé rel attribútum
            - minden tag megfelelően lezárva
            - table, ul, ol JSX kompatibilisen
          */}

          <h2>SÜTIK KEZELÉSE</h2>

          <table className="gdpr-table">
            <tbody>
              <tr>
                <td>Cookie neve</td>
                <td>Cookie leírása és célja</td>
                <td>Mennyi ideig tárolódik az eszközön?</td>
              </tr>

              <tr>
                <td>ASP.NET SessionId</td>
                <td>
                  A böngésző munkamenetét azonosítja, hitelesítési cookie.
                </td>
                <td>Ameddig a böngésző nyitva van.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="column-2">
        <div>
          <button className="btn" onClick={() => window.print()}>
            Nyomtatás
          </button>
        </div>

        <div>
          <a className="btn" href="/">
            Vissza
          </a>
        </div>
      </div>
    </>
  );
}

export default Privacy;
