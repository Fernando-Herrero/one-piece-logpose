import classNames from "classnames";

export const LabelInput = ({ label, type, name, value, placeholder, id, onChange, className = "" }) => {
    const username = name === "username";

    const isValid = username && value.length >= 3;

    const showError = username && value.length > 0 && value.length < 3;

    const inputClasses = classNames("no-focus p-2 rounded transition-all duration-200 bg-white w-full", {
        "border-success-500 focus:ring-success-500": isValid,
        "border-error-500 focus:ring-error-500": showError,
    });

    return (
        <label className={`relative flex flex-col ${className}`}>
            {label}
            <input
                className={inputClasses}
                type={type}
                name={name}
                value={value}
                id={id}
                onChange={onChange}
                autoComplete="off"
                placeholder={placeholder}
                {...(username ? { minLength: 3 } : {})}
            />

            {isValid && username && (
                <span className="absolute right-2 top-10 transform -translate-y-1/2 text-green-500 text-sm">
                    ✔
                </span>
            )}
            {showError && username && (
                <span className="absolute right-2 top-10 transform -translate-y-1/2 text-red-500 text-sm">
                    ✖
                </span>
            )}
        </label>
    );
};
