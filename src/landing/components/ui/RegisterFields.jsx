import { LabelInput } from "@/landing/components/ui/LabelInput";
import { registerFields } from "@/landing/data/registerFields";

export const RegisterFields = ({ form, t, onChange }) => {
    const fields = registerFields(t, form);
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
