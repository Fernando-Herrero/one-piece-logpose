import { useState } from "react";

export const useToggle = () => {
	const [state, setState] = useState(false);

	const toggleState = () => {
		setState((prev) => !prev);
	};

	return [state, toggleState];
};
