import { forwardRef } from "react";

export const Cards = forwardRef(({ title, text, className }, ref) => {
    return (
        <article ref={ref} className={`card bg-gradient-primary p-6 ${className} max-w-96`}>
            <h3 className="text-xl font-semibold text-primary/90">{title}</h3>
            <p className="text-muted text-gradient leading-relaxed">{text}</p>
        </article>
    );
});
