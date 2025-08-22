import { createContext, useRef, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({ id: "", username: "", password: "", experience: "" });
	const [avatar, setAvatar] = useState(null);
	const nextId = useRef(1);

	const login = (form) => {
		setUser({ ...form, id: Date.now() + nextId.current, password: "", experience: 0 });
	};

	const logout = () => {};

	return <UserContext value={{ user, avatar, login }}>{children}</UserContext>;
};
