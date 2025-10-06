export const UserInfo = ({ user }) => (
    <div className="flex items-center gap-1">
        <p className="text-primary font-semibold sm:text-lg">{user.displayName ?? user.lastName}</p>
        <span className="text-muted text-[10px] pt-1 sm:text-sm sm:pt-0">@{user.username}</span>
    </div>
);
