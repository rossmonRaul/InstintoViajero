import React, { useState } from 'react';
import { Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { TextArea } from '../../components/textarea';
import '../../styles/producciondiaria.css';
import add from '../../images/add.png';

const ObservacionesMantenimiento = ({ listaObservaciones, setListaObservaciones }) => {


    const [nuevoElementoObservacion, setnuevoElementoObservacion] = useState("");
    const [validated, setValidated] = useState(false);

    const onClickAgregarObservacion = (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const observacion =
            {
                descripcion: nuevoElementoObservacion
            };
            setListaObservaciones(listaObservaciones => [...listaObservaciones, observacion]);
        }
        setValidated(true);
        e.preventDefault();
        if (form.checkValidity()) {
            setnuevoElementoObservacion("");
            e.currentTarget.reset();
            setValidated(false);
        }
    }

    const onChangeNuevoElementoObservacion = (e) => setnuevoElementoObservacion(e.target.value);

    return (

        <>
            <Col className="section-container">
                <h3 className="observaciones-title">Observaciones de Mantenimiento</h3>
                <br />
                <hr />
                <Form noValidate validated={validated} onSubmit={onClickAgregarObservacion} id="form-mantenimiento">
                    <Row>
                        <Col>
                            <TextArea id='txt-nuevaObservacion' type='text' placeholder='Ingrese una nueva observación' value={nuevoElementoObservacion}
                                onChange={onChangeNuevoElementoObservacion} mensajeValidacion="La observación es requerida" />
                        </Col>
                        <Col className="col-md-4">
                            <br />
                            <Button variant="primary" type="submit" size="md">Agregar <img src={add} /> </Button>
                            <br />
                            <hr />
                        </Col>
                    </Row>
                </Form>
                <br />
                <hr />
                {listaObservaciones.length > 0 ?

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

export default ObservacionesMantenimiento;