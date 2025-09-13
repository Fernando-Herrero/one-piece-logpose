import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import homeBg from "../assets/images/backgrounds/home-bg.avif";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const heroImgRef = useRef(null);
    const logoMask = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            ease: "power2.out",
            scrollTrigger: {
                scrub: 1,
            },
        });

        gsap.set(logoMask.current, {
            maskSize: "4500vh",
            maskPosition: "4% -1400vh",
        });

        tl.to(
            heroImgRef.current,
            {
                scale: 1,
                transformOrigin: "center center",
                duration: 0.3,
            },
            0.2
        )
            .to(
                logoMask.current,
                {
                    maskSize: "30vh",
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
    }, []);

    return (
        <>
            <div ref={logoMask} className="fixed top-0 w-full h-screen logo-mask">
                <picture ref={heroImgRef} className="w-full h-screen overflow-hidden fixed scale-110">
                    <img className="w-full h-full object-cover" src={homeBg} alt="" />
                </picture>
            </div>
            <Outlet />
        </>
    );
};
