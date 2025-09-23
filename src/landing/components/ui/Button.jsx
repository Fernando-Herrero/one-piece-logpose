export const Button = ({ children, className = "", onClick, variant = "submit", type = "button" }) => {
    const styles = {
        submit: "text-black bg-accent hover:bg-accentHover",
        danger: "text-white bg-linePrimary hover:bg-lineDark",
        primary: "text-black bg-orange/50 hover:bg-orange md:bg-orange/80",
    };

    return (
        <button type={type} className={`btn ${className} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
};
