import classNames from "classnames";

export const InputCard = ({ label, field, value, onChange, placeholder, error, isValid, submitted }) => {
    const showError = !!error && value.length > 0 && submitted;
    const showValid = value && isValid(field, value) && !showError;

    return (
        <label className="flex flex-col text-sm flex-1">
            <span className="mb-1 font-semibold">{label}</span>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={classNames("rounded px-3 py-2 w-full transition-all bg-white no-focus", {
                        "border-green-500 focus:ring-green-500 border-1": showValid && !showError,
                        "border-red-500 focus:ring-red-500 border-1": showError,
                    })}
                />
                {showValid && !showError && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-xs">
                        ✔
                    </span>
                )}
                {showError && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-xs">✖</span>
                )}
            </div>
            {showError && <span className="text-red-500 text-xs mt-1">{error}</span>}
        </label>
    );
};
