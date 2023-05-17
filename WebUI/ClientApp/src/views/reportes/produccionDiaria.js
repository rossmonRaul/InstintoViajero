import React from 'react';
import EncabezadoReporte from "./encabezadoReporte";
import DesgloseProduccionReporte from './desgloseProduccionReporte';
import TurnosReportes from './turnosReportes';
import '../../styles/producciondiaria.css';

const ProduccionDiaria = ({ datosEncabezado, datosDesglose, datosTurnos, datosTotales, datosObservaciones, datosAgregados }) => {

    return (
        <>

                <div className="container">
                    <br />
                    <br />
                    <EncabezadoReporte data={datosEncabezado} />
                    <br />
                    <DesgloseProduccionReporte listaDatos={datosDesglose} />
                    <br />
                    <br />
                    <TurnosReportes data={datosTurnos} />
                    <br />
                    <br />
                </div>
        </>

    );
}

export default ProduccionDiaria;