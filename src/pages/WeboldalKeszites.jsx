import React from "react";
import ServiceCard from "../components/ServiceCard";
import WorkProcess from "../components/WorkProcess";

function WeboldalKeszites() {
  return (
    <div className="content-box web-services-page">
      <h1>Egyedi weboldal, a vállalkozásodra tervezve</h1>

      <p>
        Egyoldalas és többoldalas weboldalak átgondolt felépítéssel, egyedi
        megjelenéssel és React-fejlesztéssel. A tervezéstől az élesítésig
        közvetlenül velem dolgozol.
      </p>

      <section className="services-section features">
        <h2>Melyik megoldás illik a vállalkozásodhoz?</h2>

        <div className="web-package-list">
          <div id="onepage">
            <ServiceCard
              title="Egyoldalas weboldal"
              description="Egy fő szolgáltatás vagy kisebb vállalkozás bemutatására, egyetlen könnyen áttekinthető oldalon."
              price="349 000 Ft-tól (+ áfa)"
              items={[
                "Igényfelmérés és a weboldal céljainak meghatározása",
                "Egy oldal, legfeljebb 7 tartalmi szekcióval",
                "Tartalmi felépítés és drótváz tervezése",
                "Egyedi UX/UI-tervezés, asztali és mobilnézettel",
                "React-fejlesztés, reszponzív megjelenéssel",
                "Egy kapcsolati vagy ajánlatkérő űrlap",
                "Technikai SEO-alapbeállítások",
                "2 módosítási kör a tervezés során és 1 kisebb finomítási kör az elkészült oldalon",
                "Tesztelés, élesítés, forráskód és átadási útmutató",
                "Az átadást követő 30 napban az elkészült megoldás hibáinak javítása",
              ]}
              buttonText="Egyoldalas weboldalt szeretnék"
              quoterequestforras="onepage"
            />
          </div>

          <div id="tobboldalas">
            <ServiceCard
              title="Többoldalas weboldal"
              description="Több szolgáltatás, referencia és részletesebb bemutatkozás számára, egységes megjelenéssel és átgondolt navigációval."
              price="599 000 Ft-tól (+ áfa)"
              items={[
                "Igényfelmérés és a weboldal céljainak meghatározása",
                "Legfeljebb 5 tartalmi oldal, összesen legfeljebb 20 tartalmi szekcióval",
                "Oldaltérkép, navigáció és drótvázak tervezése",
                "Egyedi, egységes UX/UI-tervezés, asztali és mobilnézettel",
                "React-fejlesztés, reszponzív megjelenéssel",
                "Egy kapcsolati vagy ajánlatkérő űrlap",
                "Oldalanként kialakított technikai SEO-alapbeállítások",
                "2 módosítási kör a tervezés során és 1 kisebb finomítási kör az elkészült oldalon",
                "Tesztelés, élesítés, forráskód és átadási útmutató",
                "Az átadást követő 30 napban az elkészült megoldás hibáinak javítása",
              ]}
              buttonText="Többoldalas weboldalt szeretnék"
              quoterequestforras="business"
            />
          </div>
        </div>
      </section>
      <section
        id="vizualis-alapok"
        className="services-section features web-addon-section"
      >
        <h2>A weboldalad mellé vizuális alapok is kérhetők</h2>

        <ServiceCard
          title="Logó és vizuális alapok"
          description="Ha még nincs logód vagy egységes vizuális megjelenésed, a weboldal tervezésével összehangolva alakítjuk ki az alapokat."
          price="119 000 Ft-tól (+ áfa)"
          items={[
            "Igényfelmérés és 2 különböző logókoncepció",
            "A kiválasztott koncepció kidolgozása, 2 módosítási körrel",
            "Fő logó és az egyeztetett felhasználáshoz szükséges változatok",
            "Színpaletta és betűtípus-javaslat",
            "Vektoros és webes logófájlok",
            "Rövid vizuális használati útmutató",
          ]}
          buttonText="A weboldalamhoz logót is kérek"
          quoterequestforras="logo"
        />

        <p className="package-note">
          Weboldal mellé kérhető kiegészítő. Teljes márkastratégia, névadás,
          névjegy és közösségimédia-sablonok nem részei ennek az ajánlatnak.
        </p>
      </section>
      <WorkProcess />
      <section className="web-package-terms">
        <h2>Mit érdemes tudnod az induló árakról?</h2>

        <h3>Előre rögzített tartalom és ár</h3>
        <p>
          Az induló árak a felsorolt tartalommal készülő, egynyelvű weboldalakra
          vonatkoznak. A végleges árat, az oldalak felépítését és a vállalt
          funkciókat az igényfelmérés után, a munka megkezdése előtt írásban
          rögzítjük.
        </p>

        <h3>A tartalmat te biztosítod, a felépítésben segítek</h3>
        <p>
          A végleges szövegeket, képeket és jogi dokumentumokat te biztosítod.
          Segítek meghatározni, milyen tartalomra lesz szükség, és hogyan
          érdemes elrendezni. Kisebb címsor- és gombszöveg-finomítások
          beleférnek; a teljes szövegírás külön egyeztetendő feladat.
        </p>
        <p>
          Az általad biztosított adatkezelési tájékoztató és impresszum
          elhelyezése mindkét webes csomag része, a megadott oldal- és
          szekciókereten felül.
        </p>

        <h3>Módosítások, meghatározott keretek között</h3>
        <p>
          A módosítási körök az elfogadott tervezési irány finomítására
          szolgálnak, körönként egy összegyűjtött visszajelzés alapján. Új
          tervezési irány, további oldal vagy új funkció külön egyeztetés és
          ajánlat alapján készül.
        </p>

        <h3>Külső szolgáltatások és további funkciók</h3>
        <p>
          A domain bekötése és az élesítés része a webes csomagoknak. A domain,
          tárhely, külső szolgáltatások, valamint fizetős képek és betűtípusok
          díjai külön fizetendők.
        </p>
        <p>
          További aloldalak, nyelvi változatok, külső időpontfoglaló vagy
          hírlevél-szolgáltatás bekötése, illetve látogatottsági és hirdetési
          mérés egyedi ajánlat alapján kérhető. A méréshez szükséges
          hozzájárulás-kezelést is egyeztetjük.
        </p>
        <p>
          Webshop, saját adminfelület, felhasználói belépés és egyedi
          háttérrendszer nem része az alapcsomagoknak.
        </p>
      </section>
    </div>
  );
}

export default WeboldalKeszites;
