import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    signal: controller.signal
                });
                setData(response.data);
                setFetchError(null);
            } catch (err) {
                if (axios.isCancel(err)) {
                    // Request was cancelled
                } else {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData(dataUrl);

        return () => {
            controller.abort();
        };
    }, [dataUrl]);

    return { data, fetchError, isLoading };
};

export default useAxiosFetch;