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
    heroTitle: "Pizza nie musi być szybka...\nMusi być dobra!",
    heroSubtitle: "U nas liczy się smak, nie skróty.",

    // Menu
    menuTitle: "Nasze Specjalności",

    // About
    aboutTitle: "Nasza Historia",
    aboutText:
        "Od ponad 20 lat serwujemy najlepsze pizze w mieście. Nasze ciasto przygotowujemy codziennie rano z najwyższej jakości mąki, a składniki pochodzą od lokalnych dostawców. Każda pizza jest przygotowywana z pasją i miłością do włoskiej kuchni.",

    // Contact
    contactTitle: "Znajdziesz nas tutaj",
    nameLabel: "Imię",
    emailLabel: "Email",
    messageLabel: "Wiadomość",
    sendButton: "Wyślij wiadomość",
    addressTitle: "Adres",
    address: "ul. Zamkowa 6\n42-600 Tarnowskie Góry",
    phoneTitle: "Telefon",
    phone: "+48 123 456 789",
    hoursTitle: "Godziny otwarcia",
    hours: "Pon-Czw: 12:00-22:00\nPt-Sob: 12:00-23:00\nNie: 14:00-21:00",
    directionsButton: "Otwórz w Google Maps",
    mapInstruction: "Kliknij mapę, aby przejść do Google Maps",
    openMapsLabel: "Otwórz w Google Maps",
  },
  en: {
    // Navigation
    menu: "Menu",
    about: "About Us",
    contact: "Contact",

    // Hero
    heroTitle: "Pizza doesn't have to be fast...\nIt has to be good!",
    heroSubtitle: "Here, taste matters, not shortcuts.",

    // Menu
    menuTitle: "Our Specialties",

    // About
    aboutTitle: "Our Story",
    aboutText:
        "For over 20 years, we have been serving the best pizzas in the city. We prepare our dough fresh every morning using the highest quality flour, and our ingredients come from local suppliers. Every pizza is prepared with passion and love for Italian cuisine.",

    // Contact
    contactTitle: "You'll find us here",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendButton: "Send Message",
    addressTitle: "Address",
    address: "ul. Zamkowa 6\n42-600 Tarnowskie Góry",
    phoneTitle: "Phone",
    phone: "+48 123 456 789",
    hoursTitle: "Opening Hours",
    hours: "Mon-Thu: 12:00-22:00\nFri-Sat: 12:00-23:00\nSun: 14:00-21:00",
    directionsButton: "Open in Google Maps",
    mapInstruction: "Click the map to go to Google Maps",
    openMapsLabel: "Open in Google Maps",
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
