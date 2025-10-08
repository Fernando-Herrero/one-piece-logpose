import map1024 from "@/assets/images/map/map-1024.webp";
import map400 from "@/assets/images/map/map-400.webp";
import map700 from "@/assets/images/map/map-700.webp";

export const MapSection = () => {
    return (
        <picture className="w-full sm:min-w[400px] lg:min-w-[500px] filter contrast-100 brightness-100">
            <source srcSet={map1024} media="(min-width: 800px)" type="image/webp" />
            <source srcSet={map700} media="(min-width: 600px)" type="image/webp" />
            <source srcSet={map400} media="(min-width: 400px)" type="image/webp" />
            <img src={map400} alt="One Piece map" />
        </picture>
    );
};
