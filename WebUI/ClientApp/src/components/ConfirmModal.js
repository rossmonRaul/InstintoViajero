import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ConfirmModal = ({ isOpen, toggle, message, onConfirm }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Confirmación</ModalHeader>
            <ModalBody>{message}</ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancelar
                </Button>
                <Button color="primary" onClick={onConfirm}>
                    Confirmar
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ConfirmModal;
