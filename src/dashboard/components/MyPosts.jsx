import { useAuth } from "@/core/auth/useAuth";
import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyPosts = ({ context, userId, isMyProfile, basePath }) => {
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
};
