import { PageSpinner } from "@/components/PageSpinner";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext.jsx";
import { languages } from "@/helpers/languages";
import { DashboardRouter } from "@/router/DashboardRouter";
import { PublicRouter } from "@/router/PublicRouter";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";

export const App = () => {
    const { t } = useTranslate();
    const { lang } = useContext(LanguagesContext);
    const { modalData } = useContext(ModalContext);
    const { isOpen } = modalData;
    const { user, loading, error, clearError } = useContext(AuthContext);

    if (loading) return <PageSpinner message={languages[lang].profile.loading} fullPage showDots />;

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <AuthError error={error} onClear={clearError} onRetry={() => window.location.reload()} />
            </div>
        );
    }

    return (
        <>
            {user ? (
                <DashboardRouter isOpen={isOpen} modalData={modalData} t={t} />
            ) : (
                <PublicRouter isOpen={isOpen} modalData={modalData} t={t} />
            )}
        </>
    );
};
