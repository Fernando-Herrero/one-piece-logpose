import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext(null);

export const DeviceProvider = ({ children }) => {
    const [width, setWidth] = useState("mobile");

    useEffect(() => {
        const updateWidth = () => window.innerWidth;

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return <DeviceContext.Provider value={{ width }}>{children}</DeviceContext.Provider>;
};
