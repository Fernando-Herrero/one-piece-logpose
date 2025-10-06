import { DropDown } from "@/components/Dropdown";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { MenuItem } from "@/dashboard/components/header/MenuItem";
import { UserAvatar } from "@/dashboard/components/UserAvatar";
import { languages } from "@/helpers/languages";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDevice } from "@/hooks/useDevice";
import { useGoTo } from "@/hooks/useGoTo";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const UserMenu = () => {
    const [isOpen, toggleMenu, closeMenu] = useToggle();
    const { logout } = useAuth();
    const { user } = useContext(AuthContext);
    const menuRef = useClickOutside(toggleMenu, isOpen);
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const { goTo } = useGoTo();
    const { isMobileXs, isMobile, isTablet } = useDevice();

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
                className="flex h-6 rounded-full focus-ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer md:h-8"
                onClick={toggleMenu}
                aria-label="Open user Menu"
            >
                <UserAvatar
                    src={user.avatar}
                    status={user.isActive ? "online" : "offline"}
                    size={isMobileXs || isMobile || isTablet ? "xs" : "sm"}
                />
            </button>

            <DropDown open={isOpen} onClose={closeMenu} size="sm" className="divide-y divide-gray-400">
                <div className="pb-2 flex flex-col items-center">
                    <span className="py-0.5 px-2 block text-sm text-primary">
                        {user?.displayName ?? user?.email}
                    </span>
                    <span className="py-0.5 px-2 block text-xs text-gradient">@{user?.username}</span>
                </div>
                <div className="flex flex-col pt-2 text-xs">
                    <MenuItem
                        as="link"
                        to={"/dashboard/profile"}
                        children={languages[lang].navbar.profile}
                        onClose={toggleMenu}
                    />
                    <MenuItem
                        onClick={handleLogOut}
                        children={languages[lang].navbar.logout}
                        onClose={toggleMenu}
                    />
                    <MenuItem as="a" children={languages[lang].navbar.help} onClose={toggleMenu} />
                    <MenuItem
                        onClick={() => goTo("/dashboard/settings")}
                        children={languages[lang].navbar.settings}
                        onClose={toggleMenu}
                    />
                </div>
            </DropDown>
        </div>
    );
};
