import { LanguagesContext } from "@/context/LanguagesContext";
import { MyBookmarkedPosts } from "@/dashboard/components/MyBookmarkedPosts";
import { MyCommentedPosts } from "@/dashboard/components/MyCommentedPosts";
import { MyLikedPosts } from "@/dashboard/components/MyLikedPosts";
import { MyPosts } from "@/dashboard/components/MyPosts";
import { tabsContent } from "@/dashboard/data/contentProfileTabs";
import { getPrivacyMessageContentProfile } from "@/dashboard/data/getPrivacyMessageContentPorfile";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";
import { useContext, useState } from "react";

export const ContentProfile = ({ context = "myProfile", userId, basePath, userPrivacy }) => {
    const [activeTab, setActiveTab] = useState("posts");
    const { isMobileXs } = useDevice();
    const isMyProfile = context === "myProfile";
    const { lang } = useContext(LanguagesContext);
    const { showBookmarked, showComments, showLikes, showPosts } = userPrivacy;

    const tabs = tabsContent(lang, showPosts, showLikes, showBookmarked, showComments);
    const privacyMessage = getPrivacyMessageContentProfile(
        showPosts,
        showLikes,
        showBookmarked,
        showComments,
        activeTab,
        lang
    );

    return (
        <section className="p-2 bg-gradient-card rounded-xl border border-white/30 w-full shadow-lg card-content">
            <div
                className={classNames(
                    "flex items-center justify-center gap-2 p-2 text-xs overflow-x-auto bg-white/20 rounded-lg",
                    "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                    {
                        "justify-start": isMobileXs,
                    }
                )}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`p-2 rounded-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer ${
                            activeTab === tab.key
                                ? "bg-white text-gray-800 border border-black/30 shadow-lg scale-110 sm:text-base"
                                : "text-muted hover:text-gray-500 sm:text-base"
                        } ${!tab.isVisible ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!tab.isVisible}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                {privacyMessage ? (
                    <div className="flex items-center justify-center py-8 px-4 text-center">
                        <p className="text-muted text-sm">{privacyMessage}</p>
                    </div>
                ) : (
                    <>
                        {showPosts && activeTab === "posts" && (
                            <MyPosts
                                context={context}
                                userId={userId}
                                isMyProfile={isMyProfile}
                                basePath={basePath}
                            />
                        )}
                        {showLikes && activeTab === "liked" && (
                            <MyLikedPosts context={context} userId={userId} isMyProfile={isMyProfile} />
                        )}
                        {showBookmarked && activeTab === "bookmarked" && (
                            <MyBookmarkedPosts context={context} userId={userId} isMyProfile={isMyProfile} />
                        )}
                        {showComments && activeTab === "comments" && (
                            <MyCommentedPosts context={context} userId={userId} isMyProfile={isMyProfile} />
                        )}
                    </>
                )}
            </div>
        </section>
    );
};
