import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { InputText } from '../../components/inputs';

const PlacasReportes = ({ turno, placaInicio, placaFinal, conteo }) => {

    return (
        <>
            <Table>
                <thead className="tabla-header" >
                    <tr>
                        <th className="tabla-header-top">Turno #{turno}</th>
                        <th>Placa</th>
                        <th className="tabla-header-bottom">Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Placa Inicio:
                        </td>
                        <td>
                            <InputText id='txt-placainicio' type='number' 
                                value={placaInicio} disabled={"disabled"} />
                        </td>
                        <td rowSpan="2">
                            {<Form.Control value={conteo} style={{ height: "5vh" }} disabled />}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Placa Final:
                        </td>
                        <td>
                            <InputText id='txt-placafinal' type='number' 
                                value={placaFinal} disabled={"disabled"}/>
                        </td>
                    </tr >
                </tbody>
            </Table>
        </>
    )
}

export default PlacasReportes;