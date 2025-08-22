import { useEffect } from "react";
import { storage } from "../helpers/storage";

export const useStorage = (key, value) => {
	useEffect(() => {
		if (value !== null && value !== undefined) storage.save(key, value);
	}, [key, value]);
};
