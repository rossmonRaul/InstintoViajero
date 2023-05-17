import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import logo from '../../images/logo.webp';
import brick from '../../images/brick.png';
import '../../styles/producciondiaria.css';


const EncabezadoReporte = ({ data }) => {
    const [planta, setPlanta] = useState("");


    return (
        <>
            <Row >
                <Col className="title-col" >
                    <h1 className="title-producciondiaria" >Producción Diaria</h1>
                </Col>
                <Col>
                    <img src={logo} className="logo-encabezado" />
                </Col>
            </Row>

            <hr />
            <br />
            {<div className="encabezado-container">
                <Row>
                    <Col>
                        <InputText id='txt-planta' label='Planta:' type='text' placeholder={data.planta} disabled="disabled" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputText id='txt-fecha' label='Fecha:' type='text' value={data.fecha.replace('T00:00:00', '')}
                            disabled="disabled" />
                    </Col>
                    <Col>
                        <InputText id='txt-horaInicio' label='Hora Inicio:' type='text' placeholder='Digite la fecha de inicio'
                            value={data.horaInicio.replace(':00.0000000', '')} disabled="disabled" />
                    </Col>
                    <Col>
                        <InputText id='txt-horaParo' label='Hora Paro:' type='text' placeholder='Digite la fecha final' value={data.horaFinal.replace(':00.0000000', '')}
                            disabled="disabled" />
                    </Col>

                </Row>

            </div>}


            <hr />
            <div className="producto-container">
                <div>
                    <div className="producto-left" >
                        <InputText id='txt-horaParo' label='Producto:' type='text'  value={data.producto}
                            disabled="disabled" />
                    </div>
                    <div className="producto-right">
                        <img src={brick} className="producto-icon" />
                    </div>
                </div>
            </div>

        </>

    );
}

export default EncabezadoReporte;