import { LanguagesContext } from "@/context/LanguagesContext";
import { PrivacySelection } from "@/dashboard/components/Privacy/PrivacySelection";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const Privacy = ({ onCancel }) => {
    const { lang } = useContext(LanguagesContext);
    return (
        <div className="bg-sunny rounded-xl p-8 max-w-[80vw] flex flex-col items-center gap-4 text-center sm:max-w-lg">
            <h2 className="text-xl font-semibold text-primary">🛡️ {languages[lang].privacy.title}</h2>
            <p className="text-gray-600">{languages[lang].privacy.text}</p>

            <PrivacySelection />

            <button onClick={onCancel} className="text-muted text-sm underline mt-2 hover:text-gray-700">
                {languages[lang].privacy.cancel}
            </button>
        </div>
    );
};
