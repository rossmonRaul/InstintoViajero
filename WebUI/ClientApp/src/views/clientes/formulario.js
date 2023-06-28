import React, { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputText } from '../../components/inputs';
import { BuscarPersona } from '../../components/buscarPersona';



const Formulario = ({ labelButton, data, proceso, onClickProcesarCliente, mensaje }) => {
    const [buscarPersonas, setBuscarPersonas] = useState(false);
    const [showFormulario, setShowFormulario] = useState(true);



    //campos de form
    //const [correo, setCorreo] = useState(proceso == 2 ? data.coreoElectronico : '');
    const [identificacion, setIdentificacion] = useState(proceso == 2 ? data.identificacion : '');
    const [nombre, setNombre] = useState(proceso == 2 ? data.nombre + " " + data.primerApellido + " " + data.segundoApellido : '');

    const [idPersona, setidPersona] = useState(proceso == 2 ? data.idPersona : 0);
    const [validated, setValidated] = useState(false);


    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                idPersona: idPersona            }
            onClickProcesarCliente(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form

    const onClickBuscarPersona = () => {
        setBuscarPersonas(!buscarPersonas);
        setShowFormulario(false);
    }

    const onClickCerrarBuscarPersonas = () => {
        setBuscarPersonas(false);
        setShowFormulario(true);
    }

    const onClickAceptarBuscarPersonas = (persona) => {
        //console.log(persona);
        setidPersona(persona.idPersona);
        setNombre(`${persona.nombre} ${persona.primerApellido} ${persona.segundoApellido}`);
        setIdentificacion(persona.identificacion);
        setBuscarPersonas(false);
        setShowFormulario(true);
    }

    const onChangeIdentificacion = (e) => setIdentificacion(e.target.value.replace(/[^0-9]/g, ""));
    const onChangeNombre = (e) => setNombre(e.target.value);


    return (
        <>
            {showFormulario && (
                <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                    <Row>
                        <InputText id='txt-nombre' label='Nombre:' type='text' value={nombre}
                            onChange={onChangeNombre} mensajeValidacion="El nombre del cliente es requerido" placeholder='Nombre del cliente' className="col-md-4" onClick={onClickBuscarPersona} readOnly={proceso == 2} />

                        <InputText id='txt-identificacion' label='Identificación:' type='text' value={identificacion}
                            onChange={onChangeIdentificacion} mensajeValidacion="La identificación es requerida" className="col-md-4" readOnly />
                    </Row>
                    <br />
                    {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                    <div className='text-right'>
                        <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                    </div>

                </Form>
            )}

            <BuscarPersona show={buscarPersonas} handleClose={onClickCerrarBuscarPersonas} handleAceptar={onClickAceptarBuscarPersonas} className='' tamano="lg">
                <h5>Personas buscador</h5>
            </BuscarPersona>
        </>
    )
}

export default Formulario;