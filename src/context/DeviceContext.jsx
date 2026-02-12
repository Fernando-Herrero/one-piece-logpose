import { createContext, useEffect, useMemo, useState } from "react";

export const DeviceContext = createContext(null);

const getDeviceFromWidth = (w) => {
    if (w >= 1280) return "desktopXl";
    if (w >= 1024) return "desktop";
    if (w >= 768) return "tabletXl";
    if (w >= 550) return "tablet";
    if (w >= 376) return "mobile";
    return "mobileXs";
};

export const DeviceProvider = ({ children }) => {
    const [device, setDevice] = useState(getDeviceFromWidth(window.innerWidth));

    useEffect(() => {
        const updateDevice = () => {
            const newDevice = getDeviceFromWidth(window.innerWidth);
            setDevice((prev) => (prev !== newDevice ? newDevice : prev));
        };

        window.addEventListener("resize", updateDevice);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const value = useMemo(() => ({ device }), [device]);

    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};
