export const PostImages = ({ images }) => {
    if (images.length === 0) return null;

    return <img className="rounded" src={images} alt="Post image" />;
};
