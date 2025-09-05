import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import EyeSlash from "../assets/icons/eye-slash-solid-full.svg";
import Eye from "../assets/icons/eye-solid-full.svg";
import { LanguagesContext } from "../context/LanguagesContext";
import { UserContext } from "../context/UserContext";
import { languages } from "../data/languages";
import { storage } from "../helpers/storage";
import { useLoginValidation } from "../hooks/useLoginValidation";
import { useToggle } from "../hooks/useToggle";
import { Button } from "./button";

const emptyUser = { id: "", username: "", password: "", experience: "" };

export const LoginForm = () => {
    const savedForm = storage.get("loginInputs");
    const [form, setForm] = useState(savedForm || emptyUser);

    const [isVisible, toggleVisible] = useToggle();
    const { error, validateForm, clearError } = useLoginValidation();

    const { lang } = useContext(LanguagesContext);
    const { login } = useContext(UserContext);

    const handleInputForm = ({ target: { name, value } }) => {
        clearError();
        setForm((prev) => {
            const newForm = { ...prev, [name]: value };
            storage.save("loginInputs", newForm);
            return newForm;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationError = validateForm(form, lang);
        if (validationError) return;

        login(form);
    };

    return (
        <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 w-52 border border-linePrimary p-2 rounded shadow-default bg-secondary">
                <label className="flex flex-col text-base ">
                    Username:
                    <input
                        className="no-focus rounded p-1 bg-white"
                        type="text"
                        name="username"
                        autoComplete="off"
                        placeholder={languages[lang].login.username}
                        value={form.username}
                        onChange={handleInputForm}
                    />
                </label>

                <label className="flex flex-col text-base">
                    {languages[lang].login.password}
                    <div className="flex items-center relative">
                        <input
                            className="w-full p-1 rounded no-focus bg-white"
                            type={isVisible ? "text" : "password"}
                            name="password"
                            autoComplete="off"
                            placeholder={languages[lang].login.passwordMessage}
                            value={form.password}
                            onChange={handleInputForm}
                        />
                        <button
                            className="absolute right-1 flex items-center w-4 bg-transparent cursor-pointer"
                            type="button"
                            onClick={toggleVisible}
                        >
                            <img
                                src={isVisible ? EyeSlash : Eye}
                                alt={isVisible ? "Hide password" : "Show password"}
                            />
                        </button>
                    </div>
                </label>
            </div>

            <p className="self-center">
                {languages[lang].login.notRegistered}{" "}
                <Link className="underline text-secondary" to="/login/register">
                    {languages[lang].login.registered}
                </Link>
            </p>

            <Button type="submit" className="bg-accent hover:bg-accentHover">
                Login
            </Button>

            {error && <p className="self-center text-linePrimary">{error}</p>}
        </form>
    );
};
