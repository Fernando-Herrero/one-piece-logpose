import backImage from "@/assets/images/backgrounds/backCoverImg.webp";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { useState } from "react";

export const UserCoverAndAvatar = ({ user }) => {
    const [coverSrc, setCoverSrc] = useState(user.coverImage || backImage);

    return (
        <div className="relative w-full">
            {user.coverImage ? (
                <img
                    src={user.coverImage}
                    alt=""
                    className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
                    onError={() => setCoverSrc(backImage)}
                />
            ) : (
                ""
            )}
            <div
                className={`${
                    user.coverImage
                        ? "absolute top-10 right-1/2 translate-x-1/2"
                        : "relative flex items-center justify-center pt-5"
                }`}
            >
                <UserAvatar
                    src={user.avatar}
                    alt={user.displayName ?? user.name}
                    size="2xl"
                    status={user.isActive ? "online" : "offline"}
                    className="border-2 border-white "
                />
            </div>
        </div>
    );
};
