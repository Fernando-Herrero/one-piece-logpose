import luffy from "@/assets/images/ModalImgs/luffy-modal.webp";
import nami from "@/assets/images/ModalImgs/nami-modal.webp";
import sanji from "@/assets/images/ModalImgs/sanji-modal.webp";
import usopp from "@/assets/images/ModalImgs/usopp-modal.webp";
import zoro from "@/assets/images/ModalImgs/zoro-modal.webp";
import { Button } from "@/components/Button";
import { useTranslate } from "@/translations/useTranslate";
import { useEffect, useState } from "react";

const images = [luffy, zoro, sanji, nami, usopp];

export const Modal = ({ message, onConfirm, onCancel, confirmText, cancelText }) => {
    const [image, setImage] = useState();
    const { t } = useTranslate();

    useEffect(() => {
        const index = Math.floor(Math.random() * images.length);
        setImage(images[index]);
    }, []);

    return (
        <div>
            <div className="relative flex flex-col m-1 sm:m-0">
                <div className="flex flex-col gap-5 bg-white rounded-2xl border-2 border-gray-800 px-6 py-4 shadow-lg max-w-sm">
                    <p>{message}</p>
                    <div className="self-center flex gap-1">
                        <Button onClick={onConfirm} className="bg-accent hover:bg-accentHover">
                            {confirmText || t("modal.default_confirm_text")}
                        </Button>
                        {onCancel && (
                            <Button onClick={onCancel} variant="danger">
                                {cancelText || t("modal.default.cancel_text")}
                            </Button>
                        )}
                    </div>
                    <div className="absolute -bottom-7 right-8 w-8 h-14 bg-white border-r-2 border-b-2 border-gray-800 transform rotate-60"></div>
                </div>
            </div>
            <div className="flex justify-end pt-4 pr-5 relative">
                <img
                    className="max-w-40 drop-shadow-[0_0_10px_white]"
                    src={image}
                    alt="Image of luffy with arms crossed"
                />
            </div>
        </div>
    );
};
