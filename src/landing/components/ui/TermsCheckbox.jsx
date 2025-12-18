import { useTranslate } from "@/translations/useTranslate";

export const TermsCheckbox = ({ isChecked, setIsChecked }) => {
    const { t } = useTranslate();

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
                <p className="text-xs">{t("login.register_accept_terms")}</p>
            </div>
            <span className="text-xs">{t("login.register_terms")}</span>
        </label>
    );
};
