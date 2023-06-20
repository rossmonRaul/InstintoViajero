import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { Grid } from '../../components/grid';
import { AgregarSucursal, ActualizarSucursal, InactivarSucursal, ObtenerSucursales, ObtenerSucursalPorId } from '../../servicios/ServicioSucursal';
import { AlertDismissible } from '../../components/alerts';


const Sucursal = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Sucursal");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});
    const [idBuscar, setidBuscar] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const [listaSucursales, setListaSucursales] = useState([]);
    const [listaRespaldo, setListaRespaldo] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const encabezado = [
        { id: 'ubicacion', name: 'Ubicación', selector: row => row.ubicacion, head: "Ubicación" },
        { id: 'nombreSucursal', name: 'Sucursal', selector: row => row.nombreSucursal, head: "Sucursal" },     
        { id: 'id', name: 'Serie', selector: row => row.idSucursal, head: "id", },         
        { id: 'fechaCreacion', name: 'F. Creación', selector: row => row.fechaCreacion.split('T')[0], head:"F. Creación" },
        { id: 'estado', name: 'Estado', selector: row => row.estado , head:"Estado" },
    ]

    useEffect(() => {
        ObtenerListadoDeSucursals();        
    }, []);

    const onClickProcesarSucursal = async(data) => {
        let respuesta = {};
        if(proceso === 1)
            respuesta = await AgregarSucursal(data);
        else{
            data.idSucursal = filaSeleccionada.idSucursal;
            data.estado = true;
            respuesta = await ActualizarSucursal(data);
        }

        if(respuesta.indicador == 0){
            setModal(false);
            ObtenerListadoDeSucursals();
            setMensajeRespuesta(respuesta);
        }else{     
            setMensajeFormulario(respuesta.mensaje);  
        } 
        setShowAlert(true);

    }

    const ObtenerListadoDeSucursals = async() => {
        setPendiente(true);
        setListaSucursales(await ObtenerSucursales());
        setListaRespaldo(await ObtenerSucursales());
        setPendiente(false);
    }

    const onClickNuevaSucursal = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar sucursal");
    }

    const onClickActualizarSucursal = async() => {
        setData(await ObtenerSucursalPorId(filaSeleccionada.idSucursal));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar sucursal");
    }

    const onClickInactivarSucursal = async() => {
        const respuesta = await InactivarSucursal(filaSeleccionada.idSucursal)
        if(respuesta.indicador === 0)
            ObtenerListadoDeSucursals();
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
                <h1>Catálogo de Ubicación de Sucursales</h1>
                <hr />
                
                  
                        <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevaSucursal()}>Registrar</Button>{' '}
      
                        <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarSucursal()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarSucursal()} disabled={bloquearBoton}>{textoBotonInactivar}
                        </Button>
                <br />
                {showAlert && (
                    <AlertDismissible
                        indicador={mensajeRespuesta.indicador}
                        mensaje={mensajeRespuesta.mensaje}
                        setShow={setShowAlert}
                    />
                )} 
                <span>Listado de todas las sucursales registradas</span>
                <br />
                    <Grid gridHeading={encabezado} gridData={listaRespaldo} selectableRows={true} pending={pendiente}
                        setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idSucursal" />
                    <br /><br />
               
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className=''>
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarSucursal={onClickProcesarSucursal} mensaje={mensajeFormulario}/>
            </FormularioModal>
        </>
        )
}

export default Sucursal;