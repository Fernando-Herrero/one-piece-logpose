import { forwardRef } from "react";

export const Cards = forwardRef(({ title, text, className }, ref) => {
    return (
        <article ref={ref} className={`card ${className} max-w-96`}>
            <h3 className="text-xl font-semibold text-primary/90">{title}</h3>
            <p className="text-muted leading-relaxed">{text}</p>
        </article>
    );
});
