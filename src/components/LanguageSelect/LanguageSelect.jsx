import { useContext } from "react";
import { LanguagesContext } from "../../context/LanguagesContext";
import "./LanguageSelect.css";

export const LanguageSelect = () => {
	const { lang, handleLang } = useContext(LanguagesContext);

	return (
		<select
			className="language-select"
			name="select"
			id="select"
			value={lang}
			onChange={(e) => handleLang(e.target.value)}
		>
			<option value="es">🇪🇸 Español</option>
			<option value="en">🇬🇧 English</option>
		</select>
	);
};
