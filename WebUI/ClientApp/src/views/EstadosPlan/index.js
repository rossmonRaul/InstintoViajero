import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';

import { AgregarEstadoPlan, ActualizarEstadoPlan, InactivarEstadoPlan, ObtenerEstadosPlan, ObtenerEstadoPlan } from '../../servicios/ServicioEstadosPlan'

const EstadosPlan = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar estado de plan");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);


    const [listaDeEstadosPlan, setListaDeEstadosPlan] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'idEstadoPlan', name: 'idEstadoPlan', selector: row => row.idEstadoPlan, head: "id", omit: true },
        { id: 'codEstadoPlan', name: 'Cod. Estado de Plan', selector: row => row.codEstadoPlan, head: "Cod. EstadoPlan", sortable: true },
        { id: 'descEstadoPlan', name: 'Descripción', selector: row => row.descEstadoPlan, head: "Descripcion", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['codEstadoPlan', 'descEstadoPlan'];

    useEffect(() => {
        ObtenerListadoDeEstadosPlan();
    }, []);

    const onClickNuevoEstadoPlan = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar estado de plan");
    }

    const onClickActualizarEstadoPlan = async () => {
        setData(await ObtenerEstadoPlan(filaSeleccionada.idEstadoPlan));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar estado de plan");
    }

    const onClickInactivarEstadoPlan = async () => {
        setConfirmModalOpen(true);
    }


    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarEstadoPlan(filaSeleccionada.idEstadoPlan)
        if (respuesta.indicador === 0)
            ObtenerListadoDeEstadosPlan();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");

        setConfirmModalOpen(false);
        setShowAlert(true);

    }



    const ObtenerListadoDeEstadosPlan = async () => {
        setPendiente(true);
        setListaDeEstadosPlan(await ObtenerEstadosPlan());
        setPendiente(false);
    }

    const onClickProcesarEstadoPlan = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarEstadoPlan(data);
        else {
            data.idEstadoPlan = filaSeleccionada.idEstadoPlan;
            data.estado = true;
            respuesta = await ActualizarEstadoPlan(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeEstadosPlan();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDeEstadosPlan();
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
                <h1>Mantenimiento de estados de plan</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoEstadoPlan()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarEstadoPlan()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarEstadoPlan()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todos los estados de plan registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeEstadosPlan} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idEstadoPlan" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarEstadoPlan={onClickProcesarEstadoPlan} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el estado a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default EstadosPlan;