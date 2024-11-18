import React from 'react'
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

function NavbarBlog() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Blogs",
    "Mis Blogs",
    "Cerrar Sesion"
  ];

  return (
    <>

    <Navbar className='bg-black z-30'
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    
    classNames={{
      item: [
        "flex",
        "relative",
        "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-2",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-[#66997b]",
      ],
    }}
    >

      <NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand justify='start'>
          <img src="/icon.svg" alt="" className='navBar-img' />
          <p className='text-white'>Blogs</p>
        </NavbarBrand>

      </NavbarContent>
      

      <NavbarContent justify='center' className='hidden sm:flex gap-4'>

        <NavbarItem isActive>
          <Link className='text-white' to={"/blog"} >Blogs</Link>
        </NavbarItem>

        <NavbarItem>
          <Link className='text-white' to={"/miblog"}>Mis Blogs</Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify='end' className='hidden sm:flex gap-4'>
        <NavbarItem>
          <Button variant='flat' className= 'text-[#27081d] bg-[#66997b]'>Cerrar Sesion</Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

        
    </Navbar>

    </>
  )
}

export default NavbarBlog
