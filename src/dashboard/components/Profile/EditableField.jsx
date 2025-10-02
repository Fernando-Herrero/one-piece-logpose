import cross from "@/assets/icons/cross-button-icon.svg";
import notVerified from "@/assets/icons/not-verified-icon.svg";
import verified from "@/assets/icons/verified-icon.svg";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import classNames from "classnames";
import { useContext, useEffect, useRef } from "react";

export const EditableField = ({
    user,
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
    changeCoverImg,
}) => {
    const { lang } = useContext(LanguagesContext);
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

    const isCoverImageHidden = () => fieldName === "coverImage" && !changeCoverImg;

    const shouldShowValue = () => value && !isCoverImageHidden();

    const getDisplayValue = () => {
        if (fieldName === "coverImage" && changeCoverImg) {
            return <span className="italic">{languages[lang].profile.changeCoverImg}</span>;
        }
        return value;
    };

    const getEmptyText = () => {
        if (fieldName === "coverImage") {
            return !value && changeCoverImg ? languages[lang].profile.changeCoverImg : "";
        }
        return emptyText;
    };

    const getValueStyles = () =>
        classNames(
            !readOnly && "cursor-pointer",
            fieldName === "displayName" ? "text-primary font-semibold" : "text-xs text-gradient",
            (fieldName === "bio" || fieldName === "coverImage") && "mt-2"
        );

    const getEmptyStyles = () => classNames("text-xs text-gradient italic", !readOnly && "cursor-pointer");

    if (isCurrentlyEditing && !readOnly) {
        return (
            <p>
                <span className="inline-flex gap-1 items-center" ref={ref}>
                    <input
                        type={type}
                        value={field}
                        onChange={(event) => setField(event.target.value)}
                        onKeyDown={handleKeyDown}
                        className="px-1 py-0.5 rounded-xl text-xs no-focus"
                        placeholder={placeholder}
                        autoFocus
                    />
                    <button
                        className="bg-orange-100 p-1 rounded-xl border border-gray-400 cursor-pointer transition-transform hover:scale-105"
                        onClick={handleSave}
                        type="button"
                    >
                        <span className="text-primary">Save</span>
                    </button>
                    <button onClick={cancelEditing} className="cursor-pointer transition hover:scale-110">
                        <img className="w-3" src={cross} alt="Cross icon" />
                    </button>
                </span>
            </p>
        );
    }

    const hasValue = shouldShowValue();
    const handleClick = (clickValue) => (!readOnly ? () => startEditing(fieldName, clickValue) : undefined);

    return (
        <div className="flex items-center gap-1">
            {label && (
                <span>
                    <strong className="text-primary font-semibold">{label}</strong>
                </span>
            )}

            {hasValue ? (
                <>
                    <p className={getValueStyles()} onClick={handleClick(value)}>
                        {getDisplayValue()}
                    </p>

                    {fieldName === "displayName" && (
                        <img
                            className="w-4"
                            src={user.verified ? verified : notVerified}
                            alt={user.verified ? "Verified icon" : "not verified icon"}
                        />
                    )}
                </>
            ) : (
                <p className={getEmptyStyles()} onClick={handleClick("")}>
                    {getEmptyText()}
                </p>
            )}
        </div>
    );
};
