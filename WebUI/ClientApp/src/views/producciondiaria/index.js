import React, { useEffect, useState } from 'react';
import { Row, Button } from "react-bootstrap";
import Encabezado from "./encabezado";
import DesgloseProduccion from './desgloseProduccion';
import TotalesProduccion from './totalesProduccion';
import Agregados from './agregados';
import Turnos from './turnos'
import ObservacionesMantenimiento from './observacionesMantenimiento';
import '../../styles/producciondiaria.css';
import { ObtenerDatosDeUsuario } from '../../utils/utilidades';
import { ObtenerTipoMateriales } from '../../servicios/ServicioTipoMateriales';
import {
    AgregarDetalleProduccionDiaria, AgregarEncabezadoProduccionDiaria, AgregarSegmentoDetalleProduccionDiaria, InsertarAgregados,
    InsertarObservacionMantenimiento, InsertarTotalesProduccionDiaria, ObtenerDetalleAgregados, ObtenerDetalleObservacionMantenimiento,
    ObtenerDetalleProduccionDiaria, ObtenerEncabezadoProduccionDiaria, ObtenerHorarios, ObtenerSegmentoDetalleProduccionDiaria, ObtenerTotalProduccionDiaria
} from '../../servicios/ServicioProduccionDiaria';
import { ObtenerProductos } from '../../servicios/ServicioProducto';
import { ObtenerPlantas } from '../../servicios/ServicioPlanta';
import { MensajeModal, MensajeModalAceptar } from '../../components/ventanaModal';


const ProduccionDiaria = () => {
    const [idPlanta, setidPlanta] = useState(0);
    const [fecha, setfecha] = useState("");
    const [idEncabezadoProduccionDiaria, setIdEncabezadoProduccionDiaria] = useState(0)
    const [horaInicio, sethoraInicio] = useState("");
    const [horaFinal, sethoraFinal] = useState("");
    const [idProducto, setidProducto] = useState(0);
    const [listaHorarios, setListaHorarios] = useState([]);
    const [listaProductos, setListaProductos] = useState([]);
    const [listaPlantas, setListaPlantas] = useState([]);
    const [desgloseProduccion, setDesgloseProduccion] = useState([]);
    const [listaMateriales, setListaMateriales] = useState([]);


    const [placaInicioTurno1, setPlacaInicioTurno1] = useState("");
    const [placaFinalTurno1, setPlacaFinalTurno1] = useState("");
    const [placaInicioTurno2, setPlacaInicioTurno2] = useState("");
    const [placaFinalTurno2, setPlacaFinalTurno2] = useState("");

    const [listaObservaciones, setListaObservaciones] = useState([]);
    const [listaAgregados, setListaAgregados] = useState([]);

    const [placasTotales, setPlacasTotales] = useState("");
    const [unidadesTotales, setUnidadesTotales] = useState("");
    const [cubosTotales, setCubosTotales] = useState("");
    const [mermaTotal, setMermaTotal] = useState("");
    const [mezclasPerdidas, setMezclasPerdidas] = useState("");
    const [numeroMezclas, setNumeroMezclas] = useState("");
    const [cemento, setCemento] = useState("");
    const [aditivo, setAditivo] = useState("");
    const [color, setColor] = useState("");
    const [cantidadColor, setCantidadColor] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [showMensaje, setShowMensaje] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');

    const [showMensajeAceptar, setShowMensajeAceptar] = useState(false);
    const [mensajeModalAceptar, setMensajeModalAceptar] = useState('');

    useEffect(() => {
        ObtenerListadoDeHorarios();
        ObtenerListadoDeProductos();
        ObtenerListadoDeMateriales();
        ObtenerListadoDePlantas();
       
    }, []);

    useEffect(() => {
      
        ObtenerProduccionDiaria();
        
    });


    const ObtenerListadoDeHorarios = async () => {
        const horarios = await ObtenerHorarios();
        if (horarios !== undefined && horarios.indicador === undefined) {
            horarios.forEach(element => {
                element.label = `${element.horaInicio}-${element.horaFinal}`
            });
            setListaHorarios(horarios);
        }
    }

    const ObtenerListadoDeMateriales = async () => {
        const materiales = await ObtenerTipoMateriales();
        if (materiales !== undefined ) {
           
            setListaMateriales(materiales);
        }

    }

    const ObtenerListadoDeProductos = async () => {
        const productos = await ObtenerProductos();
        if (productos !== undefined) {
            setListaProductos(productos);
        }
    }

    const ObtenerListadoDePlantas = async () => {
        const plantas = await ObtenerPlantas();
        if (plantas !== undefined) {
            setListaPlantas(plantas);
        }
    }


    const ObtenerDesgloseProduccionDiaria = (idEncabezadoProduccionDiaria) => {
        const tempDesglose = []
        desgloseProduccion.forEach((desglose, index) => {
            tempDesglose.push({
                idEncabezadoProduccionDiaria,
                idHorario: desglose.idHorario,
                placas: Number(desglose.placas),
                observacion: desglose.observacion || ""
            })
        });
        return tempDesglose;
    }

    const ObtenerPrimerSegmentoDetalleProduccionDiaria = (idEncabezadoProduccionDiaria) => {
        return {
            IdEncabezadoProduccionDiaria: Number(idEncabezadoProduccionDiaria),
            IdSegmentosDetallesProduccionesDiarias: 0,
            IdTurno: 1,
            PlacaInicio: Number(placaInicioTurno1),
            PlacaFinal: Number(placaFinalTurno1),
            Conteo: Number(placaFinalTurno1) - Number(placaInicioTurno1)
        }
    }

    const ObtenerSegundoSegmentoDetalleProduccionDiaria = (idEncabezadoProduccionDiaria) => {
        return {
            idEncabezadoProduccionDiaria,
            IdTurno: 2,
            PlacaInicio: Number(placaInicioTurno2),
            PlacaFinal: Number(placaFinalTurno2),
            Conteo: Number(placaFinalTurno2) - Number(placaInicioTurno2)
        }
    }

    const ObtenerTotalesProduccionDiaria = (idEncabezadoProduccionDiaria) => {
        return {
            idEncabezadoProduccionDiaria,
            placasTotales: placasTotales == "" ? 0 : placasTotales,
            unidadesTotales: unidadesTotales == "" ? 0 : unidadesTotales,
            cubosTotales: cubosTotales == "" ? 0 : cubosTotales,
            mermaTotal: mermaTotal == "" ? 0 : mermaTotal,
            mezclasPerdidas: mezclasPerdidas == "" ? 0 : mezclasPerdidas,
            numeroMezclas: numeroMezclas == "" ? 0 : numeroMezclas,
            cemento: cemento == "" ? 0 : cemento,
            cantidadColor: cantidadColor == "" ? 0 : cantidadColor,
            color,
            aditivo
        }
    }

    const ObtenerObservacionesDeMantenimiento = (idEncabezadoProduccionDiaria) => {
        const tempLista = [];
        listaObservaciones.forEach(element => {
            if (element.idObservacionesMantenimiento === undefined) {
                tempLista.push({
                    idEncabezadoProduccionDiaria,
                    descripcion: element.descripcion
                })
            }
        });
        return tempLista;
    }

    const ObtenerAgregados = (idEncabezadoProduccionDiaria, nombre) => {
        const tempLista = [];
        listaAgregados.forEach(element => {
            if (element.idAgregadoProduccionDiaria === undefined) {
                tempLista.push({
                    idEncabezadoProduccionDiaria,
                    descripcion: "",
                    tipoAgregado: element.tipoAgregado,
                    vueltas: element.vueltas,
                    usuarioIngreso: nombre
                })
            }
        });
        return tempLista;
    }

    const onClickGuardar = async () => {

      
        const {  nombre,descripcion } = await ObtenerDatosDeUsuario();

        if (descripcion === "Inspector") {
            const { idPlanta } = await ObtenerDatosDeUsuario();
            const data = {
                idEncabezadoProduccionDiaria,
                idPlanta,
                horaInicio,
                horaFinal,
                idProducto: idProducto,
                fecha: ObtenerFecha(),
                estatus: 1
            }
        

            const respuesta = await AgregarEncabezadoProduccionDiaria(data);

            if (respuesta.indicador == 0) {
                const Desglose = ObtenerDesgloseProduccionDiaria(respuesta.mensaje);
                if (Desglose.length > 0) {
                    const respDetalle = await AgregarDetalleProduccionDiaria(Desglose);
                }
                const respsegmento1 = await AgregarSegmentoDetalleProduccionDiaria(ObtenerPrimerSegmentoDetalleProduccionDiaria(respuesta.mensaje))
                const respsegmento2 = await AgregarSegmentoDetalleProduccionDiaria(ObtenerSegundoSegmentoDetalleProduccionDiaria(respuesta.mensaje))
                const resptotales = await InsertarTotalesProduccionDiaria(ObtenerTotalesProduccionDiaria(respuesta.mensaje));

                const respObservacion = await InsertarObservacionMantenimiento(ObtenerObservacionesDeMantenimiento(respuesta.mensaje));
                const respAgregados = await InsertarAgregados(ObtenerAgregados(respuesta.mensaje, nombre));
                setMensajeModalAceptar("Proceso completado: Producción diaria guardada con éxito.")
                setShowMensajeAceptar(true)
                ObtenerProduccionDiaria()
            
            }

        } else {
            
            const data = {
                idEncabezadoProduccionDiaria,
                idPlanta: idPlanta,
                horaInicio,
                horaFinal,
                idProducto: idProducto == 0 ? listaProductos[0].idProducto : idProducto,
                fecha: fecha,
                estatus: 1
            }


            const respuesta = await AgregarEncabezadoProduccionDiaria(data);

            if (respuesta.indicador == 0) {
                const Desglose = ObtenerDesgloseProduccionDiaria(respuesta.mensaje);
                if (Desglose.length > 0) {
                    const respDetalle = await AgregarDetalleProduccionDiaria(Desglose);
                }
                const respsegmento1 = await AgregarSegmentoDetalleProduccionDiaria(ObtenerPrimerSegmentoDetalleProduccionDiaria(respuesta.mensaje))
                const respsegmento2 = await AgregarSegmentoDetalleProduccionDiaria(ObtenerSegundoSegmentoDetalleProduccionDiaria(respuesta.mensaje))
                const resptotales = await InsertarTotalesProduccionDiaria(ObtenerTotalesProduccionDiaria(respuesta.mensaje));

                const respObservacion = await InsertarObservacionMantenimiento(ObtenerObservacionesDeMantenimiento(respuesta.mensaje));
                const respAgregados = await InsertarAgregados(ObtenerAgregados(respuesta.mensaje, nombre));
                setMensajeModalAceptar("Proceso completado: Producción diaria guardada con éxito.")
                setShowMensajeAceptar(true)
                ObtenerProduccionDiaria()

            }


        }
     }
    

    const onClickFinalizar = () => {
        setShowMensaje(true);
        setMensajeModal('¿Esta seguro de que quiere finalizar la producción diaria? una vez terminada no podrá realizar cambios');
    }

    const onClickConfirmarFinalizar = async () => {
        const {  nombre, descripcion } = await ObtenerDatosDeUsuario();

        if (descripcion === "Inspector") {
            const { idPlanta, nombre, descripcion } = await ObtenerDatosDeUsuario();
            const data = {
                idEncabezadoProduccionDiaria,
                idPlanta,
                horaInicio,
                horaFinal,
                idProducto: idProducto,
                fecha: ObtenerFecha(),
                estatus: 2
            }
            const respuesta = await AgregarEncabezadoProduccionDiaria(data);
            setShowMensaje(false);
            if (respuesta.indicador == 0) {
                setShowMensajeAceptar(true);
                setMensajeModalAceptar('Produccion Diaria Finalizada y guardada exitosamente');
                LimpiarCampos();

            }
        } else {
            const data = {
                idEncabezadoProduccionDiaria,
                idPlanta: idPlanta,
                horaInicio,
                horaFinal,
                idProducto: idProducto == 0 ? listaProductos[0].idProducto : idProducto,
                fecha: fecha,
                estatus: 2
            }
            const respuesta = await AgregarEncabezadoProduccionDiaria(data);
            setShowMensaje(false);
            if (respuesta.indicador == 0) {
                setShowMensajeAceptar(true);
                setMensajeModalAceptar('Produccion Diaria Finalizada y guardada exitosamente');
                LimpiarCampos();
                setfecha([0])
                setidPlanta([0])
                setIdEncabezadoProduccionDiaria(0);

            }
        }
    }

    const LimpiarCampos = async () => {
        sethoraInicio([0]);
        sethoraFinal([0]);
        setPlacaInicioTurno1([]);
        setPlacaFinalTurno1([]);
        setPlacaInicioTurno2([]);
        setPlacaFinalTurno2([]);
        setPlacasTotales("")
        setUnidadesTotales("")
        setCubosTotales("")
        setMermaTotal("")
        setMezclasPerdidas("")
        setNumeroMezclas("")
        setCemento("")
        setCantidadColor("")
        setColor("")
        setAditivo("")

        const detalleProduccion = await ObtenerDetalleProduccionDiaria(0);
        ObtenerListaAgregados(0)
        ObtenerListaDetalleObservacion(0)
        setDesgloseProduccion(detalleProduccion);
    }
    const ObtenerProduccionDiaria = async () => {


        const { descripcion } = await ObtenerDatosDeUsuario();
        if (idEncabezadoProduccionDiaria == 0) {

            if (descripcion === "Inspector") {

                const { idPlanta } = await ObtenerDatosDeUsuario();
                const data = {
                    idPlanta,
                    fecha: ObtenerFecha(),
                    idProducto:idProducto
                }
                const encabezado = await ObtenerEncabezadoProduccionDiaria(data);
                if (encabezado !== null) {
                    sethoraInicio(encabezado.horaInicio.split(".")[0]);
                    sethoraFinal(encabezado.horaFinal.split(".")[0]);
                    setIdEncabezadoProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    setidProducto(encabezado.idProducto);
                    ObtenerListaDesgloseProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaConteoPlacasProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaDetalleObservacion(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaAgregados(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaTotalProduccionDiaria();
                } 

            } else {

                const data = {
                    idPlanta: idPlanta,
                    fecha: fecha,
                    idProducto: idProducto
                }

                const encabezado = await ObtenerEncabezadoProduccionDiaria(data);
                if (encabezado !== null) {
                    sethoraInicio(encabezado.horaInicio.split(".")[0]);
                    sethoraFinal(encabezado.horaFinal.split(".")[0]);
                    setIdEncabezadoProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    setidProducto(encabezado.idProducto);
                    ObtenerListaDesgloseProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaConteoPlacasProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaDetalleObservacion(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaAgregados(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaTotalProduccionDiaria();

                } 

            }
        } else {

            if (descripcion === "Administrador") {
                const data = {
                    idPlanta: idPlanta,
                    fecha: fecha,
                    idProducto: idProducto
                }

                const encabezado = await ObtenerEncabezadoProduccionDiaria(data);
                if (encabezado !== null && idEncabezadoProduccionDiaria !== encabezado.idEncabezadoProduccionDiaria) {
                    sethoraInicio(encabezado.horaInicio.split(".")[0]);
                    sethoraFinal(encabezado.horaFinal.split(".")[0]);
                    setIdEncabezadoProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    setidProducto(encabezado.idProducto);
                    ObtenerListaDesgloseProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaConteoPlacasProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaDetalleObservacion(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaAgregados(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaTotalProduccionDiaria();

                } else if (encabezado === null) {

                    sethoraInicio([0]);
                    setIdEncabezadoProduccionDiaria(0);
                    sethoraFinal([0]);

                    LimpiarCampos();



                }

            } else {
                const { idPlanta } = await ObtenerDatosDeUsuario();
                const data = {
                    idPlanta,
                    fecha: ObtenerFecha(),
                    idProducto: idProducto
                }

                const encabezado = await ObtenerEncabezadoProduccionDiaria(data);
                if (encabezado !== null && idEncabezadoProduccionDiaria !== encabezado.idEncabezadoProduccionDiaria) {
                    sethoraInicio(encabezado.horaInicio.split(".")[0]);
                    sethoraFinal(encabezado.horaFinal.split(".")[0]);
                    setIdEncabezadoProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    setidProducto(encabezado.idProducto);
                    ObtenerListaDesgloseProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaConteoPlacasProduccionDiaria(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaDetalleObservacion(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaAgregados(encabezado.idEncabezadoProduccionDiaria);
                    ObtenerListaTotalProduccionDiaria();

                } else if (encabezado === null) {
                  
                    setIdEncabezadoProduccionDiaria(0);
                   
                    LimpiarCampos();
                   
                  
                    
                }
            }
        }
        
    }

    const ObtenerListaDesgloseProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
        const detalleProduccion = await ObtenerDetalleProduccionDiaria(idEncabezadoProduccionDiaria);
        setDesgloseProduccion(detalleProduccion);
    }

    const ObtenerListaConteoPlacasProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
        const conteoPlacas = await ObtenerSegmentoDetalleProduccionDiaria(idEncabezadoProduccionDiaria);
        setPlacaInicioTurno1(conteoPlacas[0].placaInicio);
        setPlacaFinalTurno1(conteoPlacas[0].placaFinal);
        setPlacaInicioTurno2(conteoPlacas[1].placaInicio);
        setPlacaFinalTurno2(conteoPlacas[1].placaFinal);
    }

    const ObtenerListaDetalleObservacion = async (idEncabezadoProduccionDiaria) => {
        let detalleObservacion = await ObtenerDetalleObservacionMantenimiento(idEncabezadoProduccionDiaria);
        detalleObservacion = detalleObservacion == null || detalleObservacion.indicador > 0 ? [] : detalleObservacion;
        setListaObservaciones(detalleObservacion)
    }

    const ObtenerListaTotalProduccionDiaria = async () => {
        const { descripcion } = await ObtenerDatosDeUsuario();

        if (descripcion === "Inspector") {

            const {  idPlanta } = await ObtenerDatosDeUsuario();
            const data = {
                idPlanta,
                fecha: ObtenerFecha(),
                idProducto: idProducto
            }

            const listaTotal = await ObtenerTotalProduccionDiaria(data);

            if (listaTotal.length > 0) {
                const detalle = listaTotal[0];
                setPlacasTotales(detalle.placasTotales == 0 ? "" : detalle.placasTotales)
                setUnidadesTotales(detalle.unidadesTotales == 0 ? "" : detalle.unidadesTotales)
                setCubosTotales(detalle.cubosTotales == 0 ? "" : detalle.cubosTotales)
                setMermaTotal(detalle.mermaTotal == 0 ? "" : detalle.mermaTotal)
                setMezclasPerdidas(detalle.mezclasPerdidas == 0 ? "" : detalle.mezclasPerdidas)
                setNumeroMezclas(detalle.numeroMezclas == 0 ? "" : detalle.numeroMezclas)
                setCemento(detalle.cemento == 0 ? "" : detalle.cemento)
                setCantidadColor(detalle.cantidadColor == 0 ? "" : detalle.cantidadColor)
                setColor(detalle.color || "")
                setAditivo(detalle.aditivo || "")
            }
        } else {

            const data = {
                idPlanta: idPlanta,
                fecha: fecha,
                idProducto:idProducto
            }
            const listaTotal = await ObtenerTotalProduccionDiaria(data);
            if (listaTotal.length > 0) {
                const detalle = listaTotal[0];
                setPlacasTotales(detalle.placasTotales == 0 ? "" : detalle.placasTotales)
                setUnidadesTotales(detalle.unidadesTotales == 0 ? "" : detalle.unidadesTotales)
                setCubosTotales(detalle.cubosTotales == 0 ? "" : detalle.cubosTotales)
                setMermaTotal(detalle.mermaTotal == 0 ? "" : detalle.mermaTotal)
                setMezclasPerdidas(detalle.mezclasPerdidas == 0 ? "" : detalle.mezclasPerdidas)
                setNumeroMezclas(detalle.numeroMezclas == 0 ? "" : detalle.numeroMezclas)
                setCemento(detalle.cemento == 0 ? "" : detalle.cemento)
                setCantidadColor(detalle.cantidadColor == 0 ? "" : detalle.cantidadColor)
                setColor(detalle.color || "")
                setAditivo(detalle.aditivo || "")
            }
        }
    }

    const ObtenerListaAgregados = async (idEncabezadoProduccionDiaria) => {
        let agregados = await ObtenerDetalleAgregados(idEncabezadoProduccionDiaria);
        agregados = agregados == null ? [] : agregados;
        setListaAgregados(agregados);
    }

    const ObtenerFecha = () => {
        const today = new Date();
        const dia = today.getDate().toString().padStart(2, '0');
        const mes = (today.getMonth() + 1).toString().padStart(2, '0');
        return `${today.getFullYear()}-${mes}-${dia}`;
    }

    const handleCloseMensaje = () => setShowMensaje(false);
    const handleCloseMensajeAceptar = () => setShowMensajeAceptar(false);

    return (
        <>
            <div className="container">
                <br />
                {mensaje !== "" ?
                    <>
                        <span className={mensaje.indicador === 0 ? "text-success" : "text-danger"}>{mensaje.mensaje}</span>
                        <br />
                    </>
                    : ''}
                <br />
                <Encabezado listaProductos={listaProductos} listaPlantas={listaPlantas} horaInicio={horaInicio} sethoraInicio={sethoraInicio} horaFinal={horaFinal} sethoraFinal={sethoraFinal}
                    idProducto={idProducto} setidProducto={setidProducto} idPlanta={idPlanta} setidPlanta={setidPlanta} fecha={fecha} setfecha={setfecha}/>

                <br />
                <DesgloseProduccion listaHorarios={listaHorarios} setListaHorarios={setListaHorarios} desgloseProduccion={desgloseProduccion} setDesgloseProduccion={setDesgloseProduccion} />
                <br />
                <br />
                <Turnos placaInicioTurno1={placaInicioTurno1} setPlacaInicioTurno1={setPlacaInicioTurno1} placaFinalTurno1={placaFinalTurno1}
                    setPlacaFinalTurno1={setPlacaFinalTurno1} placaInicioTurno2={placaInicioTurno2} setPlacaInicioTurno2={setPlacaInicioTurno2} placaFinalTurno2={placaFinalTurno2}
                    setPlacaFinalTurno2={setPlacaFinalTurno2} />
                <br />
                <br />
                <TotalesProduccion placasTotales={placasTotales} setPlacasTotales={setPlacasTotales} unidadesTotales={unidadesTotales} setUnidadesTotales={setUnidadesTotales}
                    cubosTotales={cubosTotales} setCubosTotales={setCubosTotales} mermaTotal={mermaTotal} setMermaTotal={setMermaTotal} mezclasPerdidas={mezclasPerdidas}
                    setMezclasPerdidas={setMezclasPerdidas} numeroMezclas={numeroMezclas} setNumeroMezclas={setNumeroMezclas} cemento={cemento} setCemento={setCemento}
                    aditivo={aditivo} setAditivo={setAditivo} color={color} setColor={setColor} cantidadColor={cantidadColor} setCantidadColor={setCantidadColor} />
                <br />
                <hr />
                <br />
                <Row>
                    <ObservacionesMantenimiento listaObservaciones={listaObservaciones} setListaObservaciones={setListaObservaciones} />
                    <Agregados listaAgregados={listaAgregados} setListaAgregados={setListaAgregados} listaMateriales={listaMateriales } />
                </Row>
                <br />
                <br />
                {placasTotales === "" || placasTotales === 0 || desgloseProduccion.length === 0 ?
                    <p style={{ textAlign: "right", marginBottom: "2vh" }}>Debe llenar los campos obligatorios para finalizar</p>
                    : ""}
                {placasTotales === "" || placasTotales === 0 || desgloseProduccion.length === 0?                    
                    <div className="btn-section">                      
                        <Button disabled variant="primary" type="submit" size="md" onClick={() => onClickGuardar()}>Guardar </Button>
                        <Button disabled variant="success" type="submit" size="md" onClick={() => onClickFinalizar()}>Finalizar </Button>
                    </div>

                     :
                    <div className="btn-section">
                        <Button variant="primary" type="submit" size="md" onClick={() => onClickGuardar()}>Guardar </Button>
                        <Button variant="success" type="submit" size="md" onClick={() => onClickFinalizar()}>Finalizar </Button>
                    </div>
                }
                <br />
                <br />
            </div>          
                <MensajeModal show={showMensaje} handleClose={handleCloseMensaje}
                    titulo="Mensaje de confirmación" mensaje={mensajeModal}
                    handleAceptar={onClickConfirmarFinalizar} />           
           
                <MensajeModalAceptar show={showMensajeAceptar} handleClose={handleCloseMensajeAceptar}
                    titulo="Mensaje de confirmación" mensaje={mensajeModalAceptar} />
        </>

    );
}

export default ProduccionDiaria;