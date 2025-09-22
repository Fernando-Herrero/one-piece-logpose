// Luffy
import luffyH1024 from "/src/assets/images/avatars/luffy/luffy-happy-1024.webp";
import luffyH400 from "/src/assets/images/avatars/luffy/luffy-happy-400.webp";
import luffyH700 from "/src/assets/images/avatars/luffy/luffy-happy-700.webp";
import luffyS1024 from "/src/assets/images/avatars/luffy/luffy-serious-1024.webp";
import luffyS400 from "/src/assets/images/avatars/luffy/luffy-serious-400.webp";
import luffyS700 from "/src/assets/images/avatars/luffy/luffy-serious-700.webp";

// Zoro
import zoroH1024 from "/src/assets/images/avatars/zoro/zoro-happy-1024.webp";
import zoroH400 from "/src/assets/images/avatars/zoro/zoro-happy-400.webp";
import zoroH700 from "/src/assets/images/avatars/zoro/zoro-happy-700.webp";
import zoroS1024 from "/src/assets/images/avatars/zoro/zoro-serious-1024.webp";
import zoroS400 from "/src/assets/images/avatars/zoro/zoro-serious-400.webp";
import zoroS700 from "/src/assets/images/avatars/zoro/zoro-serious-700.webp";

// Nami
import namiH1024 from "/src/assets/images/avatars/nami/nami-happy-1024.webp";
import namiH400 from "/src/assets/images/avatars/nami/nami-happy-400.webp";
import namiH700 from "/src/assets/images/avatars/nami/nami-happy-700.webp";
import namiS1024 from "/src/assets/images/avatars/nami/nami-serious-1024.webp";
import namiS400 from "/src/assets/images/avatars/nami/nami-serious-400.webp";
import namiS700 from "/src/assets/images/avatars/nami/nami-serious-700.webp";

// Sanji
import sanjiH1024 from "/src/assets/images/avatars/sanji/sanji-happy-1024.webp";
import sanjiH400 from "/src/assets/images/avatars/sanji/sanji-happy-400.webp";
import sanjiH700 from "/src/assets/images/avatars/sanji/sanji-happy-700.webp";
import sanjiS1024 from "/src/assets/images/avatars/sanji/sanji-serious-1024.webp";
import sanjiS400 from "/src/assets/images/avatars/sanji/sanji-serious-400.webp";
import sanjiS700 from "/src/assets/images/avatars/sanji/sanji-serious-700.webp";

// Usopp

import usoppH1024 from "/src/assets/images/avatars/usopp/usopp-happy-1024.webp";
import usoppH400 from "/src/assets/images/avatars/usopp/usopp-happy-400.webp";
import usoppH700 from "/src/assets/images/avatars/usopp/usopp-happy-700.webp";
import usoppS1024 from "/src/assets/images/avatars/usopp/usopp-serious-1024.webp";
import usoppS400 from "/src/assets/images/avatars/usopp/usopp-serious-400.webp";
import usoppS700 from "/src/assets/images/avatars/usopp/usopp-serious-700.webp";

export const characters = [
    {
        name: "Luffy",
        serious: [luffyS400, luffyS700, luffyS1024],
        happy: [luffyH400, luffyH700, luffyH1024],
    },
    { name: "Zoro", serious: [zoroS400, zoroS700, zoroS1024], happy: [zoroH400, zoroH700, zoroH1024] },
    { name: "Nami", serious: [namiS400, namiS700, namiS1024], happy: [namiH400, namiH700, namiH1024] },
    {
        name: "Sanji",
        serious: [sanjiS400, sanjiS700, sanjiS1024],
        happy: [sanjiH400, sanjiH700, sanjiH1024],
    },
    {
        name: "Usopp",
        serious: [usoppS400, usoppS700, usoppS1024],
        happy: [usoppH400, usoppH700, usoppH1024],
    },
];
