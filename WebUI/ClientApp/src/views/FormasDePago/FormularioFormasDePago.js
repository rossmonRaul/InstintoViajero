import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputText } from '../../components/inputs';

const FormularioFormasDePago = ({ labelButton, data, proceso, onClickProcesar, mensaje }) => {

    //campos de form
    const [CodFormaDePago, setCodFormaDePago] = useState(proceso == 2 ? data.codFormaDePago : '');
    const [Descripcion, setDescripcion] = useState(proceso == 2 ? data.descripcion : '');

    const [validated, setValidated] = useState(false);


 
    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                
                CodFormaDePago: CodFormaDePago,
                Descripcion: Descripcion,
                
            }
            onClickProcesar(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangeCodFormaDePago = (e) => setCodFormaDePago(e.target.value);
    const onChangeDescripcion = (e) => setDescripcion(e.target.value);
    

    return (
        <>
       
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <Row>
                    <InputText 
                        id='txt-CodFormaDePago' 
                        label='Codigo Forma de Pago:' 
                        type='text' 
                        placeholder='Codigo Forma de Pago' 
                        value={CodFormaDePago}
                        onChange={onChangeCodFormaDePago} 
                        mensajeValidacion="El Codigo es requerido" 
                        className="col-md-4" 
                        />
                    <InputText 
                        id='txt-nombre' 
                        label='Descripción:' 
                        type='text' 
                        placeholder='Descripción' 
                        value={Descripcion}
                        onChange={onChangeDescripcion} 
                        mensajeValidacion="La descripción es requerida" 
                        className="col-md-4" 
                        />
                    
                </Row>
              
                <br />
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>

            </Form>
        </>
    )
}

export default FormularioFormasDePago;