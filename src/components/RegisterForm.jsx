import { useContext, useState } from "react";
import { LanguagesContext } from "../context/LanguagesContext";

export const RegisterForm = ({ lang, form, setForm }) => {
    const { lang } = useContext(LanguagesContext);

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        username: "",
    });
};
