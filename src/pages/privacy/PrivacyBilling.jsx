import React from "react";

function PrivacyBilling() {
  return (
    <>
      <div className="content-box">
        <h3>SZÁMLÁZÁS </h3>
        <p>Adatkezelés célja: számlázási kötelezettségünk teljesítése.</p>
        <p>
          Az adatkezelés jogalapja: GDPR 6. cikk 1. bekezdés c, pont jogi
          kötelezettség. Előíró jogszabályok: a számvitelről szóló 2000. évi C.
          tv. 169. § (2) bekezdés (bizonylatok megőrzési határideje) és az
          általános forgalmi adóról szóló 2007. évi CXXVII. tv. 169. § e) pont
          (számla kötelező elemei).
        </p>
        <p>
          A kezelt személyes adatok kategóriái: számlázási név, számlázási cím,
          e-mail cím (a számla kiküldése minden esetben emailben történik).{" "}
        </p>
        <p>
          A személyes adatok forrása: minden esetben a megrendelő bocsájtja
          rendelkezésünkre a személyes adatokat.
        </p>
        <p>
          Címzettek: a könyvelőnk megismeri valamennyi számlánk adattartalmát. A
          számlázáshoz felhő alapú szoftvert használunk, amelynek a felületén a
          kiállított számláink megőrzésre kerülnek a jogszabályban előírt
          adatkezelési időtartamig.{" "}
        </p>
        <p>
          A személyes adatok tárolásának időtartama: a kiállított számlákat
          elektronikus úton továbbítjuk a könyvelőnk felé, miután pdf-ként
          lementettük ezeket. Az üzenetek és a pdf mellékletek, valamint a
          számlázó programban a számlák másolatai a számla kiállításának évében
          és további nyolc évig kerülnek megőrzésre.{" "}
        </p>
        <p>
          A személyes adatok szolgáltatása jogszabályon alapul, ezek elmaradása
          esetén számlázási kötelezettségünket teljesíteni nem tudjuk. Az adatok
          szolgáltatása a feltétele annak, hogy a számlánkat kiállítsuk,
          elmaradása esetén a szerződés közöttünk nem jöhet létre.
        </p>

        <h3>
          SZOLGÁLTATÁSUNK ELLENÉRTÉKÉNEK KIEGYENLÍTÉSE fizetés átutalással
        </h3>
        <p>
          Adatkezelés célja: szolgáltatásunk díjának az átutalása, az átutalás
          beazonosítása.{" "}
        </p>
        <p>
          Az adatkezelés jogalapja: GDPR 6. cikk 1. bekezdés b, pont szerződés
          teljesítése.
        </p>
        <p>A kezelt személyes adatok kategóriái:</p>
        <p>Átutalás esetén: bankszámlatulajdonos neve, bankszámlaszáma</p>

        <p>
          A személyes adatok forrása: minden esetben a megrendelő bocsájtja
          rendelkezésünkre a személyes adatokat.
        </p>
        <p>
          Címzettek: a bank elektronikus felületén az átutalás adatai
          megismerhetők. Barionnal történő fizetés esetén a havi számlakivonaton
          a Barion elektronikus felületén is tárolásra kerülnek az adatok. A
          bankszámlakivonatokat és a Barion havi számlakivonatát a könyvelőnk
          felé továbbítjuk.
        </p>
        <p>
          A személyes adatok tárolásának időtartama: a bankszámlakivonatokat
          papír alapon őrizzük meg a kiállításuk évében és további nyolc év (a
          számviteli bizonylatokhoz megfelelően).{" "}
        </p>
      </div>
    </>
  );
}

export default PrivacyBilling;
