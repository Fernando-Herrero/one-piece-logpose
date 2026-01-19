import type { Character } from "./../types/avatar.types";
// Luffy
import luffyS400 from "@/assets/images/avatars/luffy/luffy-serious-400.webp";
const luffyH400 = "/luffy-happy-400.webp";

// Zoro
import zoroS400 from "@/assets/images/avatars/zoro/zoro-serious-400.webp";
const zoroH400 = "/zoro-happy-400.webp";

// Nami
import namiS400 from "@/assets/images/avatars/nami/nami-serious-400.webp";
const namiH400 = "/nami-happy-400.webp";

// Sanji
import sanjiS400 from "@/assets/images/avatars/sanji/sanji-serious-400.webp";
const sanjiH400 = "/sanji-happy-400.webp";

// Usopp
import usoppS400 from "@/assets/images/avatars/usopp/usopp-serious-400.webp";
const usoppH400 = "/usopp-happy-400.webp";

// Array de personajes
export const characters: Character[] = [
    { name: "Luffy", serious: luffyS400, happy: luffyH400 },
    { name: "Zoro", serious: zoroS400, happy: zoroH400 },
    { name: "Nami", serious: namiS400, happy: namiH400 },
    { name: "Sanji", serious: sanjiS400, happy: sanjiH400 },
    { name: "Usopp", serious: usoppS400, happy: usoppH400 },
];
