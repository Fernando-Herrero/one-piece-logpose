import "./Footer.css";
import { useContext } from "react";
import { LanguagesContext } from "../../context/LanguagesContext";
import { languages } from "../../data/languages";
import { LanguageSelect } from "../../components/LanguageSelect/LanguageSelect";

export const Footer = () => {
	const { lang } = useContext(LanguagesContext);

	return (
		<section className="footer-container container">
			<LanguageSelect />

			<div className="footer-text">
				<p className="disclaimer">{languages[lang].footer.disclaimer}</p>
				<p className="copyright">
					{" "}
					&copy; {new Date().getFullYear()} {languages[lang].footer.copyright}
				</p>
			</div>
		</section>
	);
};
