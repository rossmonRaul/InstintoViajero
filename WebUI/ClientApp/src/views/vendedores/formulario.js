import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
import { ComboBox } from '../../components/combobox';
import { ObtenerSucursales, ObtenerPersonas } from '../../servicios/ServicioVendedor';

const Formulario = ({ labelButton, data, proceso, onClickProcesarVendedor, mensaje }) => {
    const [listaSucursales, setListaSucursales] = useState([]);
    const [listaPersonas, setListaPersonas] = useState([]);

    //campos de form
    //const [correo, setCorreo] = useState(proceso == 2 ? data.coreoElectronico : '');
    const [codVendedor, setCodVendedor] = useState(proceso == 2 ? data.codVendedor : '');
    const [identificacion, setIdentificacion] = useState(proceso == 2 ? data.identificacion : '');
    const [nombre, setNombre] = useState(proceso == 2 ? data.nombre : '');
    const [primerApellido, setPrimerApellido] = useState(proceso == 2 ? data.primerApellido : '');
    const [segundoApellido, setSegundoApellido] = useState(proceso == 2 ? data.segundoApellido : '');
    const [fechaContratacion, setfechaContratacion] = useState(proceso == 2 ? data.fechaContratacion.replace('T00:00:00', '') : '');

    //variables de combo box
    const [idSucursal, setIdSucursal] = useState(proceso == 2 ? data.idSucursal : 0);
    const [idPersona, setidPersona] = useState(proceso == 2 ? data.idPersona : 0);

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListadoDeSucursales();
        ObtenerListadoDePersonas();
    }, []);

    //llenado de combo box
    const ObtenerListadoDeSucursales = async () => {
        const Sucursales = await ObtenerSucursales();
        if (Sucursales !== undefined ) {
            setListaSucursales(Sucursales);
        }
    }

    const ObtenerListadoDePersonas = async () => {
        const personas = await ObtenerPersonas();
        if (personas !== undefined) {
            setListaPersonas(personas);
        }
    }


    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                idPersona: idPersona == 0 ? listaPersonas[0].idPersona : idPersona,
                codVendedor: codVendedor,
                idSucursal: idSucursal == 0 ? listaSucursales[0].idSucursal : idSucursal,
                fechaContratacion: fechaContratacion,        
            }
            onClickProcesarVendedor(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form
    const onChangeSucursal = (event) => {
        setIdSucursal(event.target.value);
    }

    const onChangePersona = (event) => {
        setidPersona(event.target.value);
    }


    
    const onChangeCodVendedor = (e) => setCodVendedor(e.target.value);
    const onChangeIdentificacion = (e) => setIdentificacion(e.target.value.replace(/[^0-9]/g, ""));
    const onChangeNombre = (e) => setNombre(e.target.value);
    const onChangePrimerApellido = (e) => setPrimerApellido(e.target.value);
    const onChangeSegundoApellido = (e) => setSegundoApellido(e.target.value);
    const onChangefechaContratacion = (e) => setfechaContratacion(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <Row>
                    <InputText id='txt-codVendedor' label='CodVendedor:' type='text' placeholder='Ingrese el código de vendedor' value={codVendedor}
                        onChange={onChangeCodVendedor} mensajeValidacion="El código de vendedor es requerido" className="col-md-4" readOnly={proceso == 2} />

                    <InputText id='txt-identificacion' label='Identificación:' type='text' placeholder='Ingrese la identificación' value={identificacion}
                        onChange={onChangeIdentificacion} mensajeValidacion="La identificación es requerida" className="col-md-4" readOnly={proceso == 2} />
                </Row>
                <Row>
                    <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre' value={nombre}
                        onChange={onChangeNombre} mensajeValidacion="El nombre es requerido" className="col-md-4" />
                    <InputText id='txt-primerApellido' label='Primer Apellido:' type='text' placeholder='Ingrese el primer apellido' value={primerApellido}
                        onChange={onChangePrimerApellido} mensajeValidacion="El apellido es requerido" className="col-md-4" />

                    <InputText id='txt-segundoApellido' label='Segundo Apellido:' type='text' placeholder='Ingrese el segundo apellido' value={segundoApellido}
                        onChange={onChangeSegundoApellido} mensajeValidacion="El apellido es requerido" className="col-md-4" />
                </Row>
                <Row>
                    <InputText id='txt-fecContratacion' label='Fecha de Contratación:' type='date' placeholder='Ingrese la fecha de contratación' value={fechaContratacion}
                        onChange={onChangefechaContratacion} mensajeValidacion="La fecha es requerida" className="col-md-4" />

                    <ComboBox data={listaSucursales} label="Sucursales" controlId="sel-idSucursal" onChange={onChangeSucursal} value={idSucursal} optionValue="idSucursal" optionLabel="nombreSucursal" indicacion="Seleccione la Sucursal" classGroup="col-md-5" />
                </Row>
                <Row>
                    <ComboBox data={listaPersonas} label="Personas" controlId="sel-idPerosona" onChange={onChangePersona} value={idPersona} optionValue="idPersona" optionLabel="nombrePersona" indicacion="Seleccione la Persona" classGroup="col-md-5" />
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

export default Formulario;