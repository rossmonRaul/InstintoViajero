import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AgregarCliente, ActualizarCliente, InactivarCliente, ObtenerClientes, ObtenerCliente } from '../../servicios/ServicioClientes'
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';


const Clientes = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar cliente");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const [listaDeClientes, setListaDeClientes] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre", sortable: true },
        { id: 'apellido1', name: 'P. Apellido', selector: row => row.primerApellido, head: "P. Apellido", sortable: true },
        { id: 'apellido2', name: 'S. Apellido', selector: row => row.segundoApellido, head: "S. Apellido", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['nombre', 'primerApellido', 'segundoApellido'];

    useEffect(() => {
        ObtenerListadoDeClientes();
    }, []);

    const onClickNuevoCliente = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar cliente");
    }

    const onClickActualizarCliente = async () => {
        setData(await ObtenerCliente(filaSeleccionada.idCliente));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar cliente");
    }

    const onClickInactivarCliente = async () => {
        setConfirmModalOpen(true);         
    }

    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarCliente(filaSeleccionada.idCliente)
        if (respuesta.indicador === 0)
            ObtenerListadoDeClientes();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");
        setConfirmModalOpen(false);
        setShowAlert(true);
    }


    const ObtenerListadoDeClientes = async () => {
        setPendiente(true);
        setListaDeClientes(await ObtenerClientes());
        setPendiente(false);
    }

    const onClickProcesarCliente = async (data) => {
    
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarCliente(data);
        else {
            data.idCliente = filaSeleccionada.idCliente;
            data.estado = true;
            respuesta = await ActualizarCliente(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeClientes();
            setMensajeRespuesta(respuesta);
        } else {
            setMensajeFormulario(respuesta.mensaje);
        }
        setShowAlert(true);
    }

    const onClickSeleccionarFila = (fila) => {
        const filaValida = ValidarSiFilaFueSeleccionada(fila);
        setBloquearBoton(!filaValida);
        setTextoBotonInactivar(!filaValida ? "Inactivar" : (fila.estado == "Activo" ? "Inactivar" : "Activar"));
        setFilaSeleccionada(fila);
    }

    const onClickCerrarModal = () => {
        setModal(false);
        setMensajeFormulario("");
    }


    const ValidarSiFilaFueSeleccionada = (fila) => Object.entries(fila).length === 0 ? false : true;

    return (
        <>
            <div className="container-fluid">
                <h1>Mantenimiento de clientes</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoCliente()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarCliente()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarCliente()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}             
                <span>Listado de todos los clientes registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeClientes} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idCliente" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarCliente={onClickProcesarCliente} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el estado del cliente a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Clientes;