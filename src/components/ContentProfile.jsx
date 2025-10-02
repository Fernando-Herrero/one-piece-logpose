import { MyBookmarkedPosts } from "@/components/MyBookmarkedPosts";
import { MyCommentedPosts } from "@/components/MyCommentedPosts";
import { MyLikedPosts } from "@/components/MyLikedPosts";
import { MyPosts } from "@/components/MyPosts";
import { useState } from "react";

export const ContentProfile = () => {
    const [tab, setTab] = useState("posts");

    return (
        <section>
            <MyPosts />
            <MyLikedPosts />
            <MyBookmarkedPosts />
            <MyCommentedPosts />
        </section>
    );
};
