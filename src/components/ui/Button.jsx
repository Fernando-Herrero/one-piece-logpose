export const Button = ({ children, className = "", onClick, variant = "primary" }) => {
    const styles = {
        primary: "text-black bg-accent hover:bg-accentSecondary",
        danger: "text-white bg-linePrimary hover:bg-lineDark",
    };

    return (
        <button className={`btn ${className} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
};
