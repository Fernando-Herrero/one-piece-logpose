import { useAuth } from "@/core/auth/useAuth";
import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileContentList";
import { memo } from "react";

export const MyBookmarkedPosts = memo(({ context, userId, isMyProfile }) => {
    const { getMyBookmarkedPosts } = useAuth();
    const { getBookmarksUser } = useUser();
    const fetchFn = context === "myProfile" ? getMyBookmarkedPosts : () => getBookmarksUser(userId);
    return (
        <ProfileContentList
            fetchFunction={fetchFn}
            emptyMessageKey="noBookmarkedPosts"
            isMyProfile={isMyProfile}
        />
    );
});
