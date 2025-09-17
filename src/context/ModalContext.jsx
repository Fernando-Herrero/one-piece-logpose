import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { createContext, useContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModdalProvider = ({ children }) => {
    const { lang } = useContext(LanguagesContext);

    const [modalData, setModalData] = useState({
        isOpen: false,
        message: "",
        onConfirm: null,
        onCancel: null,
        confirmText: languages[lang].modal.confirmText,
        cancelText: languages[lang].modal.cancelText,
    });

    const showModal = (config) => {
        setModalData({
            isOpen: true,
            message: config.message || "",
            onConfirm: config.onConfirm || null,
            onCancel: config.onCancel || null,
            confirmText: config.confirmText,
            cancelText: config.cancelText,
        });
    };

    const hideModal = () => {
        setModalData((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <ModalContext.Provider value={{ modalData, showModal, hideModal }}>{children}</ModalContext.Provider>
    );
};
