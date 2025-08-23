import "./Overlay.css";

export const Overlay = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="overlay" onClick={onClose}>
			<div className="overlay-content" onClick={(event) => event.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
