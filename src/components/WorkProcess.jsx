import React, { useEffect, useRef } from "react";

const steps = [
  {
    title: "Igényfelmérés és ajánlat",
    text: "Átbeszéljük a céljaidat, a szükséges tartalmat és funkciókat. Ezek alapján pontos ajánlatot készítek, majd szerződésben rögzítjük a vállalásokat.",
  },
  {
    title: "Felépítés és design",
    text: "Megtervezem az oldalszerkezetet és az egyedi megjelenést. A visszajelzéseid alapján finomítjuk a terveket, a fejlesztés a jóváhagyásod után indul.",
  },
  {
    title: "Fejlesztés és ellenőrzés",
    text: "A jóváhagyott tervekből működő weboldalt készítek. Ellenőrzöm a megjelenést különböző képernyőméreteken, valamint a navigáció és az űrlap működését.",
  },
  {
    title: "Élesítés és átadás",
    text: "A végső ellenőrzés és jóváhagyás után élesítjük az oldalt. Átadom a forráskódot és az útmutatót; az elkészült megoldás hibáit az átadást követő 30 napban javítom.",
  },
];

function WorkProcess() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        grid.classList.toggle("is-visible", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="work-process">
      <h2>Így készül el a weboldalad</h2>

      <p className="work-process-intro">
        Átlátható lépések, előre egyeztetett feladatok. Minden szakaszban tudod,
        hol tartunk és mi következik.
      </p>

      <ol ref={gridRef} className="work-process-grid">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="work-process-step"
            style={{ "--step-delay": `${index * 2}s` }}
          >
            <span className="work-process-light" aria-hidden="true" />

            <span className="work-process-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorkProcess;
