import { createContext, useState } from "react";

export const SagaContext = createContext(null);

export const SagaContextProvider = ({ children }) => {
	const [saga, setSaga] = useState({ saga: "", chapter: "" });

	const nextChapter = () => {
		setSaga((prev) => ({ ...prev, chapter: prev.chapter + 1 }));
	};

	const nextSaga = () => {
		setSaga((prev) => ({ ...prev, saga: prev.saga + 1, chapter: 0 }));
	};

	return <SagaContext.Provider value={{ saga, setSaga, nextChapter, nextSaga }}>{children}</SagaContext.Provider>;
};
