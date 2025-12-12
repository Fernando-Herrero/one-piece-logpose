import { storage } from "@/helpers/storage";
import { useEffect } from "react";

export const useStorage = (key, value) => {
    console.log("Render useStorage");

    useEffect(() => {
        if (value !== null && value !== undefined) storage.save(key, value);
    }, [key, value]);
};
