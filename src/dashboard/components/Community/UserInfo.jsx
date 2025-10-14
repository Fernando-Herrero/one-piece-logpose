export const UserInfo = ({ user }) => (
    <div className="flex items-center flex-wrap gap-1">
        <p className="text-primary font-semibold sm:text-lg">{user?.displayName ?? user?.lastName}</p>
        <span className="text-muted text-[10px] sm:text-sm">@{user?.username}</span>
    </div>
);
