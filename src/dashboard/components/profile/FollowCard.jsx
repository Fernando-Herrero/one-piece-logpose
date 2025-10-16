export const FollowCard = ({ title, content, onClick, noFollow }) => {
    const isThereFollows = content > 0;

    return (
        <button
            onClick={onClick}
            disabled={!isThereFollows}
            aria-label={isThereFollows ? `View ${title}` : undefined}
            className={`
                flex items-center gap-1 w-full text-left
                ${isThereFollows ? "cursor-pointer group" : ""}
            `}
        >
            <strong className="text-primary font-semibold sm:text-base">{title}:</strong>

            {isThereFollows ? (
                <span className="text-muted sm:text-base group-hover:underline group-hover:text-link">
                    {content}
                </span>
            ) : (
                <span className="text-xs text-muted italic sm:text-sm">{noFollow}</span>
            )}
        </button>
    );
};
