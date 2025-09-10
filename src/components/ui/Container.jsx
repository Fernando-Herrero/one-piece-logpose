export const Container = ({ children, className = "" }) => {
    return <div className={`max-w-container mx-auto px-5 ${className}`}>{children}</div>;
};
