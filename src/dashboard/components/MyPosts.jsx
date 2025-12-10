import { useAuth } from "@/core/auth/useAuth";
import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileContentList";
import { memo } from "react";

export const MyPosts = memo(({ context, userId, isMyProfile, basePath }) => {
    const { getMyPosts } = useAuth();
    const { getPostsUser } = useUser();
    const fetchFn = context === "myProfile" ? getMyPosts : () => getPostsUser(userId);
    return (
        <ProfileContentList
            fetchFunction={fetchFn}
            emptyMessageKey="noPosts"
            isMyProfile={isMyProfile}
            basePath={basePath}
        />
    );
});
