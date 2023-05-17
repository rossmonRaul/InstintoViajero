import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Container} from "reactstrap";
import logo from '../../images/logo.webp';


const Contrasena = ({ ValidarSesionActiva }) => {

    const [mensaje, setMensaje] = useState('');

    const onClickActualizarContrasena = async (event) => {
        event.preventDefault();
        if ( document.querySelector("#txt-contrasenha").value == "") {
            setMensaje("Contraseña invalida!");
        } else {
            setMensaje("");
            const data = {
                contrasena: document.querySelector("#txt-contrasenha").value
            }
           
        }
    }

    return (
        <>
            <br /><br />
            <Container>
                <div className="content">
                    <div className="layout">

                        <div className="content-left">
                            <img src={logo} className="logo" />
                        </div>
                        <div className="content-right">
                            <h2>Actualizar contrasena</h2>
                            <Form onSubmit={onClickActualizarContrasena}>
                             
                                <Form.Group className="mb-3" controlId="txt-contrasenha">
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control type="password" placeholder="Ingrese una contraseña" />
                                    <Form.Text className="text-muted">Digite su nueva contraseña</Form.Text>
                                </Form.Group>

                                <Button type="submit" className="btn">Enviar</Button>
                                <div className="text-center">
                                </div>
                                <div className="text-center">{mensaje !== '' ? <span>{mensaje}</span> : ''}</div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default Contrasena;
