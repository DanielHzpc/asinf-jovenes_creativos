import React from 'react'
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>


    <footer className='bg-[#d2e7aa] w-[100%] h-20 flex justify-around items-center '>
      <div className='flex justify-around items-center w-[50%]'>
        <p>AsinF.dev © 2024</p>
        <Button as={Link} to={"https://github.com/DanielHzpc/asinf-jovenes_creativos.git"} target='_blank' color='' className="font-bold" variant='bordered'>
          <img src="/github-mark.svg" alt="" className='h-5 w-auto'/>
          Github
        </Button>
      </div>
    </footer>
    </>
  )
}

export default Footer
