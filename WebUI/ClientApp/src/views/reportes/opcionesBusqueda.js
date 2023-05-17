import React, { useState, useEffect } from "react";
import { Row, Button, Col, Form } from "react-bootstrap";
import { InputSelect, InputText } from "../../components/inputs";
import { ComboBox } from '../../components/combobox';
import '../../styles/reportes.css';
import { ObtenerProductos } from '../../servicios/ServicioProducto';
import { ObtenerPlantas } from '../../servicios/ServicioPlanta';
import { ObtenerProduccionesDiarias } from '../../servicios/ServicioEncabezadoProduccionDiaria'
import opciones from '../../images/buscar.png';

import ReporteCementoPorUnidad from './cementoPorUnidad'
import ReporteAcumuladoPlacas from './acumuladoPlacas'
import { ReporteAcumulativoMensual } from '../../servicios/ServicioReporte';
import { ReporteProductos } from '../../servicios/ServicioReporte';
import { ObtenerEncabezadoReporte, ObtenerDetalleProduccionReporte, ObtenerSegmentoDetalleProduccionDiaria, ObtenerDetalleAgregados, ObtenerDetalleObservacionMantenimiento, ObtenerTotalProduccionDiaria } from '../../servicios/ServicioReporte';
import EncabezadoReporte from "./encabezadoReporte";
import DesgloseProduccionReporte from './desgloseProduccionReporte';
import TurnosReportes from './turnosReportes';
import TotalesReportes from './totalesReportes';
import AgregadosReporte from './agregadosReporte';
import ObservacionesMantenimientoReporte from './observacionesReporte';


const OpcionesBusqueda = ({ idTipoReporte }) => {

    const listaMeses = [{ id: 1, mes: "Enero" }, { id: 2, mes: "Febrero" }, { id: 3, mes: "Marzo" },
    { id: 4, mes: "Abril" }, { id: 5, mes: "Mayo" }, { id: 6, mes: "Junio" }
        , { id: 7, mes: "Julio" }, { id: 8, mes: "Agosto" }, { id: 9, mes: "Septiembre" }
        , { id: 10, mes: "Octubre" }, { id: 11, mes: "Noviembre" }, { id: 12, mes: "Diciembre" }];

    const listaAnnios = [{ id: 2011 }, { id: 2012 }, { id: 2013 }, { id: 2014 }, { id: 2015 }, { id: 2016 }, { id: 2017 }, { id: 2018 }, { id: 2019 }, { id: 2020 }, { id: 2021 }, { id: 2022 }, { id: 2023 }, { id: 2024 }, { id: 2025 }, { id: 2026 }, { id: 2027 }, { id: 2028 }, { id: 2029 }, { id: 2030 }, { id: 2031 }, { id: 2032 }];


    const [loading, setLoading] = useState(true);

    const [mes, setMes] = useState(listaMeses[0].id);
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFinal, setFechaFinal] = useState("");

    const [idProducto, setidProducto] = useState(0);
    const [listaProductos, setListaProductos] = useState([]);

    const [annio, setAnnio] = useState(listaAnnios[0].id);
    const [annioPlacas, setAnnioPlacas] = useState(listaAnnios[0].id);


    const [fechaProduccion, setFechaProduccion] = useState("");
    const [idPlanta, setidPlanta] = useState(0);
    const [listaPlantas, setListaPlantas] = useState([]);
    const [idProduccion, setidProduccion] = useState(0);
    const [listaProduccion, setListaProduccion] = useState([]);

    const [reporteBusqueda, setreporteBusqueda] = useState(0); //guarda la opción que escogió de nuevo para ya hacer la consulta a bd

    const [labels, setLabels] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const [datos, setDatos] = useState({});

    //reporte produccion
    const [datosEncabezado, setDatosEncabezado] = useState({});
    const [datosDetalleProduccion, setDetalleProduccion] = useState([]);
    const [turnos, setTurnos] = useState([]);
    const [datosTotales, setTotalesProduccion] = useState([]);
    const [datosObservaciones, setObservaciones] = useState([]);
    const [datosAgregados, setAgregados] = useState([]);


    const onChangeFechaInicio = (e) => setFechaInicio(e.target.value);
    const onChangeFechaFinal = (e) => setFechaFinal(e.target.value);
    const onChangeMes = (e) => setMes(e.target.value);
    const onChangeFechaProduccion = (e) => setFechaProduccion(e.target.value);
    const onChangeIdProducto = (e) => setidProducto(e.target.value);
    const onChangeIdProduccion = (e) => setidProduccion(e.target.value);
    const onChangeIdPlanta = (e) => setidPlanta(e.target.value);
    const onChangeAnnio = (e) => setAnnio(e.target.value);
    const onChangeAnnioPlacas = (e) => setAnnioPlacas(e.target.value);


    const ObtenerListadoDePlantas = async () => {
        const plantas = await ObtenerPlantas();
        if (plantas !== undefined) {
            setListaPlantas(plantas);
            setidPlanta(plantas[0].idPlanta);
        }
    }   
    const ObtenerListadoDeProductos = async () => {
        const productos = await ObtenerProductos();
        if (productos !== undefined) {
            setListaProductos(productos);
            setidProducto(productos[0].idProducto);
        }
    }

    const ObtenerListadoDeProducciones = async (idPlanta, fecha) => {
        const producciones = await ObtenerProduccionesDiarias(parseInt(idPlanta), fecha);
        if (producciones !== undefined && producciones !== null) {
            setListaProduccion(producciones);
        }

    }

    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };


    const ObtenerCementoPorUnidad = async (datosCemento) => {

        let dataGraficoCemento = await ReporteProductos(datosCemento.fechaInicio, datosCemento.fechaFinal, datosCemento.idProducto);
        console.log(dataGraficoCemento)

        let labels = dataGraficoCemento.map((item) => item.dia);
        let datasets = dataGraficoCemento.map((item) => item.cantidad);
            

        console.log(datasets)
        setLabels(labels)
        setDatasets(datasets)

        setreporteBusqueda(idTipoReporte);

        /* Obtener los datos para el gráfico*/
    }

    const ObtenerAcumuladoPlacas = async (datosAcumulado) => {

        let dataGraficoAcumulado = await ReporteAcumulativoMensual(datosAcumulado.fechaInicio, datosAcumulado.fechaFinal);

        console.log(dataGraficoAcumulado)

        let colores = ['rgba(255, 99, 132, 0.2)', 'rgba(99, 255, 132, 0.2)', 'rgba(140, 132, 255, 0.2)', 'rgba(178, 100, 100, 0.2)', 'rgba(76, 223, 150, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(140, 132, 255, 0.2)']

        let data = {
            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            datasets: [

            ]
        };

        let y = Object.assign({}, dataGraficoAcumulado);
        dataGraficoAcumulado.reverse();

        dataGraficoAcumulado.forEach((item, index) => {

            var dataset = {
                label: item.planta,
                backgroundColor: colores[index],
                data: item.dato.split(',').map(Number).reverse(),
            }

            data.datasets.push(dataset)
        })

        setDatos(data)

        setreporteBusqueda(idTipoReporte);

        /* Obtener los datos para el gráfico*/
    }

    const ObtenerEncabezadoProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
        let dataEncabezado = await ObtenerEncabezadoReporte(idEncabezadoProduccionDiaria)
        setDatosEncabezado(dataEncabezado);
       
        
    }

    const ObtenerDetalleProduccionDiaria = async (idEncabezadoProduccionDiaria) => {
        let dataDetalle = await ObtenerDetalleProduccionReporte(idEncabezadoProduccionDiaria)
        setDetalleProduccion(dataDetalle);
    }

    const ObtenerTurnos =  async (idEncabezadoProduccionDiaria) => {
        let dataTurnos =  await ObtenerSegmentoDetalleProduccionDiaria(idEncabezadoProduccionDiaria)
        setTurnos(dataTurnos);   
    }


    const ObtenerTotales = async (fecha, idPlanta, idProducto) => {
        const data = {
            idPlanta,
            fecha,
            idProducto
        }
        let dataTotales = await ObtenerTotalProduccionDiaria(data)
        setTotalesProduccion(dataTotales);
    }

    const ObtenerObservaciones= async (idEncabezadoProduccionDiaria) => {
        let dataObservaciones = await ObtenerDetalleObservacionMantenimiento(idEncabezadoProduccionDiaria)
        setObservaciones(dataObservaciones);
    }

    const ObtenerAgregados = async (idEncabezadoProduccionDiaria) => {
        let dataAgregados = await ObtenerDetalleAgregados(idEncabezadoProduccionDiaria)
        setAgregados(dataAgregados);
    }

    const onClickGenerarReporteProduccion = async () => {
        let dataEncabezado = await ObtenerEncabezadoReporte(idProduccion);
        let idProd = parseInt(dataEncabezado.idProducto);
        ObtenerEncabezadoProduccionDiaria(idProduccion);
        ObtenerDetalleProduccionDiaria(idProduccion);
        ObtenerTurnos(idProduccion);
        ObtenerTotales(fechaProduccion, idPlanta, idProd);
        ObtenerObservaciones(idProduccion);
        ObtenerAgregados(idProduccion);


        setreporteBusqueda(idTipoReporte);
    }


    
    const onClickGenerarReporteCemento = () => {

        let datosCemento = ({
            fechaInicio: annio + '-' + mes + '-1',
            fechaFinal: annio + '-' + mes + '-' + getDays(annio, mes),
            idProducto: Number(idProducto)
        });
        ObtenerCementoPorUnidad(datosCemento);
       
    }

    const onClickGenerarReporteAcumulado = () => {

        let datosAcumulado = ({
            fechaInicio: annioPlacas + '-1-1',
            fechaFinal: annioPlacas + '-12-31'
        });

        ObtenerAcumuladoPlacas(datosAcumulado);
    }

    const onClickVerProducciones = () => {
        ObtenerListadoDeProducciones(idPlanta, fechaProduccion);
    }

    useEffect(() => {
        ObtenerListadoDeProductos();
        ObtenerListadoDePlantas();
        
    }, []);

    const onClickPrueba = () => {
        console.log(datosEncabezado);
    }


    const ProduccionDiaria = () => {
        return (<div>
            <Row>

                <Col>
                    <InputText id='txt-fecha' label='Fecha de producción diaria:' type='date' placeholder='Ingrese la fecha' value={fechaProduccion}
                        text='Fecha a buscar' onChange={onChangeFechaProduccion} mensajeValidacion="00/00/0000" />
                </Col>
                <Col>
                    
                    <InputSelect className="form-control" controlId="sel-idPlanta" label="Planta" data={listaPlantas} onChange={onChangeIdPlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta" />
                </Col>
                
            </Row>
            <div className="btn-section">
                <Button variant="primary" type="submit" size="md" onClick={onClickVerProducciones}>Ver producciones </Button>
            </div>
            <br />
            <br />
            <hr/>
            <br />

            <Row>
                <Col>
                    
                    {listaProduccion.length > 0 ?
                      <ComboBox className="form-control" controlId="sel-idProduccion" data={listaProduccion} label="Producción diaria" onChange={onChangeIdProduccion} value={idProduccion} optionValue="idEncabezadoProduccionDiaria" optionLabel="producto"  indicacion="Seleccione el producto" />
                        : <p>Sin datos</p>}
                </Col> 
                <Col>
                </Col>
            </Row>

            <div className="btn-section">
                
                {listaProduccion.length > 0 ?
                    <Button variant="primary" type="submit" size="md" onClick={onClickGenerarReporteProduccion}>Buscar </Button> : ""}
            </div>
            

        </div>)
    }

    const CementoPorUnidad = () => {
        return (<div>
            <Row>
                <Col>
                    <InputSelect className="form-control" controlId="sel-idProducto" label="Producto" data={listaProductos} onChange={onChangeIdProducto} value={idProducto} optionValue="idProducto" optionLabel="nombreProducto"
                    />
                </Col>
                <Col>
                    <InputSelect className="form-control" controlId="mes" label="Mes" data={listaMeses} onChange={onChangeMes} value={mes} optionValue="id" optionLabel="mes" />
                </Col>
                <Col>
                    <InputSelect className="form-control" controlId="annio" label="Año" data={listaAnnios} onChange={onChangeAnnio} value={annio} optionValue="id" optionLabel="id" />
                </Col>

            </Row>
            <br />
            <div className="btn-section">
                <Button variant="primary" type="submit" size="md" onClick={onClickGenerarReporteCemento}>Buscar </Button>
            </div>
            </div >)
    }

    const AcumuladoPlacas = () => {
        return (<div>
            <Row>
                <Col>
                    <InputSelect className="form-control" controlId="sel-annio" label="Año" data={listaAnnios} onChange={onChangeAnnioPlacas} value={annioPlacas} optionValue="id" optionLabel="id" />
                </Col>
                <Col>
                </Col>
            </Row>
            <br />
            <div className="btn-section">
                <Button variant="primary" type="submit" size="md" onClick={onClickGenerarReporteAcumulado }>Buscar </Button>
            </div>
        </div>)
    }


    return (
        <>      
            <div className="section-container-reporte">
                 <div>
                    <div className="reporte-left" >
                        <h2>Opciones de búsqueda</h2>
                    </div>
                    <div className="reporte-right">
                        <img src={opciones} />
                    </div>
                </div>
                <br />
                {Number(idTipoReporte) === 1 ? <ProduccionDiaria/> : ""}
                {Number(idTipoReporte) === 2 ? <CementoPorUnidad/> : ""}
                {Number(idTipoReporte) === 3 ? <AcumuladoPlacas /> : ""} 
                <br />
            </div>
            <br />

            {Number(reporteBusqueda) === 1 && Number(idTipoReporte) === 1 && datosEncabezado.idEncabezadoProduccionDiaria !== undefined && datosTotales.length > 0 
                  ?
                <div className="container">
                    <br />
                    <br />
                    { <EncabezadoReporte data={datosEncabezado} />}
                    <br />
                    <DesgloseProduccionReporte listaDatos={datosDetalleProduccion} />
                    <br />
                    <br />
                    <TurnosReportes data={turnos} />
                    <br />
                    <br />
                     <TotalesReportes data={datosTotales} />
                <br />
                <hr />
                <br />
                <Row>
                    <ObservacionesMantenimientoReporte listaObservaciones={datosObservaciones} />
                    <AgregadosReporte listaAgregados={datosAgregados} />
                </Row>
                <br />
                <br />
                </div>
                : ""}
            {Number(reporteBusqueda) === 2 && Number(idTipoReporte) === 2 ? <ReporteCementoPorUnidad labels={labels} datasets={datasets} /> : ""}
            {Number(reporteBusqueda) === 3 && Number(idTipoReporte) === 3 ? <ReporteAcumuladoPlacas data={datos }  />: ""}
        </>
    )
}

export default OpcionesBusqueda;