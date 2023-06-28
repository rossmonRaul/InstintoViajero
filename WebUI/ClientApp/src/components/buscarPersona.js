import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Grid } from '../components/grid';
import { ObtenerPersonas, ObtenerPersona } from '../servicios/ServicioPersonas'


export const BuscarPersona = ({ show, handleClose, className, tamano, handleAceptar }) => {

    const [listaDePersonas, setListaDePersonas] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'identificacion', name: 'Identificación', selector: row => row.identificacion, head: "Identificación", sortable: true },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre", sortable: true },
        { id: 'apellido1', name: 'P. Apellido', selector: row => row.primerApellido, head: "P. Apellido", sortable: true },
        { id: 'apellido2', name: 'S. Apellido', selector: row => row.segundoApellido, head: "S. Apellido", sortable: true },
        //{ id: 'fechaNacimiento', name: 'FechaNacimiento', selector: row => new Date(row.fechaNacimiento).toLocaleDateString('es-ES'), head: "F. Nacimiento", sortable: true },
        //{ id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas para aplicar filtro
    const filterColumns = ['identificacion', 'nombre', 'primerApellido', 'segundoApellido', 'fechaNacimiento'];

    useEffect(() => {
        ObtenerListadoDePersonas();
    }, []);


    const ObtenerListadoDePersonas = async () => {
        setPendiente(true);
        setListaDePersonas(await ObtenerPersonas());
        setPendiente(false);
    }

    const onClickSeleccionarFila = (fila) => {
        const filaValida = ValidarSiFilaFueSeleccionada(fila);
        setBloquearBoton(!filaValida);
        setFilaSeleccionada(fila);
    }

    const handleAceptarClick = () => {
        if (typeof handleAceptar === 'function') {
            handleAceptar(filaSeleccionada);
        }
    };

    const ValidarSiFilaFueSeleccionada = (fila) => Object.entries(fila).length === 0 ? false : true;

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} dialogClassName={className}
                aria-labelledby="contained-modal-title-vcenter" centered size={tamano} >
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>{"Personas registradas"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid gridHeading={encabezado} gridData={listaDePersonas} selectableRows={true} pending={pendiente}
                        setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idPersona" filterColumns={filterColumns} />


                    <div className='text-right'>
                        <br />
                        <Button variant="primary" size="sm" disabled={bloquearBoton} onClick={handleAceptarClick}>Aceptar</Button>{' '} 
                        <Button variant="secondary" size="sm" onClick={handleClose}>Cancelar</Button>{' '}                 
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}