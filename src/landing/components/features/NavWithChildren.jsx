import rightArrow from "@/assets/icons/right-arrow.svg";
import { useToggle } from "@/hooks/useToggle";
import { ToggleButton } from "@/landing/components/ui/ToggleButton";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export const NavWithChildren = ({ item, chooseLang, toggleMenu }) => {
    const [open, toggleBox] = useToggle(false);
    const containRef = useRef(null);

    useEffect(() => {
        const handelClickOutside = (event) => {
            if (open && containRef.current && !containRef.current.contains(event.target)) {
                toggleBox();
            }
        };

        if (open) {
            window.addEventListener("mousedown", handelClickOutside);
        }

        return () => window.removeEventListener("mousedown", handelClickOutside);
    }, [open, toggleBox]);

    return (
        <section
            ref={containRef}
            className={classNames("text-muted p-2 rounded-xl md:text-primary md:relative", {
                "bg-orangeAce/10 md:bg-secondary/80 md:rounded-t-xl md:rounded-b-none": open,
            })}
        >
            <header className="flex items-center justify-between cursor-pointer md:gap-1" onClick={toggleBox}>
                <p className="font-bold">{chooseLang[item.label]}</p>
                <ToggleButton isOpen={open} />
            </header>

            <div
                className={classNames(
                    "grid transition-[grid-template-rows] duration-300 md:absolute md:top-full md:left-0 md:w-full md:bg-secondary/80 md:rounded-b-xl",
                    {
                        "[grid-template-rows:1fr]": open,
                        "[grid-template-rows:0fr]": !open,
                    }
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    {item.children.map((child, childIndex) => (
                        <NavLink
                            key={`${child.label}-${childIndex}`}
                            className="flex justify-between mx-2 px-2 py-2 rounded relative group transition hover:-translate-y-0.5 hover:bg-orangeAce/10 md:mx-1 md:p-1 md:hover:bg-orangeAce/0"
                            to={child.path}
                            onClick={toggleMenu}
                        >
                            <p className="relative md:after:block md:after:absolute md:after:left-0 md:after:bottom-0 md:after:h-[2px] md:after:w-0 md:after:bg-orangeAce/30 after:transition-all after:duration-300 group-hover:after:w-full">
                                {chooseLang[child.label]}
                            </p>
                            <img className="w-4 md:hidden" src={rightArrow} alt="Right arrow icon" />
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};
