import { useState } from "react";

export const useToggle = (initialValue = false) => {
    const [state, setState] = useState(!!initialValue);

    const toggleState = () => {
        setState((prev) => !prev);
    };

    return [state, toggleState];
};
