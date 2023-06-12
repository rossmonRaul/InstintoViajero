import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';

import { FormularioModal } from '../../components/ventanaModal';
import { ActualizarFormasDePago, AgregarFormasDePago, InactivarFormasDePago, ObtenerFormasDePagoPorId, ObtenerFormasDePagos } from '../../servicios/ServicioFormasDePago';
import FormularioFormasDePago from './FormularioFormasDePago';

const FormasDePagoComponet = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [data, setData] = useState({});
    const [modalTitulo, setModalTitulo] = useState("Registrar Producto");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [idBuscar, setidBuscar] = useState("");

    const [listaRespaldo, setListaRespaldo] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [lista, setLista] = useState([]);
    const encabezado = [
        { id: 'CodProducto', name: 'Codigo Forma de Pago', selector: row => row.codFormaDePago, head: "Codigo Forma de Pago" },
        { id: 'Descripcion', name: 'Descripción', selector: row => row.descripcion, head: "Descripción" },
        { id: 'id', name: 'Serie', selector: row => row.id, head: "id", },
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head: "F. Creación" },
        { id: 'estado', name: 'Estado', selector: row => row.estado, head: "Estado" },
    ]
    useEffect(() => {
        ObtenerListado();
    }, []);


    const ObtenerListado = async () => {
        setPendiente(true);
        setLista(await ObtenerFormasDePagos());
        setListaRespaldo(await ObtenerFormasDePagos());
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
        setModalTitulo("Registrar Forma de Pago");
    }

    const onClickActualizar = async () => {
        console.log(filaSeleccionada.id);
        setData(await ObtenerFormasDePagoPorId(filaSeleccionada.id));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Forma de Pago");
    }

    const onClickInactivar = async () => {
        const respuesta = await InactivarFormasDePago(filaSeleccionada.id)
        if (respuesta.indicador === 0)
            ObtenerListado();
        setMensajeRespuesta(respuesta);        
        setTextoBotonInactivar(textoBotonInactivar == "Activar" ? "Inactivar" : "Activar");
    }



    const ValidarSiFilaFueSeleccionada = (fila) => Object.entries(fila).length === 0 ? false : true;


    const onClickProcesar = async(data) => {
        let respuesta = {};
        if(proceso === 1)
            respuesta = await AgregarFormasDePago(data);
        else{
            data.id = filaSeleccionada.id;
            data.estado = true;
            respuesta = await ActualizarFormasDePago(data);
        }

        if(respuesta.indicador == 0){
            setModal(false);
            ObtenerListado();
            setMensajeRespuesta(respuesta);
        }else{     
            setMensajeFormulario(respuesta.mensaje);  
        }             
    }

    return (
        <>
            <div className="container-fluid text-no">
                <h1>Catálogo de Formas de Pago</h1>
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

                <span>Listado de Todas los Formas de Pago Registradas</span>
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
                    <FormularioFormasDePago 
                    labelButton={labelButton} 
                    data={data} 
                    proceso={proceso} 
                    onClickProcesar={onClickProcesar} 
                    mensaje={mensajeFormulario}/>
                </FormularioModal>

            </div>

        </>
    )
}

export default FormasDePagoComponet;