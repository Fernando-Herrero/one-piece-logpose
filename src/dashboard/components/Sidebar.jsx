import { useToggle } from "@/hooks/useToggle";
import { Navbar } from "@/layouts/Navbar";
import classNames from "classnames";
import { useEffect, useRef } from "react";

export const SideBar = () => {
    const [isOpen, toggleMenu] = useToggle();
    const containRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && containRef.current && !containRef.current.contains(event.target)) {
                toggleMenu();
            }
        };

        if (isOpen) {
            window.addEventListener("mousedown", handleClickOutside);
        }

        return () => window.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, toggleMenu]);

    return (
        <aside
            ref={containRef}
            className={classNames(
                "fixed min-h-screen bg-gradient-primary border-r-2 border-primary p-2 text-sm",
                "transition-all duration-300 ease-out",
                {
                    "w-30": isOpen,
                    "w-16": !isOpen,
                }
            )}
        >
            <Navbar ref={containRef} isOpen={isOpen} toggleMenu={toggleMenu} />
        </aside>
    );
};
