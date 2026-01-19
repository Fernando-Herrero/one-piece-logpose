import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const DeviceContext = createContext<DeviceContextType | null>(null);

export type DeviceContextType = {
    width: number;
};

export interface DeviceContextProps {
    children: ReactNode;
}

export const DeviceProvider = ({ children }: DeviceContextProps) => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);

        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const value = useMemo(() => ({ width }), [width]);

    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};
