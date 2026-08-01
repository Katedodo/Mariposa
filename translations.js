const polishCopy = new Map([
  ['PROPOSAL · 2026', 'OFERTA · 2026'], ['FOR DOROTA', 'DLA DOROTY'],
  ['E-COMMERCE WEBSITE PROPOSAL', 'OFERTA WYKONANIA SKLEPU INTERNETOWEGO'],
  ['PREPARED FOR DOROTA · 2026', 'PRZYGOTOWANE DLA DOROTY · 2026'],
  ['PROJECT PROPOSAL', 'PROPOZYCJA PROJEKTU'],
  ['A new digital home', 'Nowy cyfrowy dom'], ['for', 'dla'],
  ['Bouquets, coffee and desserts — beautifully presented and easy to order online.', 'Bukiety, kawa i desery — pięknie zaprezentowane i łatwe do zamówienia online.'],
  ['DEAR DOROTA,', 'DROGA DOROTO,'],
  ['This mini presentation introduces the idea for Mariposa’s online store. It explains the thinking behind the project, the customer journey, what the website will include, how we can launch it step by step, and the proposed investment.', 'Ta krótka prezentacja przedstawia pomysł na sklep internetowy Mariposa. Wyjaśnia założenia projektu, ścieżkę klienta, zakres strony, plan etapowego uruchomienia oraz wycenę projektu.'],
  ['Made with care for Mariposa ♡', 'Przygotowane z troską o Mariposę ♡'],
  ['00 · FROM BRIEF TO SOLUTION', '00 · OD BRIEFU DO ROZWIĄZANIA'], ['THE LOGIC', 'LOGIKA'],
  ['HOW THE BRIEF BECOMES A STRATEGY', 'JAK BRIEF STAJE SIĘ STRATEGIĄ'],
  ['One clear path', 'Jedna czytelna droga'], ['from insight to', 'od obserwacji do'], ['direction.', 'kierunku.'],
  ['Before defining website features, we connect Mariposa’s current business reality with the customer need and the strongest opportunity for the brand.', 'Zanim określimy funkcje strony, łączymy obecną sytuację biznesową Mariposa z potrzebami klienta i największą szansą dla marki.'],
  ['01 · BUSINESS REALITY', '01 · SYTUACJA BIZNESOWA'], ['Two offers, one young brand', 'Dwie oferty, jedna młoda marka'],
  ['The café is building awareness, while the flower side still needs visibility.', 'Kawiarnia buduje rozpoznawalność, a oferta kwiatowa nadal potrzebuje większej widoczności.'],
  ['02 · CUSTOMER TENSION', '02 · POTRZEBA KLIENTA'], ['Emotion, with less effort', 'Emocje bez zbędnego wysiłku'],
  ['People want a meaningful gesture without organising every detail themselves.', 'Ludzie chcą wykonać ważny gest bez samodzielnego organizowania każdego szczegółu.'],
  ['03 · STRATEGIC OPPORTUNITY', '03 · SZANSA STRATEGICZNA'], ['Own the complete moment', 'Stwórz kompletne doświadczenie'],
  ['Connect flowers, coffee and dessert in one offer competitors cannot reproduce authentically.', 'Połącz kwiaty, kawę i deser w ofercę, której konkurencja nie może autentycznie powtórzyć.'],
  ['04 · BRAND ROLE', '04 · ROLA MARKI'], ['Curate, do not overwhelm', 'Selekcjonuj, nie przytłaczaj'],
  ['Help people feel confident that every choice is tasteful and thoughtfully prepared.', 'Daj klientom pewność, że każdy wybór jest gustowny i starannie przygotowany.'],
  ['05 · PROJECT DIRECTION', '05 · KIERUNEK PROJEKTU'], ['Turn interest into orders', 'Zamień zainteresowanie w zamówienia'],
  ['Create a direct digital sales channel that makes the Mariposa idea easy to discover and buy.', 'Stwórz bezpośredni kanał sprzedaży, dzięki któremu ideę Mariposa łatwo odkryć i kupić.'],
  ['01 · THE OPPORTUNITY', '01 · SZANSA'], ['MARKET VIEW', 'PERSPEKTYWA RYNKU'], ['WHAT OTHERS SHOW US', 'CZEGO UCZĄ NAS INNI'],
  ['People don’t buy flowers.', 'Ludzie nie kupują tylko kwiatów.'], ['They buy a', 'Kupują'], ['reason.', 'znaczenie.'], ['WHY NOW', 'DLACZEGO TERAZ'],
  ['Mariposa has only recently opened. The café is building a loyal audience, while the flower side still needs visibility. The website will become a new place for people to discover the brand — and a direct path from discovery to purchase.', 'Mariposa działa od niedawna. Kawiarnia buduje lojalną społeczność, natomiast oferta kwiatowa nadal potrzebuje widoczności. Strona stanie się nowym miejscem odkrywania marki i bezpośrednią drogą od zainteresowania do zakupu.'],
  ['REFERENCE', 'INSPIRACJA'], ['Uses strong art direction and curated products to turn browsing into desire.', 'Wykorzystuje wyrazisty kierunek artystyczny i starannie dobrane produkty, aby zamienić oglądanie w chęć zakupu.'],
  ['Use: emotional presentation', 'Dla nas: emocjonalna prezentacja'],
  ['Shows the basic mechanics of online shopping, but leaves space for a more premium experience.', 'Pokazuje podstawową mechanikę zakupów online, ale pozostawia przestrzeń na bardziej premium doświadczenie.'],
  ['Opportunity: stronger art direction', 'Szansa: mocniejszy kierunek artystyczny'], ['DIRECT COMPETITOR', 'BEZPOŚREDNI KONKURENT'],
  ['Strong on same-day delivery, social proof, multilingual shopping and choosing a delivery window.', 'Mocne strony to dostawa tego samego dnia, dowody społeczne, wielojęzyczne zakupy i wybór terminu dostawy.'],
  ['Differentiate: the café experience', 'Wyróżnik: doświadczenie kawiarni'], ['MARIPOSA’S SPACE', 'PRZESTRZEŃ DLA MARIPOSA'],
  ['Not “another Warsaw florist” — the place where flowers become a complete moment.', 'Nie „kolejna warszawska kwiaciarnia”, lecz miejsce, w którym kwiaty stają się kompletnym doświadczeniem.'],
  ['01.1 · REFERENCE ANALYSIS', '01.1 · ANALIZA INSPIRACJI'], ['WHAT MARIPOSA CAN USE', 'CO MOŻE WYKORZYSTAĆ MARIPOSA'],
  ['LEARN THE MECHANICS — KEEP THE IDENTITY', 'POZNAJ MECHANIKĘ — ZACHOWAJ TOŻSAMOŚĆ'], ['Three references.', 'Trzy inspiracje.'], ['One', 'Jeden'], ['clear direction.', 'jasny kierunek.'],
  ['We are not copying a competitor’s look. We are identifying what builds desire, trust and an easy purchase — then combining it with Mariposa’s own advantage.', 'Nie kopiujemy wyglądu konkurencji. Sprawdzamy, co buduje chęć zakupu i zaufanie oraz co ułatwia zamówienie — a następnie łączymy to z własną przewagą Mariposa.'],
  ['DESIRE', 'ATRAKCYJNOŚĆ'], ['CLARITY', 'PRZEJRZYSTOŚĆ'], ['TRUST', 'ZAUFANIE'], ['WHAT WORKS', 'CO DZIAŁA'], ['FOR MARIPOSA', 'DLA MARIPOSA'],
  ['A recognisable house style: editorial photography, soft palettes, generous floral shapes and a consistent premium point of view.', 'Rozpoznawalny styl marki: edytorialowa fotografia, delikatne palety, pełne formy kwiatowe i konsekwentna perspektywa premium.'],
  ['Create a distinctive image language, signature product names and photography that makes the catalogue feel curated rather than generic.', 'Stworzyć własny język wizualny, charakterystyczne nazwy produktów i fotografie, dzięki którym katalog będzie wyglądał na starannie wyselekcjonowany.'],
  ['A direct, product-first shopping model gives customers the familiar basics: visible bouquets, prices and a clear route to purchase.', 'Bezpośredni model sprzedaży skoncentrowany na produkcie zapewnia klientom widoczne bukiety, ceny i jasną drogę do zakupu.'],
  ['Keep the catalogue easy to scan with useful filters, clear product cards, size options and pickup information without sacrificing personality.', 'Zachować czytelny katalog z przydatnymi filtrami, kartami produktów, rozmiarami i informacją o odbiorze — bez utraty charakteru marki.'],
  ['Strong reassurance through visible prices, secure payment options, pickup and delivery information, customer reviews and clear service promises.', 'Buduje poczucie bezpieczeństwa dzięki widocznym cenom, bezpiecznym metodom płatności, informacjom o odbiorze i dostawie, opiniom oraz jasnym zasadom.'],
  ['Show availability, pricing and checkout steps upfront; add social proof as it grows and make every order feel predictable and safe.', 'Pokazać dostępność, ceny i kolejne kroki zamówienia; z czasem dodawać opinie i sprawić, by każde zamówienie było przewidywalne i bezpieczne.'],
  ['THE MARIPOSA FORMULA', 'FORMUŁA MARIPOSA'],
  ['Lacy Bird’s desirability ＋ Flower Bar’s conversion clarity ＋ Mariposa’s flowers, coffee and dessert.', 'Atrakcyjność Lacy Bird ＋ przejrzysty proces zakupowy Flower Bar ＋ kwiaty, kawa i deser od Mariposa.'],
  ['02 · THE BIG IDEA', '02 · WIELKA IDEA'], ['MARIPOSA’S ADVANTAGE', 'PRZEWAGA MARIPOSA'], ['FLOWERS', 'KWIATY'], ['COFFEE', 'KAWA'], ['DESSERT', 'DESER'],
  ['Not just a bouquet.', 'Nie tylko bukiet.'], ['A', 'Kompletne'], ['complete experience.', 'doświadczenie.'],
  ['A customer may come for flowers — then add coffee and dessert in the same order. Mariposa turns one purchase into a thoughtful, ready-to-enjoy experience that an ordinary florist cannot offer authentically.', 'Klient może przyjść po kwiaty, a następnie dodać kawę i deser do tego samego zamówienia. Mariposa zamienia jeden zakup w przemyślane, kompletne doświadczenie, którego zwykła kwiaciarnia nie może zaoferować w autentyczny sposób.'],
  ['MORE VALUE PER ORDER', 'WIĘKSZA WARTOŚĆ ZAMÓWIENIA'], ['ONE EASY CHECKOUT', 'JEDEN PROSTY PROCES ZAKUPU'], ['A COMPLETE GIFT', 'KOMPLETNY PREZENT'], ['A MEMORABLE DIFFERENCE', 'WYRAŹNA RÓŻNICA'],
  ['The website makes this unique combination visible, desirable and easy to buy.', 'Strona sprawia, że to wyjątkowe połączenie jest widoczne, pożądane i łatwe do kupienia.'],
  ['03 · THE CUSTOMER', '03 · KLIENT'], ['PSYCHOLOGICAL PROFILE', 'PROFIL PSYCHOLOGICZNY'], ['THE CUSTOMER OUTCOME', 'REZULTAT DLA KLIENTA'],
  ['The thoughtful planner', 'Troskliwy organizator'], ['Prepared · confident · ready to enjoy the moment', 'Przygotowany · pewny wyboru · gotowy cieszyć się chwilą'],
  ['Everything is ready.', 'Wszystko jest gotowe.'], ['Now they can enjoy', 'Teraz można cieszyć się'], ['the moment.', 'chwilą.'],
  ['BEFORE', 'PRZED'], ['WITH MARIPOSA', 'Z MARIPOSA'], ['AFTER', 'PO'], ['WHY THEY BUY', 'DLACZEGO KUPUJĄ'],
  ['A date, birthday or celebration is approaching — and they want it to feel special.', 'Zbliża się randka, urodziny lub świętowanie — i chcą, aby ten moment był wyjątkowy.'],
  ['Flowers, coffee and dessert are chosen together and collected in one prepared order.', 'Kwiaty, kawa i deser są wybierane razem i odbierane jako jedno przygotowane zamówienie.'],
  ['No last-minute searching or coordination. They arrive feeling thoughtful and completely ready.', 'Bez szukania i koordynowania w ostatniej chwili. Przychodzą przygotowani i pewni swojego gestu.'],
  ['Mariposa does more than sell products. It removes the organisation behind a meaningful gesture and gives the customer confidence in the result.', 'Mariposa nie tylko sprzedaje produkty. Zdejmuje z klienta ciężar organizacji ważnego gestu i daje mu pewność, że efekt będzie właściwy.'],
  ['04 · CUSTOMER FLOW', '04 · ŚCIEŻKA KLIENTA'], ['FROM DESIRE TO ORDER', 'OD PRAGNIENIA DO ZAMÓWIENIA'], ['FOUR SIMPLE STEPS', 'CZTERY PROSTE KROKI'],
  ['No DMs.', 'Bez pisania wiadomości.'], ['No waiting.', 'Bez czekania.'], ['Browse', 'Przeglądaj'], ['Choose', 'Wybierz'], ['Checkout', 'Zamów'], ['Pay', 'Zapłać'],
  ['Explore the catalogue and use filters.', 'Przeglądaj katalog i korzystaj z filtrów.'], ['Select a product, size and add-ons.', 'Wybierz produkt, rozmiar i dodatki.'],
  ['Add to cart and choose a pickup time.', 'Dodaj do koszyka i wybierz termin odbioru.'], ['Complete the order securely online.', 'Bezpiecznie opłać zamówienie online.'],
  ['THE RESULT', 'REZULTAT'], ['More orders. Less admin. More time to create.', 'Więcej zamówień. Mniej obsługi. Więcej czasu na tworzenie.'],
  ['05 · EARLY CONCEPT', '05 · WSTĘPNA KONCEPCJA'], ['NOT THE FINAL DESIGN', 'TO NIE JEST FINALNY DESIGN'], ['SCHEMATIC PREVIEW', 'SCHEMATYCZNY PODGLĄD'],
  ['This only shows', 'To pokazuje jedynie'], ['how it could work.', 'jak może to działać.'],
  ['The visual design will be created from scratch after the strategy stage. These screens demonstrate structure and customer flow — not the final look.', 'Projekt wizualny powstanie od podstaw po etapie strategii. Te ekrany pokazują strukturę i ścieżkę klienta, a nie finalny wygląd.'],
  ['Home', 'Start'], ['Catalogue', 'Katalog'], ['Product', 'Produkt'], ['FLOWERS FOR REAL MOMENTS', 'KWIATY NA PRAWDZIWE CHWILE'], ['Say it with', 'Powiedz to'], ['something beautiful.', 'czymś pięknym.'], ['Shop bouquets', 'Zobacz bukiety'],
  ['SHOP THE COLLECTION', 'ZOBACZ KOLEKCJĘ'], ['Find your bouquet', 'Znajdź swój bukiet'], ['Colour', 'Kolor'], ['Style', 'Styl'], ['Price', 'Cena'], ['SIGNATURE', 'AUTORSKI'], ['SOFT & ROMANTIC', 'DELIKATNY I ROMANTYCZNY'], ['SEASONAL', 'SEZONOWY'], ['MINIMAL', 'MINIMALISTYCZNY'],
  ['from €75', 'od €75'], ['from €60', 'od €60'], ['from €85', 'od €85'], ['from €55', 'od €55'], ['SIGNATURE BOUQUET', 'BUKIET AUTORSKI'],
  ['Choose size · add a note · select pickup', 'Wybierz rozmiar · dodaj bilecik · wybierz odbiór'], ['Add to cart · €75', 'Dodaj do koszyka · €75'],
  ['06 · THE WEBSITE', '06 · STRONA INTERNETOWA'], ['WHAT IS INCLUDED', 'CO OBEJMUJE PROJEKT'], ['A SUBSTANTIAL E-COMMERCE PROJECT', 'KOMPLEKSOWY PROJEKT E-COMMERCE'],
  ['Everything needed', 'Wszystko, czego potrzeba'], ['to start', 'aby zacząć'], ['selling online.', 'sprzedawać online.'],
  ['This is not a simple brochure website. It combines strategy, bespoke design, product sales, booking, payment, SEO foundations and the operational setup behind every order.', 'To nie jest prosta strona-wizytówka. Projekt łączy strategię, indywidualny design, sprzedaż produktów, rezerwację, płatności, podstawy SEO i zaplecze operacyjne każdego zamówienia.'],
  ['Story, signature products, café concept', 'Historia, produkty autorskie i koncepcja kawiarni'], ['Up to 20 products with useful filters', 'Do 20 produktów z przydatnymi filtrami'],
  ['Product pages', 'Karty produktów'], ['Photos, sizes, add-ons and notes', 'Zdjęcia, rozmiary, dodatki i bileciki'], ['Cart & checkout', 'Koszyk i finalizacja zakupu'],
  ['Complete order flow on mobile and desktop', 'Pełna ścieżka zamówienia na telefonie i komputerze'], ['Online payment', 'Płatność online'], ['Pickup calendar', 'Kalendarz odbioru osobistego'],
  ['Available date and time selection', 'Wybór dostępnej daty i godziny odbioru'], ['About & contact', 'O nas i kontakt'], ['Story, location and opening hours', 'Historia, lokalizacja i godziny otwarcia'],
  ['Google setup', 'Konfiguracja Google'], ['Indexing and local SEO foundations', 'Indeksowanie i podstawy lokalnego SEO'], ['Core website language versions', 'Podstawowe wersje językowe strony'],
  ['07 · PRACTICAL DETAILS', '07 · SZCZEGÓŁY PRAKTYCZNE'], ['LAUNCH PLAN', 'PLAN URUCHOMIENIA'], ['KEEPING THE FIRST STEP SIMPLE', 'PROSTY PIERWSZY ETAP'],
  ['Pickup first.', 'Najpierw odbiór.'], ['Delivery later.', 'Dostawa później.'], ['Complete store at launch', 'Pełny sklep na start'],
  ['Customers browse the catalogue, filter products, add to cart and pay online.', 'Klienci przeglądają katalog, filtrują produkty, dodają je do koszyka i płacą online.'],
  ['Pickup first', 'Najpierw odbiór'], ['At checkout, customers select an available date and time to collect their order from Mariposa.', 'Podczas zamówienia klient wybiera dostępny dzień i godzinę odbioru w Mariposa.'],
  ['Delivery later', 'Dostawa później'], ['Delivery is not required for the first launch. We can develop and connect it later, after Mariposa signs agreements with local delivery companies.', 'Dostawa nie jest potrzebna przy pierwszym uruchomieniu. Możemy ją opracować i podłączyć później, gdy Mariposa podpisze umowy z lokalnymi firmami dostawczymi.'],
  ['Ready to expand', 'Gotowe do rozwoju'], ['The store will be structured so delivery zones, prices and schedules can be added in the next phase without rebuilding the sales flow.', 'Sklep zostanie przygotowany tak, aby w kolejnym etapie dodać strefy, ceny i harmonogramy dostaw bez przebudowy ścieżki sprzedaży.'],
  ['5–6 weeks', '5–6 tygodni'], ['from materials to launch', 'od otrzymania materiałów do uruchomienia'],
  ['08 · AFTER LAUNCH', '08 · PO URUCHOMIENIU'], ['MONTHLY CARE', 'MIESIĘCZNA OPIEKA'], ['A SHOP IS A LIVING SYSTEM', 'SKLEP TO ŻYWY SYSTEM'],
  ['Keep it working.', 'Dbaj o jego działanie.'], ['Keep it', 'Dbaj, by był'], ['fresh.', 'aktualny.'], ['MONTHLY WEBSITE CARE', 'MIESIĘCZNA OPIEKA NAD STRONĄ'], ['/ month', '/ miesiąc'],
  ['Technical updates · backups · security checks · payment and calendar monitoring · agreed small content and catalogue updates.', 'Aktualizacje techniczne · kopie zapasowe · kontrola bezpieczeństwa · monitoring płatności i kalendarza · uzgodnione drobne zmiany treści i katalogu.'],
  ['Products change. Software updates. Seasonal offers appear. Monthly care keeps the shop secure, accurate and ready to sell.', 'Produkty się zmieniają. Oprogramowanie wymaga aktualizacji. Pojawiają się oferty sezonowe. Miesięczna opieka zapewnia bezpieczeństwo, aktualność i gotowość sklepu do sprzedaży.'],
  ['09 · INVESTMENT', '09 · INWESTYCJA'], ['PROJECT SUMMARY', 'PODSUMOWANIE PROJEKTU'], ['Full project value', 'Pełna wartość projektu'], ['Personal discount', 'Osobisty rabat'],
  ['YOUR PROJECT FEE', 'CENA TWOJEGO PROJEKTU'], ['A personal discount, offered because Nurlana is part of your team.', 'Osobisty rabat, ponieważ Nurlana jest częścią Twojego zespołu.'],
  ['HOW THE €6,000 VALUE IS BUILT', 'JAK POWSTAJE WARTOŚĆ €6,000'], ['Strategy, structure & customer journey', 'Strategia, struktura i ścieżka klienta'], ['Bespoke visual design', 'Indywidualny projekt wizualny'],
  ['Catalogue & e-commerce build', 'Katalog i wdrożenie e-commerce'], ['Booking & payment setup', 'Konfiguracja rezerwacji i płatności'], ['PL / EN, SEO & Google setup', 'PL / EN, SEO i konfiguracja Google'], ['Testing, training & launch', 'Testy, szkolenie i uruchomienie'],
  ['BONUS', 'BONUS'], ['Russian website version included free to reach Warsaw’s Russian-speaking community.', 'Rosyjska wersja strony dodana bezpłatnie, aby dotrzeć do rosyjskojęzycznej społeczności Warszawy.'],
  ['TO BEGIN', 'NA START'], ['40% deposit · €2,000', '40% zaliczki · €2,000'], ['Remaining balance can be paid in instalments according to an agreed schedule.', 'Pozostałą kwotę można opłacić w ratach zgodnie z ustalonym harmonogramem.'],
  ['AFTER LAUNCH', 'PO URUCHOMIENIU'], ['Ongoing technical care, monitoring and agreed small updates.', 'Stała opieka techniczna, monitoring i uzgodnione drobne aktualizacje.'],
  ['Questions? I’m always happy to talk.', 'Masz pytania? Z przyjemnością porozmawiam.'], ['Back to WhatsApp', 'Wróć do WhatsApp']
]);

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const key = node.nodeValue.trim();
  if (key && polishCopy.has(key)) textNodes.push({ node, original: node.nodeValue, key });
}

function setPresentationLanguage(language) {
  const isPolish = language === 'pl';
  textNodes.forEach(({ node, original, key }) => {
    node.nodeValue = isPolish ? original.replace(key, polishCopy.get(key)) : original;
  });
  document.documentElement.lang = language;
  document.title = isPolish ? 'Mariposa — propozycja sklepu internetowego' : 'Mariposa — E-commerce Proposal';
  document.querySelector('.language-switcher').setAttribute('aria-label', isPolish ? 'Wybór języka' : 'Language selection');
  document.querySelectorAll('.language-switcher button').forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  localStorage.setItem('mariposa-language', language);
}

document.querySelectorAll('.language-switcher button').forEach((button) => {
  button.addEventListener('click', () => setPresentationLanguage(button.dataset.lang));
});

setPresentationLanguage(localStorage.getItem('mariposa-language') || 'pl');
