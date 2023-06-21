import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import FormularioContrasenha from './formularioContrasenha';
import { FormularioModal } from '../../components/ventanaModal';
import { AgregarUsuario, ActualizarUsuario, InactivarUsuario, ObtenerUsuarios, ObtenerUsuarioPorId, ActualizarContrasenhaTemporal } from '../../servicios/ServicioUsuarios'
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/confirmModal';

const Usuarios = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar usuario");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const [modalContrasenha, setModalContrasenha] = useState(false);
    const [mensajeFormularioContrasenha, setMensajeFormularioContrasenha] = useState("");


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre" },
        { id: 'apellido1', name: 'P. Apellido', selector: row => row.primerApellido, head: "P. Apellido" },
        { id: 'apellido2', name: 'S. Apellido', selector: row => row.segundoApellido, head: "S. Apellido" },
        { id: 'Rol', name: 'Rol', selector: row => row.descripcion, head: "Rol" },
        { id: 'nombreSucursal', name: 'Sucursal', selector: row => row.nombreSucursal, head: "Sucursal" },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado" }
    ]

    useEffect(() => {
        ObtenerListadoDeUsuarios();
    }, []);

    const onClickNuevoUsuario = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar usuario");
    }

    const onClickActualizarUsuario = async () => {
        setData(await ObtenerUsuarioPorId(filaSeleccionada.idUsuario));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar usuario");
    }


    const onClickInactivarUsuario = async () => {
        setConfirmModalOpen(true);
    }
    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarUsuario(filaSeleccionada.idUsuario)
        if (respuesta.indicador === 0)
            ObtenerListadoDeUsuarios();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");
        setConfirmModalOpen(false);
        setShowAlert(true);
    }

    const ObtenerListadoDeUsuarios = async () => {
        setPendiente(true);
        setListaDeUsuarios(await ObtenerUsuarios());
        setPendiente(false);
    }

    const onClickProcesarUsuario = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarUsuario(data);
        else {
            data.idUsuario = filaSeleccionada.idUsuario;
            data.idPersona = filaSeleccionada.idPersona;
            data.estado = true;
            respuesta = await ActualizarUsuario(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeUsuarios();
            setMensajeRespuesta(respuesta);
        } else {
            setMensajeFormulario(respuesta.mensaje);
        }
        setShowAlert(true);
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

    const onClickActualizarContrasenha = async () => {
        setData(await ObtenerUsuarioPorId(filaSeleccionada.idUsuario));
        setModalContrasenha(true);
    }

    const onClickCerrarModalContrasenha = () => setModalContrasenha(false);

    const onClickProcesarContrasenha = async (data) => {
        data.idUsuario = filaSeleccionada.idUsuario;
        const respuesta = await ActualizarContrasenhaTemporal(data);
        if (respuesta.indicador == 0) {
            setModalContrasenha(false);       
            setMensajeRespuesta(respuesta);
            setShowAlert(true);
        } else {
            setMensajeFormularioContrasenha(respuesta.mensaje);
        }
    }

    return (
        <>
            <div className="container-fluid">
                <h1>Mantenimiento de usuarios</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoUsuario()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarUsuario()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarContrasenha()} disabled={bloquearBoton}>Contraseña</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarUsuario()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )} 
                <span>Listado de todas los usuarios registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeUsuarios} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idUsuario" />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarUsuario={onClickProcesarUsuario} mensaje={mensajeFormulario} />
            </FormularioModal>
            <FormularioModal show={modalContrasenha} handleClose={onClickCerrarModalContrasenha} titulo={"Actualizar Contrase;a temporal"} className='' >
                <FormularioContrasenha data={data} onClickProcesarContrasenha={onClickProcesarContrasenha} mensaje={mensajeFormularioContrasenha} />
            </FormularioModal>
            {confirmModalOpen && (
                <ConfirmModal
                    isOpen={confirmModalOpen}
                    toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                    message={`¿Desea cambiar el estado del usuario a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                        }?`}
                    onConfirm={onConfirmCambioEstado}
                />
            )}
        </>
    )
}

export default Usuarios;