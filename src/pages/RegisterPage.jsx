import {useState} from 'react'
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react"
import { Link, useNavigate } from 'react-router-dom';
import { EyeFilledIcon } from '../components/Login-Register/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../components/Login-Register/EyeSlashFilledIcon';

function RegisterPage() {

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();

    const data = {};

    data["name"] = e.target.name.value
    data["lastName"] = e.target.lastName.value
    data["email"] = e.target.email.value
    data["password"] = e.target.password.value

    fetch("https://673a371b339a4ce44517933d.mockapi.io/api/v1/users", {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log("new user create")
    })

    window.localStorage.setItem(
      'loggedUser', JSON.stringify(data)
    )

    if (data) {
      navigate("/blogs")
    } else{
      alert("Hubo un error al momento de crear una cuenta")
    }
  }

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
    <div className='bg-[url("/registerpage.jpg")] bg-cover lg:bg-white flex justify-center items-center h-[100vh] w-[100%]'>
      
      <div className='hidden lg:block lg:w-[50%] lg:h-full lg:bg-[url("/registerpage.jpg")] lg:bg-cover'>
        <Button as={Link} to={'/'} className='mt-5 ml-5' variant='light' size='lg'><svg xmlns="http://www.w3.org/2000/svg" className='img_white' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></Button>
        
      </div>

      <form onSubmit={submit} className='bg-white p-8 rounded-xl lg:justify-center lg:rounded-none lg:h-[100%] lg:w-[50%] lg:bg-none flex items-center flex-col'>

          <h1 className='mb-5 text-3xl lg:text-4xl font-bold lg:mb-10'>Registrarse</h1>

          <Input type='text' name='name' label='Nombre' variant='bordered' placeholder='Ingresa tu Nombre' size='lg' isRequired className='w-[90%] lg:w-[50%] mb-5' />
          <Input type='text' name='lastName' label='Apellidos' variant='bordered' placeholder='Ingresa tus Apellidos' size='lg' isRequired className='w-[90%] lg:w-[50%] mb-5' />
          <Input type='email' name='email' label='Email' variant='bordered' placeholder='Ingresa tu email' size='lg' isRequired className='w-[90%] lg:w-[50%] mb-5' />
          <Input 
           typeof=''
            label='Contraseña' 
            variant='bordered' 
            placeholder='Ingresa tu contraseña'
            name='password' 
            size='lg' 
            isRequired 
            className='w-[90%] lg:w-[50%] mb-5'
            type={isVisible ? "text" : "password"}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ): 
                (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )
                }
              </button>
            }

          />
          

          <Button type='submit' className='bg-[#66997b] text-white lg:w-[50%]' size='lg'> Registrarse </Button>


          <p className='mt-5 text-gray-400'>Si ya tienes una cuenta, <a href="/login" className='text-[#66997b]'>Inicia Sesion</a></p>


      </form>
    </div>
    
    </>
  )
}

export default RegisterPage
