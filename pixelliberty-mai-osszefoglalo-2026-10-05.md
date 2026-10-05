# Pixelliberty – mai összefoglaló

2026. október 5.

## Mit döntöttünk el?

- Fő irány: egyedi weboldal, a tervezéstől az élesítésig, UX/UI és React-fejlesztéssel.
- Két alapajánlat: egyoldalas weboldal 349 000 Ft-tól, többoldalas 599 000 Ft-tól; nettó árak, plusz áfa.
- Logó és vizuális alapok: weboldal mellé kérhető kiegészítő, 119 000 Ft-tól (+ áfa).
- Egyoldalas keret: maximum 7 szekció. Többoldalas: maximum 5 tartalmi oldal, összesen 20 szekció.
- Pontosítottuk a módosítási köröket, átadást, 30 nap hibajavítást, ügyfél által biztosított tartalmat, kizárásokat és külső költségeket.
- Pixellibertynél nem erőltetjük a saját backendet/adminfelületet; a Flowwolf külön irány.
- Hirdetésre első tesztként 60 000 Ft-os keretről beszéltünk, két 30 000 Ft-os szakaszban; kampány még nem indult, ügyfélgarancia nincs.

## Mit építettünk át?

1. Új nyitószöveg és weboldalcsomagokhoz vezető fő gomb.
2. React Bits SpecularButton beépítése pink kerettel és fényeffekttel. Docker-függőség és React-import hibák megoldása; a gomb CSS-e a meglévő style.css-ben maradt.
3. Főoldali ajánlatok új szöveggel és árakkal. Két webes csempe egymás mellett, logókiegészítő külön alattuk: a 2+1 elrendezés marad.
4. Új /weboldal-keszites aloldal, részletes szolgáltatásokkal és induló árak magyarázatával.
5. Az aloldalon a szolgáltatások egymás alatt, kártyánként balra bevezető/ár/gomb, jobbra tartalomlista. Mobilra egymás alatti elrendezést adtunk meg.
6. Közös, négylépéses munkafolyamat szekció a főoldalon és az aloldalon.
7. Rövidebb bemutatkozás, kisebb portré, felülre igazított szöveg, új pink kapcsolatfelvételi gomb.
8. Szolgáltatások menüpont az új aloldalra vezet.
9. Főoldali részletekgombok a választott szolgáltatáshoz görgetnek. Javítottuk a görgető komponenseket és a duplikált logo azonosítót: a kiegészítő célpontja már #vizualis-alapok.
10. Címigazítások, erősebb szolgáltatáscímekre adott finomítás, eltérő pink árnyalatú logókiegészítő.

Minden további tartalmi elrendezésnél a 1440 px-es keretet tartjuk. A meglévő CSS-szabályokat rendezve módosítjuk, nem gyűjtünk felesleges CSS-fájlokat/felülírásokat.

## Hol tart a referencia?

Kiválasztottuk a zsovarkrisztina.hu oldalt. Mónika készítette a webdesignt és a fejlesztést; a szövegeket, képeket és logót az ügyfél adta. Az oldal tartalma részben elavult, az ügyfél most nem foglalkozik vele; nem építjük át ebben a munkában.

Javaslat: a Pixellibertyn egyelőre képernyőképes projektbemutató élő link nélkül, a szolgáltatások után és a munkafolyamat előtt. Nem állítunk mért üzleti eredményt. A komponens még nem készült el. Következő lépés a megfelelő képernyőkép és kivágás kiválasztása, majd a referencia beillesztése.

## Mi marad későbbre?

- Referencia kép és szekció.
- Finom animációk.
- Ajánlatkérő/előszűrő űrlap és megbízható kézbesítés ellenőrzése.
- Mérési és sütikezelési beállítások, metaadatok.
- Mobilos ellenőrzés, build, majd külön élesítés.
- Új portré később, ha Mónika szeretné.

## Átadás holnapra

Töltsd fel a friss helyi projektet ZIP-ben: teljes src, assets és public (amelyik van), package.json/lock, index.html, vite.config.js, Docker Compose fájl, vercel.json (ha van). Mellé ez a dokumentum és a részletes folytatási kontextus. Ne legyen benne node_modules, dist, .git, .env vagy titkos kulcs.

## Ellenőrzés és korlátok

A kódot Mónika módosította helyben, az eredményeket működő navigációval és képernyőképekkel ellenőrizte. Az asszisztensnél meglevő régi RAR nem tartalmazza a mai változtatásokat. Nem futott teljes build vagy automatikus teszt; a mobilos szabályok átfogó ellenőrzése még hátravan. Élesítés/push nem történt.
