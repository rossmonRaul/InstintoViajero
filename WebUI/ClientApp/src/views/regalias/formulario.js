import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputText } from '../../components/inputs';


const Formulario = ({ labelButton, data, proceso, onClickProcesarRegalia, mensaje }) => {
    //campos de form
    const [descripcion, setDescripcion] = useState(proceso == 2 ? data.descripcion : '');

    const [validated, setValidated] = useState(false);



    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                descripcion: descripcion,
            }
            onClickProcesarRegalia(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form

    const onChangeDescripcion = (e) => setDescripcion(e.target.value);


    return (
        <>
            {
                <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                    <Row>
                        <InputText id='txt-Descripcion' label='Descripción de la Regalia:' type='text' placeholder='Ingrese la descripción' maxLength={100} value={descripcion}
                            onChange={onChangeDescripcion} mensajeValidacion="Descripción requerida" className="col-md-6" />
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