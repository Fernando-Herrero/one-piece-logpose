import backImgAvatar from "@/assets/images/luffy-lies.webp";

export const UserAvatar = ({ user }) => (
    <div className="w-8 h-8 rounded-full overflow-hidden flex-1">
        <img
            src={user?.avatar || backImgAvatar}
            alt={`${user.username} avatar`}
            onError={(event) => {
                event.target.src = backImgAvatar;
            }}
            className="w-full h-full object-center object-cover"
        />
    </div>
);
