import { languages } from "@/helpers/languages";

export const tabsContent = (lang, showPosts, showLikes, showBookmarked, showComments) => [
    { key: "posts", label: "Posts", isVisible: showPosts },
    { key: "liked", label: languages[lang].profile.likes, isVisible: showLikes },
    { key: "bookmarked", label: languages[lang].profile.bookmarks, isVisible: showBookmarked },
    { key: "comments", label: languages[lang].profile.comments, isVisible: showComments },
];
