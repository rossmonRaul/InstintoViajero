import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { InputText } from "../../components/inputs";

const FormularioContrasenha = ({ data, onClickProcesarContrasenha, mensaje }) => {

    const [contrasenaTemporal, setContrasenaTemporal] = useState('');
    const [validated, setValidated] = useState(false);

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                contrasenaTemporal: contrasenaTemporal
            }
            onClickProcesarContrasenha(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangeContrasenha = (e) => setContrasenaTemporal(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <span>Usuario: {data.nombre} {data.primerApellido} {data.segundoApellido}</span>
                <InputText id='txt-contrasenha' label='Contraseña:' type='password' placeholder='Ingrese la contraseña' value={contrasenaTemporal}
                    text='Contraseña temporal.' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida" className="" />
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">Actualizar</Button>
                </div>
            </Form>
        </>
    )
}

export default FormularioContrasenha;