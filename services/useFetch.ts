// fetchMovies
// fetchMovieDetails

import { useEffect, useState } from "react"

// useFetch(fetchMovies)
const useFetch = <T>(fetchFuction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const result = await fetchFuction();

            setData(result);
        } catch (error) {
            setError(error instanceof Error ? error : new Error("An error occurred"));
        } finally {
            setLoading(false);
        }

        const reset = () => {
            setData(null);
            setError(null);
            setLoading(false);
        };

        useEffect(() => {
            if (autoFetch) {
                fetchData();
            }

        }, []);

        return { data, loading, error, refetch: fetchData, reset };
    };
}

export default useFetch
