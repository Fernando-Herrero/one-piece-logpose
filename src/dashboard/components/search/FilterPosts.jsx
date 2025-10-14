export const FilterPosts = (posts, searchLower, isExact, excludeList = []) => {
    return posts.filter((post) => {
        if (!post.userId) return false;
        if (excludeList.includes(post)) return false;

        const method = isExact ? "startsWith" : "includes";

        return (
            post.text?.toLowerCase()[method](searchLower) ||
            post.userId.displayName?.toLowerCase()[method](searchLower) ||
            post.userId.lastName?.toLowerCase()[method](searchLower) ||
            post.userId.username?.toLowerCase()[method](searchLower)
        );
    });
};
