import React from 'react'
import { Avatar, Button } from '@nextui-org/react'
import MostrarMisBlogs from './MostrarMisBlogs'

function MainMisBlogs() {

    const user = JSON.parse(window.localStorage.getItem("loggedUser"))

  return (
    <> 

        <main className='min-h-[100vh] bg-[#f9f9f9] flex justify-center'>

            <div className="bg-white h-[25rem]  w-[25rem] rounded-xl shadow-md flex flex-col items-center justify-center mt-10">
                <Avatar showFallback className='h-[10rem] w-[10rem] mb-5' />
                <p className='font-bold text-2xl'>{user.name} {user.lastname}</p>
            </div>

            <div className='w-[90vh] mt-10 flex flex-col'>

                <MostrarMisBlogs />

            </div>

            <div className='bg-white h-[25rem]  w-[25rem] rounded-xl shadow-md flex flex-col items-center justify-center mt-10'>

                <p className='mb-5 font-bold text-2xl'>Crea tu Blog</p>
                <Button size='lg' className='w-[70%] bg-[#66997b] text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></Button>


            </div>

        


        </main>

    </>
  )
}

export default MainMisBlogs
