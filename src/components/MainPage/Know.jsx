import React from 'react';
import Pais from './Pais';

function Know() {
  return (
    <>

    <div className='bg-[#a4ca8b] flex  w-[100%] items-center flex-col  pt-10 pb-5 lg:flex-row'>

      <div className='w-[100%] flex flex-col justify-center items-center md:w-[60%]'>
        <p className='font-bold text-[#27081d] text-center text-2xl pt-10 md:text-3xl md:pt-0 lg:text-4xl'> Paginas Oficiales de Turismo </p>
        <p className='text-xl p-5 w-[90%] md:text-2xl'>Explorar el mundo nunca ha sido tan fácil. En esta sección, te invitamos a conocer las páginas oficiales de turismo de distintos países, donde podrás encontrar información detallada sobre los destinos más icónicos, tradiciones culturales, gastronomía, y las actividades más emocionantes para disfrutar. <br /> <br /> Cada país tiene algo único que ofrecer, desde paisajes espectaculares hasta experiencias inolvidables. Elige uno de los países y comienza tu aventura hacia un viaje lleno de descubrimientos y sorpresas.</p>
      </div>
      

      <div className="flex flex-wrap justify-around items-center w-[60%] pt-10 md:w-[30%]">
        <Pais 
        imagenPais="/paises/España.webp" 
        nombrePais="España" 
        direccionPais="https://www.spain.info/es/"
        />

        <Pais 
        imagenPais="/paises/Colombia.webp" 
        nombrePais="Colombia" 
        direccionPais="https://colombia.travel/es"
        />

        <Pais 
        imagenPais="/paises/Argentina.png" 
        nombrePais="Argentina" 
        direccionPais="https://www.argentina.travel/"
        />
        
        <Pais 
        imagenPais="/paises/Francia.svg" 
        nombrePais="Francia" 
        direccionPais="https://www.france.fr/es/"
        />
      </div>
      
   

    </div>

    </>
  )
}

export default Know
