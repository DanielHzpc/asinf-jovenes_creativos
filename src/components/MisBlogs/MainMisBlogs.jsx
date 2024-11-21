import React from 'react'
import { Avatar } from '@nextui-org/react'
import MostrarMisBlogs from './MostrarMisBlogs'
import ModelCreateBlogs from './ModelCreateBlogs'

function MainMisBlogs() {

    document.title = "Mis Blogs"

    const user = JSON.parse(window.localStorage.getItem("loggedUser"))

  return (
    <> 

        <main className='min-h-[90vh] bg-[#f9f9f9] flex justify-center flex-col items-center lg:pt-10 lg:items-start lg:flex-row'>

            <div className="bg-white h-[15rem] w-[20rem] rounded-xl shadow-md flex flex-col items-center justify-center mt-10 lg:mt-0 lg:h-[25rem] lg:w-[25rem] ">
                <Avatar showFallback className='h-[5rem] w-[5rem] lg:h-[10rem] lg:w-[10rem] mb-5' />
                <p className='text-xl font-bold lg:text-2xl'>{user.name} {user.lastname}</p>
            </div>

            <div className='lg:w-[90vh] mt-10 lg:mt-0 flex flex-col'>

                <MostrarMisBlogs />

            </div>

            <div>
                <div className='bg-white h-[15rem] w-[20rem] rounded-xl shadow-md flex flex-col items-center justify-center mt-10 mb-10 lg:mt-0 lg:h-[15rem]  lg:w-[25rem]'>
                    <p className='text-xl mb-5 font-bold lg:text-2xl'>Crea tu Blog</p>
                    <ModelCreateBlogs id={user.id} />
                </div>
            </div>
        


        </main>

    </>
  )
}

export default MainMisBlogs
