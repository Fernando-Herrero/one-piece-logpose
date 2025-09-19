import notification from "@/assets/icons/notification-icon.svg";
import logo from "@/assets/images/one-piece-logo.webp";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { Search } from "@/dashboard/components/header/Search";
import { UserMenu } from "@/dashboard/components/header/UserMenu";
import { languages } from "@/helpers/languages";
import { useToggle } from "@/hooks/useToggle";
import { useContext } from "react";

export const DashboardNavbar = () => {
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const { logout } = useAuth();
    const { isOpen, toggleBox } = useToggle();

    const handleLogOut = () => {
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
        <header className="fixed flex items-center w-full py-2 px-4 border-b-2 border-primary bg-gradient-primary backdrop-blur-md z-index-10">
            <div className="w-16 mr-auto">
                <img className="w-full" src={logo} alt="One Piece logo" />
            </div>

            <div className="flex items-center gap-2">
                <Search />
                <div className="w-5">
                    <img className="w-full" src={notification} alt="Bell icon" />
                </div>
                <UserMenu />
            </div>
        </header>
    );
};
