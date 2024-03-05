//https://jsonplaceholder.typicode.com/users/2

import { useEffect, useState } from "react";



export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {
        setState({ ...state, isLoading: true });
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
        } catch (error) {
            setState({ ...state, data: null, isLoading: false, hasError: error });
        }
        setState({ ...state, data, isLoading: false, hasError: null });
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {};
}