import React, { useEffect, useState } from 'react';
import { Button, Table } from "react-bootstrap";
import { InputText } from '../../components/inputs';
import { TextArea } from '../../components/textarea';
import { FormularioModal } from '../../components/ventanaModal';
import producciondiaria from '../../images/business-report.png';
import '../../styles/producciondiaria.css';
import FrmProduccionDiaria from './frmProduccionDiaria';

const DesgloseProduccion = ({ listaHorarios, desgloseProduccion, setDesgloseProduccion }) => { //lista con los datos de placas y observaciones
    const [modal, setModal] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("Registrar Detalle");
    const [idHorario, setIdHorario] = useState(0);
    const [data, setData] = useState([])
    const [proceso, setProceso] = useState(1);
    const [labelButton, setLabelButton] = useState("Agregar");
    const [bloquearBoton, setBloquearBoton] = useState(true);

    const onChangeRadio = (idHorario) => {
        setIdHorario(idHorario);
        setBloquearBoton(false);
    }

    const CargarFilas = () => {
        if (desgloseProduccion !== null || desgloseProduccion !== undefined || desgloseProduccion.length > 0) {
            desgloseProduccion.forEach(element => {
                const { label } = listaHorarios.find(item => item.idHorario == element.idHorario);
                element.label = label;
            });
        }
        return desgloseProduccion.map((item, index) => (
            <tr key={index}>
                <td>{<input type="radio" onChange={() => onChangeRadio(item.idHorario)} name="radiotbl" />}</td>
                <td className="tabla-horarios">{item.label}</td>
                <td>{item.placas}</td>
                <td>{item.observacion}</td>
            </tr>
        ))
    }

    const onClickNuevoRegistro = () => {
        setModal(true);
        setProceso(1)
        setLabelButton("Agregar")
    }
    const onClickCerrarModal = () => setModal(false);

    const onClickEditarRegistro = () => {
        const desglose = desgloseProduccion.find(item => item.idHorario == idHorario)
        setData(desglose);
        setProceso(2)
        setModalTitulo('Editar Detalle');
        setModal(true);
        setLabelButton("Editar")
    }

    const onClickEliminarRegistro = () => {
        let tempDesglose = [...desgloseProduccion];
        const index = tempDesglose.findIndex(item => item.idHorario == idHorario);
        tempDesglose[index].estado = 0;
        setDesgloseProduccion(tempDesglose);
    }

    const AgregarProduccion = (produccion) => {
        setModal(false);
        if (proceso == 1)
            setDesgloseProduccion(desgloseProduccion => [...desgloseProduccion, produccion]);
        else {
            let tempDesglose = [...desgloseProduccion];
            const index = tempDesglose.findIndex(item => item.idHorario == produccion.idHorario);
            tempDesglose[index] = produccion;
            setDesgloseProduccion(tempDesglose);
        }
    }

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
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickNuevoRegistro()}>Registrar</Button>{' '}
                <Button variant="primary" type="submit" size="sm" onClick={() => onClickEditarRegistro()} disabled={bloquearBoton}>Editar</Button>{' '}
                <br />
                <br />
                <Table responsive id="tbl-produccion-diaria">
                    <thead className="tabla-header">
                        <tr>
                            <th className="tabla-header-top"></th>
                            <th >Hora</th>
                            <th>Placas</th>
                            <th className="tabla-header-bottom">Observacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CargarFilas()
                        }
                    </tbody>
                </Table>
                <hr />
                <p>{desgloseProduccion.length === 0 ? "*Obligatorio" : ""}</p>
            </div>
            <FormularioModal show={modal} handleClose={onClickCerrarModal} titulo={modalTitulo} className=''>
                <FrmProduccionDiaria listaHorarios={listaHorarios} data={data} proceso={proceso} mensaje={""} labelButton={labelButton} AgregarProduccion={AgregarProduccion} />
            </FormularioModal>
        </>

    );
}

export default DesgloseProduccion;