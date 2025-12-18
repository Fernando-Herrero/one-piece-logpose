import { Button } from "@/components/Button";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { session } from "@/helpers/storage";
import { useLoginValidation } from "@/hooks/useLoginValidation";
import { useToggle } from "@/hooks/useToggle";
import { LabelInput } from "@/landing/components/ui/LabelInput";
import { LabelPassword } from "@/landing/components/ui/LabelPassword";
import { LoadingDots } from "@/landing/components/ui/LoadingDots";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const EMPTY_USER = { email: "", password: "" };

export const LoginForm = () => {
    const savedForm = session.get("loginInputs");
    const [form, setForm] = useState(savedForm || EMPTY_USER);
    const [isVisible, toggleVisible] = useToggle();
    const { t } = useTranslate();
    const { showModal, hideModal } = useContext(ModalContext);
    const { login } = useAuth();
    const { error, setError, validateLoginForm } = useLoginValidation();
    const [isLogin, setIsLogin] = useState(false);

    const handleInputForm = ({ target: { name, value } }) => {
        setError(null);
        setForm((prev) => {
            const newForm = { ...prev, [name]: value };
            session.save("loginInputs", newForm);
            return newForm;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLogin(true);
        try {
            const isValid = validateLoginForm(form, t);
            if (!isValid) return;

            await login(form);

            session.remove("loginInputs");
            setForm(EMPTY_USER);

            showModal({
                message: t("modal.login_message"),
                onConfirm: hideModal,
            });
        } catch (error) {
            let translateError = t("error_message.incorrect_login");

            if (error.message === "Invalid credentials") {
                setError(translateError);
            } else {
                setError(error.message);
            }
        } finally {
            setIsLogin(false);
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
                        placeholder={t("login.register_email_placeholder")}
                        value={form.email}
                        onChange={handleInputForm}
                    />

                    <LabelPassword
                        label={t("login.password")}
                        isVisible={isVisible}
                        name="password"
                        autoComplete="off"
                        placeholder={t("login.password_message")}
                        value={form.password}
                        onChange={handleInputForm}
                        toggleVisible={toggleVisible}
                    />
                </div>

                <p className="flex flex-wrap flex-col items-center gap-1">
                    {t("login.not_registered")}
                    <Link
                        className="underline text-secondary inline-block transition hover:-translate-y-0.5"
                        to="/register"
                    >
                        {t("login.register")}
                    </Link>
                </p>

                <Button type="submit" className="bg-accent hover:bg-accentHover" disabled={isLogin}>
                    {isLogin ? (
                        <>
                            Login <LoadingDots />
                        </>
                    ) : (
                        "Login"
                    )}
                </Button>

                {error && <p className="self-center text-linePrimary">{error}</p>}
            </form>
        </div>
    );
};
