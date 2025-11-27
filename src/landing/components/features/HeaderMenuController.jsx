import { useToggle } from "@/hooks/useToggle";
import { MobileMenu } from "@/landing/components/features/MobileMenu";
import { ButtonMobileMenu } from "@/landing/components/ui/ButtonMobileMenu";
import { memo } from "react";

export const HeaderMenuController = memo(() => {
    const [isOpen, toggleMenu] = useToggle();
    return (
        <>
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            <ButtonMobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
});
