import React, { useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


export const ConfirmModal = ({ isOpen, toggle, message, onConfirm }) => {
    const ref = useRef(null);


    return (
        <Modal ref={ref} isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Confirmación</ModalHeader>
            <ModalBody>{message}</ModalBody>
            <ModalFooter>            
                <Button color="primary" onClick={onConfirm}>
                    Confirmar
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
};

