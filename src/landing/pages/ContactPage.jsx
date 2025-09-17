import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { languages } from "@/helpers/languages";
import { storage } from "@/helpers/storage";
import { Button } from "@/landing/components/ui/Button";
import { Container } from "@/landing/components/ui/Container";
import { LabelInput } from "@/landing/components/ui/LabelInput";
import { contactFormFields } from "@/landing/data/contactFields";
import { useContext, useState } from "react";

export const ContactPage = () => {
    const [form, setFormn] = useState({ name: "", surname: "", subject: "", email: "", textArea: "" });
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);

    const handleInput = ({ target: { name, value } }) => {
        setFormn((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        storage.save("contactForm", form);
        setFormn({ name: "", surname: "", subject: "", email: "", textArea: "" });

        showModal({
            message: languages[lang].modal.contactMessage,
            onConfirm: hideModal,
            confirmText: languages[lang].modal.confirmText,
        });
    };

    const fields = contactFormFields(form, lang);
    return (
        <Container className="flex flex-col items-center gap-5 ">
            <p
                className="text-center text-lg max-w-sm bg-gradient-to-r from-gray-900 to-gray-400 
                bg-clip-text text-transparent"
            >
                {languages[lang].contact.messageTitle}
            </p>
            <form
                className="flex flex-col gap-2 p-4 bg-gradient-primary rounded shadow-default max-w-md sm:min-w-sm"
                onSubmit={handleSubmit}
            >
                <h2 className="text-bold text-2xl self-center font-family-pirate">
                    {languages[lang].contact.title}
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
                    <span className="font-bold text-lg">Mensaje:</span>
                    <textarea
                        className="bg-white w-full p-2"
                        name="message"
                        id="message"
                        value={form.message}
                        placeholder={languages[lang].contact.areaMessage}
                        rows={5}
                    />
                </label>

                <Button variant="submit">{languages[lang].contact.button}</Button>
            </form>
        </Container>
    );
};
