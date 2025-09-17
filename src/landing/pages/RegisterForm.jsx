import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { sessionStorage } from "@/helpers/storage";
import { useRegisterValidation } from "@/hooks/useRegisterValidation";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "@/landing/components/ui/Button";
import { LabelInput } from "@/landing/components/ui/LabelInput";
import { LabelPassword } from "@/landing/components/ui/LabelPassword";
import { INITIAL_REGISTER_FORM } from "@/landing/data/INITIAL_REGISTER_FORM";
import { passwordFields } from "@/landing/data/passwordFields";
import { registerFields } from "@/landing/data/registerFields";
import { useContext, useState } from "react";

export const RegisterForm = () => {
    const { register } = useAuth();
    const savedRegisterInputs = sessionStorage.get("registerInputs");
    const [form, setForm] = useState(savedRegisterInputs || INITIAL_REGISTER_FORM);
    const { language } = form;
    const [isChecked, setIsChecked] = useState(false);

    const [isVisible, toggleVisible] = useToggle();
    const [isConfirmVisible, toggleConfirmVisible] = useToggle();

    const { error, validateRegisterForm, clearError } = useRegisterValidation();

    const { lang } = useContext(LanguagesContext);

    const handleRegisterInputs = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newRegisterForm = { ...prev, [name]: value };
            sessionStorage.save("registerInputs", newRegisterForm);
            return newRegisterForm;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateRegisterForm(form, lang);
        if (validationError) return;

        register(form);

        sessionStorage.remove("registerInputs");
        setForm(INITIAL_REGISTER_FORM);
        setIsChecked(false);
    };

    const fields = registerFields(lang, form);
    const passwordFieldsData = passwordFields(lang, form, isVisible, isConfirmVisible);

    return (
        <form
            className="flex flex-col gap-2 p-4 bg-gradient-primary rounded shadow-default max-w-md"
            onSubmit={handleSubmit}
        >
            <h3 className="self-center text-2xl font-family-pirate">{languages[lang].login.registerTitle}</h3>

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

            {passwordFieldsData.map(({ id, name, label, placeholder, value, isVisible, toggleType }) => (
                <LabelPassword
                    key={id}
                    label={label}
                    isVisible={isVisible}
                    name={name}
                    id={id}
                    autoComplete="off"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleRegisterInputs}
                    toggleVisible={toggleType === "password" ? toggleVisible : toggleConfirmVisible}
                    passwordValue={name === "confirmPassword" ? form.password : null}
                />
            ))}

            <label className="flex flex-col">
                🌍 <span className="font-bold text-lg">{languages[lang].login.registerLang}:</span>
                <select
                    className="no-focus p-2 rounded bg-white"
                    name="language"
                    value={language}
                    onChange={handleRegisterInputs}
                >
                    <option value="">--{languages[lang].login.registerSelectLang}--</option>
                    <option value="es">Español 🇪🇸</option>
                    <option value="en">English 🇬🇧</option>
                </select>
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

                    <p className="text-xs">Acepto los términos y condiciones y la política de privacidad.</p>
                </div>
                <span className="text-xs">
                    * Al registrarte aceptas nuestros Términos y Condiciones y reconoces haber leído nuestra
                    Política de Privacidad. Nos comprometemos a proteger tus datos personales y a utilizarlos
                    únicamente para proporcionarte el servicio. No compartiremos tu información con terceros
                    sin tu consentimiento. Puedes solicitar la eliminación de tu cuenta en cualquier momento.
                </span>
            </label>

            {error && <p className="text-linePrimary self-center">{error}</p>}

            <Button type="submit" className="bg-accent hover:bg-accentSecondary">
                {languages[lang].login.registerSubmit}
            </Button>
        </form>
    );
};
