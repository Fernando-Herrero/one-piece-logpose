import cross from "@/assets/icons/cross-button-icon.svg";
import { useToggle } from "@/hooks/useToggle";
import { ToggleButton } from "@/landing/components/ui/ToggleButton";
import classNames from "classnames";

export const ProfileViewMore = ({
    name,
    lastName,
    address,
    phone,
    role,
    created,
    isEditing,
    editingField,
    field,
    setField,
    startEditing,
    handleSave,
    handleKeyDown,
    cancelEditing,
}) => {
    const [isOpen, toggleBox] = useToggle();

    const profileFields = [
        {
            label: "Name",
            value: name,
            fieldName: "name",
            placeholder: "Select your name",
            emptyClass: "text-xs text-gray-600 italic",
            readOnly: true,
        },
        {
            label: "Last Name",
            value: lastName,
            fieldName: "lastName",
            placeholder: "Select your last name",
            emptyClass: "text-xs text-gray-600 italic",
            readOnly: true,
        },
        {
            label: "Address",
            value: address,
            fieldName: "address",
            placeholder: "Select your address",
            emptyClass: "text-xs text-gray-600 italic",
        },
        {
            label: "Phone",
            value: phone,
            fieldName: "phoneNumber",
            placeholder: "Select your phone",
            emptyClass: "text-xs text-gray-600 italic",
        },
        {
            label: "Role",
            value: role,
            fieldName: "role",
            placeholder: "No role assigned",
            emptyClass: "text-xs text-gray-400 italic",
            readOnly: true,
        },
        {
            label: "Creado en",
            value: created ? new Date(created).toLocaleDateString() : null,
            fieldName: "createdAt",
            placeholder: "No date",
            emptyClass: "text-xs text-gray-400 italic",
            readOnly: true,
        },
    ];

    return (
        <section className="min-w-fit rounded-xl border border-white py-1 px-2 transition">
            <header className="flex items-center justify-between cursor-pointer" onClick={toggleBox}>
                <p className="text-primary font-semibold">Ver mas</p>
                <ToggleButton />
            </header>
            <div
                className={classNames("grid transition-[grid-template-rows]", {
                    "[grid-template-rows:1fr]": isOpen,
                    "[grid-template-rows:0fr]": !isOpen,
                })}
            >
                <div
                    className={classNames("min-h-0 overflow-hidden flex flex-col gap-1", {
                        "p-1": isOpen,
                    })}
                >
                    {profileFields.map(
                        ({ label, value, fieldName, placeholder, emptyClass, readOnly }, index) => (
                            <p key={`${value}-${index}`}>
                                <strong className="text-primary">{label}:</strong>{" "}
                                {isEditing && editingField === fieldName && !readOnly ? (
                                    <span className="inline-flex gap-1 items-center">
                                        <input
                                            type={fieldName === "phoneNumber" ? "tel" : "text"}
                                            value={field}
                                            onChange={(event) => setField(event.target.value)}
                                            onBlur={handleSave}
                                            onKeyDown={handleKeyDown}
                                            className="px-1 py-0.5 border border-gray-400 rounded-xl text-xs no-focus text-gradient"
                                            autoFocus
                                            placeholder={placeholder}
                                        />
                                        <button
                                            className="bg-orange-100 p-1 rounded-xl border border-gray-400 cursor-pointer transition-transform hover:scale-105"
                                            onClick={handleSave}
                                        >
                                            <p className="text-gradient">Save</p>
                                        </button>
                                        <button
                                            onClick={cancelEditing}
                                            className="cursor-pointer transition hover:scale-110"
                                        >
                                            <img className="w-3" src={cross} alt="Cross icon" />
                                        </button>
                                    </span>
                                ) : value ? (
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
                                        className={classNames(emptyClass, {
                                            "cursor-pointer hover:underline": !readOnly,
                                        })}
                                        onClick={!readOnly ? () => startEditing(fieldName, "") : undefined}
                                    >
                                        {placeholder}
                                    </span>
                                )}
                            </p>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
