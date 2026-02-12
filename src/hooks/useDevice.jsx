import { DeviceContext } from "@/context/DeviceContext";
import { useContext } from "react";

export const useDevice = () => {
    const context = useContext(DeviceContext);

    if (!context) {
        throw new Error("useDevice must be used within a DeviceProvider");
    }

    const { device } = context;

    const isMobileXs = device === "mobileXs";
    const isMobile = device === "mobile";
    const isTablet = device === "tablet";
    const isTabletXl = device === "tabletXl";
    const isDesktop = device === "desktop" || device === "desktopXl";

    return { device, isMobileXs, isMobile, isTablet, isTabletXl, isDesktop };
};
