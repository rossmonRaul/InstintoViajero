import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';

import { AgregarRegalia, ActualizarRegalia, InactivarRegalia, ObtenerRegalias, ObtenerRegalia } from '../../servicios/ServicioRegalias'

const Regalias = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Regalia");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);


    const [listaDeRegalias, setListaDeRegalias] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'idRegalia', name: 'idRegalia', selector: row => row.idRegalia, head: "id", omit: true },
        { id: 'Descripción', name: 'Descripción', selector: row => row.descripcion, head: "Descripcion", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['descripcion', 'estado'];

    useEffect(() => {
        ObtenerListadoDeRegalias();
    }, []);

    const onClickNuevoRegalia = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Regalia");
    }

    const onClickActualizarRegalia = async () => {
        setData(await ObtenerRegalia(filaSeleccionada.idRegalia));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Regalia");
    }

    const onClickInactivarRegalia = async () => {
        setConfirmModalOpen(true);
    }


    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarRegalia(filaSeleccionada.idRegalia)
        if (respuesta.indicador === 0)
            ObtenerListadoDeRegalias();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");

        setConfirmModalOpen(false);
        setShowAlert(true);

    }



    const ObtenerListadoDeRegalias = async () => {
        setPendiente(true);
        setListaDeRegalias(await ObtenerRegalias());
        setPendiente(false);
    }

    const onClickProcesarRegalia = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarRegalia(data);
        else {
            data.idRegalia = filaSeleccionada.idRegalia;
            data.estado = true;
            respuesta = await ActualizarRegalia(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeRegalias();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDeRegalias();
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
                <h1>Mantenimiento de Regalias</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoRegalia()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarRegalia()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarRegalia()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todas las Regalias registradas</span>
                <Grid gridHeading={encabezado} gridData={listaDeRegalias} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idRegalia" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarRegalia={onClickProcesarRegalia} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el Regalia a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Regalias;