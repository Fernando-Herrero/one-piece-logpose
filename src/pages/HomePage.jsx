import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import homeMobileBg from "../assets//images/backgrounds/home-mobile-bgMask.webp";
import homeBg from "../assets/images/backgrounds/home-bgMask.avif";
import { useDevice } from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const { isMobile, isTablet, istabletXl, isDesktop, device } = useDevice();

    const heroImgRef = useRef(null);
    const logoMask = useRef(null);

    const maskMap = {
        mobile: "30vh",
        tablet: "35vh",
        tabletXl: "40vh",
    };

    const maskSettings = maskMap[device] || maskMap["tabletXl"];

    useEffect(() => {
        const tl = gsap.timeline({
            ease: "power2.out",
            scrollTrigger: {
                scrub: 1,
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
            },
        });

        gsap.set(logoMask.current, {
            maskSize: "5500vh",
            maskPosition: "44%  -1600vh",
        });

        tl.to(
            heroImgRef.current,
            {
                scale: 1,
                transformOrigin: "center center",
                duration: 0.4,
            },
            0.1
        )
            .to(
                logoMask.current,
                {
                    maskSize: maskSettings,
                    maskPosition: "50% 10vh",
                    duration: 0.5,
                    ease: "power1.inOut",
                },
                0.01
            )
            .to(
                heroImgRef.current,
                {
                    opacity: 0,
                    duration: 0.2,
                },
                0.3
            );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [maskSettings]);

    return (
        <>
            <div ref={logoMask} className="fixed top-0 w-full h-screen logo-mask">
                <picture ref={heroImgRef} className="w-full h-screen overflow-hidden fixed scale-120">
                    <img
                        className="w-full h-full object-cover"
                        src={isMobile || isTablet ? homeMobileBg : homeBg}
                        alt="Crew Straw Hat"
                    />
                </picture>
            </div>
            <Outlet />
        </>
    );
};
