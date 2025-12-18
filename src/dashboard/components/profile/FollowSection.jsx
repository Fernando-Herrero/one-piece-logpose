import { UsersContext } from "@/context/UsersContext";
import { FollowCard } from "@/dashboard/components/profile/FollowCard";
import { useGoTo } from "@/hooks/useGoTo";
import { useTranslate } from "@/translations/useTranslate";
import { memo, useContext, useMemo } from "react";

export const FollowSection = memo(({ user, className = "", basePath = "/dashboard/userProfile" }) => {
    const { users } = useContext(UsersContext);
    const { t } = useTranslate();
    const { goTo } = useGoTo();

    const userId = user._id ? user._id : user.id;

    const validFollowers = useMemo(() => {
        return (
            user.followers?.filter((followerId) =>
                users.some((u) => u.id === followerId || u._id === followerId)
            ) || []
        );
    }, [user, users]);

    const validFollowing = useMemo(() => {
        return (
            user.following?.filter((followingId) =>
                users.some((u) => u.id === followingId || u._id === followingId)
            ) || []
        );
    }, [user, users]);

    const finalBasePath =
        basePath === "/dashboard/profile" ? basePath : `/dashboard/userProfile?userId=${userId}`;

    return (
        <div className={`flex flex-col gap-1 sm:flex-1 ${className}`}>
            <FollowCard
                title={t("profile.followers")}
                content={validFollowers.length}
                onClick={() =>
                    goTo(`${basePath}/followers?userId=${userId}&from=${encodeURIComponent(finalBasePath)}`)
                }
                noFollow={t("profile.not_followers_yet")}
            />
            <FollowCard
                title={t("profile.following")}
                content={validFollowing.length}
                onClick={() =>
                    goTo(`${basePath}/followings?userId=${userId}&from=${encodeURIComponent(finalBasePath)}`)
                }
                noFollow={t("profile.not_following_yet")}
            />
        </div>
    );
});
