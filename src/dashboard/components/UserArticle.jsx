import notVerifiedIcon from "@/assets/icons/not-verified-icon.svg";
import verifiedIcon from "@/assets/icons/verified-icon.svg";
import { UserAvatar } from "@/dashboard/components/UserAvatar";

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
}) => {
    return (
        <article
            key={id}
            className="flex items-center gap-2 bg-gradient-card border min-h-16 border-white/30 p-2 rounded-xl min-w-full shadow transition hover:-translate-y-0.5 hover:shadow-xl"
        >
            <UserAvatar
                src={avatar}
                size="sm"
                status={isActive ? "online" : "offline"}
                className="border-2 border-white"
                alt={name}
                fallback={lastName}
            />

            <div className="flex flex-col ">
                <div className="flex items-center gap-1 flex-wrap">
                    <div className="flex gap-1">
                        <p className="font-semibold text-primary text-sm">
                            {displayName ? displayName : firstName + lastName}
                        </p>
                        <img
                            className="w-3"
                            src={verified ? verifiedIcon : notVerifiedIcon}
                            alt={verified ? "Verified icon" : "Not verified icon"}
                        />
                    </div>

                    <span className="text-[10px] text-muted text-center pt-1">@{username}</span>
                </div>

                <div className="flex items-center gap-1 text-muted text-[10px] pt-2">
                    {createdAtLabel}: {new Date(createdAt).toLocaleDateString("es-ES")}
                </div>
            </div>
        </article>
    );
};
