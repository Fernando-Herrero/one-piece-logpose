export const UserInfo = ({ user }) => (
    <div className="flex gap-1">
        <p className="text-primary font-semibold">{user.displayName ?? user.lastName}</p>
        <span className="text-muted text-[10px] self-end">@{user.username}</span>
    </div>
);
