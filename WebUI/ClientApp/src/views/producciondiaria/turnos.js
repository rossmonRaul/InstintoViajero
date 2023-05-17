import React from 'react';
import turno from '../../images/change-management.png';
import '../../styles/producciondiaria.css';
import Placas from './placas';


const Turnos = ({ placaInicioTurno1, setPlacaInicioTurno1, placaFinalTurno1, setPlacaFinalTurno1, placaInicioTurno2, setPlacaInicioTurno2, placaFinalTurno2, setPlacaFinalTurno2 }) => { //lista con los datos de turnos

    const onChangePlacaInicioTurno1 = (e) => setPlacaInicioTurno1(e.target.value);
    const onChangePlacaFinalTurno1 = (e) => setPlacaFinalTurno1(e.target.value);
    const onChangePlacaInicioTurno2 = (e) => setPlacaInicioTurno2(e.target.value);
    const onChangePlacaFinalTurno2 = (e) => setPlacaFinalTurno2(e.target.value);

    return (

        <>
            <div className="section-container">
                <div>
                    <div className="turno-left" >
                        <h2>Conteo de placas por mezcla</h2>
                    </div>
                    <div className="turno-right">
                        <img src={turno} />
                    </div>
                </div>
                <br />
                <Placas turno="1" placaInicio={placaInicioTurno1} onChangePlacaInicio={onChangePlacaInicioTurno1} placaFinal={placaFinalTurno1} onChangePlacaFinal={onChangePlacaFinalTurno1} />
                <Placas turno="2" placaInicio={placaInicioTurno2} onChangePlacaInicio={onChangePlacaInicioTurno2} placaFinal={placaFinalTurno2} onChangePlacaFinal={onChangePlacaFinalTurno2} />
                <hr />
            </div>
        </>
    );
}

export default Turnos;