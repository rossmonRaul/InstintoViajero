import React, { useState } from "react"
import { Button, Form } from "react-bootstrap";
import { InputText } from "../../components/inputs";

const FormLogin = ({IniciarSesion, mensaje}) => {
    const [usuario, setUsuario] = useState("");
    const [contrasenha, setContrasenha] = useState("");
    const [validated, setValidated] = useState(false);

    const onChangeUsuario = (e) => setUsuario(e.target.value);
    const onChangeContrasenha = (e) => setContrasenha(e.target.value);

    const onClickAceptar = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();            
        }else{
            const data = {
                usuario: usuario,
                contrasena: contrasenha
            }
            IniciarSesion(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    return(
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <h2>Iniciar sesión</h2>
                <InputText id='txt-usuario' label='Usuario:' type='text' placeholder='Ingrese su usuario' value={usuario} 
                    text='Nunca comparta los datos de su usuario' onChange={onChangeUsuario} mensajeValidacion="El usuario es requerido"/>
                <InputText id='txt-contrasenha' label='Contraseña:' type='password' placeholder='' value={contrasenha} 
                    text='' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida"/>
                <Button  type="submit" className="btn" id="btn-ingresar">Ingresar </Button>                 
                <div className="text-center">{mensaje !== '' ? <span> <br /> {mensaje}</span> : ''}</div>
            </Form>
        </>
    )
}

export default FormLogin;