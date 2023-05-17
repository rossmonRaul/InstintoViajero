import React from 'react';
import { Table } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import totales from '../../images/checklist.png';
import '../../styles/producciondiaria.css';


const Totales = ({ placasTotales, setPlacasTotales, unidadesTotales, setUnidadesTotales, cubosTotales, setCubosTotales, mermaTotal, setMermaTotal, mezclasPerdidas, setMezclasPerdidas,
    numeroMezclas, setNumeroMezclas, cemento, setCemento, aditivo, setAditivo, color, setColor, cantidadColor, setCantidadColor }) => { //lista con los datos de turnos


    const onChangePlacasTotales = (e) => setPlacasTotales(e.target.value);
    const onChangeUnidadesTotales = (e) => setUnidadesTotales(e.target.value);
    const onChangeCubosTotales = (e) => setCubosTotales(e.target.value);
    const onChangeMermaTotal = (e) => setMermaTotal(e.target.value);
    const onChangeMezclasPerdidas = (e) => setMezclasPerdidas(e.target.value);
    const onChangeNumeroMezclas = (e) => setNumeroMezclas(e.target.value);
    const onChangeCemento = (e) => setCemento(e.target.value);
    const onChangeAditivo = (e) => setAditivo(e.target.value);
    const onChangeColor = (e) => setColor(e.target.value);
    const onChangeCantidadColor = (e) => setCantidadColor(e.target.value);


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
                                    value={placasTotales} onChange={onChangePlacasTotales} text={placasTotales === ""? "*Obligatorio": <br/>} />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={unidadesTotales} onChange={onChangeUnidadesTotales} />
                                <br/>
                            </td>
                            <td>
                                <InputText type='number'
                                    value={cubosTotales} onChange={onChangeCubosTotales} />
                                <br />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={mermaTotal} onChange={onChangeMermaTotal} />
                                <br />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={mezclasPerdidas} onChange={onChangeMezclasPerdidas} />
                                <br />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={numeroMezclas} onChange={onChangeNumeroMezclas} />
                                <br />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={cemento} onChange={onChangeCemento} />
                                <br />
                            </td>
                            <td><InputText type='text'
                                value={aditivo} onChange={onChangeAditivo} />
                                <br />
                            </td>
                            <td>
                                <InputText type='text'
                                    value={color} onChange={onChangeColor} />
                                <br />
                            </td>
                            <td>
                                <InputText type='number'
                                    value={cantidadColor} onChange={onChangeCantidadColor} />
                                <br />

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Totales;