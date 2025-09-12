import EyeSlash from "../../assets/icons/eye-slash-solid-full.svg";
import Eye from "../../assets/icons/eye-solid-full.svg";

export const EyeButton = ({ toggleVisible, isVisible }) => {
    return (
        <button
            className="absolute right-1 flex items-center w-4 bg-transparent cursor-pointer"
            type="button"
            onClick={toggleVisible}
        >
            <img src={isVisible ? EyeSlash : Eye} alt={isVisible ? "Hide password" : "Show password"} />
        </button>
    );
};
