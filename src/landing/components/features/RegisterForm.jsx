import { Button } from "@/components/Button";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { sessionStorage } from "@/helpers/storage";
import { useAvatar } from "@/hooks/useAvatar";
import { useRegisterValidation } from "@/hooks/useRegisterValidation";
import { useToggle } from "@/hooks/useToggle";
import { PasswordFields } from "@/landing/components/ui/PasswordFields";
import { RegisterFields } from "@/landing/components/ui/RegisterFields";
import { RoleSelect } from "@/landing/components/ui/RoleSelect";
import { TermsCheckbox } from "@/landing/components/ui/TermsCheckbox";
import { INITIAL_REGISTER_FORM } from "@/landing/data/INITIAL_REGISTER_FORM";
import { useContext, useState } from "react";

export const RegisterForm = () => {
    const { register } = useAuth();
    const { selectedAvatar } = useAvatar();
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);

    const savedRegisterInputs = sessionStorage.get("registerInputs");
    const [form, setForm] = useState({ ...INITIAL_REGISTER_FORM, ...(savedRegisterInputs || {}) });
    const [isChecked, setIsChecked] = useState(false);

    const [isVisible, toggleVisible] = useToggle();
    const [isConfirmVisible, toggleConfirmVisible] = useToggle();

    const { error, validateRegisterForm, clearError } = useRegisterValidation();

    const handleInputChange = ({ target: { name, value } }) => {
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

        if (selectedAvatar) dataToSend.avatar = selectedAvatar;

        console.log("Datos que se envían al registro:", dataToSend);

        try {
            register(dataToSend);

            showModal({
                message: languages[lang].modal.registerMessage,
                onConfirm: hideModal,
            });

            sessionStorage.remove("registerInputs");
            setForm(INITIAL_REGISTER_FORM);
            setIsChecked(false);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form
            className="flex flex-col gap-2 p-4 bg-gradient-primary rounded-xl shadow-default max-w-md"
            onSubmit={handleSubmit}
        >
            <h3 className="self-center text-xl font-family-pirate text-primary sm:text-2xl">
                {languages[lang].login.registerTitle}
            </h3>

            <RegisterFields form={form} lang={lang} onChange={handleInputChange} />
            <PasswordFields
                form={form}
                lang={lang}
                isVisible={isVisible}
                toggleVisible={toggleVisible}
                isConfirmVisible={isConfirmVisible}
                toggleConfirmVisible={toggleConfirmVisible}
                onChange={handleInputChange}
            />
            <RoleSelect form={form} onChange={handleInputChange} />
            <TermsCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />

            {error && <p className="text-linePrimary self-center">{error}</p>}

            <Button type="submit" className="bg-accent hover:bg-accentSecondary">
                {languages[lang].login.registerSubmit}
            </Button>
        </form>
    );
};
