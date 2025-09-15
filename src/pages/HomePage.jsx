import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import homeMobileBg from "../assets//images/backgrounds/home-mobile-bgMask.webp";
import downArrow from "../assets/icons/down-arrow.svg";
import homeBg from "../assets/images/backgrounds/home-bgMask.avif";
import { BackUpPage } from "../components/features/BackUpPage";
import { useDevice } from "../hooks/useDevice";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const { isMobile, isTablet, isTabletXl, isDesktop, device } = useDevice();

    const heroImgRef = useRef(null);
    const logoMask = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const maskMap = {
        mobile: "30vh",
        tablet: "35vh",
        tabletXl: "40vh",
    };

    const subTitle = {
        mobile: "70vh",
        tablet: "73vh",
        tabletXl: "75vh",
        desktop: "75vh",
        desktopXl: "75vh",
    };

    const maskSettings = maskMap[device] || maskMap["tabletXl"];
    const subtitleSettings = subTitle[device];

    const heightdevice = {
        mobile: "h-[285vh]",
        tablet: "h-[260vh]",
        tabletXl: "h-[265vh]",
        desktop: "h-[200vh]",
        desktopXl: "h-[200vh]",
    };

    const heightContainer = heightdevice[device];

    console.log("Device actual:", device);
    console.log("Height aplicada:", heightContainer);
    console.log("Todas las variables:", { isMobile, isTablet, isTabletXl, isDesktop });

    useEffect(() => {
        const tl = gsap.timeline({
            ease: "power2.out",
            scrollTrigger: {
                scrub: 1,
                trigger: document.body,
                start: "top top",
                end: "+=500",
            },
        });

        gsap.set(logoMask.current, {
            maskSize: "5500vh",
            maskPosition: "44%  -1600vh",
        });

        gsap.set(titleRef.current, {
            opacity: 0,
            y: "60vh",
            x: "55%",
        });

        gsap.set(contentRef.current, {
            opacity: 0,
            y: "100vh",
        });

        tl.to(
            logoMask.current,
            {
                maskSize: maskSettings,
                maskPosition: "50% 10vh",
                duration: 1,
                ease: "power1.inOut",
            },
            0.01
        )
            .to(
                titleRef.current,
                {
                    opacity: 1,
                    y: subtitleSettings,
                    x: "55%",
                    duration: 1,
                    ease: "power2.out",
                },
                1.5
            )
            .to(
                heroImgRef.current,
                {
                    scale: 1,
                    transformOrigin: "center center",
                },
                "<"
            )
            .to(
                contentRef.current,
                {
                    opacity: 1,
                    y: "80vh",
                    ease: "power2.out",
                },
                "<"
            )
            .to(
                heroImgRef.current,
                {
                    opacity: 0,
                },
                1.2
            )
            .to(
                logoMask.current,
                {
                    maskPosition: "50% -40vh",
                    ease: "power1.inOut",
                },
                2
            )
            .to(
                titleRef.current,
                {
                    opacity: 0,
                    ease: "power2.out",
                },
                2
            );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [maskSettings]);

    return (
        <div className={heightContainer}>
            <section ref={logoMask} className="fixed top-0 w-full h-screen logo-mask">
                <picture ref={heroImgRef} className="w-full h-screen overflow-hidden fixed scale-120">
                    <img
                        className="w-full h-full object-cover"
                        src={isMobile || isTablet ? homeMobileBg : homeBg}
                        alt="Crew Straw Hat"
                    />
                </picture>

                <div className="absolute z-10 bottom-10 left-[50%] -translate-x-1/2 bg-gradient-primary p-4 rounded-xl text center animate-bounce perfect-center">
                    <p className="text-4xl font-family-pirate">SCROLL</p>
                    <img className="w-4" src={downArrow} alt="icon down arrow" />
                </div>
            </section>
            <h2 ref={titleRef} className="title-glow text-subtitle">
                LogPose
            </h2>

            <section ref={contentRef}>
                <BackUpPage />
            </section>
        </div>
    );
};
