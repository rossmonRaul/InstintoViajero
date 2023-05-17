import React from 'react';
import { Col, ListGroup } from "react-bootstrap";
import '../../styles/producciondiaria.css';

const ObservacionesMantenimientoReporte = ({ listaObservaciones }) => {

    return (

        <>
            <Col className="section-container">
                <h3 className="observaciones-title">Observaciones de Mantenimiento</h3>
                <hr />
                {listaObservaciones !== undefined && listaObservaciones.length > 0 ?

                    <ListGroup variant="flush">
                        {
                            listaObservaciones.map((item, index) => (
                                <ListGroup.Item key={index}>{item.descripcion}</ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                    :
                    <p>No hay datos disponibles</p>
                }
            </Col>

        </>
    );
}

export default ObservacionesMantenimientoReporte;