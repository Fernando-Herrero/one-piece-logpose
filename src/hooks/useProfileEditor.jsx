import { useToggle } from "@/hooks/useToggle";
import { useState } from "react";

export const useProfileEditor = (user, updatedProfileFunction, setChangeCoverImg) => {
    const [isEditing, toggleEditing] = useToggle();
    const [field, setField] = useState("");
    const [editingField, setEditingField] = useState(null);

    const startEditing = (fieldName, currentValue) => {
        setEditingField(fieldName);
        setField(currentValue);
        toggleEditing();
    };

    const handleSave = async () => {
        if (!editingField || !field.trim()) return;

        try {
            const updateField = { [editingField]: field.trim() };
            await updatedProfileFunction(user, updateField);

            if (editingField === "coverImage" && typeof setChangeCoverImg === "function") {
                setChangeCoverImg(false);
            }

            resetEditing();
        } catch (error) {
            console.error("Error al guardar:", error);
        }
    };

    const resetEditing = () => {
        setEditingField(null);
        setField("");
        if (isEditing) toggleEditing();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSave();
        } else if (event.key === "Escape") {
            setEditingField(null);
            setField("");
            toggleEditing();
        }
    };

    return {
        isEditing,
        editingField,
        field,
        setField,
        startEditing,
        handleSave,
        handleKeyDown,
        cancelEditing: resetEditing,
    };
};
