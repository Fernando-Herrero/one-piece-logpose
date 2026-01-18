import { storage } from "../../helpers/storage";
import type { User } from "../../types/auth.types";

export const saveUserInLocalStorage = (user: User) => storage.save("user", user);

export const getUserFromLocalStorage = (): User | null => storage.get("user");

export const removeUserFromLocalStorage = () => storage.remove("user");

export const saveTokenInLocalStorage = (token: string) => storage.save("token", token);

export const getTokenFromLocalStorage = (): string | null => storage.get("token");

export const removeTokenFromLocalStorage = () => storage.remove("token");
