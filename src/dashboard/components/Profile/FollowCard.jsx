export const FollowCard = ({ title, content, onClick, noFollow }) => {
    return (
        <div className="flex items-center gap-1">
            <p>
                <strong className="text-primary font-semibold">{title}:</strong>
            </p>{" "}
            {content > 0 ? (
                <div className="hover:underline group relative z-10">
                    {" "}
                    <button onClick={onClick}>
                        <span className=" cursor-pointer text-gradient group-hover:text-link">{content}</span>
                    </button>
                    <div className="hidden absolute p-2 text-link rounded-xl text-xs bg-sunny group-hover:block">
                        <p>{title}</p>
                    </div>
                </div>
            ) : (
                <p className="text-xs text-gray-600 italic">{noFollow}</p>
            )}
        </div>
    );
};
