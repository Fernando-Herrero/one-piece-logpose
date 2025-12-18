import { Button } from "@/components/Button";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { session } from "@/helpers/storage";
import { useAvatar } from "@/hooks/useAvatar";
import { useRegisterValidation } from "@/hooks/useRegisterValidation";
import { useToggle } from "@/hooks/useToggle";
import { PasswordFields } from "@/landing/components/ui/PasswordFields";
import { RegisterFields } from "@/landing/components/ui/RegisterFields";
import { RoleSelect } from "@/landing/components/ui/RoleSelect";
import { TermsCheckbox } from "@/landing/components/ui/TermsCheckbox";
import { INITIAL_REGISTER_FORM } from "@/landing/data/INITIAL_REGISTER_FORM";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, useState } from "react";

export const RegisterForm = () => {
    const { register } = useAuth();
    const { selectedAvatar, setSelectedAvatar } = useAvatar();
    const { t } = useTranslate();
    const { showModal, hideModal } = useContext(ModalContext);
    const savedRegisterInputs = session.get("registerInputs");
    const [form, setForm] = useState({ ...INITIAL_REGISTER_FORM, ...(savedRegisterInputs || {}) });
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, toggleVisible] = useToggle();
    const [isConfirmVisible, toggleConfirmVisible] = useToggle();
    const { error, validateRegisterForm, clearError } = useRegisterValidation();
    const [isRegister, setIsRegister] = useState(false);

    const handleInputChange = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newRegisterForm = { ...prev, [name]: value || "" };
            session.save("registerInputs", newRegisterForm);
            return newRegisterForm;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsRegister(true);

        try {
            const validationError = validateRegisterForm(form, t);
            if (validationError) return;
            const { confirmPassword, ...dataToSend } = form;
            if (selectedAvatar) dataToSend.avatar = selectedAvatar;
            await register(dataToSend);

            setTimeout(() => {
                showModal({
                    message: t("modal.register_message"),
                    onConfirm: hideModal,
                });
            }, 1000);

            session.remove("registerInputs");
            setForm(INITIAL_REGISTER_FORM);
            setIsChecked(false);
            setSelectedAvatar(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsRegister(false);
        }
    };

    return (
        <form
            className="flex flex-col gap-2 p-4 bg-gradient-primary rounded-xl shadow-default max-w-md"
            onSubmit={handleSubmit}
        >
            <h3 className="self-center text-xl font-family-pirate text-primary sm:text-2xl">
                {t("login.register_title")}
            </h3>

            <RegisterFields form={form} t={t} onChange={handleInputChange} />
            <PasswordFields
                form={form}
                t={t}
                isVisible={isVisible}
                toggleVisible={toggleVisible}
                isConfirmVisible={isConfirmVisible}
                toggleConfirmVisible={toggleConfirmVisible}
                onChange={handleInputChange}
            />
            <RoleSelect form={form} onChange={handleInputChange} />
            <TermsCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />

            {error && <p className="text-linePrimary self-center">{error}</p>}

            <Button type="submit" className="bg-accent hover:bg-accentSecondary" disabled={isRegister}>
                {isRegister ? (
                    <>
                        {t("login.register_submit")} <LoadingDots />
                    </>
                ) : (
                    t("login.register_submit")
                )}
            </Button>
        </form>
    );
};
