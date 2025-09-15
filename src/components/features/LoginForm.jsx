import { Button } from "@/components/ui/Button";
import { LabelPassword } from "@/components/ui/LabelPassword";
import { AuthContext } from "@/context/authContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { languages } from "@/data/languages";
import { storage } from "@/helpers/storage";
import { useLoginValidation } from "@/hooks/useLoginValidation";
import { useToggle } from "@/hooks/useToggle";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LabelInput } from "../ui/LabelInput";

const EMPTY_USER = { id: "", username: "", password: "", experience: "" };

export const LoginForm = () => {
    const savedForm = storage.get("loginInputs");
    const [form, setForm] = useState(savedForm || EMPTY_USER);

    const [isVisible, toggleVisible] = useToggle();
    const { error, validateForm, clearError } = useLoginValidation();

    const { lang } = useContext(LanguagesContext);
    const { login } = useContext(AuthContext);
    const { showModal, hideModal } = useContext(ModalContext);

    const navigate = useNavigate();

    const handleInputForm = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newForm = { ...prev, [name]: value };
            storage.save("loginInputs", newForm);
            return newForm;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateForm(form, lang);
        if (validationError) return;

        login(form);
        navigate("/main");

        showModal({
            message:
                "✨ Déjame guiarte, nakama. Con esta aplicación podrás seguir el progreso de tu serie favorita de manera sencilla. Ten en cuenta que, al desbloquear un capítulo, se revelará información importante que puede contener spoilers. Así que avanza con cuidado y disfruta de la experiencia. ¡Espero que la disfrutes, nakama! ✨",
            onConfirm: hideModal,
            confirmText: "Entendido!",
        });
    };

    return (
        <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
            <h2 className="font-bold font-family-pirate text-subtitle">LOGIN</h2>
            <div className="flex flex-col gap-2 w-65 border border-linePrimary p-8 rounded shadow-default bg-gradient-primary">
                <label className="flex flex-col text-base font-bold">
                    <LabelInput
                        className="font-bold"
                        label="Username:"
                        type="text"
                        name="username"
                        autoComplete="off"
                        placeholder={languages[lang].login.username}
                        value={form.username}
                        onChange={handleInputForm}
                    />
                </label>

                <LabelPassword
                    className="text-base font-bold"
                    label={languages[lang].login.password}
                    isVisible={isVisible}
                    name="password"
                    autoComplete="off"
                    placeholder={languages[lang].login.passwordMessage}
                    value={form.password}
                    onChange={handleInputForm}
                    toggleVisible={toggleVisible}
                />
            </div>

            <p className="self-center flex gap-1">
                {languages[lang].login.notRegistered}
                <Link
                    className="underline text-secondary inline-block transition hover:-translate-y-0.5"
                    to="/register"
                >
                    {languages[lang].login.registered}
                </Link>
            </p>

            <Button type="submit" className="bg-accent hover:bg-accentHover">
                Login
            </Button>

            {error && <p className="self-center text-linePrimary">{error}</p>}
        </form>
    );
};
