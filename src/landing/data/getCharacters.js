import luffyMobile700 from "@/assets/images/avatars/luffy/luffy-happy-700.webp";
import luffyDesktop from "@/assets/images/ModalImgs/luffy-modal.webp";
import luffyMobile400 from "../../../public/luffy-happy-400.webp";

// Zoro
import zoroMobile700 from "@/assets/images/avatars/zoro/zoro-happy-700.webp";
import zoroDesktop from "@/assets/images/ModalImgs/zoro-modal.webp";
import zoroMobile400 from "../../../public/zoro-happy-400.webp";

// Sanji
import sanjiMobile700 from "@/assets/images/avatars/sanji/sanji-happy-700.webp";
import sanjiDesktop from "@/assets/images/ModalImgs/sanji-modal.webp";
import sanjiMobile400 from "../../../public/sanji-happy-400.webp";

// Nami
import namiMobile700 from "@/assets/images/avatars/nami/nami-happy-700.webp";
import namiDesktop from "@/assets/images/ModalImgs/nami-modal.webp";
import namiMobile400 from "../../../public/nami-happy-400.webp";

// Usopp
import usoppMobile700 from "@/assets/images/avatars/usopp/usopp-happy-700.webp";
import usoppDesktop from "@/assets/images/ModalImgs/usopp-modal.webp";
import usoppMobile400 from "../../../public/usopp-happy-400.webp";

// Chopper
import chopperMobile700 from "@/assets/images/avatars/chopper/chopper-preskip-700.webp";
import chopperDesktop from "@/assets/images/ModalImgs/chopper-modal.webp";
import chopperMobile400 from "../../../public/chopper-preskip-400.webp";

// Robin
import robinMobile700 from "@/assets/images/avatars/robin/robin-happy-700.webp";
import robinDesktop from "@/assets/images/ModalImgs/robin-modal.webp";
import robinMobile400 from "../../../public/robin-happy-400.webp";

// Brook
import brookMobile700 from "@/assets/images/avatars/brook/brook-preskip-700.webp";
import brookDesktop from "@/assets/images/ModalImgs/brook-modal.webp";
import brookMobile400 from "../../../public/brook-preskip-400.webp";

// Jimbe
import jimbeMobile700 from "@/assets/images/avatars/jimbe/jimbe-preskip-700.webp";
import jimbeDesktop from "@/assets/images/ModalImgs/jimbe-modal.webp";
import jimbeMobile400 from "../../../public/jimbe-preskip-400.webp";

import { languages } from "@/helpers/languages";

export const getCharacters = (lang) => [
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
