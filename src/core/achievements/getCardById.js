import { boats } from "@/dashboard/data/serieData/boats";
import { characters } from "@/dashboard/data/serieData/characters";
import { fruits } from "@/dashboard/data/serieData/fruits";
import { items } from "@/dashboard/data/serieData/items";
import { swords } from "@/dashboard/data/serieData/swords";

export const getCharacterCard = (characterId) => {
    return characters.find((character) => character.character_id === characterId);
};
export const getItemCard = (itemId) => {
    return items.find((item) => item.item_id === itemId);
};
export const getFruitCard = (fruitId) => {
    return fruits.find((fruit) => fruit.fruit_id === fruitId);
};
export const getSwordCard = (swordId) => {
    return swords.find((sword) => sword.sword_id === swordId);
};
export const getBoatCard = (boatId) => {
    return boats.find((boat) => boat.boat_id === boatId);
};
