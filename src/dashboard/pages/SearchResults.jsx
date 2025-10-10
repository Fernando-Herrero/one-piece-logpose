import { LanguagesContext } from "@/context/LanguagesContext";
import { PostContext } from "@/context/PostContext";
import { UsersContext } from "@/context/UsersContext";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { SearchResultSection } from "@/dashboard/components/Search/SearchResultSection";
import { languages } from "@/helpers/languages";
import { useSearchFilter } from "@/hooks/useSearchFilter";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchResults = () => {
    const [searchParamas] = useSearchParams();
    const query = searchParamas.get("q") || "";
    const { posts, loading: loadingPosts } = useContext(PostContext);
    const { users, loading: loadingUsers } = useContext(UsersContext);
    const { lang } = useContext(LanguagesContext);

    const { exactPostsMatches, partialPostsMatches, exactUserMatches, partialUserMatches, totalResults } =
        useSearchFilter(query, posts, users);

    if (loadingPosts || loadingUsers) return <Spinner />;

    return (
        <div className="max-w-xl mx-auto p-2 md:p-6">
            <h1 className="text-2xl font-bold mb-2 text-primary">{languages[lang].search.searchResult}</h1>
            <p className="text-muted mb-6">
                {languages[lang].search.searching}: <span className="font-semibold">"{query}"</span>
            </p>

            {!query ? (
                <p className="text-muted text-center mt-8">{languages[lang].search.writeSome}</p>
            ) : totalResults === 0 ? (
                <p className="text-muted text-center mt-8">{languages[lang].search.notFound}</p>
            ) : (
                <>
                    <p className="text-sm text-muted mb-6">
                        {totalResults} {languages[lang].search.result}
                        {totalResults !== 1 ? "s" : ""}
                    </p>

                    <SearchResultSection
                        title="exactMatches"
                        items={exactPostsMatches}
                        type="post"
                        icon="🎯"
                        colorClass="text-green-600 dark:text-green-400"
                        lang={lang}
                    />

                    <SearchResultSection
                        title="otherResults"
                        items={partialPostsMatches}
                        type="post"
                        icon="📋"
                        colorClass="text-blue-600 dark:text-blue-400"
                        lang={lang}
                    />

                    <SearchResultSection
                        title="exactMatches"
                        items={exactUserMatches}
                        type="user"
                        icon="👤"
                        colorClass="text-green-600 dark:text-green-400"
                        lang={lang}
                    />

                    <SearchResultSection
                        title="otherResults"
                        items={partialUserMatches}
                        type="user"
                        icon="👥"
                        colorClass="text-blue-600 dark:text-blue-400"
                        lang={lang}
                    />
                </>
            )}
        </div>
    );
};
