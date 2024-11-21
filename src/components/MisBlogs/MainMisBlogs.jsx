import React from 'react'
import { Avatar, Button } from '@nextui-org/react'
import MostrarMisBlogs from './MostrarMisBlogs'

function MainMisBlogs() {

    const user = JSON.parse(window.localStorage.getItem("loggedUser"))

  return (
    <> 

        <main className='min-h-[90vh] bg-[#f9f9f9] flex justify-center flex-col items-center lg:flex-row'>

            <div className="bg-white h-[15rem] w-[20rem] rounded-xl shadow-md flex flex-col items-center justify-center mt-10 lg:mt-0 lg:h-[25rem] lg:w-[25rem] ">
                <Avatar showFallback className='h-[5rem] w-[5rem] lg:h-[10rem] lg:w-[10rem] mb-5' />
                <p className='text-xl font-bold lg:text-2xl'>{user.name} {user.lastname}</p>
            </div>

            <div className='lg:w-[90vh] mt-10 lg:mt-0 flex flex-col'>

                <MostrarMisBlogs />

            </div>

            <div className='bg-white h-[15rem] w-[20rem] rounded-xl shadow-md flex flex-col items-center justify-center mt-10 mb-10 lg:mt-0 lg:h-[25rem]  lg:w-[25rem]'>
                <p className='text-xl mb-5 font-bold lg:text-2xl'>Crea tu Blog</p>
                <Button size='md' className='w-[15%] h-[15%] lg:w-[70%] bg-[#66997b] text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></Button>

            </div>

        


        </main>

    </>
  )
}

export default MainMisBlogs
