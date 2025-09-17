import luffy from "@/assets/images/ModalImgs/luffy-modal.png";
import nami from "@/assets/images/ModalImgs/nami-modal.png";
import sanji from "@/assets/images/ModalImgs/sanji-modal.png";
import usopp from "@/assets/images/ModalImgs/usopp-modal.png";
import zoro from "@/assets/images/ModalImgs/zoro-modal.png";
import { Button } from "@/landing/components/ui/Button";
import { useEffect, useState } from "react";

const images = [luffy, zoro, sanji, nami, usopp];

export const Modal = ({ message, onConfirm, onCancel, confirmText = "Ok", cancelText = "Cancel" }) => {
    const [image, setImage] = useState();

    useEffect(() => {
        const index = Math.floor(Math.random() * images.length);
        setImage(images[index]);
    }, []);

    const defaultMessage =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa eligendi labore, consequatur quis vero ipsum. Minima, consequatur praesentium! Saepe dolore unde ullam nulla deserunt ex? Cumque adipisci minus earum rerum!";

    return (
        <div>
            <div className="relative flex flex-col">
                <div className="flex flex-col gap-5 bg-white rounded-2xl border-2 border-gray-800 px-6 py-4 shadow-lg max-w-sm">
                    <p>{message || defaultMessage}</p>
                    <div className="self-center flex gap-1">
                        <Button onClick={onConfirm} className="bg-accent hover:bg-accentHover">
                            {confirmText}
                        </Button>
                        {onCancel && (
                            <Button
                                onClick={onCancel}
                                className="bg-linePrimary hover:bg-lineDark text-white"
                            >
                                {cancelText}
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
