import luffyAvatar from "@/assets/images/avatars/luffy/luffy-happy-400.webp";
import logo from "@/assets/images/one-piece-logo.webp";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { languages } from "@/helpers/languages";
import { useContext } from "react";

export const DashboardNavbar = () => {
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const { logout } = useAuth();

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
            <div className="w-16 mx-auto">
                <img className="w-full" src={logo} alt="One Piece logo" />
            </div>

            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden self-end my-auto">
                    <img src={luffyAvatar} alt="Avatar image" />
                </div>
                <button className="text-gradient text-xs" onClick={handleLogOut}>
                    {languages[lang].navbar.logOut}
                </button>
            </div>
        </header>
    );
};
