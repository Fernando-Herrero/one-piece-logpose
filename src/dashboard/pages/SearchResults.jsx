import { PostContext } from "@/context/PostContext";
import { UsersContext } from "@/context/UsersContext";
import { Spinner } from "@/dashboard/components/community/Spinner";
import { SearchResultSection } from "@/dashboard/components/search/SearchResultSection";
import { useSearchFilter } from "@/hooks/useSearchFilter";
import { useTranslate } from "@/translations/useTranslate";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const { posts, loading: loadingPosts } = useContext(PostContext);
    const { users, loading: loadingUsers } = useContext(UsersContext);
    const { t } = useTranslate();

    const { exactPostsMatches, partialPostsMatches, exactUserMatches, partialUserMatches, totalResults } =
        useSearchFilter(query, posts, users);

    if (loadingPosts || loadingUsers)
        return (
            <div className="flex items-center justify-center max-h-screen pt-10">
                <Spinner />
            </div>
        );

    return (
        <div className="max-w-xl mx-auto p-2 md:p-6">
            <h1 className="text-2xl font-bold mb-2 text-primary">{t("search.search_result")}</h1>
            <p className="text-muted mb-6">
                {t("search.searching")}: <span className="font-semibold">"{query}"</span>
            </p>

            {!query ? (
                <p className="text-muted text-center mt-8">{t("search.write_some")}</p>
            ) : totalResults === 0 ? (
                <p className="text-muted text-center mt-8">{t("search.not_found")}</p>
            ) : (
                <>
                    <p className="text-sm text-muted mb-6">
                        {totalResults} {t("search.result")}
                        {totalResults !== 1 ? "s" : ""}
                    </p>

                    <SearchResultSection
                        title="exactMatches"
                        items={exactPostsMatches}
                        type="post"
                        icon="🎯"
                        colorClass="text-green-600 dark:text-green-400"
                        t={t}
                    />

                    <SearchResultSection
                        title="otherResults"
                        items={partialPostsMatches}
                        type="post"
                        icon="📋"
                        colorClass="text-blue-600 dark:text-blue-400"
                        t={t}
                    />

                    <SearchResultSection
                        title="exactMatches"
                        items={exactUserMatches}
                        type="user"
                        icon="👤"
                        colorClass="text-green-600 dark:text-green-400"
                        t={t}
                    />

                    <SearchResultSection
                        title="otherResults"
                        items={partialUserMatches}
                        type="user"
                        icon="👥"
                        colorClass="text-blue-600 dark:text-blue-400"
                        t={t}
                    />
                </>
            )}
        </div>
    );
};

export default SearchResults;
