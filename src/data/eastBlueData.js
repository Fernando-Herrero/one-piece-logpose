// eastBlueSaga.js
import eastBlueBg from "../assets/images/backgrounds/east-blue-saga.webp";
import orangeTownBg from "../assets/images/backgrounds/orange-town-bg.jpeg";
import romanceDawnBg from "../assets/images/backgrounds/romance-down-bg.jpg";

export const EAST_BLUE_SAGA = {
    id: 1,
    name: "East Blue Saga",
    name_japanese: "「東の海」編",
    description:
        "El humilde comienzo de una gran aventura. Monkey D. Luffy inicia su viaje para convertirse en el Rey de los Piratas, reuniendo una tripulación única mientras navega por el mar más débil de todos.",
    episodes: { start: 1, end: 61 },
    total_episodes: 61,
    background_image: eastBlueBg,
    arcs: {
        romance_dawn: {
            id: "romance_dawn",
            name: "Romance Dawn",
            background_image: romanceDawnBg,
            episodes: {
                1: {
                    characters: [
                        {
                            id: "monkey-d-luffy",
                            name: "Monkey D. Luffy",
                            rarity: "common",
                            bounty: 0,
                            crew: "none",
                            position: "none",
                        },
                        {
                            id: "kobby",
                            name: "Koby",
                            rarity: "common",
                        },
                        {
                            id: "alvida",
                            name: "Alvida",
                            rarity: "common",
                        },
                    ],
                    swords: [],
                    hakis: [],
                    items: [],
                },
                2: {
                    characters: [
                        {
                            id: "roronoa-zoro",
                            name: "Roronoa Zoro",
                            rarity: "common",
                            abilities: ["Santoryu"],
                        },
                    ],
                    swords: ["Wado Ichimonji"],
                    hakis: [],
                    items: [],
                },
                3: {
                    characters: [
                        {
                            id: "monkey-d-luffy",
                            name: "Monkey D. Luffy",
                            rarity: "uncommon",
                            crew: "straw-hat-crew",
                            position: "capitan",
                        },
                        {
                            id: "roronoa-zoro",
                            name: "Roronoa Zoro",
                            rarity: "common",
                        },
                    ],
                    swords: ["Wado Ichimonji"],
                    hakis: [],
                    items: [],
                },
            },
        },
        orange_town: {
            id: "orange_town",
            name: "Orange Town",
            background_image: orangeTownBg,
            episodes: {
                4: {
                    characters: [
                        {
                            id: "monkey d luffy kid",
                            name: "Monkey D. Luffy",
                            rarity: "common",
                        },
                        {
                            id: "shanks",
                            name: "Shanks",
                            rarity: "uncommon",
                        },
                    ],
                    swords: [],
                    hakis: [],
                    items: [{ id: "straw-hat", name: "Sombrero de Paja" }],
                },
                5: {
                    characters: [
                        {
                            id: "nami",
                            name: "Nami",
                            rarity: "common",
                        },
                        {
                            id: "buggy",
                            name: "Buggy",
                            rarity: "uncommon",
                        },
                    ],
                    swords: [],
                    hakis: [],
                    items: [],
                },
                6: {
                    characters: [
                        {
                            id: "roronoa-zoro",
                            name: "Roronoa Zoro",
                            rarity: "common",
                        },
                    ],
                    swords: ["Wado Ichimonji"],
                    hakis: [],
                    items: [],
                },
                7: {
                    characters: [],
                    swords: ["Buggy Ball"],
                    hakis: [],
                    items: [],
                },
                8: {
                    characters: [
                        {
                            id: "monkey-d-luffy",
                            name: "Monkey D. Luffy",
                            rarity: "common",
                        },
                        {
                            id: "nami",
                            name: "Nami",
                            rarity: "common",
                        },
                    ],
                    swords: [],
                    hakis: [],
                    items: [{ id: "buggy-treasure", name: "Tesoro de Buggy" }],
                },
            },
        },
    },
};
