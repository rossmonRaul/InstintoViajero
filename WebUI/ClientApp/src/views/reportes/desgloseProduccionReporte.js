import React, { useEffect, useState } from 'react';
import { Button, Table } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';
import producciondiaria from '../../images/business-report.png';
import '../../styles/producciondiaria.css';

const DesgloseProduccionReporte = ({ listaDatos}) => { 
   
    return (

        <>
            <div className="section-container">
                <div>
                    <div className="produccion-left" >
                        <h2>Desglose de Producción Diaria</h2>
                    </div>
                    <div className="produccion-right">
                        <img src={producciondiaria} />
                    </div>
                </div>         
                <br />
                <br />
                
                <Table responsive id="tbl-produccion-diaria">
                    <thead className="tabla-header">
                        <tr>
       
                            <th className="tabla-header-top" >Hora</th>
                            <th>Placas</th>
                            <th className="tabla-header-bottom">Observación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaDatos.map((item, index) => (
                                <tr key={index}>
                                    <td className="tabla-horarios">{item.hora}
                                    </td>
                                    <td>
                                        <InputText type='text' value={item.placas} disabled="disabled" />
                                    </td>
                                    <td>
                                        {<TextArea value={item.observacion || "No hay observaciones"   } disabled="disabled" />}
                                    </td>
                                </tr>

                               ))
                        }
                    </tbody>
                </Table>
                <hr />
            </div>
            
        </>

    );
}

export default DesgloseProduccionReporte;