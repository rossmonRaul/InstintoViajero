import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { Grid } from '../../components/grid';

import { FormularioModal } from '../../components/ventanaModal';
import { ActualizarTourDeViaje, AgregarTourDeViaje, InactivarTourDeViaje, ObtenerTourDeViaje, ObtenerTourDeViajePorId } from '../../servicios/ServicioTourDeViaje';
import FormularioTourDeViaje from './FormularioTourDeViaje';


const TourDeViajeComponet = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [data, setData] = useState({});
    const [modalTitulo, setModalTitulo] = useState("Registrar Tour");
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
        { id: 'estado', name: 'Estado', selector: row => row.estado, head: "Estado" },
    ]
    useEffect(() => {
        ObtenerListado();
    }, []);


    const ObtenerListado = async () => {
        setPendiente(true);
        setLista(await ObtenerTourDeViaje());
        setListaRespaldo(await ObtenerTourDeViaje());
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
        setModalTitulo("Registrar Tour de Viaje");
    }

    const onClickActualizar = async () => {
        console.log(filaSeleccionada.id);
        setData(await ObtenerTourDeViajePorId(filaSeleccionada.id));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Tour de Viaje");
    }

    const onClickInactivar = async () => {
        const respuesta = await InactivarTourDeViaje(filaSeleccionada.id)
        if (respuesta.indicador === 0)
            ObtenerListado();
        setMensajeRespuesta(respuesta);        
        setTextoBotonInactivar(textoBotonInactivar == "Activar" ? "Inactivar" : "Activar");
    }



    const ValidarSiFilaFueSeleccionada = (fila) => Object.entries(fila).length === 0 ? false : true;


    const onClickProcesar = async(data) => {        
        let respuesta = {};
        
        if(proceso === 1) {
            respuesta = await AgregarTourDeViaje(data);
        }
        else{
            data.id = filaSeleccionada.id;
            data.estado = true;
            respuesta = await ActualizarTourDeViaje(data);
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
                <h1>Administración Tours de Viajes</h1>
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

                <span>Listado de Todos los Tours Registrados</span>
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
                    <FormularioTourDeViaje 
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

export default TourDeViajeComponet;