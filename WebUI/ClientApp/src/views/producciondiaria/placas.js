import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { InputText } from '../../components/inputs';

const Placas = ({turno, placaInicio, onChangePlacaInicio, placaFinal, onChangePlacaFinal}) => {
    
    return(
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
                            <InputText id='txt-placainicio' type='number' placeholder='Digite el número de placas'
                                value={placaInicio} onChange={onChangePlacaInicio} />
                        </td>
                        <td rowSpan="2">
                            {<Form.Control value={placaFinal - placaInicio}  style={{ height: "5vh" }}  disabled />}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Placa Final:
                        </td>
                        <td>
                            <InputText id='txt-placafinal' type='number' placeholder='Digite el número de placas'
                                value={placaFinal} onChange={onChangePlacaFinal} />
                        </td>
                    </tr >
                </tbody>
            </Table>
        </>
    )
}

export default Placas;