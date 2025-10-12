import { FilterPosts } from "@/dashboard/components/search/FilterPosts";
import { FilterUsers } from "@/dashboard/components/search/FilterUsers";
import { useEffect, useState } from "react";

export const useSearchFilter = (query, posts, users) => {
    const [exactPostsMatches, setExactPostsMatches] = useState([]);
    const [partialPostsMatches, setPartialPostsMatches] = useState([]);
    const [exactUserMatches, setExactUserMatches] = useState([]);
    const [partialUserMatches, setPartialUserMatches] = useState([]);

    useEffect(() => {
        if (query && posts && users) {
            const searchLower = query.toLowerCase();

            const exactPosts = FilterPosts(posts, searchLower, true);
            const partialPosts = FilterPosts(posts, searchLower, false, exactPosts);

            setExactPostsMatches(exactPosts);
            setPartialPostsMatches(partialPosts);

            const exactUsers = FilterUsers(users, searchLower, true);
            const partialUsers = FilterUsers(users, searchLower, false, exactUsers);

            setExactUserMatches(exactUsers);
            setPartialUserMatches(partialUsers);
        } else {
            setExactPostsMatches([]);
            setPartialPostsMatches([]);
            setExactUserMatches([]);
            setPartialUserMatches([]);
        }
    }, [query, posts, users]);

    const totalResults =
        exactPostsMatches.length +
        partialPostsMatches.length +
        exactUserMatches.length +
        partialUserMatches.length;

    return { exactPostsMatches, exactUserMatches, partialPostsMatches, partialUserMatches, totalResults };
};
