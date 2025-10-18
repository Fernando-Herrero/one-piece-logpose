export const ToggleSwitch = ({
    isOn,
    handleToggle,
    isLoading = false,
    onColor = "bg-red-500",
    offColor = "bg-gray-300",
}) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={isOn}
            onClick={handleToggle}
            disabled={isLoading}
            className={`relative w-14 h-8 rounded-full transition-colors focus:outline-none ${
                isOn ? offColor : onColor
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            <span
                className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                    isOn ? "translate-x-0" : "translate-x-6"
                } ${isLoading ? "animate-spin border-2 border-gray-400 border-t-transparent" : ""}`}
            />
        </button>
    );
};
