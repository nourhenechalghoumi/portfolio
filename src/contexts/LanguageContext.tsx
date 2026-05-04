import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.hobbies": "Hobbies",
    "nav.contact": "Contact",
    "nav.downloadCV": "Download CV",

    // Home
    "home.title": "Hi, I'm Nourhene Chalgoumi",
    "home.subtitle": "Cloud & DevOps Engineer",
    "home.description": "I'm a Cloud & DevOps Engineer passionate about cloud-native development and system performance optimization. Experienced in CI/CD, Kubernetes, and cloud platforms like OpenStack and Azure.",
    "home.cta": "View My Work",

    // Projects
    "projects.title": "Things I've built & shipped",
    "projects.subtitle": "A selection of projects spanning cloud-native platforms, microservices, full-stack apps and infrastructure automation.",

    // Services
    "services.title": "My Services",
    "services.subtitle": "As a Cloud & DevOps Engineer with full-stack expertise, I provide end-to-end technical services — from infrastructure planning and automation to application deployment and monitoring.",

    // About
    "about.title": "About Me",
    "about.skills": "Skills & Expertise",

    // Experience
    "experience.title": "My Experience",

    // Contact
    "contact.title": "Get in Touch",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    // CV
    "cv.download": "Download CV",
    "cv.english": "English",
    "cv.french": "French",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.services": "Services",
    "nav.experience": "Expérience",
    "nav.hobbies": "Loisirs",
    "nav.contact": "Contact",
    "nav.downloadCV": "Télécharger CV",

    // Home
    "home.title": "Bonjour, je suis Nourhene Chalgoumi",
    "home.subtitle": "Ingénieur Cloud & DevOps",
    "home.description": "Je suis un ingénieur Cloud & DevOps passionné par le développement cloud-native et l'optimisation des performances système. Expérience en CI/CD, Kubernetes et plateformes cloud comme OpenStack et Azure.",
    "home.cta": "Voir Mon Travail",

    // Projects
    "projects.title": "Projets que j'ai créés et déployés",
    "projects.subtitle": "Une sélection de projets couvrant les plateformes cloud-native, les microservices, les applications full-stack et l'automatisation d'infrastructure.",

    // Services
    "services.title": "Mes Services",
    "services.subtitle": "En tant qu'ingénieur Cloud & DevOps avec une expertise full-stack, je fournis des services techniques de bout en bout — de la planification et l'automatisation de l'infrastructure au déploiement et à la surveillance des applications.",

    // About
    "about.title": "À Propos de Moi",
    "about.skills": "Compétences et Expertise",

    // Experience
    "experience.title": "Mon Expérience",

    // Contact
    "contact.title": "Prenez Contact",
    "contact.email": "E-mail",
    "contact.phone": "Téléphone",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",

    // CV
    "cv.download": "Télécharger CV",
    "cv.english": "Anglais",
    "cv.french": "Français",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language | null;
    return saved || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
