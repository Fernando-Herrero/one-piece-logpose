import { local } from "@/helpers/storage";
import { createContext, useState } from "react";

export const LanguagesContext = createContext(null);

export const LanguagesProvider = ({ children }) => {
    const savedLang = local.get("lang");
    const [lang, setLang] = useState(savedLang || "es");

    const handleLang = (value) => {
        setLang(value);
        local.save("lang", value);
    };

    return (
        <LanguagesContext.Provider value={{ lang, setLang, handleLang }}>
            {children}
        </LanguagesContext.Provider>
    );
};
