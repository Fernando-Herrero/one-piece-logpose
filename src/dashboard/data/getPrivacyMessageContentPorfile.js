import { languages } from "@/helpers/languages";

export const getPrivacyMessageContentProfile = (
    showPosts,
    showLikes,
    showBookmarked,
    showComments,
    activeTab,
    lang
) => {
    switch (activeTab) {
        case "posts":
            return !showPosts ? languages[lang].profile.privateContent : null;
        case "liked":
            return !showLikes ? languages[lang].profile.privateLikes : null;
        case "bookmarked":
            return !showBookmarked ? languages[lang].profile.privateBookmarks : null;
        case "comments":
            return !showComments ? languages[lang].profile.privateComments : null;
        default:
            return null;
    }
};
