import classNames from "classnames";
import { forwardRef } from "react";

/**
 * Componente Heading para renderizar títulos con diferentes niveles semánticos y estilos visuales.
 * Mantiene la accesibilidad semántica (h1-h6) mientras permite personalización visual independiente.
 *
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido del heading
 * @param {number} props.level - Nivel semántico del heading (1-6, por defecto 1)
 * @param {string} props.size - Tamaño visual del texto (xs, sm, base, lg, xl, 2xl-9xl)
 * @param {string} props.weight - Peso de la fuente (thin, light, normal, medium, semibold, bold, extrabold, black)
 * @param {string} props.color - Color del texto (default, primary, secondary, success, warning, danger, info, muted, white, black)
 * @param {string} props.variant - Variante de estilo (default, display, subtitle, eyebrow)
 * @param {string} props.align - Alineación del texto (left, center, right, justify)
 * @param {boolean} props.truncate - Si truncar el texto con ellipsis
 * @param {string} props.className - Clases CSS adicionales
 * @param {string} props.as - Elemento HTML a renderizar (por defecto h{level})
 * @param {string} props.id - ID del elemento
 * @param {Object} ref - Referencia al elemento DOM
 * @returns {React.ForwardRefExoticComponent} Componente Heading
 *
 * @example
 * <Heading level={1} variant="display" size="6xl">
 *   Título Principal
 * </Heading>
 *
 * @example
 * <Heading level={2} variant="eyebrow" color="primary">
 *   Categoría
 * </Heading>
 */
export const Heading = forwardRef(
    (
        {
            children,
            level = 1,
            size,
            weight = "semibold",
            color = "default",
            variant = "default",
            align = "left",
            truncate = false,
            className = "",
            as,
            id,
            ...props
        },
        ref
    ) => {
        if (level < 1 || level > 6) {
            console.warn(`Heading: level debe estar entre 1 y 6, recibido: ${level}`);
        }

        const defaultSizes = {
            1: "5xl",
            2: "4xl",
            3: "3xl",
            4: "2xl",
            5: "xl",
            6: "lg",
        };

        const finalSize = size || defaultSizes[Math.max(1, Math.min(6, level))];

        const colorClasses = {
            default: "text-gray-900",
            primary: "text-brand-400",
            secondary: "text-secondary",
            success: "text-success-600",
            warning: "text-warning-600",
            danger: "text-error-600",
            info: "text-info-600",
            muted: "text-gray-500",
            white: "text-white",
            black: "text-black",
        };

        const variantClasses = {
            default: "leading-tight tracking-tight",
            display: "leading-none tracking-tighter font-extrabold",
            subtitle: "leading-relaxed tracking-normal font-normal",
            eyebrow: "leading-tight tracking-widest uppercase font-semibold text-sm",
        };

        const headingClasses = classNames(
            "leading-tight tracking-tight",

            `text-${finalSize}`,
            `font-${weight}`,
            colorClasses[color],
            `text-${align}`,

            variantClasses[variant],

            {
                truncate: truncate,
            },

            className
        );

        const Component = as || `h${Math.max(1, Math.min(6, level))}`;

        return (
            <Component ref={ref} className={headingClasses} id={id} {...props}>
                {children}
            </Component>
        );
    }
);

Heading.displayName = "Heading";
