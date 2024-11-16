import React from 'react';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';


function Pais({nombrePais, imagenPais, direccionPais}) {
  return (
    <>
    
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none mb-5"
    >
      <Image
        alt="Pais Conocer"
        className="object-cover"
        height={200}
        src={imagenPais}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-sm text-black">{nombrePais}</p>
        <Button className="text-tiny text-white bg-black/20" target='_blank' variant="flat" color="default" radius="lg" size="sm" as={Link} to={direccionPais}>
          Conocer Mas
        </Button>
      </CardFooter>
    </Card>


    </>
  )
}

export default Pais
