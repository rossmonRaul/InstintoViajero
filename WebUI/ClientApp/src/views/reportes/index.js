import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputSelect } from "../../components/inputs";
import graphIcon from '../../images/bar-graph.png';
import '../../styles/reportes.css';
import OpcionesBusqueda from './opcionesBusqueda.js'
import filtro from '../../images/filter.png';


const Reportes = () => {
    const tipoReportes = [{id: 1, label: "Producción diaria"}, {id: 2, label: "Cemento por unidad"}, {id: 3, label: "Acumulado placas"}]
    const [idTipoReporte, setIdTipoReporte] = useState(1);

    const onChangeTipoReporte = (event) => setIdTipoReporte(event.target.value);

    return(
        <>
            <div className="container">
                <br />
                <br />
            <Row >
                <Col className="title-reporte" >
                    <h1>Reportes</h1>
                </Col>
                <Col>
                    <img src={graphIcon} className="logo-reporte" />
                </Col>
            </Row>
            <hr />
            <br />                   
                <div className="section-container">
                    <div>
                        <div className="reporte-left" >
                            <h2>Tipos de reporte</h2>
                        </div>
                        <div className="reporte-right tipos">
                            <img src={filtro} />
                        </div>
                    </div>
                    <div className="produccion-left" >
                        <InputSelect className="form-control custom-select-sm" controlId="sel-rol" label="Seleccione un tipo de reporte" data={tipoReportes}
                            onChange={ onChangeTipoReporte} value={idTipoReporte} optionValue="id" optionLabel="label"  />
                    </div>               
            </div>
            <br />
                <br />

            <OpcionesBusqueda idTipoReporte={idTipoReporte} />

           
            </div>
        </>
    )
}

export default Reportes;