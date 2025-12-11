import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext.jsx";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { DashboardRouter } from "@/router/DashboardRouter";
import { PublicRouter } from "@/router/PublicRouter";
import { useContext } from "react";

export const App = () => {
    const { modalData } = useContext(ModalContext);
    const { isOpen } = modalData;
    const { user, loading, error, clearError } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-1">
                <Spinner />{" "}
                <p className="text-gradient dark:text-black">
                    {languages[lang].profile.loading}
                    <LoadingDots />
                </p>
            </div>
        );

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <AuthError error={error} onClear={clearError} onRetry={() => window.location.reload()} />
            </div>
        );
    }

    return <>{user ? <DashboardRouter /> : <PublicRouter />}</>;
};
