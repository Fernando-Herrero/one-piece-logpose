import { useAuth } from "@/core/auth/useAuth";
import { useUser } from "@/core/user/useUser";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyCommentedPosts = ({ context, userId, isMyProfile }) => {
    const { getMyCommentedPosts } = useAuth();
    const { getCommentsUser } = useUser();
    const fetchFn = context === "myProfile" ? getMyCommentedPosts : () => getCommentsUser(userId);
    return (
        <ProfileContentList
            fetchFunction={fetchFn}
            emptyMessageKey="noCommentedPosts"
            isMyProfile={isMyProfile}
        />
    );
};
