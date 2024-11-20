import React from 'react';
import { useFetch } from '../../components/Blog/useFetch';
import NavbarBlog from '../../components/Blog/NavbarBlog';
import Footer from '../../components/MainPage/Footer';
import UserBlog from '../../components/Blog/UserBlog';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';


function ViewBlog() {

    const {data:blog , loading } = useFetch("https://673a371b339a4ce44517933d.mockapi.io/api/v1/blog/1") 

    if (loading) return <p className='flex justify-center items-center'>Cargando blog....</p>;

  return (
    <>

        <NavbarBlog />

        <main className='flex-col bg-[#f9f9f9] flex justify-around items-center lg:items-start min-h-[100vh] pt-[2rem] lg:pt-[5rem] lg:flex-row overflow-x-hidden'>
            
        <Button as={Link} to={'/blogs'} className='m-5' variant='light' size='lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></Button>

            <div className=' lg:w-[50%] flex flex-col items-center'>
                <img className='h-[25rem] w-[90%] shadow-md lg:h-[25rem] lg:w-full object-cover rounded-xl mb-[2rem]' src={blog.image} alt={blog.name + "name"} />
                
                <div className='w-[90%] flex justify-between items-center m-[1rem] mb-[2rem]'>
                    <p className='text-xl lg:text-2xl font-bold inline-block'>{blog.title}</p>
                    <p className='text-xl lg:text-2xl text-gray-600 w-[50%]'>{blog.description}</p>
                </div>
                <p className='text-xl mb-2 font-bold'>Contenido:</p>
                <p className='w-[90%] text-xl lg:w-full lg:text-2xl text-gray-600'>{blog.content}</p>

            </div>

            <UserBlog userId={blog.userId} />

        </main>
    

        <Footer />
    </>
  )
}

export default ViewBlog
