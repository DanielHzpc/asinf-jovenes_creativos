import React from 'react'
import './MainPage.css'
import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Link } from 'react-router-dom'
import { Button } from "@nextui-org/react";
import Know from '../components/MainPage/Know'


function MainPage() {

  document.title="Aventuras sin Fin"

  const images = [
    { original: "/foto1.jpg" },
    { original: "/foto2.jpg" },
    { original: "/foto3.jpg" }
  ]

  return (
    <>
    <main className='main'> 

      <div className='wrapper'>

        <div className='w'>
          <h2 className='text-[#ffffff] text-2xl lg:text-4xl'>Explora el mundo, vive sin limites</h2>

          <div className='wa'>
            <Button as={Link} size='lg' to={'/register'} className='bg-[#66997b]'> Registrarse </Button>
            <a href='#explore' className='z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-large [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground hover:opacity-80 bg-[#66997b]'> Explorar </a>
          </div>
        </div>

      </div>

      <div id='explore' className='bg-[#66997b] flex flex-col md:flex-row justify-center items-center' >
        <div className='p-5'> 
          <ReactImageGallery items={images} 
          showFullscreenButton={false}
          showBullets={true}
          showNav={false}
          autoPlay={true}
          />
        </div>
        
        <div className='lg:w-[70%]'>
          <p className='text-[#27081d] font-bold text-center text-2xl md:text-3xl lg:text-4xl'>El Arte de Explorar</p>

          <p className='text-[#27081d] text-xl lg:text-2xl p-10'>
          Explorar el mundo nos permite descubrir culturas, paisajes y experiencias que enriquecen nuestra vida y expanden nuestras perspectivas. Cada viaje es una oportunidad para conectarnos con historias y lugares únicos, desde ciudades vibrantes hasta rincones escondidos llenos de belleza natural. 
          <br />
          <br />
          Nos invita a desafiar nuestros límites, aprender de lo desconocido y apreciar la diversidad que nos rodea. En cada destino, hay una nueva aventura esperando ser vivida, un recuerdo por crear y una historia que contar. Bienvenidos a un viaje sin fin a través de las maravillas del mundo.
          </p>

        </div>
        


      </div>

      <Know />

    </main>

    
    </>
  )
}



export default MainPage
