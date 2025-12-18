import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

export const ModalContext = createContext(null);

export const ModdalProvider = ({ children, onCancel }) => {
    const { lang } = useContext(LanguagesContext);

    const [modalData, setModalData] = useState({
        isOpen: false,
        message: "",
        onConfirm: null,
        onCancel: null,
        confirmText: languages[lang].modal.confirmText,
        cancelText: languages[lang].modal.cancelText,
    });

    const showModal = useCallback(
        (config) => {
            setModalData({
                isOpen: true,
                message: config.message || "",
                onConfirm: config.onConfirm || null,
                onCancel: onCancel,
                confirmText: config.confirmText,
                cancelText: config.cancelText,
            });
        },
        [onCancel]
    );

    const hideModal = useCallback(() => {
        setModalData((prev) => ({
            ...prev,
            isOpen: false,
        }));
    }, []);

    const value = useMemo(() => ({ modalData, showModal, hideModal }), [modalData, showModal, hideModal]);

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
