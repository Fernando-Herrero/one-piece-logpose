import backImage from "@/assets/images/luffy-lies-backavatar.webp";
import classNames from "classnames";
import { useState } from "react";

/**
 * Avatar Component - Componente de avatar versátil del sistema de diseño Eleven Code
 *
 * @param {Object} props - Propiedades del componente
 * @param {string} [props.src] - URL de la imagen del avatar
 * @param {string} [props.alt=''] - Texto alternativo para la imagen
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'} [props.size='md'] - Tamaño del avatar
 * @param {'circle' | 'square' | 'rounded'} [props.variant='circle'] - Forma del avatar
 * @param {string} [props.fallback] - Texto a mostrar cuando no hay imagen (por defecto: primera letra del alt)
 * @param {boolean} [props.online=false] - Si mostrar indicador de estado online
 * @param {string} [props.className=''] - Clases CSS adicionales para personalización
 * @param {Object} [props...rest] - Resto de props HTML del elemento div
 *
 * Valores aceptados:
 * - size: 'xs' (24px), 'sm' (32px), 'md' (40px), 'lg' (48px), 'xl' (64px), '2xl' (80px)
 * - variant: 'circle', 'square', 'rounded'
 * - online: true, false
 */
export const UserAvatar = ({
    src,
    alt = "",
    size = "md",
    variant = "circle",
    fallback = backImage,
    online = false,
    status = "offline",
    className = "",
    ...props
}) => {
    const sizeConfig = {
        xs: {
            avatar: "w-6 h-6",
            indicator: "w-1.5 h-1.5",
            position: "top-0 right-0",
        },
        sm: {
            avatar: "w-8 h-8",
            indicator: "w-2 h-2",
            position: "top-0 right-0",
        },
        md: {
            avatar: "w-10 h-10",
            indicator: "w-2.5 h-2.5",
            position: "top-0.5 right-0.5",
        },
        lg: {
            avatar: "w-12 h-12",
            indicator: "w-3 h-3",
            position: "top-0.5 right-0.5",
        },
        xl: {
            avatar: "w-16 h-16",
            indicator: "w-3 h-3",
            position: "top-1 right-1",
        },
        "2xl": {
            avatar: "w-20 h-20",
            indicator: "w-4 h-4",
            position: "top-1 right-1",
        },
    };

    const textSizeClass = `text-${size}`;

    const variantConfig = {
        circle: "rounded-full",
        square: "rounded-lg",
        rounded: "rounded-md",
    };

    const baseClasses =
        "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 text-gray-600 font-medium";

    const currentSize = sizeConfig[size] || sizeConfig.md;
    const currentVariant = variantConfig[variant] || variantConfig.circle;

    const avatarClasses = classNames(
        baseClasses,
        currentSize.avatar,
        textSizeClass,
        currentVariant,
        className
    );
    const statusColor = {
        online: "bg-green-400",
        offline: "bg-red-400",
    };

    const indicatorClasses = classNames(
        "absolute rounded-full",
        currentSize.indicator,
        currentSize.position,
        statusColor[status]
    );

    const [imgError, setImgError] = useState(false);

    const getFallbackText = () => {
        if (alt) return alt.charAt(0).toUpperCase();
        return "?";
    };

    return (
        <div className="relative inline-block">
            <div className={avatarClasses} {...props}>
                {/* Imagen del avatar */}
                {/* {src && <img src={src} alt={alt} className="w-full h-full object-cover" />} */}

                {src && !imgError && (
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                    />
                )}

                {/* Fallback text cuando la imagen está rota */}
                {imgError && fallback && typeof fallback === "string" && (
                    <img src={fallback} alt="fallback" className="w-full h-full object-cover" />
                )}

                {/* Fallback text cuando no hay imagen */}
                {!src && fallback && typeof fallback === "string" && (
                    <img src={fallback} alt="fallback" className="w-full h-full object-cover" />
                )}

                {!src && !fallback && (
                    <span className="select-none text-gray-600 text-lg">{getFallbackText()}</span>
                )}
            </div>

            {/* Indicador de estado online */}
            <span className={indicatorClasses} aria-label="En línea" />
        </div>
    );
};
