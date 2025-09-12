import { useContext } from "react";
import { LanguagesContext } from "../../context/LanguagesContext";

export const LanguageSelect = () => {
    const { lang, handleLang } = useContext(LanguagesContext);

    return (
        <select
            className="btn relative bg-primary hover:bg-secondary focus:outline-none"
            name="language"
            id="language"
            value={lang}
            onChange={(e) => handleLang(e.target.value)}
        >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇬🇧 English</option>
        </select>
    );
};
