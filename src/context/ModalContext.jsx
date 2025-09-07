import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModdalProvider = ({ children }) => {
    const [modalData, setModalData] = useState({
        isOpen: false,
        message: "",
        onConfirm: null,
        onCancel: null,
        confirmText: "Ok",
        cancelText: "Cancel",
    });

    const showModal = (config) => {
        setModalData({
            isOpen: true,
            message: config.message || "",
            onConfirm: config.onConfirm || null,
            onCancel: config.onCancel || null,
            confirmText: config.confirmText || "Ok",
            cancelText: config.cancelText || "Cancel",
        });
    };

    const hideModal = () => {
        setModalData((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <ModalContext.Provider value={{ modalData, showModal, hideModal }}>{children}</ModalContext.Provider>
    );
};
