import cross from "@/assets/icons/cross-close.svg";
import notVerifiedIcon from "@/assets/icons/not-verified-icon.svg";
import verifiedIcon from "@/assets/icons/verified-icon.svg";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { UserBarProgress } from "@/dashboard/components/UserBarProgress";
import { languages } from "@/helpers/languages";
import { useDevice } from "@/hooks/useDevice";
import { useContext } from "react";

export const UserArticle = ({
    id,
    displayName,
    avatar,
    isActive,
    name,
    lastName,
    firstName,
    verified,
    username,
    createdAt,
    createdAtLabel,
    experience,
}) => {
    const { isAdmin } = useContext(AuthContext);
    const { deleteUser } = useUser();
    const { isMobileXs, isMobile, isTablet, isTabletXl, isDesktop } = useDevice();
    const { lang } = useContext(LanguagesContext);
    const avatarSizes = () => {
        if (isMobileXs || isMobile || isTablet || isTabletXl) return "lg";
        if (isDesktop) return "xl";
        return "2xl";
    };
    return (
        <article
            key={id}
            className="flex items-center gap-2 bg-gradient-card border border-white/30 px-4 py-2 rounded-xl w-full max-w-2xs shadow relative transition hover:-translate-y-0.5 hover:shadow-xl lg:gap-4"
        >
            <UserAvatar
                src={avatar}
                size={avatarSizes()}
                status={isActive ? "online" : "offline"}
                className="border-2 border-white"
                alt={name}
            />

            <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1 flex-wrap">
                    <div className="flex gap-1">
                        <p className="font-semibold text-primary text-sm lg:text-base">
                            {displayName ? displayName : firstName + lastName}
                        </p>
                        <img
                            className="w-3"
                            src={verified ? verifiedIcon : notVerifiedIcon}
                            alt={verified ? "Verified icon" : "Not verified icon"}
                        />
                    </div>

                    <span className="text-[10px] text-muted text-center lg:text-sm">@{username}</span>
                    <UserBarProgress experience={experience} className="h-2" />
                </div>

                <div className="flex items-center gap-1 text-muted text-[10px] pt-2 lg:text-sm">
                    {createdAtLabel}: {new Date(createdAt).toLocaleDateString("es-ES")}
                </div>
            </div>

            {isAdmin && (
                <div className="rounded-full border border-black bg-linePrimary tansition-all duration-300 hover:bg-lineDark hover:scale-110 absolute -top-1 -right-1 group">
                    {" "}
                    <button
                        onClick={() => deleteUser(id)}
                        className="w-4 h-4 flex items-center justify-center cursor-pointer"
                        aria-label="Eliminar usuario"
                    >
                        <img className="w-2 h-2" src={cross} alt="Cross icon" />
                    </button>
                    <p className="absolute -top-12 right-0 bg-sunny text-primary px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                        {languages[lang].profile.deleteUser}
                    </p>
                </div>
            )}
        </article>
    );
};
