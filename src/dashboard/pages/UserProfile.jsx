import notVerified from "@/assets/icons/not-verified-icon.svg";
import verified from "@/assets/icons/verified-icon.svg";
import { UserContext } from "@/context/UserContext";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { UserStats } from "@/dashboard/components/profile/UserStats";
import { UserProfileCard } from "@/dashboard/components/userProfile/UserProfileCard";
import { languages } from "@/helpers/languages";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const UserProfile = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const { t } = useTranslate();
    const { user, loading, error, userPrivacy } = useContext(UserContext);

    if (!userId) {
        return <p className="text-linePrimary text-center p-4">{t("profile.user_not_valid")}</p>;
    }
    if (error) {
        return (
            <div className="flex flex-col items-center p-4">
                <p className="text-red-600 mb-4">{error.message || "Error desconocido"}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {t("profile.user_error")}{" "}
                </button>
            </div>
        );
    }
    if (loading)
        return (
            <div className="flex flex-col items-center gap-1">
                <Spinner className="mx-auto mt-5" />{" "}
                <p className="text-gradient">
                    {t("profile.loading_profile")}
                    <LoadingDots />
                </p>
            </div>
        );
    if (!user) return <p className="text-linePrimary text-center pt-10">{t("profile.user_not_found")}</p>;

    return (
        <div className="flex flex-col items-center pt-2 mb-40 mx-auto gap-2 sm:mb-10 sm:gap-4 sm:py-8">
            <UserProfileCard
                user={user}
                t={t}
                verified={verified}
                notVerified={notVerified}
                languages={languages}
            />
            <UserStats context="ProfileUser" userId={userId} />
            <ContentProfile
                context="ProfileUser"
                userId={userId}
                basePath="/dashboard/userProfile"
                userPrivacy={userPrivacy}
            />

            <Outlet />
        </div>
    );
};

export default UserProfile;
