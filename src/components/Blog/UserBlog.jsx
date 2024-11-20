import React from "react";
import { userBlog } from "./useFetch";
import {Avatar} from "@nextui-org/react";


function UserBlog({ userId }) {
    const [user, loading] = userBlog(userId);

    if (loading) return <span>Cargando...</span>;
    return (
    <>

        <div className="mt-5 mb-5 bg-white w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-xl flex flex-col items-center justify-center shadow-md">

            <Avatar showFallback className="h-[8rem] w-[8rem] mb-5" />

            <p className="w-[60%] flex justify-center items-center text-2xl font-bold mb-2">{user.name} {user.lastname}</p>

            <p className="text-xl">Tourist</p>
            

        </div>
        
    
    </>
    )
}

export default UserBlog;
