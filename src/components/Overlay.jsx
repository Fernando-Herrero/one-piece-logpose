import { ModalContext } from "@/context/ModalContext";
import { useGoTo } from "@/hooks/useGoTo";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";

export const Overlay = ({ children, isModal = false }) => {
    const [show, setShow] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const { modalData, hideModal } = useContext(ModalContext);
    const isModalOpen = modalData?.isOpen;

    const { goTo } = useGoTo();

    const handleClose = () => {
        if (isClosing) return;

        setIsClosing(true);
        setShow(false);

        setTimeout(() => {
            if (isModalOpen && hideModal) {
                hideModal();
            } else {
                goTo("..");
            }
        }, 300);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 10);

        const handleEscape = (event) => {
            if (event.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            clearTimeout(timer);
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-25" onClick={handleClose}>
            <div
                className={classNames(
                    "absolute inset-0 bg-black transition-opacity duration-300 z-10",
                    show ? "opacity-90" : "opacity-0"
                )}
            ></div>

            <div
                className={classNames("absolute transition-all duration-300 z-50", {
                    "translate-y-0 opacity-100": show,
                    "translate-y-full opacity-0": !show,
                })}
                onClick={(event) => event.stopPropagation()}
            >
                {typeof children === "function" ? children(handleClose) : children}
            </div>
        </div>
    );
};
