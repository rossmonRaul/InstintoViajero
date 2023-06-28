import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputText, InputNumber } from '../../components/inputs';


const Formulario = ({ labelButton, data, proceso, onClickProcesarCuota, mensaje }) => {
    //campos de form
    const [codigo, setCodigo] = useState(proceso == 2 ? data.codigo : '');
    const [monto, setMonto] = useState(proceso == 2 ? data.monto : '');
    const [cuotaSemanal, setCuotaSemanal] = useState(proceso == 2 ? data.cuotaSemanal : '');

    const [validated, setValidated] = useState(false);



    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {

                codigo: codigo,
                monto: monto,
                cuotaSemanal: cuotaSemanal
            }
            onClickProcesarCuota(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form

    const onChangeCodigo = (e) => setCodigo(e.target.value);
    const onChangeMonto = (e) => setMonto(e.target.value);
    const onChangeCuotaSemanal = (e) => setCuotaSemanal(e.target.value);


    return (
        <>
            {
                <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                    <Row>
                        <InputText id='txt-Codigo' label='Código:' type='text' placeholder='Ingrese el código' maxLength={1} value={codigo} 
                            onChange={onChangeCodigo} mensajeValidacion="Código requerido" readOnly={proceso === 2} className="col-md-6" />
                    </Row>
                    <Row>
                        <InputNumber id='num-monto' label='Monto:' min={0.00} max={99999999.99}  placeholder='Ingrese el monto' value={monto}
                            onChange={onChangeMonto} mensajeValidacion="Monto requerido" className="col-md-6" />
                        <InputNumber id='num-cuota' label='Cuota Semanal:'  min={0.00} max={99999999.99} placeholder='Ingrese la cuota semanal' value={cuotaSemanal}
                            onChange={onChangeCuotaSemanal} mensajeValidacion="Cuota semanal requerida" className="col-md-6" />
                    </Row>
                    <br />
                    {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                    <div className='text-right'>
                        <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                    </div>

                </Form>
            }
        </>
    )
}

export default Formulario;