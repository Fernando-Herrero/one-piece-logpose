import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const FollowSection = ({ user }) => {
    const { lang } = useContext(LanguagesContext);

    return (
        <div className="flex flex-col gap-1 mt-4">
            <p>
                <strong className="text-primary font-semibold">{languages[lang].profile.followers}:</strong>{" "}
                {user.followers.length > 0 ? (
                    <span className="text-gradient">{user.followers.join(", ")}</span>
                ) : (
                    <span className="text-xs text-gray-600 italic">
                        {languages[lang].profile.notFollowersYet}
                    </span>
                )}
            </p>

            <p>
                <strong className="text-primary font-semibold">{languages[lang].profile.following}:</strong>{" "}
                {user.following.length > 0 ? (
                    <span className="text-gradient">{user.following.join(", ")}</span>
                ) : (
                    <span className="text-xs text-gray-600 italic">
                        {languages[lang].profile.notFollowingYet}
                    </span>
                )}
            </p>
        </div>
    );
};
