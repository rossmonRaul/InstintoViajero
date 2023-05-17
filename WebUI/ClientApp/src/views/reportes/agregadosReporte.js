import React from 'react';
import { Table, Col } from "react-bootstrap";
import '../../styles/producciondiaria.css';



const AgregadosReporte = ({ listaAgregados }) => {

    return (

        <>

            <Col id="agregados-container" className="col-md-5 offset-1">
                <h3 className="agregados-title">Materiales</h3>
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

export default AgregadosReporte;