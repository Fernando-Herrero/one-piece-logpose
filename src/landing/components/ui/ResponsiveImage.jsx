import classNames from "classnames";

export const ResponsiveImage = ({ images, alt, isLast }) => (
    <picture className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 lg:h-full lg:absolute lg:top-0 lg:left-3 lg:group-hover:scale-110 z-20">
        <source srcSet={images[2]} media="(min-width: 1024px)" type="image/webp" />
        <source srcSet={images[1]} media="(min-width: 700px)" type="image/webp" />
        <source srcSet={images[0]} media="(min-width: 400px)" type="image/webp" />
        <img
            src={images[0]}
            alt={alt}
            className={classNames(
                "block w-full max-h-40 object-cover lg:max-h-none lg:h-full lg:object-cover lg:object-[center_-5px] lg:min-w-50",
                { "object-[center_-4px]": isLast }
            )}
        />
    </picture>
);
