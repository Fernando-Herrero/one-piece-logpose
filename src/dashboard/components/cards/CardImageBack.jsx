import backImage from "@/assets/images/cards/backImage.webp";
import { useState } from "react";

export const CardImage = ({ src, alt, fallbackSrc = backImage, className = "" }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <img
            src={imgError || !src ? fallbackSrc : src}
            alt={alt}
            className={className}
            onError={() => setImgError(true)}
        />
    );
};
