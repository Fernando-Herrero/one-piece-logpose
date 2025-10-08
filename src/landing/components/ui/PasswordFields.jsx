import { LabelPassword } from "@/landing/components/ui/LabelPassword";
import { passwordFields } from "@/landing/data/passwordFields";

export const PasswordFields = ({
    form,
    lang,
    isVisible,
    toggleVisible,
    isConfirmVisible,
    toggleConfirmVisible,
    onChange,
}) => {
    const passwordFieldsData = passwordFields(lang, form, isVisible, isConfirmVisible);

    return (
        <>
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
                    onChange={onChange}
                    toggleVisible={toggleType === "password" ? toggleVisible : toggleConfirmVisible}
                    passwordValue={name === "confirmPassword" ? form.password : ""}
                />
            ))}
        </>
    );
};
