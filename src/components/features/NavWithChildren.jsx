import arrowDown from "@/assets/icons/arrow-down-1.svg";
import rightArrow from "@/assets/icons/right-arrow.svg";
import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavWithChildren = ({ item, chooseLang, index }) => {
    const [open, isOpen] = useState(false);

    return (
        <div
            key={`${item.label}-${index}`}
            className={classNames("cursor-pointer text-muted p-2 rounded-xl md:text-primary", {
                "bg-orangeAce/10 md:bg-secondary/50": open,
            })}
            onClick={() => isOpen((prev) => !prev)}
        >
            <header className="flex items-center justify-between md:relative md:gap-2">
                <p className="font-bold">{chooseLang[item.label]}</p>
                <img
                    className={classNames("w-2 transition-transform duration-300", {
                        "-rotate-180": open,
                    })}
                    src={arrowDown}
                    alt="Toggle menu icon"
                />
            </header>

            <div
                className={classNames("grid transition-[grid-template-rows] duration-300", {
                    "[grid-template-rows:1fr]": open,
                    "[grid-template-rows:0fr]": !open,
                })}
            >
                <div className="min-h-0 overflow-hidden">
                    {item.children.map((child, childIndex) => (
                        <NavLink
                            key={`${child.label}-${childIndex}`}
                            className="flex justify-between mx-2 px-2 py-2 rounded relative group hover:bg-orangeAce/10 md:mx-1 md:p-1 md:hover:bg-orangeAce/0"
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
        </div>
    );
};
