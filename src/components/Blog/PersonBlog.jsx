import React from "react";
import { userBlog } from "./useFetch";

function PersonBlog({ userId }) {
    const [user, loading] = userBlog(userId);

    if (loading) return <span>Cargando...</span>;
    return <span className="text-md md:text-xl">{user?.name || "Desconocido"}</span>;
}

export default PersonBlog;
