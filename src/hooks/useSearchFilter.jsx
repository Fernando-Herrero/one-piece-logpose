import { FilterPosts } from "@/dashboard/components/search/FilterPosts";
import { FilterUsers } from "@/dashboard/components/search/FilterUsers";

export const useSearchFilter = (query, posts, users) => {
    console.log("Render useSearchFilter");

    const results = useMemo(() => {
        if (!query && !posts && !users) {
            return {
                exactPostsMatches: [],
                partialPostsMatches: [],
                exactUserMatches: [],
                partialUserMatches: [],
                totalResults: [],
            };
        }
        const searchLower = query.toLowerCase();
        const exactPosts = FilterPosts(posts, searchLower, true);
        const partialPosts = FilterPosts(posts, searchLower, false, exactPosts);
        const exactUsers = FilterUsers(users, searchLower, true);
        const partialUsers = FilterUsers(users, searchLower, false, exactUsers);

        const totalResults =
            exactPosts.length + partialPosts.length + exactUsers.length + partialUsers.length;

        return {
            exactPostsMatches: exactPosts,
            partialPostsMatches: partialPosts,
            exactUserMatches: exactUsers,
            partialUserMatches: partialUsers,
            totalResults,
        };
    }, [query, posts, users]);

    return results;
};
