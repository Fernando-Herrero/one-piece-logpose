import { createContext, useState } from "react";

export const AvatarContext = createContext(null);

export const AvatarContextProvider = ({ children }) => {
	const [selectedAvatar, setSelectedAvatar] = useState(null);

	return <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>{children}</AvatarContext.Provider>;
};
