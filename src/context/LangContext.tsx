import React, { createContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "hr";

type Feature = { label: string; desc: string };
type Review = { name: string; origin: string; text: string; rating: number };
type Room = { name: string; desc: string };
type Faq = { q: string; a: string };

export type Translation = {
  nav: { home: string; about: string; gallery: string; booking: string; contact: string; book: string };
  home: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta: string;
    ctaBook: string;
    featuresTitle: string;
    features: Feature[];
    aboutEyebrow: string;
    aboutTitle: string;
    aboutText: string;
    reviewsEyebrow: string;
    reviewsTitle: string;
    reviews: Review[];
    locEyebrow: string;
    locTitle: string;
    locText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    extTitle: string;
    extText: string;
    intTitle: string;
    intText: string;
    rooms: Room[];
    faqTitle: string;
    faqs: Faq[];
  };
  gallery: { eyebrow: string; title: string };
  booking: {
    eyebrow: string;
    title: string;
    calNote: string;
    formTitle: string;
    f: {
      name: string;
      email: string;
      phone: string;
      guests: string;
      checkin: string;
      checkout: string;
      msg: string;
      submit: string;
      success: string;
    };
    bcEyebrow: string;
    bcTitle: string;
    bcText: string;
    bcCta: string;
    bcCta2: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    addr: string;
    email: string;
    phone: string;
    f: { name: string; email: string; msg: string; submit: string; success: string };
  };
  footer: {
    explore: string;
    contact: string;
    availability: string;
    availabilityText: string;
    availabilityCta: string;
    home: string;
    about: string;
    gallery: string;
    booking: string;
    contactUs: string;
    terms: string;
    privacy: string;
    copyright: string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    nav: { home: "Home", about: "About", gallery: "Gallery", booking: "Booking", contact: "Contact", book: "Book Now" },
    home: {
      eyebrow: "Vabriga · Istria · Croatia",
      headline: "Villa Istria",
      sub: "A luxury family villa with pool, two kilometres from the Adriatic.",
      cta: "Discover the villa",
      ctaBook: "Book your stay",
      featuresTitle: "Everything you need",
      features: [
        { label: "3 Bedrooms", desc: "King-size beds, private en-suite bathrooms, Smart TV & Netflix in every room." },
        { label: "Swimming Pool", desc: "Large illuminated pool with dynamic depth, sunbeds and solar shower." },
        { label: "Private Parking", desc: "Secure gated parking for two vehicles, with direct road access." },
        { label: "Istrian Character", desc: "Open-plan living, outdoor grill terrace, native stone details throughout." },
      ],
      aboutEyebrow: "The villa",
      aboutTitle: "Modern comfort,\nIstrian soul",
      aboutText:
        "Set quietly between Poreč and Novigrad, Villa Istria blends contemporary design with the warmth of native stone. The sea is 2 km away; Poreč, with its UNESCO Euphrasian Basilica, is 10 km down the road.",
      reviewsEyebrow: "Guest experiences",
      reviewsTitle: "What our guests say",
      reviews: [
        {
          name: "Sophie L.",
          origin: "Paris, France",
          text:
            "Absolutely stunning. The pool at night is magical, and the location is perfect — quiet yet close to everything. We will definitely return.",
          rating: 5,
        },
        {
          name: "Marco & Anna",
          origin: "Milan, Italy",
          text: "Every detail was perfect. The sea-view bedroom, evenings by the grill, the Istrian sunsets — a truly special place.",
          rating: 5,
        },
        {
          name: "Thomas B.",
          origin: "Munich, Germany",
          text: "Spacious, modern and beautifully appointed. The hosts respond instantly. Highly recommended for families.",
          rating: 5,
        },
      ],
      locEyebrow: "Location",
      locTitle: "Find us in Vabriga",
      locText: "Ulica Velog Jože 15a, Vabriga, 52465 Istria, Croatia",
    },
    about: {
      eyebrow: "About",
      title: "A modern house\nwith a dose of tradition",
      subtitle: "Contemporary interiors meet the timeless warmth of Istrian stone.",
      extTitle: "Exterior",
      extText:
        "The villa's façade blends native stone with modern lines. The garden features a large illuminated pool with dynamic depth, sunbeds, solar shower, a roofed dining terrace, and an outdoor fireplace grill.",
      intTitle: "Interior",
      intText:
        "An open-plan kitchen, dining and living room open directly onto the pool terrace. Each of the three bedrooms has a king-size bed, a private bathroom and a Smart TV with Netflix.",
      rooms: [
        { name: "Bedroom 1", desc: "King-size bed · private bathroom · direct pool access" },
        { name: "Bedroom 2", desc: "King-size bed · private bathroom · sea-view terrace" },
        { name: "Bedroom 3", desc: "2 single beds (joinable) · private bathroom · garden views" },
      ],
      faqTitle: "Frequently asked",
      faqs: [
        { q: "How far is the sea?", a: "Just 2 km from the villa — the nearest beach is in Vabriga itself." },
        { q: "How many cars can park?", a: "The gated parking fits 2 cars or larger vehicles such as vans." },
        { q: "Is there direct road access?", a: "Yes — the entrance is directly off the main road, no side roads." },
        { q: "Is the pool lit at night?", a: "Yes, the pool is fully illuminated for evening swims." },
        { q: "Is there air conditioning?", a: "Yes, all bedrooms and the living area are fully air-conditioned." },
      ],
    },
    gallery: { eyebrow: "Gallery", title: "The villa, inside & out" },
    booking: {
      eyebrow: "Booking",
      title: "Plan your stay",
      calNote: "Select your preferred dates below — then complete the enquiry form.",
      formTitle: "Send an enquiry",
      f: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        guests: "Number of guests",
        checkin: "Check-in",
        checkout: "Check-out",
        msg: "Message (optional)",
        submit: "Send enquiry",
        success: "Thank you — we'll be in touch within 24 hours.",
      },
      bcEyebrow: "Book through partner channels",
      bcTitle: "Live availability & instant confirmation",
      bcText:
        "Prefer to reserve through a trusted booking platform? View live availability, verified guest reviews and instant confirmation on our official partner listings.",
      bcCta: "View listing",
      bcCta2: "View listing",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      addr: "Ulica Velog Jože 15a\nVabriga (Tar-Vabriga, Poreč)\n52465, Istria, Croatia",
      email: "info@villa-istria.hr",
      phone: "+385 91 930 4368",
      f: { name: "Name", email: "Email", msg: "Message", submit: "Send message", success: "Message sent — we'll reply shortly." },
    },
    footer: {
      explore: "Explore",
      contact: "Contact",
      availability: "Availability",
      availabilityText: "Check available dates and send us an enquiry for your stay in Istria.",
      availabilityCta: "Check availability",
      home: "Home",
      about: "About Villa Istria",
      gallery: "Photo gallery",
      booking: "Book your stay",
      contactUs: "Contact us",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: "© 2026 Villa Istria, Vabriga. All rights reserved.",
    },
  },
  hr: {
    nav: { home: "Početna", about: "O vili", gallery: "Galerija", booking: "Rezervacija", contact: "Kontakt", book: "Rezerviraj" },
    home: {
      eyebrow: "Vabriga · Istra · Hrvatska",
      headline: "Villa Istria",
      sub: "Luksuzna obiteljska vila s bazenom, dva kilometra od Jadranskog mora.",
      cta: "Otkrijte vilu",
      ctaBook: "Rezervirajte boravak",
      featuresTitle: "Sve što trebate",
      features: [
        { label: "3 spavaće sobe", desc: "Bračni kreveti, privatne kupaone, Smart TV i Netflix u svakoj sobi." },
        { label: "Bazen", desc: "Veliki osvjetljeni bazen promjenjive dubine, ležaljke i solarni tuš." },
        { label: "Privatno parkiranje", desc: "Zaštićeno parkiralište za dva vozila s direktnim pristupom s ceste." },
        { label: "Istarski karakter", desc: "Otvoreni dnevni prostor, terasa s roštilje, kameni detalji." },
      ],
      aboutEyebrow: "Vila",
      aboutTitle: "Moderna ugodnost,\nistarska duša",
      aboutText:
        "Smještena između Poreča i Novigrada, Villa Istria spaja suvremeni dizajn s toplinom autohtonog kamena. More je 2 km, a Poreč s Eufrazijevom bazilikom 10 km.",
      reviewsEyebrow: "Iskustva gostiju",
      reviewsTitle: "Što kažu naši gosti",
      reviews: [
        {
          name: "Sophie L.",
          origin: "Pariz, Francuska",
          text: "Zadivljujuće. Bazen noću je čaroban, a lokacija savršena — mirna, a blizu svega. Definitivno se vraćamo.",
          rating: 5,
        },
        {
          name: "Marco & Anna",
          origin: "Milano, Italija",
          text: "Sve je bilo besprijekorno. Soba s pogledom na more, večeri uz roštilj, istarski zalasci — posebno mjesto.",
          rating: 5,
        },
        {
          name: "Thomas B.",
          origin: "München, Njemačka",
          text: "Prostrano, moderno i lijepo opremljeno. Domaćini odgovaraju odmah. Topla preporuka obiteljima.",
          rating: 5,
        },
      ],
      locEyebrow: "Lokacija",
      locTitle: "Pronađite nas u Vabrigi",
      locText: "Ulica Velog Jože 15a, Vabriga, 52465 Istra, Hrvatska",
    },
    about: {
      eyebrow: "O vili",
      title: "Moderna kuća\ns dozom tradicije",
      subtitle: "Suvremeni interijeri susreću se s toplinom istarskog kamena.",
      extTitle: "Eksterijer",
      extText:
        "Pročelje vile kombinira autohtoni kamen s modernim linijama. U vrtu: veliki osvjetljeni bazen promjenjive dubine, ležaljke, solarni tuš, natkrivena terasa za objedovanje i vanjski roštilj.",
      intTitle: "Interijer",
      intText:
        "Otvoreni prostor kuhinje, blagovaonice i dnevnog boravka s izlazom na terasu bazena. Svaka od tri spavaće sobe ima bračni krevet, privatnu kupaonu i Smart TV s Netflixom.",
      rooms: [
        { name: "Spavaća soba 1", desc: "Bračni krevet · privatna kupaona · direktan izlaz na bazen" },
        { name: "Spavaća soba 2", desc: "Bračni krevet · privatna kupaona · terasa s pogledom na more" },
        { name: "Spavaća soba 3", desc: "2 odvojena kreveta (spajaju se) · privatna kupaona · pogled na vrt" },
      ],
      faqTitle: "Česta pitanja",
      faqs: [
        { q: "Koliko je daleko more?", a: "Samo 2 km od vile — najbliža plaža je u samoj Vabrigi." },
        { q: "Koliko auta može parkirati?", a: "Zaštićeno parkiralište prima 2 auta ili veća vozila poput kombija." },
        { q: "Postoji li direktan pristup s ceste?", a: "Da — ulaz je tik uz glavnu cestu, bez sporednih cesta." },
        { q: "Je li bazen osvjetljen noću?", a: "Da, bazen je u potpunosti osvjetljen za večernje kupanje." },
        { q: "Postoji li klima uređaj?", a: "Da, sve sobe i dnevni boravak su potpuno klimatizirani." },
      ],
    },
    gallery: { eyebrow: "Galerija", title: "Vila iznutra i izvana" },
    booking: {
      eyebrow: "Rezervacija",
      title: "Planirajte boravak",
      calNote: "Odaberite željene datume ispod, zatim ispunite upit.",
      formTitle: "Pošaljite upit",
      f: {
        name: "Ime i prezime",
        email: "E-mail",
        phone: "Telefon",
        guests: "Broj gostiju",
        checkin: "Dolazak",
        checkout: "Odlazak",
        msg: "Poruka (neobavezno)",
        submit: "Pošalji upit",
        success: "Hvala — javit ćemo se u roku od 24 sata.",
      },
      bcEyebrow: "Rezervacija putem partnerskih kanala",
      bcTitle: "Dostupnost uživo i trenutna potvrda",
      bcText:
        "Preferirate rezervaciju putem provjerene platforme? Pogledajte aktualnu dostupnost, recenzije gostiju i trenutnu potvrdu na našim službenim oglasima.",
      bcCta: "Pogledaj oglas",
      bcCta2: "Pogledaj oglas",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontaktirajte nas",
      addr: "Ulica Velog Jože 15a\nVabriga (Tar-Vabriga, Poreč)\n52465, Istra, Hrvatska",
      email: "info@villa-istria.hr",
      phone: "+385 91 930 4368",
      f: { name: "Ime", email: "E-mail", msg: "Poruka", submit: "Pošalji poruku", success: "Poruka poslana — odgovorit ćemo uskoro." },
    },
    footer: {
      explore: "Istraži",
      contact: "Kontakt",
      availability: "Dostupnost",
      availabilityText: "Provjerite slobodne termine i pošaljite upit za boravak u Istri.",
      availabilityCta: "Provjeri dostupnost",
      home: "Početna",
      about: "O vili",
      gallery: "Galerija",
      booking: "Rezervirajte boravak",
      contactUs: "Kontaktirajte nas",
      terms: "Uvjeti korištenja",
      privacy: "Privatnost",
      copyright: "© 2026 Villa Istria, Vabriga. Sva prava pridržana.",
    },
  },
};

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
};

export const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("vi-lang") as Lang | null) : null;
    if (stored === "en" || stored === "hr") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("vi-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LangContext.Provider>;
};
