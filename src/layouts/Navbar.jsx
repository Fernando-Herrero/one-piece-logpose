import cardsIcon from "@/assets/icons/cards-icon.svg";
import profileIcon from "@/assets/icons/home-icon.svg";
import serieIcon from "@/assets/icons/serie-icon.svg";
import socialIcon from "@/assets/icons/social-icon.svg";
import { AuthContext } from "@/context/authContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { NavbarItems } from "@/landing/components/features/NavbarItems";
import classNames from "classnames";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { path: "/profile", label: "profile", icon: profileIcon, isPrivate: true },
    { path: "/community", label: "community", icon: socialIcon, isPrivate: true },
    { path: "/serie", label: "serie", icon: serieIcon, isPrivate: true },
    { path: "/cards", label: "cards", icon: cardsIcon, isPrivate: true },
    {
        path: "",
        label: "onepiece",
        children: [
            { path: "/history", label: "history" },
            { path: "/characters", label: "characters" },
            { path: "/map", label: "map" },
        ],
    },
    {
        path: "",
        label: "help",
        children: [
            { path: "/faq", label: "faq" },
            { path: "/contact", label: "contact" },
        ],
    },
];

export const Navbar = ({ toggleMenu, isOpen }) => {
    const { lang } = useContext(LanguagesContext);
    const { user } = useContext(AuthContext);
    const chooseLang = languages[lang].navbar;

    const privateItems = navItems.filter((item) => item.isPrivate && user);

    return (
        <nav
            className={classNames("flex flex-col gap-2", {
                "md:flex-row md:gap-4": !user,
            })}
        >
            {!user && <NavbarItems chooseLang={chooseLang} navItems={navItems} toggleMenu={toggleMenu} />}

            {user && isOpen
                ? privateItems.map(({ path, label }, index) => (
                      <NavLink
                          key={`${label}-${index}`}
                          to={path}
                          onClick={toggleMenu}
                          className={({ isActive }) =>
                              classNames("p-2 rounded-xl transition-all duration-300", {
                                  "bg-orangeAce/20": isActive,
                                  "hover:bg-orangeAce/10": !isActive,
                              })
                          }
                      >
                          <span className="text-gradient">{chooseLang[label]}</span>
                      </NavLink>
                  ))
                : privateItems.map(({ label, icon }, index) => (
                      <button
                          key={`${label}-${index}`}
                          onClick={toggleMenu}
                          title={chooseLang[label] || label}
                          className="p-2 group rounded-xl hover:bg-orangeAce/10 transition-colors"
                      >
                          <img
                              src={icon}
                              alt={`${chooseLang[label] || label} icon`}
                              className="w-6 h-6 transition-transform group-hover:scale-105 "
                          />
                      </button>
                  ))}
        </nav>
    );
};
