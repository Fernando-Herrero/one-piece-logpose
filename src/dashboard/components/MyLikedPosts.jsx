import { useAuth } from "@/core/auth/useAuth";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyLikedPosts = ({ context, userId, isMyProfile }) => {
    const { getMyLikedPosts } = useAuth();
    // const { getLikesUser } = useUser();
    // const fetchFn = context === "myProfile" ? getMyLikedPosts : () => getLikesUser(userId);
    return (
        <ProfileContentList
            fetchFunction={getMyLikedPosts}
            emptyMessageKey="noLikedPosts"
            isMyProfile={isMyProfile}
        />
    );
};
