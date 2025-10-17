import { AuthContext } from "@/context/AuthContext";
import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { ProfileArticle } from "@/dashboard/components/profile/ProfileArticle";
import { UserProgress } from "@/dashboard/components/profile/UserProgress";
import { UserStats } from "@/dashboard/components/profile/UserStats";
import { UsersWrapper } from "@/dashboard/components/profile/UsersWrapper";
import { UsersList } from "@/dashboard/components/UsersList";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const Profile = () => {
    const { isAdmin } = useContext(AuthContext);
    return (
        <div className="relative flex flex-col items-center gap-2 mb-10 sm:gap-4 sm:pt-8 lg:items-start lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:max-w-fit lg:max-h-fit">
            <ProfileArticle />
            <UserProgress />
            <UserStats className="lg:h-fit lg:col-start-2 lg:-mt-108" />
            <ContentProfile />
            <UsersList className="lg:col-start-2 lg:-mt-192" />
            {isAdmin && <UsersWrapper />}
            <Outlet />
        </div>
    );
};
