export const Container = ({ children, className = "" }) => {
    return <div className={`max-w-[1290px] mx-auto px-5 ${className}`}>{children}</div>;
};
