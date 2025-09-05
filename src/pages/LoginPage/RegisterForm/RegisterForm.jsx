import { useContext, useState } from "react";
import EyeSlash from "../../../assets/icons/eye-slash-solid-full.svg";
import Eye from "../../../assets/icons/eye-solid-full.svg";
import { Button } from "../../../components/button";
import { LabelInput } from "../../../components/LabelInput";
import { LanguagesContext } from "../../../context/LanguagesContext";
import { languages } from "../../../data/languages";
import { registerFields } from "../../../data/registerFields";
import { registerForm } from "../../../data/registerForm";
import { storage } from "../../../helpers/storage";
import { useRegisterValidation } from "../../../hooks/useRegisterValidation";
import { useToggle } from "../../../hooks/useToggle";

export const RegisterForm = () => {
    const savedForm = storage.get("registerInputs");
    const [form, setForm] = useState(savedForm || registerForm);
    const { name, surname, username, email, language, password, confirmPassword } = form;
    const [isChecked, setIsChecked] = useState(false);

    const [isVisible, toggleVisible] = useToggle();
    const [isConfirmVisible, toggleConfirmVisible] = useToggle();
    const { error, validateRegisterForm, clearError } = useRegisterValidation();

    const { lang } = useContext(LanguagesContext);

    const handleRegisterInputs = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newForm = { ...prev, [name]: value };
            storage.save("registerInputs", newForm);
            return newForm;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateRegisterForm(form, lang);
        if (validationError) return;

        const completeUser = {
            id: crypto.randomUUID(),
            ...form,
        };

        const userWithSaga = {
            nakamaData: completeUser,
            sagaProgress: { saga: 0, chapter: 0 },
        };

        storage.save(`user_${form.username}`, userWithSaga);
        storage.remove("registerInputs");

        setForm(registerForm);
        setIsChecked(false);

        closeModal();

        console.log("ID generada:", crypto.randomUUID());
        console.log("Usuario completo", userWithSaga);
    };

    const fields = registerFields(lang, form);

    return (
        <form className="flex flex-col gap-2 p-4 bg-primary rounded shadow-white" onSubmit={handleSubmit}>
            <h3 className="self-center text-2xl">{languages[lang].login.registerTitle}</h3>

            {fields.map(({ label, type, name, value, placeholder, id }) => (
                <LabelInput
                    key={id}
                    label={label}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    id={id}
                    onChange={handleRegisterInputs}
                />
            ))}

            <label className="flex flex-col">
                🌍 {languages[lang].login.registerLang}:
                <select
                    className="no-focus p-1 rounded bg-white"
                    name="language"
                    value={language}
                    onChange={handleRegisterInputs}
                >
                    <option value="">--{languages[lang].login.registerSelectLang}--</option>
                    <option value="es">Español 🇪🇸</option>
                    <option value="en">English 🇬🇧</option>
                </select>
            </label>

            <label className="flex flex-col">
                🔒 {languages[lang].login.registerPassword}:
                <div className="flex items-center relative">
                    <input
                        className="w-full p-1 rounded no-focus bg-white"
                        type={isVisible ? "text" : "password"}
                        name="password"
                        id="password"
                        autoComplete="off"
                        placeholder={languages[lang].login.password}
                        value={password}
                        onChange={handleRegisterInputs}
                    />
                    <button
                        className="absolute right-1 flex items-center w-4 bg-transparent cursor-pointer"
                        type="button"
                        onClick={toggleVisible}
                    >
                        <img
                            src={isVisible ? EyeSlash : Eye}
                            alt={isVisible ? "Hide password" : "Show password"}
                        />
                    </button>
                </div>
            </label>

            <label className="flex flex-col">
                🔒 {languages[lang].login.registerPassword}:
                <div className="flex items-center relative">
                    <input
                        className="w-full p-1 rounded no-focus bg-white"
                        type={isConfirmVisible ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="off"
                        placeholder={languages[lang].login.passwordConfirm}
                        value={confirmPassword}
                        onChange={handleRegisterInputs}
                    />
                    <button
                        className="absolute right-1 flex items-center w-4 bg-transparent cursor-pointer"
                        type="button"
                        onClick={toggleConfirmVisible}
                    >
                        <img
                            src={isConfirmVisible ? EyeSlash : Eye}
                            alt={isConfirmVisible ? "Hide password" : "Show password"}
                        />
                    </button>
                </div>
            </label>

            <label className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                    <input
                        required
                        className="no-focus"
                        type="checkbox"
                        name="checked"
                        id="checked"
                        checked={isChecked}
                        onChange={(event) => setIsChecked(event.target.checked)}
                    />

                    <p>Acepto los términos y condiciones y la política de privacidad.</p>
                </div>
                <span className="text-xs">
                    * Al registrarte aceptas nuestros Términos y Condiciones y reconoces haber leído nuestra
                    Política de Privacidad. Nos comprometemos a proteger tus datos personales y a utilizarlos
                    únicamente para proporcionarte el servicio. No compartiremos tu información con terceros
                    sin tu consentimiento. Puedes solicitar la eliminación de tu cuenta en cualquier momento.
                </span>
            </label>

            {error && <p className="error-message">{error}</p>}

            <Button type="submit" className="bg-accent hover:bg-accentSecondary">
                {languages[lang].login.registerSubmit}
            </Button>
        </form>
    );
};
