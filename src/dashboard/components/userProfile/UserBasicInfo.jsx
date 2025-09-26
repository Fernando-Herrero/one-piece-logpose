export const UserBasicInfo = ({ user, lang, verified, notVerified, languages }) => (
    <div className="text-center">
        <p className="flex items-center justify-center gap-1 text-lg font-semibold text-primary">
            {user.displayName ?? user.name}
            {user.verified ? (
                <img className="w-4" src={verified} alt="Verified icon" />
            ) : (
                <img className="w-4" src={notVerified} alt="Not verified icon" />
            )}
        </p>

        <p className="text-xs text-muted mt-1">@{user.username}</p>
        <p className="text-xs text-muted">
            {languages[lang].profile.createdAt}: {new Date(user.createdAt).toLocaleDateString()}
        </p>

        {user.bio ? <p className="text-gradient mt-4 italic">{user.bio}</p> : ""}
    </div>
);
