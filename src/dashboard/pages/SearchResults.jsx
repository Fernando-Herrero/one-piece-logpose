import { LanguagesContext } from "@/context/LanguagesContext";
import { PostContext } from "@/context/PostContext";
import { PostCard } from "@/dashboard/components/community/PostCard";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchResults = () => {
    const [searchParamas] = useSearchParams();
    const query = searchParamas.get("q") || "";
    console.log(query);
    const { posts, loading } = useContext(PostContext);
    console.log(posts);
    const [exactMatches, setExactMatches] = useState([]);
    const [partialMatches, setPartialMatches] = useState([]);
    const { lang } = useContext(LanguagesContext);

    useEffect(() => {
        if (query && posts) {
            const searchLower = query.toLowerCase();

            const exact = posts.filter((post) => {
                if (!post.userId) return false;

                return (
                    post.text?.toLowerCase().startsWith(searchLower) ||
                    post.userId.displayName?.toLowerCase().startsWith(searchLower) ||
                    post.userId.lastName?.toLowerCase().startsWith(searchLower) ||
                    post.userId.username?.toLowerCase().startsWith(searchLower)
                );
            });

            const partial = posts.filter((post) => {
                if (!post.userId) return false;

                if (exact.includes(post)) return false;

                return (
                    post.text?.toLowerCase().includes(searchLower) ||
                    post.userId.displayName?.toLowerCase().includes(searchLower) ||
                    post.userId.lastName?.toLowerCase().includes(searchLower) ||
                    post.userId.username?.toLowerCase().includes(searchLower)
                );
            });

            setExactMatches(exact);
            setPartialMatches(partial);
        } else {
            setExactMatches([]);
            setPartialMatches([]);
        }
    }, [query, posts]);

    const totalResults = exactMatches.length + partialMatches.length;

    if (loading) return <Spinner />;

    return (
        <div className="max-w-xl mx-auto p-2 md:p-6">
            <h1 className="text-2xl font-bold mb-2 text-primary">{languages[lang].search.searchResult}</h1>
            <p className="text-muted mb-6">
                {languages[lang].search.searching}: <span className="font-semibold">"{query}"</span>
            </p>

            {!query ? (
                <p className="text-mmuted text-center mt-8">{languages[lang].search.writeSome}</p>
            ) : totalResults === 0 ? (
                <p className="text-muted text-center mt-8">{languages[lang].search.notFound}</p>
            ) : (
                <>
                    <p className="text-sm text-muted mb-6">
                        {totalResults} {languages[lang].search.result}
                        {totalResults !== 1 ? "s" : ""}
                    </p>

                    {exactMatches.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">
                                🎯 {languages[lang].search.exactMatches} ({exactMatches.length})
                            </h2>
                            <div className="flex flex-col items-center space-y-4 pointer-events-none">
                                {exactMatches.map((post, index) => (
                                    <PostCard key={post.id} postId={post.id} index={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {partialMatches.length > 0 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 pointer-events-none">
                                📋 {languages[lang].search.otherResults} ({partialMatches.length})
                            </h2>
                            <div className="flex flex-col items-center space-y-4">
                                {partialMatches.map((post, index) => (
                                    <PostCard key={post.id} postId={post.id} index={index} />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
