import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';

import { AgregarVendedor, ActualizarVendedor, InactivarVendedor, ObtenerVendedores, ObtenerVendedor } from '../../servicios/ServicioVendedor'

const Vendedores = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar vendedor");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [showAlert, setShowAlert] = useState(false);


    const [listaDeVendedores, setListaDeVendedores] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");


    const encabezado = [
        { id: 'id', name: 'id', selector: row => row.id, head: "id", omit: true },
        { id: 'codVendedor', name: 'Cod. Vendedor', selector: row => row.codVendedor, head: "Cod. Vendedor", sortable: true },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre", sortable: true },
        { id: 'apellido1', name: 'P. Apellido', selector: row => row.primerApellido, head: "P. Apellido", sortable: true },
        { id: 'apellido2', name: 'S. Apellido', selector: row => row.segundoApellido, head: "S. Apellido", sortable: true },
        { id: 'nombreSucursal', name: 'Sucursal', selector: row => row.nombreSucursal, head: "Sucursal", sortable: true },
        { id: 'fechaContratacion', name: 'F. Contratación', selector: row => new Date(row.fechaContratacion).toLocaleDateString('es-ES'), head: "F. Contratación", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    //Se indica las columnas en las que se aplica el filtro
    const filterColumns = ['codVendedor', 'nombre', 'primerApellido', 'segundoApellido', 'nombreSucursal'];

    useEffect(() => {
        ObtenerListadoDeVendedores();
    }, []);

    const onClickNuevoVendedor = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar vendedor");
    }

    const onClickActualizarVendedor = async () => {
        setData(await ObtenerVendedor(filaSeleccionada.idVendedor));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar vendedor");
    }

    const onClickInactivarVendedor = async () => {
        const respuesta = await InactivarVendedor(filaSeleccionada.idVendedor)
        if (respuesta.indicador === 0)
            ObtenerListadoDeVendedores();
        setMensajeRespuesta(respuesta);

        setTextoBotonInactivar("Activar");
       
    }

    const ObtenerListadoDeVendedores = async () => {
        setPendiente(true);
        setListaDeVendedores(await ObtenerVendedores());
        setPendiente(false);
    }

    const onClickProcesarVendedor = async (data) => {
        setMensajeFormulario("");
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarVendedor(data);
        else {
            data.idVendedor = filaSeleccionada.idVendedor;
            data.estado = true;
            respuesta = await ActualizarVendedor(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeVendedores();
            setMensajeRespuesta(respuesta);

        } else {
            setMensajeRespuesta(respuesta);
            ObtenerListadoDeVendedores();
            setModal(false);
        //    setMensajeFormulario(respuesta.mensaje);
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

    return (
        <>
            <div className="container-fluid">
                <h1>Mantenimiento de vendedores</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoVendedor()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarVendedor()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarVendedor()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )}
                <span>Listado de todos los vendedores registrados</span>
                <Grid gridHeading={encabezado} gridData={listaDeVendedores} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idVendedor" filterColumns={filterColumns} />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarVendedor={onClickProcesarVendedor} mensaje={mensajeFormulario} />
            </FormularioModal>
        </>
    )
}

export default Vendedores;