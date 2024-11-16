import React from 'react'
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react"
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
    <div className='bg-white flex justify-center items-center h-[100vh] w-[100%]'>
      
      <div className='w-[50%] h-full bg-[url("/registerpage.jpg")] bg-cover'>
        <Button as={Link} to={'/'} className='mt-5 ml-5' variant='light' size='lg'><svg xmlns="http://www.w3.org/2000/svg" className='img_white' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></Button>
        
      </div>

      <form className='w-[50%] flex items-center flex-col'>

          <h1 className='text-4xl font-bold mb-10'>Registrarse</h1>

          <Input type='text' label='Nombre' variant='bordered' placeholder='Ingresa tu Nombre' size='lg' isRequired className='w-[50%] mb-5' />
          <Input type='text' label='Apellidos' variant='bordered' placeholder='Ingresa tus Apellidos' size='lg' isRequired className='w-[50%] mb-5' />
          <Input type='email' label='Email' variant='bordered' placeholder='Ingresa tu email' size='lg' isRequired className='w-[50%] mb-5' />
          <Input type='password' label='Contraseña' variant='bordered' placeholder='Ingresa tu contraseña' size='lg' isRequired className='w-[50%] mb-5' />

          <Button type='submit' className='bg-[#66997b] text-white w-[50%]' size='lg'> Registrarse </Button>


          <p className='mt-5 text-gray-400'>Si ya tienes una cuenta, <a href="/login" className='text-[#66997b]'>Inicia Sesion</a></p>


      </form>
    </div>
    
    </>
  )
}

export default RegisterPage
