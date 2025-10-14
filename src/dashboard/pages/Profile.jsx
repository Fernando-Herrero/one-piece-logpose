import { AuthContext } from "@/context/AuthContext";
import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { ProfileArticle } from "@/dashboard/components/profile/ProfileArticle";
import { UserProgress } from "@/dashboard/components/profile/UserProgrress";
import { UserStats } from "@/dashboard/components/profile/UserStats";
import { UsersWrapper } from "@/dashboard/components/profile/UsersWrapper";
import { UsersList } from "@/dashboard/components/UsersList";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const Profile = () => {
    const { isAdmin } = useContext(AuthContext);
    return (
        <div className="p-2 flex flex-col gap-2 max-w-container mx-auto md:p-8 relative">
            <div className="flex gap-2 md:gap-4">
                <div className="flex flex-col mx-auto gap-2 md:gap-4 w-full max-w-sm md:min-w-xs lg:ml-0">
                    <ProfileArticle />
                    <UserProgress />
                    <UserStats />
                </div>

                <UsersList />
            </div>

            <ContentProfile />

            {isAdmin && <UsersWrapper />}

            <Outlet />
        </div>
    );
};
