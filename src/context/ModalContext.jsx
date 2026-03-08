import { useTranslate } from "@/translations/useTranslate";
import { createContext, useCallback, useMemo, useState } from "react";

export const ModalContext = createContext(null);

export const ModdalProvider = ({ children, onCancel }) => {
    const { t } = useTranslate();

    const [modalData, setModalData] = useState({
        isOpen: false,
        message: "",
        onConfirm: null,
        onCancel: null,
        confirmText: t("modal.confirm_text"),
        cancelText: t("modal.cancel_text"),
    });

    const showModal = useCallback(
        (config) => {
            setModalData({
                isOpen: true,
                message: config.message || "",
                onConfirm: config.onConfirm || null,
                onCancel: onCancel ?? null,
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
