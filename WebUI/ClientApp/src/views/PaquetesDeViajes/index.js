import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';

import { FormularioModal } from '../../components/ventanaModal';
import { ActualizarPaquetesDeViajes, AgregarPaquetesDeViajes, InactivarPaquetesDeViajes, ObtenerPaquetesDeViajes, ObtenerPaquetesDeViajesPorId } from '../../servicios/ServicioPaquetesDeViajes';
import FormularioPaquetesDeViajes from './FormularioPaquetesDeViajes';


const PaquetesDeViajesComponet = () => {
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
        { id: 'id', name: 'Serie', selector: row => row.id, head: "id", },        
        { id: 'Descripcion', name: 'Descripción', selector: row => row.descripcion, head: "Descripción" },
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head: "F. Creación" },
        { id: 'fechaSalida', name: 'Fecha Salida', selector: row => row.fechaSalida.split('T')[0], head: "Fecha Salida" },
        { id: 'fechaLLegada', name: 'Fecha LLegada', selector: row => row.fechaLLegada.split('T')[0], head: "Fecha LLegada" },
        
        { id: 'tieneRegalias', name: 'Regalias', selector: row => row.tieneRegalias ? "SI" : "NO", head: "Regalias" },
        { id: 'tieneDescuentos', name: 'Descuentos', selector: row => row.tieneDescuentos ? "SI" : "NO", head: "Descuentos" },
        { id: 'estado', name: 'Estado', selector: row => row.estado, head: "Estado" },
    ]
    useEffect(() => {
        ObtenerListado();
    }, []);


    const ObtenerListado = async () => {
        setPendiente(true);
        setLista(await ObtenerPaquetesDeViajes());
        setListaRespaldo(await ObtenerPaquetesDeViajes());
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
        setModalTitulo("Registrar Paquete de Viaje");
    }

    const onClickActualizar = async () => {
        console.log(filaSeleccionada.id);
        setData(await ObtenerPaquetesDeViajesPorId(filaSeleccionada.id));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Paquete de Viaje");
    }

    const onClickInactivar = async () => {
        const respuesta = await InactivarPaquetesDeViajes(filaSeleccionada.id)
        if (respuesta.indicador === 0)
            ObtenerListado();
        setMensajeRespuesta(respuesta);        
        setTextoBotonInactivar(textoBotonInactivar == "Activar" ? "Inactivar" : "Activar");
    }



    const ValidarSiFilaFueSeleccionada = (fila) => Object.entries(fila).length === 0 ? false : true;


    const onClickProcesar = async(data) => {
        console.log({...data});
        let respuesta = {};
        
        data.TieneRegalias = Boolean(data.TieneRegalias);
        data.TieneDescuentos = Boolean(data.TieneDescuentos);
        
        if(proceso === 1) {
            respuesta = await AgregarPaquetesDeViajes(data);
        }
        else{
            data.id = filaSeleccionada.id;
            data.estado = true;
            respuesta = await ActualizarPaquetesDeViajes(data);
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
                <h1>Administración Paquetes de Viajes</h1>
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

                <span>Listado de Todos los Paquetes Registrados</span>
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
                    <FormularioPaquetesDeViajes 
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

export default PaquetesDeViajesComponet;