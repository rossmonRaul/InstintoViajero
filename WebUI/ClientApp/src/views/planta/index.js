import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { Grid } from '../../components/grid';
import { AgregarPlanta, ActualizarPlanta, InactivarPlanta, ObtenerPlantas, ObtenerPlantaPorId } from '../../servicios/ServicioPlanta';

const Planta = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar planta");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [idBuscar, setidBuscar] = useState("");

    const [listaPlantas, setListaPlantas] = useState([]);
    const [listaRespaldo, setListaRespaldo] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const encabezado = [
        { id: 'ubicacion', name: 'Ubicación', selector: row => row.ubicacion, head: "Ubicación" },
        { id: 'nombrePlanta', name: 'Planta', selector: row => row.nombrePlanta, head: "Planta" },     
        { id: 'id', name: 'Serie', selector: row => row.idPlanta, head: "id", },         
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head:"F. Creación" },
        { id: 'estado', name: 'Estado', selector: row => row.estado , head:"Estado" },
    ]

    useEffect(() => {
        ObtenerListadoDePlantas();        
    }, []);

    const onClickProcesarPlanta = async(data) => {
        let respuesta = {};
        if(proceso === 1)
            respuesta = await AgregarPlanta(data);
        else{
            data.idPlanta = filaSeleccionada.idPlanta;
            data.estado = true;
            respuesta = await ActualizarPlanta(data);
        }

        if(respuesta.indicador == 0){
            setModal(false);
            ObtenerListadoDePlantas();
            setMensajeRespuesta(respuesta);
        }else{     
            setMensajeFormulario(respuesta.mensaje);  
        }             
    }

    const ObtenerListadoDePlantas = async() => {
        setPendiente(true);
        setListaPlantas(await ObtenerPlantas());
        setListaRespaldo(await ObtenerPlantas());
        setPendiente(false);
    }

    const onClickNuevaPlanta = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar planta");
    }

    const onClickActualizarPlanta = async() => {
        setData(await ObtenerPlantaPorId(filaSeleccionada.idPlanta));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar planta");
    }

    const onClickInactivarPlanta = async() => {
        const respuesta = await InactivarPlanta(filaSeleccionada.idPlanta)
        if(respuesta.indicador === 0)
            ObtenerListadoDePlantas();
        setMensajeRespuesta(respuesta);
        setTextoBotonInactivar("Activar");
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
                <h1>Catálogo de Ubicaciones de Plantas</h1>
                <hr />
                
                  
                        <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevaPlanta()}>Registrar</Button>{' '}
      
                        <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarPlanta()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarPlanta()} disabled={bloquearBoton}>{textoBotonInactivar}
                        </Button>
                <br />
                {mensajeRespuesta.mensaje !== "" ? 
                <>                   
                    <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                    <br/>  
                </>                
                : ''}    
                <span>Listado de todas las plantas registradas</span>
                <br />
                    <Grid gridHeading={encabezado} gridData={listaRespaldo} selectableRows={true} pending={pendiente}
                        setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idPlanta" />
                    <br /><br />
               
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className=''>
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarPlanta={onClickProcesarPlanta} mensaje={mensajeFormulario}/>
            </FormularioModal>
        </>
        )
}

export default Planta;