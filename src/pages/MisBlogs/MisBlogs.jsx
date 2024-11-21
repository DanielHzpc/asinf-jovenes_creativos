import React from 'react'
import NavbarMisBlogs from '../../components/MisBlogs/NavbarMisBlogs'
import Footer from '../../components/MainPage/Footer'
import MainMisBlogs from '../../components/MisBlogs/MainMisBlogs'

function MisBlogs() {

    if (window.localStorage.getItem("loggedUser")) {
 
        return (
            <>
                
                <NavbarMisBlogs />
                <MainMisBlogs />
                <Footer />

            </>
          )
    } else{
        return (<p className='flex justify-center items-center font-bold text-4xl m-auto'>INICIA SESION PORFAVOR PARA PODER VER ESTA PAGINA</p>)
    }

  
}

export default MisBlogs
