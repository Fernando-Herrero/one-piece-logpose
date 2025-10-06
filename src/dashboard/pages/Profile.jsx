import { ContentProfile } from "@/dashboard/components/ContentProfile";
import { ProfileArticle } from "@/dashboard/components/profile/ProfileArticle";
import { UserProgress } from "@/dashboard/components/profile/UserProgrress";
import { UserStats } from "@/dashboard/components/profile/UserStats";
import { UsersList } from "@/dashboard/components/UsersList";
import { Outlet } from "react-router-dom";

export const Profile = () => {
    return (
        <div className="p-2 flex flex-col gap-2 max-w-container mx-auto md:p-6">
            <div className="flex gap-2">
                <div className="flex flex-col gap-2">
                    <ProfileArticle />
                    <UserProgress />
                    <UserStats />
                </div>

                <UsersList />
            </div>

            <ContentProfile />

            <Outlet />
        </div>
    );
};
