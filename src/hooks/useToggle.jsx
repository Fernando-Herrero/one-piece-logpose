import { useState } from "react";

export const useToggle = (initialValue = false) => {
    console.log("Render useToggle");

    const [state, setState] = useState(!!initialValue);

    const toggleState = () => {
        setState((prev) => !prev);
    };

    const setTrue = () => {
        setState(true);
    };

    const setFalse = () => {
        setState(false);
    };

    return [state, toggleState, setTrue, setFalse];
};
