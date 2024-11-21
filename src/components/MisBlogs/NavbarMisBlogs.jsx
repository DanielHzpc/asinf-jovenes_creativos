import React from 'react'
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,

    Avatar
  } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

function NavbarMisBlogs() {

  const user = JSON.parse(window.localStorage.getItem("loggedUser"))

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser')
  }

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Blogs",
    "Mis Blogs",
  ];

  const menuLinks = [
    "/blogs",
    "/misblogs",
  ]

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
          className="text-white sm:hidden"
        />

        <NavbarBrand justify='start'>
          <img src="/icon.svg" alt="" className='navBar-img' />
          <p className='text-white'>Mis Blogs</p>
        </NavbarBrand>

      </NavbarContent>
      

      <NavbarContent justify='center' className='hidden sm:flex gap-4'>

        <NavbarItem>
          <Link className='text-white' to={"/blogs"} >Blogs</Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link className='text-white' to={"/misblogs"}>Mis Blogs</Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify='end' className='hidden sm:flex gap-4'>
        <NavbarItem>
          <Avatar showFallback src={user.image} name={user.name} />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} to={'/'} variant='flat' className= 'text-[#27081d] bg-[#66997b]' onClick={handleLogout}>Cerrar Sesion</Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
              to={menuLinks[index]}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button as={Link} to={'/'} onClick={handleLogout} className='bg-[#66997b] mt-5' > Cerrar Sesion </Button>
      </NavbarMenu>

        
    </Navbar>

    </>
  )
}

export default NavbarMisBlogs
