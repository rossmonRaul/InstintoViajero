import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AgregarRol, ActualizarRol, InactivarRol, ObtenerRoles, ObtenerRol } from '../../servicios/ServicioRoles'

const Roles = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar rol");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});

    const [listaDeRoles, setListaDeRoles] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'descripcion', name: 'Descripción', selector: row => row.descripcion, head: "Descripcion", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['descripcion', 'estado'];

    useEffect(() => {
        ObtenerListadoDeRoles();
    }, []);

    const onClickNuevoRol = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar rol");
    }

    const onClickActualizarRol = async () => {
        setData(await ObtenerRol(filaSeleccionada.idRol));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar rol");
    }

    const onClickInactivarRol = async () => {
        const respuesta = await InactivarRol(filaSeleccionada.idRol)
        if (respuesta.indicador === 0)
            ObtenerListadoDeRoles();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar("Activar");
    }

    const ObtenerListadoDeRoles = async () => {
        setPendiente(true);
        setListaDeRoles(await ObtenerRoles());
        setPendiente(false);
    }

    const onClickProcesarRol = async (data) => {

        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarRol(data);
        else {
            data.idRol = filaSeleccionada.idRol;
            data.estado = true;
            respuesta = await ActualizarRol(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeRoles();
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
                <h1>Mantenimiento de roles</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoRol()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarRol()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarRol()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {mensajeRespuesta.mensaje !== "" ?
                    <>
                        <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <span>Listado de todos los roles registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeRoles} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idRol" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarRol={onClickProcesarRol} mensaje={mensajeFormulario} />
            </FormularioModal>
        </>
    )
}

export default Roles;