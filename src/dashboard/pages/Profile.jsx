import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { PageError } from "@/components/ErrorBoundary/PageError";
import { AuthContext } from "@/context/AuthContext";
import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { ProfileArticle } from "@/dashboard/components/profile/ProfileArticle";
import { UserProgress } from "@/dashboard/components/profile/UserProgress";
import { UserStats } from "@/dashboard/components/profile/UserStats";
import { UsersWrapper } from "@/dashboard/components/profile/UsersWrapper";
import { UsersList } from "@/dashboard/components/UsersList";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
    const { t } = useTranslate();
    const { isAdmin, userPrivacy } = useContext(AuthContext);

    return (
        <div className="relative flex justify-center gap-4 p-1 mb-40 sm:pr-0 sm:pt-8 sm:mb-10">
            <div className="flex flex-col gap-2 sm:gap-4">
                <ProfileArticle />
                <UserProgress />
                <UserStats />
                <ContentProfile userPrivacy={userPrivacy} />
            </div>
            <ErrorBoundary
                t={t}
                fallback={
                    <PageError
                        title={t("pageError.users_list.title")}
                        message={t("pageError.users_list.message")}
                        onRetry={() => window.location.reload()}
                        noCenter={true}
                    />
                }
            >
                <UsersList />
            </ErrorBoundary>

            {isAdmin && <UsersWrapper />}
            <Outlet />
        </div>
    );
};

export default Profile;
