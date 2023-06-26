import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';

import { AgregarPlazo, ActualizarPlazo, InactivarPlazo, ObtenerPlazos, ObtenerPlazo } from '../../servicios/ServicioPlazos'

const Plazos = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar plazo");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);


    const [listaDePlazos, setListaDePlazos] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'idPlazo', name: 'idPlazo', selector: row => row.idPlazo, head: "id", omit: true },
        { id: 'Descripción', name: 'Descripción', selector: row => row.descripcion, head: "Descripcion", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['descripcion','estado'];

    useEffect(() => {
        ObtenerListadoDePlazos();
    }, []);

    const onClickNuevoPlazo = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar plazo");
    }

    const onClickActualizarPlazo = async () => {
        setData(await ObtenerPlazo(filaSeleccionada.idPlazo));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar plazo");
    }

    const onClickInactivarPlazo = async () => {
        setConfirmModalOpen(true);
    }


    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarPlazo(filaSeleccionada.idPlazo)
        if (respuesta.indicador === 0)
            ObtenerListadoDePlazos();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");

        setConfirmModalOpen(false);
        setShowAlert(true);

    }



    const ObtenerListadoDePlazos = async () => {
        setPendiente(true);
        setListaDePlazos(await ObtenerPlazos());
        setPendiente(false);
    }

    const onClickProcesarPlazo = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarPlazo(data);
        else {
            data.idPlazo = filaSeleccionada.idPlazo;
            data.estado = true;
            respuesta = await ActualizarPlazo(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDePlazos();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDePlazos();
            setModal(false);
            //    setMensajeFormulario(respuesta.mensaje);
        }
        setShowAlert(true);

    }

    const onClickSeleccionarFila = (fila) => {
        const filaValida = ValidarSiFilaFueSeleccionada(fila);
        setBloquearBoton(!filaValida);
        setTextoBotonInactivar(!filaValida ? "Inactivar" : (fila.estado === "Activo" ? "Inactivar" : "Activar"));
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
                <h1>Mantenimiento de plazos</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoPlazo()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarPlazo()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarPlazo()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todos los plazos registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDePlazos} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idPlazo" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarPlazo={onClickProcesarPlazo} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el plazo a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Plazos;