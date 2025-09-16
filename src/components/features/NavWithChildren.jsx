import rightArrow from "@/assets/icons/right-arrow.svg";
import { ToggleButton } from "@/components/ui/ToggleButton";
import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavWithChildren = ({ item, chooseLang }) => {
    const [open, isOpen] = useState(false);

    return (
        <section
            className={classNames("text-muted p-2 rounded-xl md:text-primary md:relative", {
                "bg-orangeAce/10 md:bg-secondary/80 md:rounded-t-xl md:rounded-b-none": open,
            })}
            onClick={() => isOpen((prev) => !prev)}
        >
            <header className="flex items-center justify-between cursor-pointer md:gap-1">
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
