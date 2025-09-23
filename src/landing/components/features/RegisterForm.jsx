import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { sessionStorage } from "@/helpers/storage";
import { useRegisterValidation } from "@/hooks/useRegisterValidation";
import { useToggle } from "@/hooks/useToggle";
import { LabelInput } from "@/landing/components/ui/LabelInput";
import { LabelPassword } from "@/landing/components/ui/LabelPassword";
import { INITIAL_REGISTER_FORM } from "@/landing/data/INITIAL_REGISTER_FORM";
import { passwordFields } from "@/landing/data/passwordFields";
import { registerFields } from "@/landing/data/registerFields";
import { useContext, useState } from "react";

export const RegisterForm = () => {
    const { register } = useAuth();
    const savedRegisterInputs = sessionStorage.get("registerInputs");
    const [form, setForm] = useState({ ...INITIAL_REGISTER_FORM, ...(savedRegisterInputs || {}) });
    const [isChecked, setIsChecked] = useState(false);

    const [isVisible, toggleVisible] = useToggle();
    const [isConfirmVisible, toggleConfirmVisible] = useToggle();

    const { error, validateRegisterForm, clearError } = useRegisterValidation();

    const { lang } = useContext(LanguagesContext);

    const handleRegisterInputs = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newRegisterForm = { ...prev, [name]: value || "" };
            sessionStorage.save("registerInputs", newRegisterForm);
            return newRegisterForm;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateRegisterForm(form, lang);
        if (validationError) return;

        const { confirmPassword, ...dataToSend } = form;

        register(dataToSend);

        sessionStorage.remove("registerInputs");
        setForm(INITIAL_REGISTER_FORM);
        setIsChecked(false);
    };

    const fields = registerFields(lang, form);
    const passwordFieldsData = passwordFields(lang, form, isVisible, isConfirmVisible);

    return (
        <section className="bg-white rounded-xl">
            <form
                className="flex flex-col gap-2 p-4 bg-gradient-primary rounded-xl shadow-default max-w-md"
                onSubmit={handleSubmit}
            >
                <h3 className="self-center text-2xl font-family-pirate text-primary">
                    {languages[lang].login.registerTitle}
                </h3>

                {fields.map(({ label, type, name, value, placeholder, id }) => (
                    <LabelInput
                        key={id}
                        label={label}
                        type={type}
                        name={name}
                        value={value || ""}
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
                        value={value || ""}
                        onChange={handleRegisterInputs}
                        toggleVisible={toggleType === "password" ? toggleVisible : toggleConfirmVisible}
                        passwordValue={name === "confirmPassword" ? form.password : ""}
                    />
                ))}

                <label className="flex flex-col">
                    <span className="font-bold text-lg text-primary">✨ Role:</span>
                    <select
                        className="bg-white no-focus p-2 rounded"
                        name="role"
                        id="role"
                        value={form.role || "user"}
                        onChange={handleRegisterInputs}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
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

                        <p className="text-xs">
                            Acepto los términos y condiciones y la política de privacidad.
                        </p>
                    </div>
                    <span className="text-xs">
                        * Al registrarte aceptas nuestros Términos y Condiciones y reconoces haber leído
                        nuestra Política de Privacidad. Nos comprometemos a proteger tus datos personales y a
                        utilizarlos únicamente para proporcionarte el servicio. No compartiremos tu
                        información con terceros sin tu consentimiento. Puedes solicitar la eliminación de tu
                        cuenta en cualquier momento.
                    </span>
                </label>

                {error && <p className="text-linePrimary self-center">{error}</p>}

                <Button type="submit" className="bg-accent hover:bg-accentSecondary">
                    {languages[lang].login.registerSubmit}
                </Button>
            </form>
        </section>
    );
};
