import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { Grid } from '../../components/grid';
import { ObtenerActividadesPlantas, ObtenerPlantas, InactivarActividadPlanta, ObtenerActividadPlantaPorId, ActualizarActividadPlanta, AgregarActividadPlanta } from '../../servicios/ServicioActividadPlanta';

const ActividadPlanta = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Actividad de Planta");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});

    const [listaActividadesPlanta, setListaActividadesPlanta] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const encabezado = [
        { id: 'idactividadplanta', name: 'Código', selector: row => row.idActividadPlanta, head: "Código" },
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head: "F. Creación" },
        { id: 'nombreplanta', name: 'Planta', selector: row => row.nombrePlanta, head: "Planta" },
        { id: 'estado', name: 'Estado', selector: row => row.estado, head: "Estado" },
    ]

    useEffect(() => {
        ObtenerListadoDeActividadPlanta();
    }, []);

    const onClickProcesarActividadPlanta = async (data) => {
        let respuesta = {};
        if (proceso === 1)         
            respuesta = await AgregarActividadPlanta(data); 
        else {
            data.idActividadPlanta = filaSeleccionada.idActividadPlanta;
            data.estado = true;
            respuesta = await ActualizarActividadPlanta(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeActividadPlanta();
            setMensajeRespuesta(respuesta);
        } else {
            setMensajeFormulario(respuesta.mensaje);
        }
    }

    const ObtenerListadoDeActividadPlanta = async () => {
        setPendiente(true);
        setListaActividadesPlanta(await ObtenerActividadesPlantas());
        setPendiente(false);
    }

    const onClickNuevaActividadPlanta = async () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Actividad de Planta");
    }

    const onClickActualizarActividadPlanta = async () => {
        setData(await ObtenerActividadPlantaPorId(filaSeleccionada.idActividadPlanta));  
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Actividad de Planta");
    }

    const onClickInactivarActividadPlanta = async () => {
        const respuesta = await InactivarActividadPlanta(filaSeleccionada.idActividadPlanta)
        if (respuesta.indicador === 0)
            ObtenerListadoDeActividadPlanta();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar("Activar");
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
            <div className="container-fluid text-no">
                <h1>Catálogo de Actividades de Plantas</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevaActividadPlanta()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarActividadPlanta()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarActividadPlanta()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {mensajeRespuesta.mensaje !== "" ?
                    <>
                        <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <span>Listado de todas las actividades de plantas registradas</span>
                <Grid gridHeading={encabezado} gridData={listaActividadesPlanta} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idActividadPlanta" />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className=''>
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarActividadPlanta={onClickProcesarActividadPlanta} mensaje={mensajeFormulario} />
            </FormularioModal>
        </>
    )
}

export default ActividadPlanta;