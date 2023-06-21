import React, { useEffect, useState } from 'react';
import { ActualizarProducto, AgregarProducto, InactivarProducto, ObtenerProductoPorId, ObtenerProductos } from '../../servicios/ServicioProductos';
import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';
import FormularioProducto from './FormularioProductos';
import { FormularioModal } from '../../components/ventanaModal';
import { AlertDismissible } from '../../components/alerts';
import { ConfirmModal } from '../../components/confirmModal';

const ProductoComponet = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [data, setData] = useState({});
    const [modalTitulo, setModalTitulo] = useState("Registrar Producto");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [idBuscar, setidBuscar] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);

    const [listaRespaldo, setListaRespaldo] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [lista, setLista] = useState([]);
    const encabezado = [
        { id: 'CodProducto', name: 'Codigo de Producto', selector: row => row.codProducto, head: "Codigo de Producto" },
        { id: 'Nombre', name: 'Descripción del Producto', selector: row => row.nombre, head: "Descripción del Producto" },
        { id: 'id', name: 'Serie', selector: row => row.id, head: "id", },
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head: "F. Creación" },
        { id: 'estado', name: 'Estado', selector: row => row.estado, head: "Estado" },
    ]
    useEffect(() => {
        ObtenerListado();
    }, []);


    const ObtenerListado = async () => {
        setPendiente(true);
        setLista(await ObtenerProductos());
        setListaRespaldo(await ObtenerProductos());
        setPendiente(false);
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

    const onClickNuevo = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Producto");
    }

    const onClickActualizar = async () => {
        console.log(filaSeleccionada.id);
        setData(await ObtenerProductoPorId(filaSeleccionada.id));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Producto");
    }

    const onClickInactivar = async () => {
        setConfirmModalOpen(true);
    }

    const onConfirmCambioEstado = async () => {
        const respuesta = await InactivarProducto(filaSeleccionada.id)
        if (respuesta.indicador === 0)
            ObtenerListado();
        setMensajeRespuesta(respuesta);        
        setTextoBotonInactivar(textoBotonInactivar === "Activar" ? "Inactivar" : "Activar");
        setConfirmModalOpen(false);
        setShowAlert(true);
    }



    const ValidarSiFilaFueSeleccionada = (fila) => Object.entries(fila).length === 0 ? false : true;


    const onClickProcesar = async(data) => {
        let respuesta = {};        
        if(proceso === 1)
            respuesta = await AgregarProducto(data);
        else{
            data.id = filaSeleccionada.id;
            data.estado = true;
            respuesta = await ActualizarProducto(data);
        }

        if(respuesta.indicador == 0){
            setModal(false);
            ObtenerListado();
            setMensajeRespuesta(respuesta);
        }else{     
            setMensajeFormulario(respuesta.mensaje);  
        } 
        setShowAlert(true);
    }

    return (
        <>
            <div className="container-fluid text-no">
                <h1>Catálogo de Productos</h1>
                <hr />

                <Button
                    variant="primary"
                    type="submit"
                    size="sm"
                    onClick={() => onClickNuevo()}>
                    Registrar
                </Button>{' '}

                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizar()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button
                    variant="primary"
                    type="submit"
                    size="sm"
                    onClick={() => onClickInactivar()}
                    disabled={bloquearBoton}
                >
                    {textoBotonInactivar}
                </Button>
                <br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )} 
                <span>Listado de todas los productos registradas</span>
                <br />
                <Grid
                    gridHeading={encabezado}
                    gridData={listaRespaldo}
                    selectableRows={true}
                    pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila}
                    idBuscar="id" />
                <br />
                <br />
                <FormularioModal 
                show={modal} 
                handleClose={onClickCerrarModal} 
                titulo={modalTitulo} tamano="lg" className=''>
                <FormularioProducto 
                labelButton={labelButton} 
                data={data} 
                proceso={proceso} 
                onClickProcesar={onClickProcesar} 
                mensaje={mensajeFormulario}/>
                </FormularioModal>
                {confirmModalOpen && (
                    <ConfirmModal
                        isOpen={confirmModalOpen}
                        toggle={() => setConfirmModalOpen(!confirmModalOpen)}
                        message={`¿Desea cambiar el estado del producto a ${textoBotonInactivar === "Activar" ? "activo" : "inactivo"
                            }?`}
                        onConfirm={onConfirmCambioEstado}
                    />
                )}
            </div>

        </>
    )
}

export default ProductoComponet;