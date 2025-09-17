import { storage } from "@/helpers/storage";
import { createContext, useState } from "react";

export const LanguagesContext = createContext(null);

export const LanguagesProvider = ({ children }) => {
    const savedLang = storage.get("lang");
    const [lang, setLang] = useState(savedLang || "es");

    const handleLang = (value) => {
        setLang(value);
        storage.save("lang", value);
    };

    return (
        <LanguagesContext.Provider value={{ lang, setLang, handleLang }}>
            {children}
        </LanguagesContext.Provider>
    );
};
