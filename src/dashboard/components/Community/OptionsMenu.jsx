import dots from "@/assets/icons/dots-menu-icon.svg";
import profileIcon from "@/assets/icons/profile-icon.svg";
import trash from "@/assets/icons/trash-icon.svg";
import { DropDown } from "@/components/Dropdown";
import { LanguagesContext } from "@/context/LanguagesContext";
import { usePosts } from "@/core/posts/usePosts";
import { languages } from "@/helpers/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const OptionsMenu = ({ id, userId }) => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const { deletePost } = usePosts();
    const { goTo } = useGoTo();

    const menuRef = useClickOutside(toggleMenu, isOpen);

    return (
        <div className="relative" ref={menuRef}>
            <button
                type="button"
                className="flex w-6 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open Menu"
            >
                <img className="w-full" src={dots} alt="Dots Menu" />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" className="mt-0">
                <button
                    onClick={() => goTo(`/dashboard/userProfile?userId=${userId.id}`)}
                    className="flex items-center justify-between w-full cursor-pointer drop-item-style group"
                >
                    <p className="underline-hover text-gradient">{languages[lang].posts.viewProfile}</p>
                    <img className="w-4" src={profileIcon} alt="Profile icon" />
                </button>
                <button
                    onClick={() => deletePost(id)}
                    className="flex items-center justify-between w-full cursor-pointer drop-item-style group"
                >
                    <p className="underline-hover text-gradient">{languages[lang].posts.deletePost}</p>
                    <img className="w-4" src={trash} alt="Trash icon" />
                </button>
            </DropDown>
        </div>
    );
};
