import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext, useState } from "react";

export const PostForm = ({
    onSubmit,
    onCancel,
    error,
    onErrorChange,
    submitButtonText,
    placeholderText,
    initialData = { text: "", image: "" },
}) => {
    const { isVerified } = useContext(AuthContext);
    const [formData, setFormData] = useState(initialData);
    const { lang } = useContext(LanguagesContext);

    const handleInputs = ({ target: { value, name } }) => {
        if (error) onErrorChange(null);
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formData.text.trim()) return onErrorChange(languages[lang].posts.textError);

        const processData = {
            text: formData.text,
            images: formData.image?.trim() ? [formData.image.trim()] : [],
        };

        await onSubmit(processData);
        setFormData({ text: "", image: "" });
    };

    const handleCancel = () => {
        setFormData({ text: "", image: "" });
        onCancel();
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden">
            <form
                className="bg-gradient-card flex flex-col items-center justify-between gap-2 p-2 min-w-[80vw] sm:min-w-md"
                onSubmit={handleSubmit}
            >
                <label className="w-full">
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleInputs}
                        maxLength={isVerified ? 600 : 280}
                        placeholder={placeholderText}
                        className="bg-sunny p-2 min-h-80 w-full rounded-xl no-focus text-primary"
                    />
                </label>

                <label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleInputs}
                        className="bg-sunny text-muted p-2 rounded-xl no-focus"
                    />
                    {formData.image && (
                        <img
                            src={formData.image}
                            alt="preview"
                            className="w-40 h-40 object-cover rounded-xl mt-2 border border-gray-300"
                            onError={(e) => (e.target.style.display = "none")}
                        />
                    )}
                </label>

                {error && (
                    <p className="text-red-700">
                        {typeof error === "string" ? error : error.message || "Unexpected error"}
                    </p>
                )}

                <div className="flex items-center gap-1">
                    <Button type="button" variant="danger" onClick={handleCancel}>
                        {languages[lang].modal.cancelText}
                    </Button>
                    <Button type="submit" variant="submit">
                        {submitButtonText}
                    </Button>
                </div>
            </form>
        </div>
    );
};
