import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Formulario from './formulario';
import { FormularioModal } from '../../components/ventanaModal';
import { Grid } from '../../components/grid';
import { AgregarTipoMateriales, ActualizarTipoMateriales, InactivarTipoMateriales, ObtenerTipoMateriales, ObtenerTipoMaterialesPorId } from '../../servicios/ServicioTipoMateriales';

const TipoMaterial = () => {
    const [proceso, setProceso] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Material");
    const [labelButton, setLabelButton] = useState("Registrar");
    const [mensajeFormulario, setMensajeFormulario] = useState("");
    const [mensajeRespuesta, setMensajeRespuesta] = useState({});

    const [listaTipoMateriales, setListaTipoMateriales] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [data, setData] = useState({});
    const [bloquearBoton, setBloquearBoton] = useState(true);
    const [textoBotonInactivar, setTextoBotonInactivar] = useState("Inactivar");

    const encabezado = [
        { id: 'idtipomaterial', name: 'Código', selector: row => row.idTipoMaterial, head: "Serie" },
        { id: 'nombre', name: 'Nombre', selector: row => row.nombre, head: "Nombre", },
        { id: 'unidadmedida', name: 'Unidad de Medida', selector: row => row.unidadMedida, head: "Unidad Medida" },
        { id: 'grupotipomaterial', name: 'Grupo', selector: row => row.grupoTipoMaterial, head: "Grupo Material" },
       
    ]

    useEffect(() => {
        ObtenerListadoDeTipoMateriales();
    }, []);

    const onClickProcesarTipoMaterial = async (data) => {
        let respuesta = {};
        if (proceso === 1)
            respuesta = await AgregarTipoMateriales(data);
        else {
            
            data.idTipoMaterial = filaSeleccionada.idTipoMaterial;   
            data.estado = true;
            respuesta = await ActualizarTipoMateriales(data);
        }

        if (respuesta.indicador == 0) {
            setModal(false);
            ObtenerListadoDeTipoMateriales();
            setMensajeRespuesta(respuesta);
        } else {
            setMensajeFormulario(respuesta.mensaje);
        }
    }

    const ObtenerListadoDeTipoMateriales = async () => {
        setPendiente(true);
        setListaTipoMateriales(await ObtenerTipoMateriales());
        setPendiente(false);
    }

    const onClickNuevaTipoMaterial = () => {
        setProceso(1);
        setModal(!modal);
        setLabelButton("Registrar");
        setModalTitulo("Registrar Material");
    }

    const onClickActualizarTipoMaterial = async () => {
        setData(await ObtenerTipoMaterialesPorId(filaSeleccionada.idTipoMaterial));
        setProceso(2);
        setModal(!modal);
        setLabelButton("Actualizar");
        setModalTitulo("Actualizar Material");
    }

    const onClickInactivarTipoMaterial = async () => {
        const respuesta = await InactivarTipoMateriales(filaSeleccionada.idTipoMaterial)
        if (respuesta.indicador === 0)
            ObtenerListadoDeTipoMateriales();
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
                <h1>Catálogo de Materiales</h1>
                <hr />
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevaTipoMaterial()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickActualizarTipoMaterial()} disabled={bloquearBoton}>Actualizar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickInactivarTipoMaterial()} disabled={bloquearBoton}>{textoBotonInactivar}</Button>
                <br /><br />
                {mensajeRespuesta.mensaje !== "" ?
                    <>
                        <span className={mensajeRespuesta.indicador === 0 ? "text-success" : "text-danger"}>{mensajeRespuesta.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <span>Listado de todos materiales registrados</span>
                <Grid gridHeading={encabezado} gridData={listaTipoMateriales} selectableRows={true} pending={pendiente}
                    setFilaSeleccionada={onClickSeleccionarFila} idBuscar="idTipoMaterial" />
                <br /><br />
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className=''>
                <Formulario labelButton={labelButton} data={data} proceso={proceso} onClickProcesarTipoMaterial={onClickProcesarTipoMaterial} mensaje={mensajeFormulario} />
            </FormularioModal>


        </>
    )
}

export default TipoMaterial;