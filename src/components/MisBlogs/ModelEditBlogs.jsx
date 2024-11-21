import React, { useState, useEffect } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { useFetch } from '../Blog/useFetch';

function ModelEditBlogs({ id }) {
  const { data: blog, loading } = useFetch("https://673a371b339a4ce44517933d.mockapi.io/api/v1/blog/" + id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setContent(blog.content);
    }
  }, [blog]);

  const submit = (e) => {

    const data = {};

    if (title) data['title'] = title;
    if (description) data['description'] = description;
    if (content) data['content'] = content;

    fetch("https://673a371b339a4ce44517933d.mockapi.io/api/v1/blog/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("blog modified");
    });


    return alert("blog modified")
  }

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} size='lg' className='bg-[#d4c602] text-white'> <img src="/edit.svg"  className='h-5 w-5 img_white' alt="" /> Edit Blog</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl mb-3">Editando Blog</ModalHeader>
              <ModalBody>
                <form onSubmit={submit}>
                  <Input type='text' name='title' variant='bordered' label='Titulo' size='lg' placeholder="Ingrese el título" value={title} onChange={(e) => setTitle(e.target.value)} className='w-[90%] mb-5' />
                  <Textarea name='description' variant='bordered' label='Descripcion' placeholder="Ingrese la descripción" value={description} onChange={(e) => setDescription(e.target.value)} size='lg' className='w-[90%] mb-5' />
                  <Textarea name='content' variant='bordered' label='Contenido del Blog' placeholder="Ingrese el contenido" value={content} onChange={(e) => setContent(e.target.value)} size='lg' className='w-[90%] mb-5' />

                  <Button type='submit' className='bg-[#66997b] text-white lg:w-[30%] mt-5' size='lg'>Editar Blog</Button>
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
  )
}

export default ModelEditBlogs;
