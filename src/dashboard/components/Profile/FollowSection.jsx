import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";

export const FollowSection = ({ user, className = "" }) => {
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();
    const userId = user.id;

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <div className="flex items-center gap-1">
                <p>
                    <strong className="text-primary font-semibold">
                        {languages[lang].profile.followers}:
                    </strong>
                </p>{" "}
                {user.followers.length > 0 ? (
                    <div className="hover:underline group relative z-10">
                        {" "}
                        <button onClick={() => goTo(`/dashboard/userProfile/followers?userId=${userId}`)}>
                            <span className=" cursor-pointer text-gradient group-hover:text-link">
                                {user.followers.length}
                            </span>
                        </button>
                        <div className="hidden absolute p-2 text-link rounded-xl text-xs bg-sunny group-hover:block">
                            <p>{languages[lang].profile.viewFollowers}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-xs text-gray-600 italic">{languages[lang].profile.notFollowersYet}</p>
                )}
            </div>

            <div className="flex items-center gap-1">
                <p>
                    <strong className="text-primary font-semibold">
                        {languages[lang].profile.following}:
                    </strong>
                </p>{" "}
                {user.following.length > 0 ? (
                    <span className="text-gradient">{user.following.join(", ")}</span>
                ) : (
                    <span className="text-xs text-gray-600 italic">
                        {languages[lang].profile.notFollowingYet}
                    </span>
                )}
            </div>
        </div>
    );
};
