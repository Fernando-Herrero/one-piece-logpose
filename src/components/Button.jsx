export const Button = ({
    children,
    className = "",
    onClick,
    variant = "submit",
    type = "button",
    disabled = false,
}) => {
    const styles = {
        submit: `text-primary bg-accent ${!disabled ? "hover:bg-accentHover" : ""}`,
        danger: `text-white bg-linePrimary ${!disabled ? "hover:bg-lineDark" : ""}`,
    };
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            type={type}
            className={`btn ${className} ${styles[variant]} ${disabledStyles}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
