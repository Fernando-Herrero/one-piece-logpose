export const UserInfo = ({ user }) => (
    <div className="flex gap-1">
        <p className="text-gradient">{user.displayName}</p>
        <span className="text-muted text-[10px] self-end">@{user.username}</span>
    </div>
);
