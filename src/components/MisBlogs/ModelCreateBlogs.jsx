import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure , Input, Textarea} from "@nextui-org/react";


function ModelCreateBlogs({id}) {

    const submit = (e) => {

        e.preventDefault();

        const data = {};

        data['title'] = e.target.title.value
        data['description'] = e.target.description.value 
        data['content'] = e.target.content.value
        data['userId'] = id
        data['image'] ="https://loremflickr.com/640/480/nature"


        fetch("https://673a371b339a4ce44517933d.mockapi.io/api/v1/blog",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
          }).then(() => {
            console.log("new blog create")
          })

    }
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <>
        <Button onPress={onOpen} className='bg-[#66997b]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-5 w-5'><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-2xl mb-5">Creando un Blog</ModalHeader>
                <ModalBody>
                  <form onSubmit={submit}>

                    <Input type='text' name='title' label='Titulo' variant='bordered' placeholder='Ingresa el titulo del blog' size='lg' isRequired className='w-[90%] mb-5' />
                    <Textarea name='description' variant='bordered' isRequired label='Descripcion' size='lg' placeholder='Deja la descripcion del blog' className='w-[90%] mb-5'/>
                    <Textarea name='content' variant='bordered' isRequired label='Contenido del Blog' size='lg' placeholder='Empieza a escribir tu Blog' className='w-[90%] mb-5' />

                    <Button type='submit' className='bg-[#66997b] text-white lg:w-[30%] mt-5' size='lg'> Crear Blog </Button>

                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}

export default ModelCreateBlogs
