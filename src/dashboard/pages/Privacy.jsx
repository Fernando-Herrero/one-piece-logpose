import { LanguagesContext } from "@/context/LanguagesContext";
import { PrivacySelection } from "@/dashboard/components/Privacy/PrivacySelection";
import { useContext } from "react";

const Privacy = ({ onCancel }) => {
    const { t } = useContext(LanguagesContext);
    return (
        <div className="bg-sunny rounded-xl p-8 max-w-[80vw] flex flex-col items-center gap-4 text-center sm:max-w-lg">
            <h2 className="text-xl font-semibold text-primary">🛡️ {t("privacy.title")}</h2>
            <p className="text-gray-600">{t("privacy.text")}</p>

            <PrivacySelection />

            <button onClick={onCancel} className="text-muted text-sm underline mt-2 hover:text-gray-700">
                {t("privacy.cancel")}
            </button>
        </div>
    );
};

export default Privacy;
