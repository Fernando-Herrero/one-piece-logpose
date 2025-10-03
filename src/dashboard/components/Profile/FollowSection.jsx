import { LanguagesContext } from "@/context/LanguagesContext";
import { FollowCard } from "@/dashboard/components/Profile/FollowCard";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { useGoTo } from "@/hooks/useGoTo";
import classNames from "classnames";
import { useContext } from "react";

export const FollowSection = ({ user, className = "", basePath = "/dashboard/userProfile" }) => {
    const { lang } = useContext(LanguagesContext);
    const { goTo } = useGoTo();
    const { isMobile, isTablet } = useDevice();

    const userId = user._id ? user._id : user.id;

    const finalBasePath =
        basePath === "/dashboard/profile" ? basePath : `/dashboard/userProfile?userId=${userId}`;

    return (
        <div
            className={classNames(`flex flex-col gap-1 md:px-6 pb-4 ${className}`, {
                "px-6 pb-4": isMobile,
                "px-8 pb-6": isTablet,
            })}
        >
            <FollowCard
                title={languages[lang].profile.followers}
                content={user.followers?.length}
                onClick={() =>
                    goTo(`${basePath}/followers?userId=${userId}&from=${encodeURIComponent(finalBasePath)}`)
                }
                noFollow={languages[lang].profile.notFollowersYet}
            />
            <FollowCard
                title={languages[lang].profile.following}
                content={user.following?.length}
                onClick={() =>
                    goTo(`${basePath}/followings?userId=${userId}&from=${encodeURIComponent(finalBasePath)}`)
                }
                noFollow={languages[lang].profile.notFollowingYet}
            />
        </div>
    );
};
