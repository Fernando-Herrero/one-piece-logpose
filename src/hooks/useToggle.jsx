import { useState } from "react";

export const useToggle = (initialValue = false) => {
    const [state, setState] = useState(initialValue);

    const toggleState = (id) => {
        if (id !== undefined) {
            setState((prev) => ({ ...prev, [id]: !prev[id] }));
        } else {
            setState((prev) => !prev);
        }
    };

    const setTrue = () => {
        setState(true);
    };

    const setFalse = () => {
        setState(false);
    };

    return [state, toggleState, setTrue, setFalse];
};
