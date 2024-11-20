import { useEffect, useState } from "react";

// Hook genérico para cualquier API
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; // Bandera para evitar actualizaciones si el componente se desmonta

        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) setData(data);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        // Cleanup al desmontar el componente
        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading }; // Retorno como objeto
}

// Hook específico para datos de un usuario
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

    return [data, loading]; // Retorno como arreglo, sin cambiar la estructura
}
