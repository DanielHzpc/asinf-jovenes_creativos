import React from 'react'
import { useFetch } from '../Blog/useFetch';
import { Link } from 'react-router-dom';
import ModelEditBlogs from './ModelEditBlogs';
import ModelDeleteBlogs from './ModelDeleteBlogs';

function MostrarMisBlogs() {

    const user = JSON.parse(window.localStorage.getItem("loggedUser"))

    try {
        const {data:blogs , loading} = useFetch("https://673a371b339a4ce44517933d.mockapi.io/api/v1/users/"+user.id+"/blog");
        return (
            <>
                {blogs?.map((blog) => ( 
                    <> 
                        <Link className="w-[40vh] h-[25vh] flex hover:shadow-xl ml-5 mr-5 mb-5 md:h-[35vh] lg:h-[45vh] lg:w-[95%]" key={blog.id} to={`/blogs/${blog.id}`}>
                            <div className="bg-white rounded-xl w-full h-full shadow-md overflow-hidden">
                                <img src={blog.image} alt={blog.title} className="h-20 w-full object-cover md:h-40 lg:h-56" />
                                <div className="p-3 md:p-5 lg:p-8">
                                    <div className="flex justify-between">
                                        <h3 className="font-bold text-xl md:text-2xl my-1 inline-block"> {blog.title} </h3>
                                    </div>
                                    <p className="text-gray-600 text-md md:text-xl md:mt-4"> {blog.description} </p>
                                </div>
                            </div>
                        </Link>

                        <div className='w-full flex justify-around mb-5'>
                            <ModelEditBlogs id={blog.id} />
                            <ModelDeleteBlogs id={blog.id} />
                        </div>
                    </>
                ) )}

            </>
        )
    } catch {
        return (<p className='text-center font-bold text-xl'>NO TIENES BLOGS CREADOS</p>)
    }
   

  
}

export default MostrarMisBlogs
