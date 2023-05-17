import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { Grid } from '../../components/grid';
import { ObtenerProductoPorId, ObtenerProductos, InactivarProducto, ActualizarProducto, AgregarProducto } from '../../servicios/ServicioProducto';

const Producto = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Control de Calidad");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});

    const [listaProductos, setListaProductos] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const encabezado = [
        { id: 'idproducto', name: 'Código', selector: row => row.idProducto, head: "Código" },
        { id: 'grupoProducto', name: 'Grupo', selector: row => row.grupoProducto, head: "Grupo" },
        { id: 'nombreProducto', name: 'Producto', selector: row => row.nombreProducto, head: "Producto" },
        { id: 'estado', name: 'Estado', selector: row => row.estado, head: "Estado" },
    ]

    useEffect(() => {
        ObtenerListadoDeProductos();
    }, []);

    const onClickProcesarProducto = async (data) => {
        let respuesta = {};
        
        if (proceso === 1)         
            respuesta = await AgregarProducto(data); 
        else {
            data.idProducto = filaSeleccionada.idProducto;
            respuesta = await ActualizarProducto(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeProductos();
            setMensajeRespuesta(respuesta);
        } else {
            setMensajeFormulario(respuesta.mensaje);
        }
    }

    const ObtenerListadoDeProductos = async () => {
        setPendiente(true);
        setListaProductos(await ObtenerProductos());
        setPendiente(false);
    }

    const onClickNuevoProducto= async () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Productos");
    }

    const onClickInactivarProducto = async () => {
        const respuesta = await InactivarProducto(filaSeleccionada.idProducto)
        if (respuesta.indicador === 0)
            ObtenerListadoDeProductos();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar("Activar");
    }

    const onClickActualizarProducto = async () => {
        setData(await ObtenerProductoPorId(filaSeleccionada.idProducto));  
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Productos");
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
                <h1>Catálogo de Productos</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoProducto()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarProducto()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarProducto()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {mensajeRespuesta.mensaje !== "" ?
                    <>
                        <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <span>Listado de todos los productos</span>
                <Grid gridHeading={encabezado} gridData={listaProductos} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idProducto" />
                <br/><br/>
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className='' tamano="lg">
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarProducto={onClickProcesarProducto} mensaje={mensajeFormulario}  />
            </FormularioModal>          
        </>
    )
}

export default Producto;