import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) setData(data);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading };
}

export function userBlog(user) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const base_url = `https://673a371b339a4ce44517933d.mockapi.io/api/v1/users/${user}`;

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        fetch(base_url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) setData(data);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [user]);

    return [data, loading];
}
