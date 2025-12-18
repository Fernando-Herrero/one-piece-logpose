import { AuthContext } from "@/context/AuthContext";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";

const Purchases = () => {
    const { isVerified } = useContext(AuthContext);
    const { t } = useTranslate();

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="max-w-md w-full bg-sunny rounded-2xl shadow p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-primary">🛒 {t("purchases.purchases")}</h2>

                {isVerified ? (
                    <div className="flex flex-col items-center gap-2 text-green-600">
                        <span className="text-4xl">✅</span>
                        <p className="font-medium">{t("purchases.verified")}</p>
                        <p className="text-sm text-gray-600">{t("purchases.thanks")}</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2 text-muted">
                        <span className="text-4xl">⚪</span>
                        <p className="font-medium">{t("purchases.no_purchases")}</p>
                        <p className="text-sm text-muted">
                            {t("purchases.go_to")} <strong>{t("purchases.setting_premium")}</strong>{" "}
                            {t("purchases.verify_account")}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Purchases;
