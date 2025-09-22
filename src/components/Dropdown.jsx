import classNames from "classnames";
import { useEffect, useRef } from "react";

export const DropDown = ({
    open,
    onClose,
    className = "",
    children,
    size = "md",
    placement = "bottom",
    align = "right",
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!open) return;

        const onDoclick = (event) => {
            if (!ref.current) return;
            if (!ref.current.contains(event.target)) onClose?.();
        };

        const onEsc = (event) => {
            if (event.key === "Escape") onClose?.();
        };

        document.addEventListener("mousedown", onDoclick);
        document.addEventListener("keydown", onEsc);

        return () => {
            document.removeEventListener("mousedown", onDoclick);
            document.removeEventListener("keydown", onEsc);
        };
    }, [open, onClose]);

    const sizeClass = size === "sm" ? "dropdown-sm" : "dropdown-md";
    const placementClass =
        placement === "top" ? "bottom-full mb-2 origin-bottom" : "top-full mt-2 origin-top";
    const alignClass =
        align === "left" ? "left-0" : align === "center" ? "left-1/2 -translate-x-1/2" : "right-0";

    return (
        <div
            ref={ref}
            className={classNames(
                "absolute z-50 dropdown-panel",
                sizeClass,
                placementClass,
                alignClass,
                open ? "block" : "hidden",
                className
            )}
            role="menu"
        >
            {children}
        </div>
    );
};
