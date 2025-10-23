import { LanguagesContext } from "@/context/LanguagesContext";
import { UsersContext } from "@/context/UsersContext";
import { FollowCard } from "@/dashboard/components/profile/FollowCard";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";

export const FollowSection = ({ user, className = "", basePath = "/dashboard/userProfile" }) => {
    const { users } = useContext(UsersContext);
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    const userId = user._id ? user._id : user.id;

    const validFollowers =
        user.followers?.filter((followerId) =>
            users.some((u) => u.id === followerId || u._id === followerId)
        ) || [];

    const validFollowing =
        user.following?.filter((followingId) =>
            users.some((u) => u.id === followingId || u._id === followingId)
        ) || [];

    const finalBasePath =
        basePath === "/dashboard/profile" ? basePath : `/dashboard/userProfile?userId=${userId}`;

    return (
        <div className={`flex flex-col gap-1 sm:flex-1 ${className}`}>
            <FollowCard
                title={languages[lang].profile.followers}
                content={validFollowers.length}
                onClick={() =>
                    goTo(`${basePath}/followers?userId=${userId}&from=${encodeURIComponent(finalBasePath)}`)
                }
                noFollow={languages[lang].profile.notFollowersYet}
            />
            <FollowCard
                title={languages[lang].profile.following}
                content={validFollowing.length}
                onClick={() =>
                    goTo(`${basePath}/followings?userId=${userId}&from=${encodeURIComponent(finalBasePath)}`)
                }
                noFollow={languages[lang].profile.notFollowingYet}
            />
        </div>
    );
};
