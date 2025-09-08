import { useEffect, useState } from "react";

export const AnimationTitle = ({ text, time, time2, className = "" }) => {
    const [phase, setPhase] = useState("idle");

    useEffect(() => {
        setPhase("idle");
        const timer1 = setTimeout(() => setPhase("falling"), time);
        const timer2 = setTimeout(() => setPhase("fading-in"), time + 2000 + time2);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [time, time2]);

    return (
        <h1 className={className}>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={
                        phase === "falling"
                            ? "falling-letter"
                            : phase === "fading-in"
                            ? "fading-in-letter"
                            : "idle-letter"
                    }
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {char}
                </span>
            ))}
        </h1>
    );
};
