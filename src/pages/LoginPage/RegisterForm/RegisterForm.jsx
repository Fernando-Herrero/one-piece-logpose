import { useContext, useState } from "react";
import { Button } from "../../../components/ui/Button";
import { LabelInput } from "../../../components/ui/LabelInput";
import { LabelPassword } from "../../../components/ui/LabelPassword";
import { LanguagesContext } from "../../../context/LanguagesContext";
import { useAuth } from "../../../core/auth/useAuth";
import { INITIAL_REGISTER_FORM } from "../../../data/INITIAL_REGISTER_FORM";
import { languages } from "../../../data/languages";
import { passwordFields } from "../../../data/passwordFields";
import { registerFields } from "../../../data/registerFields";
import { storage } from "../../../helpers/storage";
import { useRegisterValidation } from "../../../hooks/useRegisterValidation";
import { useToggle } from "../../../hooks/useToggle";

export const RegisterForm = () => {
    const { register } = useAuth();
    const savedRegisterInputs = storage.get("registerInputs");
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
            storage.save("registerInputs", newRegisterForm);
            return newRegisterForm;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateRegisterForm(form, lang);
        if (validationError) return;

        register(form);

        storage.remove("registerInputs");
        setForm(INITIAL_REGISTER_FORM);
        setIsChecked(false);
    };

    const fields = registerFields(lang, form);
    const passwordFieldsData = passwordFields(lang, form, isVisible, isConfirmVisible);

    return (
        <form className="flex flex-col gap-2 p-4 bg-primary rounded shadow-white" onSubmit={handleSubmit}>
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
