export const LabelInput = ({ label, type, name, value, placeholder, id, onChange, className = "" }) => {
    return (
        <label className={`flex flex-col ${className}`}>
            {label}
            <input
                className="no-focus p-1 rounded bg-white"
                type={type}
                name={name}
                value={value}
                id={id}
                onChange={onChange}
                autoComplete="off"
                placeholder={placeholder}
            />
        </label>
    );
};
