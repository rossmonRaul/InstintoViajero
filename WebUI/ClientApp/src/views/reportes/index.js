import React from "react";
import { Row, Col } from "react-bootstrap";
import graphIcon from '../../images/bar-graph.png';
import '../../styles/reportes.css';


const Reportes = () => {

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
            </div>
        </>
    )
}

export default Reportes;