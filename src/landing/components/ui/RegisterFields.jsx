import { LabelInput } from "@/landing/components/ui/LabelInput";
import { registerFields } from "@/landing/data/registerFields";

export const RegisterFields = ({ form, lang, onChange }) => {
    const fields = registerFields(lang, form);
    return (
        <>
            {fields.map(({ label, type, name, value, placeholder, id }) => (
                <LabelInput
                    key={id}
                    label={label}
                    type={type}
                    name={name}
                    value={value || ""}
                    placeholder={placeholder}
                    id={id}
                    onChange={onChange}
                />
            ))}
        </>
    );
};
