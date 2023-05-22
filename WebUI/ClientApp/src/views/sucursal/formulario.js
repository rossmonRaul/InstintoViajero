import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { InputText } from '../../components/inputs'

const Formulario = ({ labelButton, data, proceso, onClickProcesarSucursal, mensaje }) => {
    const [nombreSucursal, setNombreSucursal] = useState(proceso == 2 ? data.nombreSucursal : '');
    const [ubicacion, setUbicacion] = useState(proceso == 2 ? data.ubicacion : '');
    const [validated, setValidated] = useState(false);

    const onClickAceptar = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();            
        }else{
            const data = {
                nombreSucursal: nombreSucursal,
                ubicacion: ubicacion
            }
            const result = onClickProcesarSucursal(data);
            console.log(result);
        }
        setValidated(true);
        event.preventDefault();
    }
    
    const onChangeNombreSucursal = (e) => setNombreSucursal(e.target.value);
    const onChangeUbicacion = (e) => setUbicacion(e.target.value);

    return(
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>                
                <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre' value={nombreSucursal} 
                    text='Nombre de la Sucursal.' onChange={onChangeNombreSucursal} mensajeValidacion="El nombre es requerido"/>
                <InputText id='txt-ubicacion' label='Ubicación:' type='text' placeholder='Ingrese la ubicación' value={ubicacion} 
                    text='Ubicación de la Sucursal.' onChange={onChangeUbicacion} mensajeValidacion="La ubicación es requerida"/>  
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>  
            </Form>
             
        </>
    )
}

export default Formulario