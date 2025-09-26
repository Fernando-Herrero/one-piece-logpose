import { UserAvatar } from "@/dashboard/components/UserAvatar";

export const UserCoverAndAvatar = ({ user }) => (
    <div className="relative w-full">
        {user.coverImage ? (
            <img
                src={user.coverImage}
                alt=""
                className="w-full h-full object-cover brightness-50 rounded-tl-xl rounded-tr-xl"
            />
        ) : (
            ""
        )}
        <div className="absolute top-10 right-1/2 translate-x-1/2">
            <UserAvatar
                src={user.avatar}
                size="2xl"
                status={user.isActive ? "online" : "offline"}
                className="border-2 border-white "
            />
        </div>
    </div>
);
