export const UserInfo = ({ user }) => (
    <div className="flex items-center gap-1">
        <p className="text-primary font-semibold sm:text-base">{user.displayName ?? user.lastName}</p>
        <span className="text-muted text-[10px] pt-1 sm:text-xs">@{user.username}</span>
    </div>
);
