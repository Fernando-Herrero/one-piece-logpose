import { MyBookmarkedPosts } from "@/dashboard/components/MyBookmarkedPosts";
import { MyCommentedPosts } from "@/dashboard/components/MyCommentedPosts";
import { MyLikedPosts } from "@/dashboard/components/MyLikedPosts";
import { MyPosts } from "@/dashboard/components/MyPosts";
import { useDevice } from "@/hooks/useDevice";
import classNames from "classnames";
import { useState } from "react";

export const ContentProfile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const { isMobileXs } = useDevice();

    const tabs = [
        { key: "posts", label: "Posts" },
        { key: "liked", label: "Liked" },
        { key: "bookmarked", label: "Bookmarked" },
        { key: "comments", label: "Comments" },
    ];

    return (
        <section className="p-2 bg-gradient-card rounded-xl border border-white/30 w-full">
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
                        className={`p-2 rounded-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer, ${
                            activeTab === tab.key
                                ? "bg-white text-gray-800 border border-black/30 shadow-lg scale-110 sm:text-base"
                                : "text-muted hover:text-gray-500 sm:text-base"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === "posts" && <MyPosts />}
            {activeTab === "liked" && <MyLikedPosts />}
            {activeTab === "bookmarked" && <MyBookmarkedPosts />}
            {activeTab === "comments" && <MyCommentedPosts />}
        </section>
    );
};
