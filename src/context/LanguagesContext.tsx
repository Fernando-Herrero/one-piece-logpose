import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";
import { local } from "../helpers/storage";

export const LanguagesContext = createContext<LanguagesContextType | null>(null);

type LanguagesContextType = {
    lang: string;
};

interface LanguagesContextProps {
    children: ReactNode;
}

export const LanguagesProvider = ({ children }: LanguagesContextProps) => {
    const [lang, setLang] = useState<string>(() => local.get<string>("lang") || "es");

    const handleLang = useCallback((value: string) => {
        setLang(value);
        local.save("lang", value);
    }, []);

    const value = useMemo(() => ({ lang, setLang, handleLang }), [lang]);
    return <LanguagesContext.Provider value={value}>{children}</LanguagesContext.Provider>;
};
