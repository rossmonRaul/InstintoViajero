import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/ConfirmModal';

import { AgregarCuota, ActualizarCuota, InactivarCuota, ObtenerCuotas, ObtenerCuota } from '../../servicios/ServicioCuotas'

const Cuotas = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Cuota");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);


    const [listaDeCuotas, setListaDeCuotas] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'idCuota', name: 'idCuota', selector: row => row.idCuota, head: "id", omit: true },
        { id: 'Codigo', name: 'Código', selector: row => row.codigo, head: "Código", sortable: true },
        { id: 'CuotaSemanal', name: 'Cuota Semanal', selector: row => `₡${row.cuotaSemanal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, head: "Cuota Semanal", sortable: true },
        { id: 'Monto', name: 'Monto', selector: row => `₡${row.monto.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, head: "Monto", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['codigo', 'cuotaSemanal','monto'];

    useEffect(() => {
        ObtenerListadoDeCuotas();
    }, []);

    const onClickNuevoCuota = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Cuota");
    }

    const onClickActualizarCuota = async () => {
        setData(await ObtenerCuota(filaSeleccionada.idCuota));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Cuota");
    }

    const onClickInactivarCuota = async () => {
        setConfirmModalOpen(true);
    }


    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarCuota(filaSeleccionada.idCuota)
        if (respuesta.indicador === 0)
            ObtenerListadoDeCuotas();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");

        setConfirmModalOpen(false);
        setShowAlert(true);

    }



    const ObtenerListadoDeCuotas = async () => {
        setPendiente(true);
        setListaDeCuotas(await ObtenerCuotas());
        setPendiente(false);
    }

    const onClickProcesarCuota = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarCuota(data);
        else {
            data.idCuota = filaSeleccionada.idCuota;
            data.estado = true;
            respuesta = await ActualizarCuota(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeCuotas();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDeCuotas();
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
                <h1>Mantenimiento de cuotas</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoCuota()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarCuota()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarCuota()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todas las Cuotas registradas</span>
                <Grid gridHeading={encabezado} gridData={listaDeCuotas} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idCuota" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarCuota={onClickProcesarCuota} mensaje={mensajeFormulario} />
            </FormularioModal>

            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el estado de la cuota a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Cuotas;