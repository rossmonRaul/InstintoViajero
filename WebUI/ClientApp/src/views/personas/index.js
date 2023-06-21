import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AgregarPersona, ActualizarPersona, InactivarPersona, ObtenerPersonas, ObtenerPersona } from '../../servicios/ServicioPersonas'
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/confirmModal';


const Personas = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar persona");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const [listaDePersonas, setListaDePersonas] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'identificacion', name: 'Identificación', selector: row => row.identificacion, head: "Identificación", sortable: true },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre", sortable: true },
        { id: 'apellido1', name: 'P. Apellido', selector: row => row.primerApellido, head: "P. Apellido", sortable: true },
        { id: 'apellido2', name: 'S. Apellido', selector: row => row.segundoApellido, head: "S. Apellido", sortable: true },
        { id: 'fechaNacimiento', name: 'F. Nacimiento', selector: row => new Date(row.fechaNacimiento).toLocaleDateString('es-ES'), head: "F. Nacimiento", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado" , sortable: true}
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['identificacion', 'nombre', 'primerApellido', 'segundoApellido'];

    useEffect(() => {
        ObtenerListadoDePersonas();
    }, []);

    const onClickNuevoPersona = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar persona");
    }

    const onClickActualizarPersona = async () => {
        setData(await ObtenerPersona(filaSeleccionada.idPersona));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar persona");
    }

    const onClickInactivarPersona = async () => {
        setConfirmModalOpen(true);
    }
    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarPersona(filaSeleccionada.idPersona)
        if (respuesta.indicador === 0)
            ObtenerListadoDePersonas();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar == "Activar" ? "Inactivar" : "Activar");
        setConfirmModalOpen(false);
        setShowAlert(true);
    }

    const ObtenerListadoDePersonas = async () => {
        setPendiente(true);
        setListaDePersonas(await ObtenerPersonas());
        setPendiente(false);
    }

    const onClickProcesarPersona = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarPersona(data);
        else {
            data.idPersona = filaSeleccionada.idPersona;
            data.estado = true;
            respuesta = await ActualizarPersona(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDePersonas();
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
                <h1>Mantenimiento de personas</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoPersona()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarPersona()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarPersona()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )} 
                <span>Listado de todas las personas registradas</span>
                <Grid gridHeading={encabezado} gridData={listaDePersonas} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idPersona" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarPersona={onClickProcesarPersona} mensaje={mensajeFormulario} />
            </FormularioModal>
            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el estado de la persona a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Personas;