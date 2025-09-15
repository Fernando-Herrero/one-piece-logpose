export const Button = ({ children, className = "", onClick, variant = "submit" }) => {
    return (
        <button className={`btn ${className} ${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};
