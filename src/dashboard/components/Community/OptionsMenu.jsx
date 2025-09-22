import dots from "@/assets/icons/dots-menu-icon.svg";
import trash from "@/assets/icons/trash-icon.svg";
import { DropDown } from "@/components/Dropdown";
import { LanguagesContext } from "@/context/LanguagesContext";
import { usePosts } from "@/core/posts/usePosts";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const OptionsMenu = ({ id }) => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { lang } = useContext(LanguagesContext);
    const { deletePost } = usePosts();

    return (
        <div className=" relative">
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
                    onClick={() => deletePost(id)}
                    className="flex items-center justify-between w-full cursor-pointer py-1 px-2 rounded-lg transition hover:bg-orangeAce/10 group"
                >
                    <p className="underline-hover">{languages[lang].posts.deletePost}</p>
                    <img className="w-4" src={trash} alt="Trash icon" />
                </button>
            </DropDown>
        </div>
    );
};
