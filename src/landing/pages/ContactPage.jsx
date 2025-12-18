import { Button } from "@/components/Button";
import { ModalContext } from "@/context/ModalContext";
import { storage } from "@/helpers/storage";
import { Container } from "@/landing/components/ui/Container";
import { LabelInput } from "@/landing/components/ui/LabelInput";
import { contactFormFields } from "@/landing/data/contactFields";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, useState } from "react";

const ContactPage = () => {
    const [form, setFormn] = useState({ name: "", surname: "", subject: "", email: "", textArea: "" });
    const { t } = useTranslate();
    const { showModal, hideModal } = useContext(ModalContext);

    const handleInput = ({ target: { name, value } }) => {
        setFormn((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        storage.save("contactForm", form);
        setFormn({ name: "", surname: "", subject: "", email: "", textArea: "" });

        showModal({
            message: t("modal.contact_message"),
            onConfirm: hideModal,
            confirmText: t("modal.confirm_text"),
        });
    };

    const fields = contactFormFields(form, t);
    return (
        <Container className="flex flex-col items-center gap-5 mb-10">
            <p className="text-center text-lg max-w-sm text-gradient">{t("contact.message_title")}</p>
            <form
                className="flex flex-col gap-2 p-4 w-full bg-gradient-card rounded shadow-default max-w-md sm:min-w-sm"
                onSubmit={handleSubmit}
            >
                <h2 className="text-bold text-2xl self-center font-family-pirate text-primary">
                    {t("contact.title")}
                </h2>
                {fields.map(({ label, type, name, value, id, placeholder }, index) => (
                    <LabelInput
                        key={`${label}-${index}`}
                        label={label}
                        className=""
                        type={type}
                        name={name}
                        value={value}
                        id={id}
                        placeholder={placeholder}
                        onChange={handleInput}
                    />
                ))}

                <label>
                    <span className="font-bold text-lg text-primary">{t("contact.message")}:</span>
                    <textarea
                        className="bg-white w-full rounded p-2 no-focus"
                        name="message"
                        id="message"
                        value={form.message}
                        placeholder={t("contact.area_message")}
                        rows={5}
                    />
                </label>

                <Button variant="submit">{t("contact.button")}</Button>
            </form>
        </Container>
    );
};

export default ContactPage;
