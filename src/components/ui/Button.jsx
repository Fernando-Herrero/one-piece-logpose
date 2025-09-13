export const Button = ({ children, className = "", onClick, variant = "submit" }) => {
    const styles = {
        submit: "text-black bg-accent hover:bg-accentSecondary",
        danger: "text-white bg-linePrimary hover:bg-lineDark",
        primary: "text-black bg-orange/50 hover:bg-orange",
    };

    return (
        <button className={`btn ${className} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
};
