import { LanguagesContext } from "@/context/LanguagesContext";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { languages } from "@/helpers/languages";
import { useGoTo } from "@/hooks/useGoTo";
import { memo, useContext } from "react";

export const ProfileHeader = memo(({ user, setCoverImg }) => {
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();

    return (
        <div className="relative w-full flex flex-col items-center">
            <button
                type="button"
                onClick={() => setCoverImg(true)}
                aria-label={languages[lang].profile.setCoverImg}
                className="relative group max-h-52 w-full overflow-hidden border-none bg-transparent p-0 cursor-pointer"
            >
                {user?.coverImage ? (
                    <img
                        src={user.coverImage}
                        alt=""
                        className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full pt-5 text-gray-500 italic">
                        {languages[lang].profile.setCoverImg}
                    </div>
                )}
            </button>

            <div className={`${user?.coverImage ? "absolute top-10" : "relative"}`}>
                <button
                    type="button"
                    onClick={() => goTo("/dashboard/profile/avatar")}
                    aria-label={languages[lang].profile.changeAvatar}
                    className="relative group border-none bg-transparent p-0 cursor-pointer rounded-full"
                >
                    <UserAvatar
                        src={user.avatar}
                        size="2xl"
                        status={user.isActive ? "online" : "offline"}
                        className="border-2 border-white"
                    />
                </button>
            </div>
        </div>
    );
});
