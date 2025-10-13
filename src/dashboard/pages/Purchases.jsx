import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const Purchases = () => {
    const { isVerified } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="max-w-md w-full bg-sunny rounded-2xl shadow p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                    🛒 {languages[lang].purchases.purchases}
                </h2>

                {isVerified ? (
                    <div className="flex flex-col items-center gap-2 text-green-600">
                        <span className="text-4xl">✅</span>
                        <p className="font-medium">{languages[lang].purchases.verified}</p>
                        <p className="text-sm text-gray-600">{languages[lang].purchases.thanks}</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2 text-muted">
                        <span className="text-4xl">⚪</span>
                        <p className="font-medium">{languages[lang].purchases.noPurchases}</p>
                        <p className="text-sm text-muted">
                            {languages[lang].purchases.goTo}{" "}
                            <strong>{languages[lang].purchases.settingPremium}</strong>{" "}
                            {languages[lang].purchases.verifyAccount}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
