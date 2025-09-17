import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { Container } from "@/landing/components/ui/Container";
import { useContext, useState } from "react";

// Luffy
import luffyMobile400 from "@/assets/images/avatars/luffy/luffy-happy-400.webp";
import luffyMobile700 from "@/assets/images/avatars/luffy/luffy-happy-700.webp";
import luffyLies from "@/assets/images/luffy-lies.webp";
import luffyDesktop from "@/assets/images/ModalImgs/luffy-modal.webp";

// Zoro
import zoroMobile400 from "@/assets/images/avatars/zoro/zoro-happy-400.webp";
import zoroMobile700 from "@/assets/images/avatars/zoro/zoro-happy-700.webp";
import zoroDesktop from "@/assets/images/ModalImgs/zoro-modal.webp";

// Sanji
import sanjiMobile400 from "@/assets/images/avatars/sanji/sanji-happy-400.webp";
import sanjiMobile700 from "@/assets/images/avatars/sanji/sanji-happy-700.webp";
import sanjiDesktop from "@/assets/images/ModalImgs/sanji-modal.webp";

// Nami
import namiMobile400 from "@/assets/images/avatars/nami/nami-happy-400.webp";
import namiMobile700 from "@/assets/images/avatars/nami/nami-happy-700.webp";
import namiDesktop from "@/assets/images/ModalImgs/nami-modal.webp";

// Usopp
import usoppMobile400 from "@/assets/images/avatars/usopp/usopp-happy-400.webp";
import usoppMobile700 from "@/assets/images/avatars/usopp/usopp-happy-700.webp";
import usoppDesktop from "@/assets/images/ModalImgs/usopp-modal.webp";

// Chopper
import chopperMobile400 from "@/assets/images/avatars/chopper/chopper-preskip-400.webp";
import chopperMobile700 from "@/assets/images/avatars/chopper/chopper-preskip-700.webp";
import chopperDesktop from "@/assets/images/ModalImgs/chopper-modal.webp";

// Robin
import robinMobile400 from "@/assets/images/avatars/robin/robin-happy-400.webp";
import robinMobile700 from "@/assets/images/avatars/robin/robin-happy-700.webp";
import robinDesktop from "@/assets/images/ModalImgs/robin-modal.webp";

// Brook
import brookMobile400 from "@/assets/images/avatars/brook/brook-preskip-400.webp";
import brookMobile700 from "@/assets/images/avatars/brook/brook-preskip-700.webp";
import brookDesktop from "@/assets/images/ModalImgs/brook-modal.webp";

// Jimbe
import jimbeMobile400 from "@/assets/images/avatars/jimbe/jimbe-preskip-400.webp";
import jimbeMobile700 from "@/assets/images/avatars/jimbe/jimbe-preskip-700.webp";
import jimbeDesktop from "@/assets/images/ModalImgs/jimbe-modal.webp";

import lettersBg from "@/assets/images/onepiece-japanese.webp";
import { Button } from "@/landing/components/ui/Button";
import classNames from "classnames";

const getCharacters = (lang) => [
    {
        name: "Monkey D. Luffy",
        text: languages[lang].characters.luffyText,
        images: [luffyMobile400, luffyMobile700, luffyDesktop],
    },
    {
        name: "Roronoa Zoro",
        text: languages[lang].characters.zoroText,
        images: [zoroMobile400, zoroMobile700, zoroDesktop],
    },
    {
        name: "Sanji",
        text: languages[lang].characters.sanjiText,
        images: [sanjiMobile400, sanjiMobile700, sanjiDesktop],
    },
    {
        name: "Nami",
        text: languages[lang].characters.namiText,
        images: [namiMobile400, namiMobile700, namiDesktop],
    },
    {
        name: "Usopp",
        text: languages[lang].characters.usoppText,
        images: [usoppMobile400, usoppMobile700, usoppDesktop],
    },
    {
        name: "Tony Chopper",
        text: languages[lang].characters.chopperText,
        images: [chopperMobile400, chopperMobile700, chopperDesktop],
    },
    {
        name: "Nico Robin",
        text: languages[lang].characters.robinText,
        images: [robinMobile400, robinMobile700, robinDesktop],
    },
    {
        name: "Brook",
        text: languages[lang].characters.brookText,
        images: [brookMobile400, brookMobile700, brookDesktop],
    },
    {
        name: "Jimbe",
        text: languages[lang].characters.jimbeText,
        images: [jimbeMobile400, jimbeMobile700, jimbeDesktop],
    },
];

const RenderArticle = ({ name, text, images, isLastImg }) => {
    return (
        <article className="card items-center bg-gradient-primary max-w-[300px] overflow-hidden group lg:flex-row lg:gap-4 lg:max-w-[400px] lg:min-h-80 lg:overflow-visible">
            <div className="w-full lg:h-full lg:relative lg:bg-primary/80 lg:rounded-tl-xl lg:rounded-bl-xl">
                <picture className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 lg:h-full lg:absolute lg:top-0 lg:left-3 lg:group-hover:scale-110 z-20">
                    <source srcSet={images[2]} media="(min-width: 1024px)" type="image/webp" />
                    <source srcSet={images[1]} media="(min-width: 700px)" type="image/webp" />
                    <source srcSet={images[0]} media="(min-width: 400px)" type="image/webp" />
                    <img
                        src={images[0]}
                        alt={name}
                        className={classNames(
                            "block w-full max-h-40 object-cover lg:max-h-none lg:h-full  lg:object-cover lg:object-[center_-5px] lg:min-w-50",
                            {
                                "object-[center_-4px]": isLastImg,
                            }
                        )}
                    />
                </picture>
            </div>

            <div className="px-6 pb-4 text-center lg:max-w-55">
                <h5 className="text-xl font-bold text-primary lg:text-right">{name}</h5>
                <p className="text-gradient lg:text-right lg:pl-7">{text}</p>
            </div>
        </article>
    );
};

export const CharactersPage = () => {
    const { lang } = useContext(LanguagesContext);
    const characters = getCharacters(lang);
    const [chooseChars, setChooseChars] = useState(characters.slice(0, 5));

    return (
        <Container className="h-full w-full">
            <section
                className="bg-cover bg-no-repeat bg-center h-full w-full flex flex-col items-center gap-4 pb-20"
                style={{
                    backgroundImage: `url(${lettersBg})`,
                }}
            >
                <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:overflow-visibl">
                    {chooseChars.map(({ name, text, images }, index) => {
                        const isLastImg = index === chooseChars.length - 1;

                        return (
                            <RenderArticle
                                key={`${name}-${index}`}
                                name={name}
                                text={text}
                                images={images}
                                isLastImg={isLastImg}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-col items-center gap-2 text-center rounded-xl bg-secondary/80 backdrop-blur-sm p-6">
                    <p className="text-gradient-secondary">{languages[lang].characters.finalText}</p>
                    <img className="w-30 shadow-default rounded-2xl" src={luffyLies} alt="Luffy face lying" />
                    <p className="text-gradient-secondary">{languages[lang].characters.finalTextTwo}</p>
                    <Button variant="danger" onClick={() => setChooseChars(characters)}>
                        Ver
                    </Button>
                </div>
            </section>
        </Container>
    );
};
