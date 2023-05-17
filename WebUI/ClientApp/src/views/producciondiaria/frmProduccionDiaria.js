import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { InputSelect, InputText } from "../../components/inputs";

const FrmProduccionDiaria = ({ listaHorarios, data, proceso, mensaje, labelButton, AgregarProduccion }) => {
    const [numeroPlaca, setNumeroPlaca] = useState(proceso == 2 ? data.placas : '');
    const [observacion, setObservacion] = useState(proceso == 2 ? data.observacion || "" : '');
    const [idHorario, setIdHorario] = useState(proceso == 2 ? data.idHorario : 0);
    const [validated, setValidated] = useState(false);

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const tempIdHorario = idHorario == 0 ? listaHorarios[0].idHorario : idHorario;
            const { label } = listaHorarios.find(element => element.idHorario == tempIdHorario);
            const produccion = {
                idHorario: tempIdHorario,
                label,
                placas: numeroPlaca,
                observacion,
                estado: 1
            }
            AgregarProduccion(produccion);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangeNumeroPlaca = (e) => setNumeroPlaca(e.target.value);
    const onChangeObservacion = (e) => setObservacion(e.target.value);
    const onChangeHorario = (e) => {
        setIdHorario(e.target.value);
        console.log(data);
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <InputSelect className="form-control custom-select-sm" controlId="sel-horario" label="Horario" data={listaHorarios}
                    onChange={(e) => onChangeHorario(e)} value={idHorario} optionValue="idHorario" optionLabel="label" classGroup="" />
                <br />
                <InputText id='txt-numero-placa' label='Número de placas:' type='text' placeholder='Ingrese el número' value={numeroPlaca}
                    text='Número de placas.' onChange={onChangeNumeroPlaca} mensajeValidacion="El campo es requerido" />
                <InputText id='txt-observacion' label='Observación:' type='text' placeholder='Observación' value={observacion}
                    text='Observaciones.' onChange={onChangeObservacion} required={false} />
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
            </Form>
        </>
    )
}

export default FrmProduccionDiaria;