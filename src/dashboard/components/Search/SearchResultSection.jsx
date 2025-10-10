import { PostCard } from "@/dashboard/components/Community/PostCard";
import { UserCard } from "@/dashboard/components/Search/UserCard";
import { languages } from "@/helpers/languages";

export const SearchResultSection = ({ title, items, type, icon, colorClass, lang }) => {
    if (items.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className={`text-lg font-semibold mb-4 ${colorClass}`}>
                {icon} {type === "user" ? "Usuarios - " : "Posts - "}
                {languages[lang].search[title]} ({items.length})
            </h2>
            <div className="flex flex-col items-center space-y-4">
                {items.map((item, index) =>
                    type === "post" ? (
                        <PostCard key={item.id} postId={item.id} index={index} />
                    ) : (
                        <UserCard key={item.id} user={item} lang={lang} />
                    )
                )}
            </div>
        </div>
    );
};
