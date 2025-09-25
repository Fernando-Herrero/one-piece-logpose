import arrow from "@/assets/icons/right-arrow.svg";
import { DropDown } from "@/components/Dropdown";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { languages } from "@/helpers/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const UserMenu = () => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { logout } = useAuth();
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const { user } = useContext(AuthContext);

    const menuRef = useClickOutside(toggleMenu, isOpen);

    const handleLogOut = () => {
        closeMenu();
        showModal({
            message: languages[lang].modal.logOutMessage,
            onConfirm: () => {
                logout();
                hideModal();
            },
            onCancel: hideModal,
            confirmText: languages[lang].modal.confirmLogOut,
        });
    };

    return (
        <div className=" relative" ref={menuRef}>
            <button
                type="button"
                className="flex h-6 rounded-full focus-ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open user Menu"
            >
                <UserAvatar src={user.avatar} size="xs" status={user.isActive ? "online" : "offline"} />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm">
                <div className="pb-2">
                    <span className="py-0.5 px-2 block text-xs text-gradient dark:text-white">
                        @{user?.username}
                    </span>
                    <span className="py-0.5 px-2 block text-xs text-gradient truncate dark:text-white">
                        {user?.email}
                    </span>
                </div>
                <div className="flex flex-col pt-2 ">
                    <Link className="flex justify-between text-xs drop-item-style group">
                        <span className="underline-hover text-gradient">
                            {languages[lang].navbar.profile}
                        </span>
                        <img
                            className="w-4 transition-transform group-hover:translate-x-1"
                            src={arrow}
                            alt="Right arrow"
                        />
                    </Link>
                    <button
                        className="flex justify-between w-full text-start text-xs cursor-pointer drop-item-style group"
                        onClick={handleLogOut}
                    >
                        <p className="w-fit underline-hover text-gradient">{languages[lang].navbar.logout}</p>
                        <img
                            className="w-4 transition-transform group-hover:translate-x-1"
                            src={arrow}
                            alt="Right arrow"
                        />
                    </button>
                </div>
            </DropDown>
        </div>
    );
};
