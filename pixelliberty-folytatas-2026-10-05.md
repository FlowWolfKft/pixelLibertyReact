# Pixelliberty – kontextus a következő beszélgetéshez

Állapot: 2026. október 5., a munka tudatosan szünetel. Következő folytatás: október 6.

## Ezt olvasd először

Mónika saját React-projektjén dolgozunk. Az asszisztens megmondja, melyik fájlban mit módosítson; Mónika írja és módosítja a kódot. Ne szerkeszd vagy telepítsd önállóan a projektet. Rövid, konkrét, egyenként követhető lépések, kritikus gondolkodás, kevés felesleges dicséret. Mónika elfáradt, nem kell újrakezdeni a stratégiát vagy az árazást.

A ma létrehozott dokumentum felülírja az augusztus 19-i knowledge base eltérő részeit. A régi árak, a 10 000 Ft-os kampánykeret és a Pixellibertyhez tervezett Supabase-admin már nem aktuálisak.

A korábbi RAR a módosítások ELŐTTI állapot. A következő beszélgetéshez feltöltött új ZIP az aktuális kód forrása. A mai kódmódosításokat az asszisztens útmutatásai alapján Mónika végezte a saját gépén. Nem futtattunk buildet, automatikus tesztet vagy teljes mobilos ellenőrzést. A sikeres működést Mónika visszajelzései és képernyőképei igazolták.

## Munkakörnyezet és állandó szabályok

- React + Vite + React Router, VS Code, Windows, Docker.
- Helyi oldal: http://localhost:5174. Nem történt élesítés vagy push.
- A tartalmi keret legfeljebb 1440 px széles. Ne szűkítsd önkényesen 850–900 px-re. Az egyes képek és belső oszlopok természetesen lehetnek kisebbek.
- A meglévő style.css-ben dolgozunk. Ne hozz létre sok új CSS-fájlt, és ne halmozz ismételt felülírásokat a fájl végén. A régi szabályokat szükség szerint cseréljük/töröljük.
- Az eredeti CSS-ek: style.css, grid.css, menu.css, blog.css, privacy.css.
- A Docker node_modules kötete különálló: a Windows alatt telepített függőség nem feltétlenül jelenik meg a konténerben.
- Docker service: vite-app, node:20, container pixel-liberty-app, working_dir /app, volumes .:/app és /app/node_modules, ports 5174:5173, command npm install && npm run dev -- --host, CHOKIDAR_USEPOLLING=true.

## Elfogadott ajánlat és árazás

Fő szolgáltatás: egyedi weboldal a tervezéstől a megvalósításon át az élesítésig. Két fő webes ajánlat, a logó és vizuális alapok weboldal mellé kérhető kiegészítő. Backend, saját admin, webshop és belépés nem alapcsomag; a backend irány külön a Flowwolfhoz tartozik.

| Ajánlat | Nettó induló ár | Keret |
| --- | --- | --- |
| Egyoldalas weboldal | 349 000 Ft | Egy oldal, legfeljebb 7 tartalmi szekció; becslés 60–70 óra |
| Többoldalas weboldal | 599 000 Ft | Legfeljebb 5 tartalmi oldal, összesen legfeljebb 20 szekció; becslés kb. 100 óra |
| Logó és vizuális alapok | 119 000 Ft | 2 koncepció, választott irány kidolgozása, 2 módosítási kör |

Kiírás: `349 000 Ft-tól (+ áfa)`, `599 000 Ft-tól (+ áfa)`, `119 000 Ft-tól (+ áfa)`. Mónika ezeket az árakat elfogadta. A főoldali árak egységesítését is kértük; az új ZIP-ben ellenőrizd, elkészült-e mindegyik.

Mindkét webes ajánlat: igényfelmérés, felépítés/drótváz, egyedi UX/UI desktop és mobil, reszponzív React-fejlesztés, egy kapcsolati vagy ajánlatkérő űrlap, technikai SEO-alapok, tesztelés/élesítés, forráskód és átadási útmutató, 30 nap hibajavítás az elkészült megoldásra. Többoldalasnál oldaltérkép/navigáció, oldalankénti SEO. Tervezéskor 2 módosítási kör, kész oldalon 1 kisebb finomítási kör.

A logókiegészítő: fő logó és egyeztetett változatok, színpaletta/betűtípus-javaslat, vektoros és webes fájlok, rövid vizuális útmutató. Teljes márkastratégia, névadás, névjegy, közösségimédia-sablonok nem részei.

Árkeretek: egynyelvű oldal, végleges scope és ár írásban indulás előtt. Ügyfél adja a szöveget/képeket/jogi anyagokat. Kisebb cím- és gombszöveg-finomítás belefér, teljes szövegírás külön. Adatkezelés és impresszum elhelyezése a tartalmi oldal/szekciókereten felül. Domain bekötés/élesítés benne; domain/tárhely/licencek/fizetős képek/betűk díja külön. További oldalak, nyelvek, külső foglaló/hírlevél, mérés egyedi ajánlat.

Hirdetés: első tesztként 60 000 Ft, két 30 000 Ft-os szakasz; további költés csak adatok alapján, szóba került 100 000 Ft-os felső keret. Nem ügyfélszerzési garancia vagy ellenőrzött piaci benchmark. Kampány még nem készült/nem indult.

## Ma elkészült és helyben működő részek

### Hero és gombok

Hero főcím: „Egyedi weboldal a vállalkozásodhoz, tervezéstől az élesítésig.” A bevezető a felépítésről, egyedi designról, mobilos használatról és közvetlen együttműködésről szól. CTA: „Weboldalcsomagok megtekintése” → /weboldal-keszites.

React Bits SpecularButton JS-CSS: src/components/ui/SpecularButton.jsx. Forrás: https://reactbits.dev/r/SpecularButton-JS-CSS.json ; dokumentáció: https://reactbits.dev/components/specular-button . Függőség: ogl ^1.0.11. CSS a style.css-be került, a külön SpecularButton.css importját eltávolítottuk. A klasszikus JSX miatt az alapértelmezett React import szükséges volt; hiánya üres oldalt okozott, megoldottuk.

Gombok: radius 18, textColor #f5f5f5, lineColor #e9a9c4, baseColor #cb2cbe, intensity 1.4, followMouse, autoAnimate false. Hero/About részletes propok: tint #ffffff, tintOpacity 0, blur 0, shineSize 10, shineFade 40, thickness 1, speed .35, proximity 250. Már a Hero, szolgáltatások és About használják. Nem cseréltünk át automatikusan minden apró navigációs linket.

### Főoldali szolgáltatások

Services.jsx: két webes csempe egymás mellett (`services column-2`), alatta külön logókiegészítő. EZ A FŐOLDALI 2+1 ELRENDEZÉS MARAD, ezt Mónika külön megerősítette. Ne cseréld három egymás alatti blokkra a főoldalon.

ServiceCard.jsx props: icon, title, description, price, items, buttonText (default Ajánlatot kérek), quoterequestforras, to. Navigate cél: to, ha adott; különben `/ajanlatkeres?forras=${encodeURIComponent(quoterequestforras || "egyeb")}`. HTML: services-card > opcionális icon, h3, p.services-desc, div.price>h3, ul>li, SpecularButton.package-button.

Főoldali gombok felirata Részletek (logónál is ezt kértük; az új ZIP-ben ellenőrizd). Célpontok:
- Egyoldalas: /weboldal-keszites#onepage
- Többoldalas: /weboldal-keszites#tobboldalas
- Logó: /weboldal-keszites#vizualis-alapok

### Új szolgáltatási aloldal

src/pages/WeboldalKeszites.jsx, route /weboldal-keszites az App.jsx Layout ágán belül. Főcím: „Egyedi weboldal, a vállalkozásodra tervezve”. Bevezető, két részletes webes ajánlat, logókiegészítő, WorkProcess, majd induló árak/keretek magyarázata.

Az ALOLDAL három szolgáltatása egymás alatt áll. Webes ajánlatok külső listája `web-package-list`, benne div#onepage és div#tobboldalas; logó külön section#vizualis-alapok.services-section.features.web-addon-section.

Kártyák belseje csak az aloldalon két oszlop: balra név/leírás/ár/gomb, jobbra tartalomlista. `.web-services-page .services-card` grid, oszlopok minmax(0,1fr) és minmax(0,1.4fr), grid areas title/list, description/list, price/list, button/list; rows auto auto auto 1fr; gap 16px 48px, margin-bottom0. A közvetlen h3, services-desc, price, ul, package-button kapja a megfelelő grid-area-t. 768px alatt flex-column, gap16; gomb margin-top8. web-package-list egyszlopos grid gap32; közvetlen div min-width0 scroll-margin-top100px.

A szolgáltatáscímekre javasolt/kiadott finomítás: font-size clamp(1.5rem,2vw,2rem), line-height1.25; végleges kódban ellenőrizd. Logó blokk finom pink gradient rgba(233,169,196,.12)→.03, border-color rgba(233,169,196,.4), szelektor `.web-services-page .web-addon-section > .services-card`. Mónika ezt késznek jelezte.

Aloldali kérőgombok továbbra is az űrlapra mennek: onepage, business, logo forras értékek. Nem a szolgáltatás anchorhoz!

### Navigáció és görgetési hiba – fontos

Navbar Szolgáltatások linkje /#services helyett /weboldal-keszites. Késznek jelezte.

A logóhoz görgetés valódi hibáját DUPLA ID okozta: Navbar.jsx-ben már volt div id="logo". A szolgáltatási section is ezt használta. A szolgáltatási célpontot átneveztük `vizualis-alapok`-ra, a főoldali gombot is ehhez igazítottuk. Ezután működött. Ne nevezd vissza #logo-ra.

ScrollToTop: useLocation pathname és hash; useEffect csak !hash esetén window.scrollTo(0,0), deps pathname/hash, return null.
ScrollToHash: pathname és hash; ha nincs hash return; requestAnimationFrame után getElementById(decodeURIComponent(hash.slice(1))), optional scrollIntoView behavior smooth, block start; cleanup cancelAnimationFrame, deps pathname/hash; return null.

### WorkProcess

Új megosztott src/components/WorkProcess.jsx, Home-on Services után/About előtt, aloldalon logókiegészítő után/árkeretek előtt. Négy lépés: Igényfelmérés és ajánlat; Felépítés és design; Fejlesztés és ellenőrzés; Élesítés és átadás. Számozott ol, grid4, 1024 alatt2, 600 alatt1 oszlop. max1440 padding0 20; aloldali külső WorkProcess padding0 a content-box miatt. Pink számok és felső keret. Animáció még nincs.

### About

Rövidítve két bekezdésre: Mónika webdesigner/frontend fejlesztő, tervezéstől élesítésig; érthető bemutatás/mobilos használat/közvetlen kommunikáció/rögzített keretek. Cím h2.heading: „Kivel dolgozol együtt?” (h1-ről kértük cserélni). Alt: „Farkas-Gyovai Mónika, a Pixelliberty webdesignere és frontend fejlesztője”.

DOM: content-box > div > cím + div.row.about > div.about-photo és div.about-text. A régi column-1-2 és column-1-3 osztályok eltávolítandók; legutóbbi bemásoláskor a column-1-3 még bennmaradt, szóltunk. Aktuális ZIP-ben ellenőrizd.

CSS: .about align-items flex-start (Mónika felülre kérte, center helyett), gap48. about-photo flex0 0 320px/minwidth0; image block width100 heightauto border radius12/shadow/border2homok; text flex1 minwidth0, régi margin-left2rem törölve. 768 alatt about flex-directioncolumn/gap24; photo flexnone widthmin(280px,100%) margin0auto; text width100. Régi mobil margin-left0 szükségtelen.

About CTA SpecularButton „Beszéljünk a weboldaladról” → /contact. A meglévő Link import useNavigate-ra cserélve. .heading és .work-process h2 közös text-align:center szabály. Portré egyelőre marad, Mónika nem elégedett a hitelességével; későbbi csere, most ne akadjon meg ezen a munka.

## Pontosan itt álltunk meg – holnap innen

Az aloldalt Mónika kissé egysíkúnak érezte. Erősebb címeket és eltérő logókiegészítőt vezettünk be; következő a valódi referencia, később finom animáció. A mozgás önmagában nem oldja meg a sok szöveg egyhangúságát.

Kiválasztott referencia: https://www.zsovarkrisztina.hu/ . Mónika ezt szívből vállalja. Webdesignt és fejlesztést ő készítette; szöveg, képek, logó az ügyféltől. Az ügyfél most nem foglalkozik az oldallal; nem fogjuk e feladat keretében átépíteni.

Ma élő böngészőben a főoldalt és a Rólam aloldalt megnéztük. Finom bézs/arany vizuális irány, fotók, programra épülő főoldal + több aloldal. Nem kell onepage vagy többoldalas termékkategóriába beszorítani: programbemutató weboldalként mutatható be. A főoldali program 2026. augusztus 1–31., júliusi early bird: már lejárt. Körülbelül 1350px böngészőnézetben menüpontok szavai törtek (Programok utolsó betűje külön sor, stb.). Nem állítottunk semmilyen üzleti/konverziós eredményt és nem teszteltünk teljes site-ot.

Javasolt következő megoldás: a Pixellibertyn képernyőképes projektbemutató egyelőre élő link nélkül. A referencia szekció helye: szolgáltatások után, WorkProcess előtt; tehát a jelenlegi WorkProcess fölé. Nem készült még komponens/CSS/kép/draft, és az élő link nélküli megoldás még asszisztensi javaslat, nem implementált döntés.

Megnevezés: „Zsóvár Krisztina – programbemutató weboldal”. Szerep: „Webdesign és frontend fejlesztés”. Ügyfél anyagai: „Szövegek, képek és logó”. Logótervezést, szövegírást, nem mért üzleti eredményt ne tulajdoníts Mónikának.

Legutóbbi konkrét kérés: Mónika készítsen képernyőképet a nyitó részről, bezárt sütisávval, lehetőleg 1440px böngészőszélességnél; először közösen válasszunk jó kivágást. Ez még nem történt meg. HOLNAP ELŐSZÖR EZT FOLYTASD, ne új csomagstratégiát.

## Későbbi feladatok (ne egyszerre zúdítsd rá)

1. Referencia kép + hiteles rövid bemutató, később esetleg főoldalra is.
2. Visszafogott animáció Mónika kérésére, reduced-motion támogatással.
3. Előszűrő/ajánlatkérő űrlap: tartalom és keret, forras előválasztás, megbízható beküldés. Régi ContactForm a https://email.pixelliberty.hu/email végpontra fetch-el, HTTP-siker ellenőrzése/loading/catch hiányos volt; aktuális kódot nézd meg, ne feltételezd hogy ma javítottuk. Űrlap és szerver kézbesítést ma nem teszteltük.
4. Hozzájárulás és mérés összehangolása: eredeti indexben azonnali Hotjar/Contentsquare script, CookieBanner localStorage true/false; ez nincs ma rendezve. Aktuális kód ellenőrzése kampány előtt.
5. Metaadatok, route-onkénti cím/canonical, h1/h2 ellenőrzés, mobil és build. Régi index lang en, statikus home canonical. Ne állítsd ezeket már elkészültnek.
6. SpecularButton sok példánynál WebGL/RAF erőforrásigény és mozgásbeállítások ellenőrzése; nem feltétlenül jó minden apró linkre.
7. Új csomagárak/formszűrők összhangja; régi 200–300e sávok nem aktuálisak.

## Milyen ZIP kell az új beszélgetéshez?

A ma módosított HELYI projekt aktuális állapotából másold egy átadási mappába:
- teljes src/;
- assets/ (ha van, az aktuális kódban ../../assets/images importok szerepelnek);
- public/ (ha van);
- package.json és package-lock.json;
- index.html, vite.config.js;
- docker-compose.yml vagy compose.yaml, ahogy nálad ténylegesen hívják;
- vercel.json, ha van;
- ez a kontextus és a mai összefoglaló.

Ne tedd bele node_modules/, dist/, .git/, .env fájlokat vagy titkos kulcsokat. Mappaszerkezetet őrizd meg. A régi archívumban public/images volt, a kód assets/images-t importált; az új csomagban ezért fontos az aktuális assets és public mappa. ZIP vagy RAR is jó. Ne másold vissza a régi RAR-t a friss helyett.

Változott/új fontos fájlok: Hero.jsx, Services.jsx, ServiceCard.jsx, About.jsx, Navbar.jsx, ScrollToHash.jsx, ScrollToTop.jsx, új WorkProcess.jsx és ui/SpecularButton.jsx, új pages/WeboldalKeszites.jsx, pages/Home.jsx, App.jsx, style.css, package.json/lock. A teljes src jobb, mint csak ezek, mert a route/layout/form függőségek is kellenek.

## Kezdő üzenet holnapra

„Folytassuk a Pixelliberty átalakítását a csatolt 2026-10-05-ös kontextusból és a friss forráscsomagból. Én módosítom a kódot, te lépésenként mondod, mit és hol. A csomagárak és az elrendezés már eldöntve. A Zsóvár Krisztina-referencia képernyőképes bemutatásánál álltunk meg. Először innen folytassuk.”
