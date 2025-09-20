import cross from "@/assets/icons/cross-button-icon.svg";
import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/core/auth/useAuth";
import { ProfileViewMore } from "@/dashboard/components/Profile/ProfileViewMore";
import { useToggle } from "@/hooks/useToggle";
import { useContext, useState } from "react";

export const ProfileArticle = () => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const [isEditing, toggleEditing] = useToggle();
    const [field, setField] = useState("");
    const [editingField, setEditingField] = useState(null);

    if (!user) return <p>No hay usuario logueado</p>;

    const name = user.name ?? "";
    const lastName = user.lastName ?? "";
    const email = user.email ?? "";
    const username = `@${user.username}` ?? "";
    const displayName = user.displayName ?? "";
    const address = user.address ?? "";
    const phone = user.phoneNumber ?? "";
    const role = user.role ?? "";
    const followers = user.followers ?? "";
    const following = user.following ?? "";
    const created = user.createdAt ?? "";

    const startEditing = (fieldName, currentValue) => {
        setEditingField(fieldName);
        setField(currentValue);
        toggleEditing();
    };

    const handleSave = async () => {
        if (editingField && field.trim()) {
            try {
                const updateField = { [editingField]: field.trim() };
                await updatedProfile(user, updateField);
                setEditingField(null);
                setField("");
                toggleEditing();
            } catch (error) {
                console.error("Error al guardar", error);
            }
        }
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

    const cancelEditing = () => {
        setEditingField(null);
        setField("");
        toggleEditing();
    };

    return (
        <article className="text-sm p-2 card gap-1">
            <h2 className="text-primary text-xl">Perfil de Usuario</h2>
            <div className="flex flex-col gap-2 text-xs">
                <p>
                    <strong className="text-primary font-semibold">Name:</strong>{" "}
                    {isEditing && editingField === "displayName" ? (
                        <span className="inline-flex gap-1 items-center">
                            <input
                                type="text"
                                value={field}
                                onChange={(event) => setField(event.target.value)}
                                onBlur={cancelEditing}
                                onKeyDown={handleKeyDown}
                                className="px-1 py-0.5 border border-gray-400 rounded-xl text-xs no-focus text-gradient"
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
                    ) : displayName ? (
                        <span
                            className="text-gradient cursor-pointer hover:underline"
                            onClick={() => startEditing("displayName", displayName)}
                        >
                            {displayName}
                        </span>
                    ) : (
                        <span
                            className="text-xs text-gray-600 italic cursor-pointer hover:underline"
                            onClick={() => startEditing("displayName", "")}
                        >
                            Select your display name
                        </span>
                    )}
                </p>

                <p>
                    <strong className="text-primary font-semibold">Username:</strong>{" "}
                    <span className="text-gradient">{username}</span>
                </p>

                <p>
                    <strong className="text-primary font-semibold">Email:</strong>{" "}
                    {email ? (
                        <span className="text-gradient">{email}</span>
                    ) : (
                        <span className="text-xs text-gray-400 italic">No email provided</span>
                    )}
                </p>

                <ProfileViewMore
                    name={name}
                    lastName={lastName}
                    address={address}
                    phone={phone}
                    role={role}
                    created={created}
                    isEditing={isEditing}
                    editingField={editingField}
                    field={field}
                    setField={setField}
                    startEditing={startEditing}
                    handleSave={handleSave}
                    handleKeyDown={handleKeyDown}
                    cancelEditing={cancelEditing}
                />

                <p>
                    <strong className="text-primary font-semibold">Followers:</strong>{" "}
                    {followers.length > 0 ? (
                        <span className="text-gradient">{followers.join(", ")}</span>
                    ) : (
                        <span className="text-xs text-gray-600 italic">No followers yet</span>
                    )}
                </p>

                <p>
                    <strong className="text-primary font-semibold">Following:</strong>{" "}
                    {following.length > 0 ? (
                        <span className="text-gradient">{following.join(", ")}</span>
                    ) : (
                        <span className="text-xs text-gray-600 italic">Not following anyone</span>
                    )}
                </p>
            </div>
        </article>
    );
};
