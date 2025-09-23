import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { sessionStorage } from "@/helpers/storage";
import { useAvatar } from "@/hooks/useAvatar";
import { useLoginValidation } from "@/hooks/useLoginValidation";
import { useToggle } from "@/hooks/useToggle";
import { LabelInput } from "@/landing/components/ui/LabelInput";
import { LabelPassword } from "@/landing/components/ui/LabelPassword";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const EMPTY_USER = { email: "", password: "" };

export const LoginForm = () => {
    const savedForm = sessionStorage.get("loginInputs");
    const [form, setForm] = useState(savedForm || EMPTY_USER);

    const [isVisible, toggleVisible] = useToggle();
    const { error, validateForm, clearError } = useLoginValidation();

    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);

    const { login, updatedProfile } = useAuth();
    const { selectedAvatar } = useAvatar();
    const { setUser } = useContext(AuthContext);

    const handleInputForm = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newForm = { ...prev, [name]: value };
            sessionStorage.save("loginInputs", newForm);
            return newForm;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationError = validateForm(form, lang);
        if (validationError) return;

        const loggedUser = await login(form);

        if (selectedAvatar) {
            const updateUser = await updatedProfile(loggedUser, { avatar: selectedAvatar });
            setUser(updateUser);
        }

        sessionStorage.remove("loginInputs");
        setForm(EMPTY_USER);

        showModal({
            message: languages[lang].modal.loginMessage,
            onConfirm: hideModal,
        });
    };

    return (
        <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
            <h2 className="font-bold font-family-pirate text-subtitle text-primary">LOGIN</h2>
            <div className="flex flex-col gap-2 w-65 border border-linePrimary p-8 rounded shadow-default bg-gradient-primary">
                <LabelInput
                    label="Email:"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder={languages[lang].login.registerEmailMessage}
                    value={form.email}
                    onChange={handleInputForm}
                />

                <LabelPassword
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
