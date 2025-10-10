import { useAuth } from "@/core/auth/useAuth";
import { ProfileContentList } from "@/dashboard/components/ProfileComponentList";

export const MyBookmarkedPosts = ({ isMyProfile }) => {
    const { getMyBookmarkedPosts } = useAuth();
    return (
        <ProfileContentList
            fetchFunction={getMyBookmarkedPosts}
            emptyMessageKey="noBookmarkedPosts"
            isMyProfile={isMyProfile}
        />
    );
};
