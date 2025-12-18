export const getPrivacyMessageContentProfile = (
    showPosts,
    showLikes,
    showBookmarked,
    showComments,
    activeTab,
    t
) => {
    switch (activeTab) {
        case "posts":
            return !showPosts ? t("profile.private_content") : null;
        case "liked":
            return !showLikes ? t("profile.private_likes") : null;
        case "bookmarked":
            return !showBookmarked ? t("profile.private_bookmarks") : null;
        case "comments":
            return !showComments ? t("profile.private_comments") : null;
        default:
            return null;
    }
};
