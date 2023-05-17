import React, { useState } from 'react';
import { Table, Row, Col, Form, Button } from "react-bootstrap";
import { InputText, InputSelect } from '../../components/inputs';
import '../../styles/producciondiaria.css';
import add from '../../images/add.png';



const Agregados = ({ listaAgregados, setListaAgregados, listaMateriales }) => {

    const [nuevoElementoTipos, setnuevoElementoTipos] = useState("");
    const [nuevoElementoVueltas, setnuevoElementoVueltas] = useState(0);
    const [validated, setValidated] = useState(false);

    const onClickAgregarAgregado = (e) => {
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
           
            const agregado =
            {
                tipoAgregado: nuevoElementoTipos,
                vueltas: Number(nuevoElementoVueltas)
            };
            setListaAgregados(listaAgregados => [...listaAgregados, agregado]);

        }
        setValidated(true);
        e.preventDefault();
        if (form.checkValidity()) {
            setnuevoElementoTipos("");
            setnuevoElementoVueltas("");
            e.currentTarget.reset();
            setValidated(false);
        }
    }

    const onChangeNuevoElementoTipos = (e) => setnuevoElementoTipos(e.target.value);
    const onChangeNuevoElementoVueltas = (e) => setnuevoElementoVueltas(e.target.value);

    return (

        <>
            <Col id="agregados-container" className="col-md-5 offset-1">
                <h3 className="agregados-title">Materiales</h3>
                <br />
                <hr />
                <Form noValidate validated={validated} onSubmit={onClickAgregarAgregado} >
                    <Row>
                        <Col>
                            <InputSelect className="form-control" controlId="sel-unidadMedida" label="Material" data={listaMateriales} onChange={onChangeNuevoElementoTipos} value={nuevoElementoTipos} optionValue={nuevoElementoTipos === "" && listaMateriales.length > 0 ? setnuevoElementoTipos(listaMateriales[0].nombre) : "nombre"} optionLabel="nombre" />     
                        </Col>
                        <Col className="col-md-6">
                            <InputText id='txt-vueltas' type='number' placeholder='Ingrese las vueltas' value={nuevoElementoVueltas}
                                onChange={onChangeNuevoElementoVueltas} label="Vueltas:" mensajeValidacion="Ingrese las vueltas" />
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" size="md" className="btn-agregados">Agregar <img src={add} /> </Button>
                </Form>
                <br />
                <br />
                <hr />

                {listaAgregados.length > 0 ?

                    <Table >
                        <thead className="tabla-header">
                            <tr>
                                <th className="tabla-header-top"># Material</th>
                                <th>Material</th>
                                <th className="tabla-header-bottom">Vueltas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaAgregados.map((item, index) => (
                                    <tr key={index}>
                                        <td className="tabla-horarios">#{
                                            index + 1
                                        }
                                        </td>
                                        <td>
                                            {item.tipoAgregado}
                                        </td>
                                        <td>
                                            {item.vueltas}
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                    :
                    <p>No hay datos disponibles</p>
                }
            </Col>
        </>
    );
}

export default Agregados;