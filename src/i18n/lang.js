import { createContext, useContext } from "react";
import { ui } from "./ui.js";

export const LangContext = createContext("en");

export const useLang = () => useContext(LangContext);
export const useT = () => ui[useContext(LangContext)];

// Content objects carry { en: …, de: … }; English is the fallback while a translation is missing.
export const pick = (obj, lang) => obj?.[lang] ?? obj?.en;
