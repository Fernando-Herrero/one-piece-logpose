import { storage } from "../../helpers/storage";

export const saveUserInLocalStorage = (user) => storage.save("user", user);

export const getUserFromLocalStorage = () => storage.get("user");

export const removeUserFromLocalStorage = () => storage.remove("user");

export const saveTokenInLocalStorage = (token) => storage.save("token", token);

export const getTokenFromLocalStorage = () => storage.get("token");

export const removeTokenFromLocalStorage = () => storage.remove("token");
