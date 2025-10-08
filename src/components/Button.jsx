export const Button = ({ children, className = "", onClick, variant = "submit", type = "button" }) => {
    const styles = {
        submit: "text-primary bg-accent hover:bg-accentHover",
        danger: "text-white bg-linePrimary hover:bg-lineDark",
    };

    return (
        <button type={type} className={`btn ${className} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
};
