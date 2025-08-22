import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({ id: "", username: "", password: "", experience: "" });
	const [avatar, setAvatar] = useState(null);

	return <UserContext value={{ user, avatar }}>{children}</UserContext>;
};
