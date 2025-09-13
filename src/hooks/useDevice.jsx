import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

export const useDevice = () => {
    const { width } = useContext(DeviceContext);

    if (width === null) throw new Error("useDevice debe ser usado dentro de un DeviceProvider");

    const getDeviceType = () => {
        if (width >= 1280) return "desktopXl";
        if (width >= 1024) return "desktop";
        if (width >= 768) return "tabletXl";
        if (width >= 550) return "tablet";
        return "mobile";
    };

    const device = getDeviceType();

    const isMobile = device === "mobile";
    const isTablet = device === "tablet";
    const isTabletXl = device === "tabletXl";
    const isDesktop = device === "desktop" || device === "desktopXl";

    return { width, device, isMobile, isTablet, isTabletXl, isDesktop };
};
