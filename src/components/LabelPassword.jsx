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
    className = "",
}) => {
    return (
        <label className={`flex flex-col ${className}`}>
            {label}
            <div className="flex items-center relative">
                <input
                    className="w-full p-1 rounded no-focus bg-white"
                    type={isVisible ? "text" : "password"}
                    name={name}
                    id={id}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />

                <EyeButton toggleVisible={toggleVisible} isVisible={isVisible} />
            </div>
        </label>
    );
};
