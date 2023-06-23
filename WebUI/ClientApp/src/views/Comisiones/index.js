import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';

import { AgregarComision, ActualizarComision, InactivarComision, ObtenerComisiones, ObtenerComision } from '../../servicios/ServicioComisiones'

const Comisiones = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar comisión");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);


    const [listaDeComisiones, setListaDeComisiones] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'idComision', name: 'idComision', selector: row => row.idComision, head: "id", omit: true },
        { id: 'idRol', name: 'idRol', selector: row => row.idRol, head: "idRol", omit: true },
        { id: 'descripcionRol', name: 'Rol', selector: row => row.descripcionRol, head: "Rol", sortable: true },
        { id: 'descripcion', name: 'Descripción', selector: row => row.descripcion, head: "Descripción", sortable: true },
        { id: 'porcentajeComision', name: 'Comisión(%)', selector: row => row.porcentajeComision, head: "Comisión", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['descripcionRol', 'descripcion', 'porcentajeComision','estado'];

    useEffect(() => {
        ObtenerListadoDeComisiones();
    }, []);

    const onClickNuevoComision = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar comisión");
    }

    const onClickActualizarComision = async () => {
        setData(await ObtenerComision(filaSeleccionada.idComision));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar comisión");
    }

    const onClickInactivarComision = async () => {
        setConfirmModalOpen(true);
    }


    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarComision(filaSeleccionada.idComision)
        if (respuesta.indicador === 0)
            ObtenerListadoDeComisiones();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");

        setConfirmModalOpen(false);
        setShowAlert(true);

    }



    const ObtenerListadoDeComisiones = async () => {
        setPendiente(true);
        setListaDeComisiones(await ObtenerComisiones());
        setPendiente(false);
    }

    const onClickProcesarComision = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarComision(data);
        else {
            data.idComision = filaSeleccionada.idComision;
            data.estado = true;
            respuesta = await ActualizarComision(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeComisiones();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDeComisiones();
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
                <h1>Mantenimiento de comisiones</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoComision()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarComision()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarComision()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todos las comisiones registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeComisiones} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idComision" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarComision={onClickProcesarComision} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el estado de la comisión a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Comisiones;