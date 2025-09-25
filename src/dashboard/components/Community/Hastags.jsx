export const Hashtags = ({ hashtags }) => {
    if (hashtags.length === 0) return null;

    return (
        <div className="flex items-center gap-1">
            {hashtags.map((hashtag, index) => (
                <span key={`${hashtag}-${index}`} className="text-link">
                    #{hashtag}
                </span>
            ))}
        </div>
    );
};
