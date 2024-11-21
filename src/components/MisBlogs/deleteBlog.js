export function deleteBlog(userId, idBlog) {
    return fetch(`https://673a371b339a4ce44517933d.mockapi.io/api/v1/users/${userId}/blog/${idBlog}`, {
        method: 'DELETE'
    })
    .then(res => {
        if (!res.ok) {
            console.log("Problema al borrar");
            return Promise.reject("Error al borrar");
        }
        return res.json();
    })
    .then(data => {
        console.log('Borrado exitoso:', data);
        return data;
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
}
