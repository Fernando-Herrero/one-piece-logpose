import { ResponsiveImage } from "@/landing/components/ui/ResponsiveImage";

export const CharacterCard = ({ name, text, images, isLast }) => (
    <article className="card items-center bg-gradient-card max-w-[300px] overflow-hidden group lg:flex-row lg:gap-4 lg:max-w-full lg:min-h-80 lg:overflow-visible">
        <div className="w-full lg:h-full lg:relative lg:bg-primary/80 lg:rounded-tl-xl lg:rounded-bl-xl">
            <ResponsiveImage images={images} alt={name} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-2 px-6 pb-4 text-center lg:max-w-55">
            <h5 className="text-xl font-bold text-primary lg:text-right">{name}</h5>
            <p className="text-gradient lg:text-right lg:pl-7">{text}</p>
        </div>
    </article>
);
