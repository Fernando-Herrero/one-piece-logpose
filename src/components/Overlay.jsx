import { ModalContext } from "@/context/ModalContext";
import { useGoTo } from "@/hooks/useGoTo";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";

export const Overlay = ({ children }) => {
    const { goTo } = useGoTo();
    const [show, setShow] = useState(false);
    const { hideModal } = useContext(ModalContext);
    const handleClose = () => {
        setShow(false);
    };

    const handleTransitionEnd = () => {
        if (!show) {
            hideModal();
            goTo("..");
        }
    };

    useEffect(() => {
        setShow(true);

        const handleEscape = (event) => {
            if (event.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-100"
            onClick={handleClose}
            onTransitionEnd={handleTransitionEnd}
        >
            <div
                className={classNames(
                    "absolute inset-0 bg-black transition-opacity duration-300 z-10",
                    show ? "opacity-90" : "opacity-0"
                )}
            ></div>

            <div
                className={classNames("relative mx-4 rounded transform transition-all duration-300 z-200", {
                    "translate-y-0 opacity-100": show,
                    "translate-y-full opacity-0": !show,
                })}
                onClick={(event) => event.stopPropagation()}
                onTransitionEnd={handleTransitionEnd}
            >
                {children}
            </div>
        </div>
    );
};
