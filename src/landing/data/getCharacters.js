import luffyMobile400 from "@/assets/images/avatars/luffy/luffy-happy-400.webp";
import luffyMobile700 from "@/assets/images/avatars/luffy/luffy-happy-700.webp";
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
