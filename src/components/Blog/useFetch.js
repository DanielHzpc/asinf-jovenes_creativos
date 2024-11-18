import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading };
}

export function userBlog(user){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const base_url = "https://673a371b339a4ce44517933d.mockapi.io/api/v1/users/"+user

    useEffect(() => {

        fetch(base_url)
            .then((response) => {return response.json()})
            .then((data) => {setData(data)})
            .finally(() => setLoading(false))

    } ,[])

    return [data, loading]
}
