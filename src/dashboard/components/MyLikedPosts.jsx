import { useAuth } from "@/core/auth/useAuth";
import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileContentList";
import { memo } from "react";

export const MyLikedPosts = memo(({ context, userId, isMyProfile }) => {
    const { getMyLikedPosts } = useAuth();
    const { getLikesUser } = useUser();
    const fetchFn = context === "myProfile" ? getMyLikedPosts : () => getLikesUser(userId);
    return (
        <ProfileContentList
            fetchFunction={fetchFn}
            emptyMessageKey="noLikedPosts"
            isMyProfile={isMyProfile}
        />
    );
});
