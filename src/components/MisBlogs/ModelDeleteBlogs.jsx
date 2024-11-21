import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { deleteBlog } from './deleteBlog';

function ModelDeleteBlogs({id}) {

    const user = JSON.parse(window.localStorage.getItem("loggedUser"))
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleDelete = async (userId, idBlog) => {
        try {
            await deleteBlog(userId, idBlog);
            window.location.reload();
        } catch (error) {
            console.error("Error al borrar el blog:", error);
        }
    };
    

    return (
        <> 
            <Button onPress={onOpen} size='lg' className='bg-[#cc0011] text-white'> <img src="/delete.svg" alt="" className='h-5 w-5 img_white' /> Borrar Blog</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 text-2xl mb-3">Borrar Blog</ModalHeader>
                    <ModalBody>
                        <p>Estas seguro de borrar este blog?</p>
                        <div className='flex justify-around mt-5'>
                            <Button 
                                color="danger" 
                                size='lg' 
                                variant="light" 
                                onClick={() => handleDelete(user.id, id)} // Aquí se usa una función anónima
                            >
                                Si
                            </Button>
                            <Button color="danger" size='lg' variant="light" onPress={onClose}> No </Button>
                        </div>
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModelDeleteBlogs
