import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'; 
import {Button} from "@nextui-org/react";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";

function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inicio",
  ];

  return (
    <>
    
    <Navbar 
    shouldHideOnScroll
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    isBlurred = {false}
    isBordered

    className='navbar z-30'


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
        "data-[active=true]:after:bg-default",
      ],
    }}
    >

      <NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white sm:hidden"
        />

        <NavbarBrand>
          <img src="/icon.svg" alt="" className='navBar-img' />
          <h1 className='font-bold text-inherit text-white'>AF</h1>
        </NavbarBrand>
      </NavbarContent>



      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" to="/" className='text-white'>Inicio</Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} color="default" to={'/login'} variant="flat" className= 'text-[#27081d] bg-[#66997b]' >
          Inicia Sesion
          </Button>
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

export default NavBar
