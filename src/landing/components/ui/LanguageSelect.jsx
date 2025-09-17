import { LanguagesContext } from "@/context/LanguagesContext";
import { useContext } from "react";

export const LanguageSelect = ({ className }) => {
    const { lang, handleLang } = useContext(LanguagesContext);

    return (
        <select
            className={`bg-transparent p-1 border border-orangeAce/10 rounded-xl transition hover:bg-orangeAce/10 focus:outline-none ${className}`}
            name="language"
            value={lang}
            onChange={(e) => handleLang(e.target.value)}
        >
            <option value="es">🇪🇸 Es</option>
            <option value="en">🇬🇧 En</option>
        </select>
    );
};
