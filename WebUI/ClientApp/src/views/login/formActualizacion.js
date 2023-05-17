import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { InputText } from "../../components/inputs";

const FormActualizacion = ({ActualizarContrasenha, mensaje}) => {
    const [contrasenha, setContrasenha] = useState("");
    const [contrasenhaConfirmada, setContrasenhaConfirmada] = useState("");
    const [validated, setValidated] = useState(false);

    const onChangeContrasenha = (e) => setContrasenha(e.target.value);
    const onChangeContrasenhaConfirmada = (e) => setContrasenhaConfirmada(e.target.value);

    const onClickAceptar = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();            
        }else{
            const data = {
                contrasena: contrasenha,
                contrasenhaConfirmada: contrasenhaConfirmada
            }
            ActualizarContrasenha(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    return(
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <h2>Actualizar Contraseña</h2>
                <InputText id='txt-contrasenha' label='Contraseña:' type='password' placeholder='' value={contrasenha} 
                    text='' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida"/>
                <InputText id='txt-contrasenhaConfirmada' label='Repetir Contraseña:' type='password' placeholder='' value={contrasenhaConfirmada} 
                    text='' onChange={onChangeContrasenhaConfirmada} mensajeValidacion="La contraseña es requerida"/>
                <Button  type="submit" className="btn" id="btn-actualizar">Actualizar </Button>  
                <div className="text-center">{mensaje !== '' ? <span> <br /> {mensaje}</span> : ''}</div>
            </Form>
        </>
    )
}

export default FormActualizacion;