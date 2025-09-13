import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

export const useDevice = () => {
    const { width } = useContext(DeviceContext);

    if (width === null) throw new Error("useDevice debe ser usado dentro de un DeviceProvider");

    const getDeviceType = () => {
        if (window.innerWidth >= 1280) return "desktopXl";
        if (window.innerWidth >= 1024) return "desktop";
        if (window.innerWidth >= 768) return "tabletXl";
        if (window.innerWidth >= 640) return "tablet";
        return "mobile";
    };

    const device = getDeviceType();

    const isMobile = device === "mobile";
    const isTablet = device === "tablet" || device === "tabletXl";
    const isDesktop = device === "desktop" || device === "desktopXl";

    return { width, device, isMobile, isTablet, isDesktop };
};
