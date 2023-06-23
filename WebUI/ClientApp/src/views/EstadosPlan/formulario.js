import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputText } from '../../components/inputs';


const Formulario = ({ labelButton, data, proceso, onClickProcesarEstadoPlan, mensaje }) => {
    //campos de form
    const [codEstadoPlan, setCodEstadoPlan] = useState(proceso == 2 ? data.codEstadoPlan : '');
    const [descEstadoPlan, setDescEstadoPlan] = useState(proceso == 2 ? data.descEstadoPlan : '');

    const [validated, setValidated] = useState(false);



    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                codEstadoPlan: codEstadoPlan,
                descEstadoPlan: descEstadoPlan,
            }
            onClickProcesarEstadoPlan(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form

    const onChangeCodEstadoPlan = (e) => setCodEstadoPlan(e.target.value);
    const onChangeDescEstadoPlan = (e) => setDescEstadoPlan(e.target.value);


    return (
        <>
            {
                <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                    <Row>
                        <InputText id='txt-codEstadoPlan' label='Código de estado:' type='text' placeholder='Ingrese el código' value={codEstadoPlan}
                            onChange={onChangeCodEstadoPlan} mensajeValidacion="El código de estado" className="col-md-4" />

                        <InputText id='txt-descEstadoPlan' label='Descripción de estado:' type='text' placeholder='Ingrese la descripción' value={descEstadoPlan}
                            onChange={onChangeDescEstadoPlan} mensajeValidacion="El código de estado de plan es requerido" className="col-md-8"  />
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