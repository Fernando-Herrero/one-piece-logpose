import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguagesContext } from "../context/LanguagesContext";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import { languages } from "../data/languages";
import { storage } from "../helpers/storage";
import { useLoginValidation } from "../hooks/useLoginValidation";
import { useToggle } from "../hooks/useToggle";
import { Button } from "./Button";
import { LabelPassword } from "./LabelPassword";

const emptyUser = { id: "", username: "", password: "", experience: "" };

export const LoginForm = () => {
    const savedForm = storage.get("loginInputs");
    const [form, setForm] = useState(savedForm || emptyUser);

    const [isVisible, toggleVisible] = useToggle();
    const { error, validateForm, clearError } = useLoginValidation();

    const { lang } = useContext(LanguagesContext);
    const { login } = useContext(UserContext);
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
            <div className="flex flex-col gap-2 w-52 border border-linePrimary p-2 rounded shadow-default bg-secondary">
                <label className="flex flex-col text-base ">
                    Username:
                    <input
                        className="no-focus rounded p-1 bg-white"
                        type="text"
                        name="username"
                        autoComplete="off"
                        placeholder={languages[lang].login.username}
                        value={form.username}
                        onChange={handleInputForm}
                    />
                </label>

                <LabelPassword
                    className="text-base"
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

            <p className="self-center">
                {languages[lang].login.notRegistered}
                <Link className="underline text-secondary" to="/login/register">
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
