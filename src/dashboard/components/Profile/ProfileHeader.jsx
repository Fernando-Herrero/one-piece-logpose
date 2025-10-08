import { LanguagesContext } from "@/context/LanguagesContext";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { useContext } from "react";

export const ProfileHeader = ({ user, setCoverImg }) => {
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    return (
        <div className="relative w-full flex flex-col items-center">
            <div className="relative group max-h-52 w-full overflow-hidden">
                {user?.coverImage ? (
                    <img
                        src={user.coverImage}
                        alt="Cover"
                        className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 italic">
                        No cover image
                    </div>
                )}
                <button
                    className="hidden absolute right-0 bottom-0 p-2 rounded-xl cursor-pointer bg-sunny whitespace-nowrap group-hover:block z-10"
                    onClick={() => setCoverImg(true)}
                >
                    <span className="text-gradient">{languages[lang].profile.changeCoverImg}</span>
                </button>
            </div>

            <div className={`${user?.coverImage ? "absolute top-10" : "relative"}`}>
                <div className="relative group">
                    <UserAvatar
                        src={user.avatar}
                        size="2xl"
                        status={user.isActive ? "online" : "offline"}
                        className="border-2 border-white"
                    />
                    <button
                        className="hidden absolute p-2 rounded-xl cursor-pointer bg-sunny whitespace-nowrap group-hover:block z-10"
                        onClick={() => goTo("/dashboard/profile/avatar")}
                    >
                        <span className="text-gradient">{languages[lang].profile.changeAvatar}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
