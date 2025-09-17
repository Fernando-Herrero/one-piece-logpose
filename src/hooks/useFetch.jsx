import { LanguagesContext } from "@/context/LanguagesContext";
import { languages } from "@/helpers/languages";
import { useContext, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { lang } = useContext(LanguagesContext);

    useEffect(() => {
        if (!url) {
            setData(null);
            setLoading(false);
            setError(null);
            return;
        }

        let isCancelled = false;

        const fetchData = async () => {
            if (loading) return;

            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const resultData = await response.json();

                if (!isCancelled) {
                    const translateData = resultData.map((item) => {
                        const translation = languages[lang]?.sagaData?.[item.id];

                        return {
                            ...item,
                            title: translation?.title || item.title,
                            saga_episode: translation?.saga_episode || item.saga_episode,
                        };
                    });
                    setData(translateData);
                }
            } catch (error) {
                if (!isCancelled) {
                    const errorMessage =
                        error.name === "TypeError" ? "Network error - check your connection" : error.message;
                    setError(errorMessage);
                    setData(null);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => (isCancelled = true);
    }, [url]);

    return { data, loading, error };
};
