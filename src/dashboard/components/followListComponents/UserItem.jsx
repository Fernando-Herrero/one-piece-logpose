import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { memo, useContext } from "react";

export const UserItem = memo(({ user, onUnfollow, canUnfollow, view = true }) => {
    const { lang } = useContext(LanguagesContext);
    const { id, username, lastName, displayName } = user;

    return (
        <article className="flex flex-col gap-1 bg-gradient-card p-2 rounded-xl w-full shadow-default text-center">
            <p className="text-primary text-lg font-semibold">{displayName ? displayName : lastName}</p>
            <span className="text-muted">@{username}</span>

            {view && canUnfollow && (
                <Button onClick={() => onUnfollow(id)}>{languages[lang].profile.unfollowUser}</Button>
            )}
        </article>
    );
});
