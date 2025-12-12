import { createContext, useEffect, useMemo, useState } from "react";

export const DeviceContext = createContext(null);

export const DeviceProvider = ({ children }) => {
    console.log("Render DeviceProvider");

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const value = useMemo(() => ({ width }), [width]);

    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};
