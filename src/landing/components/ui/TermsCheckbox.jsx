import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const TermsCheckbox = ({ isChecked, setIsChecked }) => {
    const { lang } = useContext(LanguagesContext);

    return (
        <label className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
                <input
                    required
                    className="no-focus"
                    type="checkbox"
                    checked={isChecked}
                    onChange={(event) => setIsChecked(event.target.checked)}
                />
                <p className="text-xs">{languages[lang].login.registerAcceptTerms}</p>
            </div>
            <span className="text-xs">{languages[lang].login.registerTerms}</span>
        </label>
    );
};
