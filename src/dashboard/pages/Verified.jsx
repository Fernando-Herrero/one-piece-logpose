import { Button } from "@/components/Button";
import { AuthContext } from "@/context/AuthContext";
import { ModalContext } from "@/context/ModalContext";
import { useAuth } from "@/core/auth/useAuth";
import { VerifiedForm } from "@/dashboard/components/verified/VerifiedForm";
import { useTranslate } from "@/translations/useTranslate";
import { useContext, useState } from "react";

const Verified = ({ onCancel }) => {
    const { user } = useContext(AuthContext);
    const { updatedProfile } = useAuth();
    const { isVerified } = useContext(AuthContext);
    const { t } = useTranslate();
    const { showModal, hideModal } = useContext(ModalContext);
    const [success, setSuccess] = useState(false);

    const handleCancel = () => {
        showModal({
            message: t("modal.cancel_premium"),
            onConfirm: async () => {
                await updatedProfile(user, { verified: false });
                hideModal();
            },
            onCancel: hideModal,
            confirmText: t("modal.confirm_logout"),
        });
    };

    if (isVerified || success) {
        return (
            <section className="bg-sunny rounded-xl flex flex-col p-4 pb-8 w-80">
                <button className="text-muted cursor-pointer self-end text-sm" onClick={handleCancel}>
                    {t("premium.cancel")}
                </button>

                <div className="flex flex-col items-center gap-4 text-center mt-2 px-2">
                    <p className="text-primary font-semibold">{t("premium.verified")}</p>
                    <Button onClick={onCancel}>{t("premium.close")}</Button>
                </div>
            </section>
        );
    }

    return (
        <div className="bg-sunny rounded-xl p-8 max-w-[80vw] flex flex-col items-center gap-4 text-center sm:max-w-lg">
            <h2 className="text-xl font-semibold text-primary">⭐ {t("premium.title")}</h2>
            <p className="text-gray-600">{t("premium.verify")}</p>

            <VerifiedForm onSuccess={() => setSuccess(true)} onCancel={onCancel} />

            <button onClick={onCancel} className="text-muted text-sm underline mt-2 hover:text-gray-700">
                {t("premium.cancel")}
            </button>
        </div>
    );
};

export default Verified;
