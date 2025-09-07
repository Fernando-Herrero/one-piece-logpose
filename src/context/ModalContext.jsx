import { createContext, useState } from "react";

const ModalContext = createContext(null);

export const ModdalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return <ModalContext.Provider value={{ isOpen, showModal, hideModal }}>{children}</ModalContext.Provider>;
};
