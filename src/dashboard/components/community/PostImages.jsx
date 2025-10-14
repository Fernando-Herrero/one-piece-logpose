export const PostImages = ({ images }) => {
    if (images.length === 0) return null;

    return (
        <div className="w-full max-h-36 overflow-hidden rounded">
            <img className="object-cover object-center w-full h-full" src={images} alt="Post image" />
        </div>
    );
};
