import React from 'react';
import { Table } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import totales from '../../images/checklist.png';
import '../../styles/producciondiaria.css';


const TotalesReportes = ({ data }) => { //lista con los datos de turnos


    return (

        <>
            <div className="section-container">
                <div>
                    <div className="turno-left" >
                        <h2>Desglose de Totales de Producción Diaria</h2>
                    </div>
                    <div className="turno-right">
                        <img src={totales} />
                    </div>
                </div>
                <br />
                <Table responsive>
                    <thead className="tabla-header">
                        <tr>
                            <th className="tabla-header-top">Placas Totales</th>
                            <th>Unidades Totales</th>
                            <th>Cubos Totales</th>
                            <th>Merma Total</th>
                            <th>Mezclas Perdidas</th>
                            <th>Número de Mezclas</th>
                            <th>Cemento (kg)</th>
                            <th>Aditivo (kg)</th>
                            <th>Color</th>
                            <th className="tabla-header-bottom">Cantidad Color (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <InputText type='number'
                                    value={data[0].placasTotales}  disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].unidadesTotales} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].cubosTotales} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].mermaTotal} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].mezclasPerdidas} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].numeroMezclas} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].cemento} disabled="disabled" />
                            </td>
                            <td><InputText type='text'
                                value={data[0].aditivo || ""} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='text'
                                    value={data[0].color || ""} disabled="disabled" />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={data[0].cantidadColor} disabled="disabled"/>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default TotalesReportes;