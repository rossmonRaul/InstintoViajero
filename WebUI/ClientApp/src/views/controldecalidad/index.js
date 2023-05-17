import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { Grid } from '../../components/grid';
import { ObtenerPlantas, ObtenerControlDeCalidad, ObtenerProductos, AgregarControlDeCalidad, ActualizarControlDeCalidad, ObtenerControlDeCalidadPorId } from '../../servicios/ServicioControlDeCalidad';

const ControlDeCalidad = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Control de Calidad");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});

    const [listaControlDeCalidad, setListaControlDeCalidad] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const encabezado = [
        { id: 'idcalidad', name: 'Código', selector: row => row.idCalidad, head: "Código" },
        { id: 'turno', name: 'Turno', selector: row => row.turno, head: "Turno" },
        { id: 'nombreProducto', name: 'Producto', selector: row => row.nombreProducto, head: "Producto" },
        { id: 'nombrePlanta', name: 'Planta', selector: row => row.nombrePlanta , head: "Planta" },
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head: "F. Creación" },
        { id: 'estatus', name: 'Estatus', selector: row => row.estatus, head: "Estatus" },
    ]

    useEffect(() => {
        ObtenerListadoDeControlDeCalidad();
    }, []);

    const onClickProcesarControlDeCalidad = async (data) => {
        let respuesta = {};
        console.log(data);
        if (proceso === 1)         
            respuesta = await AgregarControlDeCalidad(data); 
        else {
            data.idCalidad = filaSeleccionada.idCalidad;
            data.Estado = true;
            respuesta = await ActualizarControlDeCalidad(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeControlDeCalidad();
            setMensajeRespuesta(respuesta);
        } else {
            setMensajeFormulario(respuesta.mensaje);
        }
    }

    const ObtenerListadoDeControlDeCalidad = async () => {
        setPendiente(true);
        setListaControlDeCalidad(await ObtenerControlDeCalidad());
        setPendiente(false);
    }

    const onClickNuevoControldeCalidad = async () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Control de Calidad");
    }

    const onClickActualizarControldeCalidad = async () => {
        setData(await ObtenerControlDeCalidadPorId(filaSeleccionada.idCalidad));  
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Control de Calidad");
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
                <h1>Catálogo de Control de Calidad</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoControldeCalidad()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarControldeCalidad()} disabled={bloquearBoton}>Actualizar</Button>{' '}
               
                <br/><br/>
                {mensajeRespuesta.mensaje !== "" ?
                    <>
                        <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <span>Listado de todos los controles de calidad</span>
                <Grid gridHeading={encabezado} gridData={listaControlDeCalidad} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idCalidad" />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarControlDeCalidad={onClickProcesarControlDeCalidad} mensaje={mensajeFormulario}  />
            </FormularioModal>
        </>
    )
}

export default ControlDeCalidad;