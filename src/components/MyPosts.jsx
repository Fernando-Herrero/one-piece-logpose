import { LanguagesContext } from "@/context/LanguagesContext";
import { useUser } from "@/core/user/useUser";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { getMyPosts } = useUser();
    const { lang } = useContext(LanguagesContext);

    useEffect(() => {
        const fetchPosts = async () => {
            if (loading) return;
            try {
                setLoading(true);
                setError(null);

                const data = await getMyPosts();
                console.log("datadatadatadata", data);
                setMyPosts(data);
            } catch (error) {
                console.error("Error al obtener mis posts", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (!myPosts)
        return <p className="text-linePrimary text-center pt-10">{languages[lang].profile.noPosts}</p>;

    if (error) return <p className="text-linePrimary text-center pt-10">{error}</p>;

    return (
        <section>
            {/* {myPosts?.map((()) => (
                
            ))} */}
        </section>
    );
};
