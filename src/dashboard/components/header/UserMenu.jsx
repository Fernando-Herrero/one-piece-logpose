import luffyAvatar from "@/assets/images/avatars/luffy/luffy-happy-400.webp";
import { LanguagesContext } from "@/context/LanguagesContext";
import { useAuth } from "@/core/auth/useAuth";
import { DropDown } from "@/dashboard/components/header/Dropdown";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const UserMenu = () => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { logout } = useAuth();
    const { lang } = useContext(LanguagesContext);

    return (
        <div className=" relative">
            <button
                type="button"
                className="flex w-6 rounded-full focus-ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open user Menu"
            >
                <img className="w-full rounded-full" src={luffyAvatar} alt="Avatar image" />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm">
                <div className="pb-2">
                    <span className="block text-xs text-gradient dark:text-white">Neil Sims</span>
                    <span className="block text-xs text-gradient truncate dark:text-white">
                        name@flowbite.com
                    </span>
                </div>
                <div className="flex flex-col pt-2">
                    <Link className="text-gradient text-xs"> {languages[lang].navbar.profile}</Link>
                    <button className="text-gradient text-xs w-fit cursor-pointer" onClick={logout}>
                        {languages[lang].navbar.logout}
                    </button>
                </div>
            </DropDown>
        </div>
    );
};
