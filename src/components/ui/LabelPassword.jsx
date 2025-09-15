import classNames from "classnames";
import { EyeButton } from "./EyeButton";

export const LabelPassword = ({
    label,
    isVisible,
    name,
    id,
    autoComplete,
    placeholder,
    value,
    toggleVisible,
    onChange,
    passwordValue = "",
    className = "",
}) => {
    const password = name === "password";
    const confirmPassword = name === "confirmPassword";

    const isValid =
        (password && value.length >= 6) || (confirmPassword && value.length > 0 && value === passwordValue);

    const showError =
        (password && value.length > 0 && value.length < 6) ||
        (confirmPassword && value.length > 0 && value !== passwordValue);

    const inputClasses = classNames("no-focus p-2 rounded transition-all duration-200 bg-white w-full", {
        "border-success-500 focus:ring-success-500": isValid,
        "border-error-500 focus:ring-error-500": showError,
    });
    return (
        <label className={`flex flex-col ${className}`}>
            {label}:
            <div className="flex items-center relative">
                <input
                    className={inputClasses}
                    type={isVisible ? "text" : "password"}
                    name={name}
                    id={id}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    minLength={6}
                />

                <EyeButton toggleVisible={toggleVisible} isVisible={isVisible} />

                {isValid && (password || confirmPassword) && (
                    <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-green-500 text-sm">
                        ✔
                    </span>
                )}
                {showError && (password || confirmPassword) && (
                    <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                        ✖
                    </span>
                )}
            </div>
        </label>
    );
};
