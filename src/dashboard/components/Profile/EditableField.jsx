import cross from "@/assets/icons/cross-button-icon.svg";
import classNames from "classnames";
import { useEffect, useRef } from "react";

export const EditableField = ({
    label,
    value,
    fieldName,
    placeholder = "Agregar valor",
    emptyText = "Sin información",
    type = "text",
    readOnly = false,
    isEditing,
    editingField,
    field,
    setField,
    startEditing,
    handleSave,
    handleKeyDown,
    cancelEditing,
}) => {
    const isCurrentlyEditing = isEditing && editingField === fieldName;

    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isCurrentlyEditing && ref.current && !ref.current.contains(event.target)) {
                cancelEditing();
            }
        };

        if (isCurrentlyEditing) {
            window.addEventListener("mousedown", handleClickOutside);
        }

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, [isCurrentlyEditing, cancelEditing]);

    if (isCurrentlyEditing && !readOnly) {
        return (
            <p>
                <strong className="text-primary font-semibold">{label}:</strong>{" "}
                <span className="inline-flex gap-1 items-center" ref={ref}>
                    <input
                        type={type}
                        value={field}
                        onChange={(event) => setField(event.target.value)}
                        onKeyDown={handleKeyDown}
                        className="px-1 py-0.5 border border-gray-400 rounded-xl text-xs text-gradient no-focus"
                        placeholder={placeholder}
                        autoFocus
                    />
                    <button
                        className="bg-orange-100 p-1 rounded-xl border border-gray-400 cursor-pointer transition-transform hover:scale-105"
                        onClick={handleSave}
                        type="button"
                    >
                        <span className="text-gradient">Save</span>
                    </button>
                    <button onClick={cancelEditing} className="cursor-pointer transition hover:scale-110">
                        <img className="w-3" src={cross} alt="Cross icon" />
                    </button>
                </span>
            </p>
        );
    }

    return (
        <p>
            <strong className="text-primary font-semibold">{label}:</strong>{" "}
            {value ? (
                <span
                    className={classNames("text-gradient", {
                        "cursor-pointer hover:underline": !readOnly,
                    })}
                    onClick={!readOnly ? () => startEditing(fieldName, value) : undefined}
                >
                    {value}
                </span>
            ) : (
                <span
                    className={classNames("text-xs text-gray-600 italic", {
                        "cursor-pointer hover:underline": !readOnly,
                    })}
                    onClick={!readOnly ? () => startEditing(fieldName, "") : undefined}
                >
                    {emptyText}
                </span>
            )}
        </p>
    );
};
