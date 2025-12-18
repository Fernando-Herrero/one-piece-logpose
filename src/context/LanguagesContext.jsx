import { local } from "@/helpers/storage";
import { createContext, useCallback, useMemo, useState } from "react";

export const LanguagesContext = createContext(null);

export const LanguagesProvider = ({ children }) => {
    const savedLang = local.get("lang");
    const [lang, setLang] = useState(savedLang || "es");

    const handleLang = useCallback((value) => {
        setLang(value);
        local.save("lang", value);
    }, []);

    const value = useMemo(() => ({ lang, setLang, handleLang }), [lang]);
    return <LanguagesContext.Provider value={value}>{children}</LanguagesContext.Provider>;
};
