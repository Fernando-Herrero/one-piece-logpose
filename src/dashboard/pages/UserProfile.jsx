import notVerified from "@/assets/icons/not-verified-icon.svg";
import verified from "@/assets/icons/verified-icon.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { UserContext } from "@/context/UserContext";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { UserStats } from "@/dashboard/components/profile/UserStats";
import { UserProfileCard } from "@/dashboard/components/userProfile/UserProfileCard";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useContext } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

export const UserProfile = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const { lang } = useContext(LanguagesContext);
    const { user, loading, error } = useContext(UserContext);

    if (!userId) {
        return <p className="text-linePrimary text-center p-4">{languages[lang].profile.userNotValid}</p>;
    }
    if (error) {
        return (
            <div className="flex flex-col items-center p-4">
                <p className="text-red-600 mb-4">{error.message || "Error desconocido"}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {languages[lang].profile.userError}{" "}
                </button>
            </div>
        );
    }
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient">
                    {languages[lang].profile.loadingProfile}
                    <LoadingDots />
                </p>
            </div>
        );
    if (!user)
        return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.userNotFound}</p>;

    return (
        <div className="flex flex-col items-center gap-3 p-2 max-w-md mx-auto sm:max-w-xl md:p-8 lg:flex-row lg:max-w-5xl lg:items-start">
            <div className="flex flex-col gap-3">
                <UserProfileCard
                    user={user}
                    lang={lang}
                    verified={verified}
                    notVerified={notVerified}
                    languages={languages}
                />

                <UserStats context="ProfileUser" userId={userId} />
            </div>

            <ContentProfile context="ProfileUser" userId={userId} basePath="/dashboard/userProfile" />

            <Outlet />
        </div>
    );
};
