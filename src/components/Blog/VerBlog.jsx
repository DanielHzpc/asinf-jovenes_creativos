import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";
import PersonBlog from "./PersonBlog";

function VerBlog() {
    const { data: blogs, loading} = useFetch(
        "https://673a371b339a4ce44517933d.mockapi.io/api/v1/blog"
    );

    if (loading) return <p>Cargando Blogs ...</p>;

    return (
        <>
            {blogs?.map((blog) => (
                <Link className="w-[40vh] h-[25vh] inline-block hover:shadow-xl ml-5 mr-5 mb-5 md:h-[35vh] lg:h-[45vh]" key={blog.id} to={`/blog/${blog.id}`} >
                    <div className="bg-white rounded-xl w-full h-full shadow-md overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="h-20 w-full object-cover md:h-40 lg:h-56" />
                        <div className="p-3 md:p-5 lg:p-8">
                            <div className="flex justify-between">
                                <h3 className="font-bold text-xl md:text-2xl my-1 inline-block">
                                    {blog.title}
                                </h3>
                                <p className="flex justify-center items-center text-gray-600">
                                    <img src="/user.svg" alt="" className=" w-3 h-2 m-1 md:w-5 md:h-4"/>
                                    <PersonBlog userId={blog.userId} />
                                </p>
                            </div>
                            <p className="text-gray-600 text-md md:text-xl md:mt-4">
                                {blog.description}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default VerBlog;
