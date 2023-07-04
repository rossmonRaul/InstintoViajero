import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';

import { AgregarTipoDeTelefono, ActualizarTipoDeTelefono, InactivarTipoDeTelefono, ObtenerTiposDeTelefono, ObtenerTipoDeTelefono } from '../../servicios/ServicioTiposDeTelefono'

const TiposDeTelefono = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar tipo de Telefono");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);


    const [listaDeTiposDeTelefono, setListaDeTiposDeTelefono] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'idTipoDeTelefono', name: 'idTipoDeTelefono', selector: row => row.idTipoDeTelefono, head: "id", omit: true },
        { id: 'descripcion', name: 'Descripción', selector: row => row.descripcion, head: "Descripcion", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['descripcion'];

    useEffect(() => {
        ObtenerListadoDeTiposDeTelefono();
    }, []);

    const onClickNuevoTipoDeTelefono = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar tipo de Telefono");
    }

    const onClickActualizarTipoDeTelefono = async () => {
        setData(await ObtenerTipoDeTelefono(filaSeleccionada.idTipoDeTelefono));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar tipo de Telefono");
    }

    const onClickInactivarTipoDeTelefono = async () => {
        setConfirmModalOpen(true);
    }


    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarTipoDeTelefono(filaSeleccionada.idTipoDeTelefono)
        if (respuesta.indicador === 0)
            ObtenerListadoDeTiposDeTelefono();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");

        setConfirmModalOpen(false);
        setShowAlert(true);

    }



    const ObtenerListadoDeTiposDeTelefono = async () => {
        setPendiente(true);
        setListaDeTiposDeTelefono(await ObtenerTiposDeTelefono());
        setPendiente(false);
    }

    const onClickProcesarTipoDeTelefono = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarTipoDeTelefono(data);
        else {
            data.idTipoDeTelefono = filaSeleccionada.idTipoDeTelefono;
            data.estado = true;
            respuesta = await ActualizarTipoDeTelefono(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeTiposDeTelefono();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDeTiposDeTelefono();
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
                <h1>Mantenimiento de tipos de Teléfono</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoTipoDeTelefono()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarTipoDeTelefono()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarTipoDeTelefono()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todos los tipos de teléfono registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeTiposDeTelefono} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idTipoDeTelefono" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarTipoDeTelefono={onClickProcesarTipoDeTelefono} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el tipo de teléfono a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default TiposDeTelefono;