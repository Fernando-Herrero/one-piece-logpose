import cross from "@/assets/icons/cross-button-icon.svg";
import notVerified from "@/assets/icons/not-verified-icon.svg";
import verified from "@/assets/icons/verified-icon.svg";
import { useTranslate } from "@/translations/useTranslate";
import classNames from "classnames";
import { memo, useEffect, useRef } from "react";

export const EditableField = memo(
    ({
        user,
        label,
        value,
        fieldName,
        placeholder,
        emptyText,
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
        const { t } = useTranslate();
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

        const fieldTextStyles = {
            displayName: "text-primary font-semibold sm:text-xl",
            bio: "mt-2 px-2 font-family-decorative text-gradient text-xl",
            coverImage: "mt-2",
            default: "text-xs text-gradient sm:text-base",
        };

        const isCoverImageHidden = () => fieldName === "coverImage" && !changeCoverImg;

        const shouldShowValue = () => value && !isCoverImageHidden();

        const getDisplayValue = () => {
            if (fieldName === "coverImage" && changeCoverImg) {
                return <span className="italic text-muted">{t("profile.change_cover_img")}</span>;
            }
            if (fieldName === "coverImage" && value) {
                return <span className="italic text-muted">{t("profile.image_set")}</span>;
            }
            return value;
        };

        const getEmptyText = () => {
            if (fieldName === "coverImage") {
                return !value && changeCoverImg ? t("profile.change_cover_img") : "";
            }
            return emptyText || t("profile.no_info");
        };

        const getValueStyles = () =>
            classNames(!readOnly && "cursor-pointer", fieldTextStyles[fieldName] || fieldTextStyles.default);

        const getEmptyStyles = () =>
            classNames("text-xs text-muted italic sm:text-sm", !readOnly && "cursor-pointer");

        if (isCurrentlyEditing && !readOnly) {
            return (
                <p>
                    <span className="inline-flex gap-1 items-center" ref={ref}>
                        <input
                            type={type}
                            value={field}
                            onChange={(event) => setField(event.target.value)}
                            onKeyDown={handleKeyDown}
                            className="px-1 py-0.5 rounded-xl text-xs no-focus text-muted sm:text-sm"
                            placeholder={placeholder || t("profile.empty_placeholder")}
                            autoFocus
                        />
                        <button
                            className="bg-sunny p-1 rounded-xl border border-gray-400 cursor-pointer transition-transform hover:scale-105"
                            onClick={handleSave}
                            type="button"
                        >
                            <span className="text-primary">{t("profile.save_button")}</span>
                        </button>
                        <button onClick={cancelEditing} className="cursor-pointer transition hover:scale-110">
                            <img className="w-3" src={cross} alt="Cross icon" />
                        </button>
                    </span>
                </p>
            );
        }

        const hasValue = shouldShowValue();
        const handleClick = (clickValue) =>
            !readOnly ? () => startEditing(fieldName, clickValue) : undefined;

        return (
            <div className="flex items-center gap-1">
                {label && (
                    <span>
                        <strong className="text-primary font-semibold sm:text-base">{label}</strong>
                    </span>
                )}

                {hasValue ? (
                    <>
                        <p className={getValueStyles()} onClick={handleClick(value)}>
                            {getDisplayValue()}
                        </p>

                        {fieldName === "displayName" && (
                            <img
                                className="w-4 md:w-5"
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
    }
);
