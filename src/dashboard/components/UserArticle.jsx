import notVerifiedIcon from "@/assets/icons/not-verified-icon.svg";
import verifiedIcon from "@/assets/icons/verified-icon.svg";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { UserBarProgress } from "@/dashboard/components/UserBarProgress";
import { useDevice } from "@/hooks/useDevice";

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
    const { isTablet } = useDevice();
    return (
        <article
            key={id}
            className="flex items-center gap-2 bg-gradient-card border min-h-16 border-white/30 p-2 rounded-xl min-w-full shadow transition hover:-translate-y-0.5 hover:shadow-xl lg:p-4"
        >
            <UserAvatar
                src={avatar}
                size={isTablet ? "sm" : "lg"}
                status={isActive ? "online" : "offline"}
                className="border-2 border-white"
                alt={name}
                fallback={lastName}
            />

            <div className="flex flex-col">
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
        </article>
    );
};
