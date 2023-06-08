import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AgregarPersona, ActualizarPersona, InactivarPersona, ObtenerPersonas, ObtenerPersona } from '../../servicios/ServicioPersonas'

const Personas = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar persona");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});

    const [listaDePersonas, setListaDePersonas] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'identificacion', name: 'Identificacion', selector: row => row.identificacion, head: "Identificación", sortable: true },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre", sortable: true },
        { id: 'apellido1', name: 'P. Apellido', selector: row => row.primerApellido, head: "P. Apellido", sortable: true },
        { id: 'apellido2', name: 'S. Apellido', selector: row => row.segundoApellido, head: "S. Apellido", sortable: true },
        { id: 'fechaNacimiento', name: 'FechaNacimiento', selector: row => row.descripcion, head: "F. Nacimiento", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado" , sortable: true}
    ]

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
        const respuesta = await InactivarPersona(filaSeleccionada.idPersona)
        if (respuesta.indicador === 0)
            ObtenerListadoDePersonas();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar("Activar");
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
                {mensajeRespuesta.mensaje !== "" ?
                    <>
                        <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <span>Listado de todas los personas registradas</span>
                <Grid gridHeading={encabezado} gridData={listaDePersonas} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idPersona" />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarPersona={onClickProcesarPersona} mensaje={mensajeFormulario} />
            </FormularioModal>
        </>
    )
}

export default Personas;