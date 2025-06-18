"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pl" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pl: {
    // Navigation
    menu: "Menu",
    about: "O nas",
    contact: "Kontakt",

    // Hero
    heroTitle: "Witamy w naszej Pizzerii!",
    heroSubtitle: "Autentyczne smaki Włoch w sercu miasta",

    // Menu
    menuTitle: "Nasze Specjalności",
    pizza1Name: "Pizza z Gruszką i Gorgonzolą",
    pizza1Description: "Delikatne plastry gruszki, kremowy gorgonzola i chrupiące orzechy włoskie na cienkim cieście",
    pizza1Price: "42 zł",
    pizza2Name: "Tradycyjna Pizza Rzemieślnicza",
    pizza2Description: "Ręcznie robione ciasto z najlepszych składników, przygotowane według tradycyjnej receptury",
    pizza2Price: "38 zł",

    // About
    aboutTitle: "Nasza Historia",
    aboutText:
      "Od ponad 20 lat serwujemy najlepsze pizze w mieście. Nasze ciasto przygotowujemy codziennie rano z najwyższej jakości mąki, a składniki pochodzą od lokalnych dostawców. Każda pizza jest przygotowywana z pasją i miłością do włoskiej kuchni.",

    // Contact
    contactTitle: "Skontaktuj się z nami",
    nameLabel: "Imię",
    emailLabel: "Email",
    messageLabel: "Wiadomość",
    sendButton: "Wyślij wiadomość",
    addressTitle: "Adres",
    address: "ul. Przykładowa 123\n00-000 Warszawa",
    phoneTitle: "Telefon",
    phone: "+48 123 456 789",
    hoursTitle: "Godziny otwarcia",
    hours: "Pon-Czw: 12:00-22:00\nPt-Sob: 12:00-23:00\nNie: 14:00-21:00",
  },
  en: {
    // Navigation
    menu: "Menu",
    about: "About Us",
    contact: "Contact",

    // Hero
    heroTitle: "Welcome to Our Pizzeria!",
    heroSubtitle: "Authentic Italian flavors in the heart of the city",

    // Menu
    menuTitle: "Our Specialties",
    pizza1Name: "Pear & Gorgonzola Pizza",
    pizza1Description: "Delicate pear slices, creamy gorgonzola and crunchy walnuts on thin crust",
    pizza1Price: "$12",
    pizza2Name: "Traditional Artisan Pizza",
    pizza2Description: "Hand-made dough with the finest ingredients, prepared according to traditional recipe",
    pizza2Price: "$11",

    // About
    aboutTitle: "Our Story",
    aboutText:
      "For over 20 years, we have been serving the best pizzas in the city. We prepare our dough fresh every morning using the highest quality flour, and our ingredients come from local suppliers. Every pizza is prepared with passion and love for Italian cuisine.",

    // Contact
    contactTitle: "Contact Us",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send Message",
    addressTitle: "Address",
    address: "123 Example Street\nWarsaw, Poland",
    phoneTitle: "Phone",
    phone: "+48 123 456 789",
    hoursTitle: "Opening Hours",
    hours: "Mon-Thu: 12:00-22:00\nFri-Sat: 12:00-23:00\nSun: 14:00-21:00",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["pl"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
