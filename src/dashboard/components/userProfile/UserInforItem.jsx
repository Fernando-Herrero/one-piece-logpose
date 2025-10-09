export const UserInfoItem = ({ icon, label, value, showLabel = false }) => (
    <div className="flex items-center gap-2">
        <span>{icon}</span>
        <div className="flex items-center gap-1">
            {showLabel && <p className="text-primary font-semibold sm:text-base">{label}:</p>}
            {!showLabel ? (
                <p className="text-gradient sm:text-base">{value}</p>
            ) : (
                <span className="text-gradient sm:text-base">{value}</span>
            )}
        </div>
    </div>
);
