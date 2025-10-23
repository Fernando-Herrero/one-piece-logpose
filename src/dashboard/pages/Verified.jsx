import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { LanguagesContext } from "@/context/LanguagesContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { VerifiedForm } from "@/dashboard/components/verified/VerifiedForm";
import { languages } from "@/helpers/languages";
import { useContext, useState } from "react";

export const Verified = ({ onCancel }) => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const { isVerified } = useContext(AuthContext);
    const { lang } = useContext(LanguagesContext);
    const { showModal, hideModal } = useContext(ModalContext);
    const [success, setSuccess] = useState(false);

    const handleCancel = () => {
        showModal({
            message: languages[lang].modal.cancelPremium,
            onConfirm: async () => {
                await updatedProfile(user, { verified: false });
                hideModal();
            },
            onCancel: hideModal,
            confirmText: languages[lang].modal.confirmLogOut,
        });
    };

    if (isVerified || success) {
        return (
            <section className="bg-sunny rounded-xl flex flex-col p-4 pb-8 w-80">
                <button className="text-muted cursor-pointer self-end text-sm" onClick={handleCancel}>
                    {languages[lang].premium.cancel}
                </button>

                <div className="flex flex-col items-center gap-4 text-center mt-2 px-2">
                    <p className="text-primary font-semibold">{languages[lang].premium.verified}</p>
                    <Button onClick={onCancel}>{languages[lang].premium.close}</Button>
                </div>
            </section>
        );
    }

    return (
        <div className="bg-sunny rounded-xl p-8 max-w-[80vw] flex flex-col items-center gap-4 text-center sm:max-w-lg">
            <h2 className="text-xl font-semibold text-primary">⭐ {languages[lang].premium.title}</h2>
            <p className="text-gray-600">{languages[lang].premium.verify}</p>

            <VerifiedForm onSuccess={() => setSuccess(true)} onCancel={onCancel} />

            <button onClick={onCancel} className="text-muted text-sm underline mt-2 hover:text-gray-700">
                {languages[lang].premium.cancel}
            </button>
        </div>
    );
};
