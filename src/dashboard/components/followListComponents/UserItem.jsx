import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const UserItem = ({ user, onUnfollow, canUnfollow }) => {
    const { lang } = useContext(LanguagesContext);
    const { id, username, firstName, lastName, displayName } = user;

    return (
        <article className="flex flex-col gap-1 bg-gradient-card p-2 rounded-xl w-full shadow-default text-center">
            <p className="text-primary text-lg font-semibold">{displayName || `${firstName} ${lastName}`}</p>
            <span className="text-muted">@{username}</span>

            {canUnfollow && (
                <Button onClick={() => onUnfollow(id)}>{languages[lang].profile.unfollowUser}</Button>
            )}
        </article>
    );
};
