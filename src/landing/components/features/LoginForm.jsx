import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { sessionStorage } from "@/helpers/storage";
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

    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);

    const { login } = useAuth();
    const { error, setError, validateLoginForm } = useLoginValidation();

    const handleInputForm = ({ target: { name, value } }) => {
        setError(null);
        setForm((prev) => {
            const newForm = { ...prev, [name]: value };
            sessionStorage.save("loginInputs", newForm);
            return newForm;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const isValid = validateLoginForm(form, lang);
            if (!isValid) return;

            await login(form);

            sessionStorage.remove("loginInputs");
            setForm(EMPTY_USER);

            showModal({
                message: languages[lang].modal.loginMessage,
                onConfirm: hideModal,
            });
        } catch (error) {
            let translateError = languages[lang].errorMessage.incorrectLogin;

            if (error.message === "Invalid credentials") {
                setError(translateError);
            } else {
                setError(error.message);
            }
        }
    };

    return (
        <div className="bg-white rounded-xl">
            <form
                className="flex flex-col items-center gap-2 p-2 rounded-xl w-[80vw] max-w-64 shadow-white bg-gradient-card sm:p-4"
                onSubmit={handleSubmit}
            >
                <h2 className="font-bold font-family-pirate text-subtitle text-primary">LOGIN</h2>
                <div className="w-full max-w-52">
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

                <p className="flex flex-wrap flex-col items-center gap-1">
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
        </div>
    );
};
