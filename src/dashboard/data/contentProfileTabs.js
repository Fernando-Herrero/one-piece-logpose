export const tabsContent = (t, showPosts, showLikes, showBookmarked, showComments) => [
    { key: "posts", label: "Posts", isVisible: showPosts },
    { key: "liked", label: t("profile.likes"), isVisible: showLikes },
    { key: "bookmarked", label: t("profile.bookmarks"), isVisible: showBookmarked },
    { key: "comments", label: t("profile.comments"), isVisible: showComments },
];
