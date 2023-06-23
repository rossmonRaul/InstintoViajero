import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputText } from '../../components/inputs';
import { ComboBox } from '../../components/combobox';
import { ObtenerSucursales } from '../../servicios/ServicioVendedor';
import { BuscarPersona } from '../../components/buscarPersona';



const Formulario = ({ labelButton, data, proceso, onClickProcesarVendedor, mensaje }) => {
    const [listaSucursales, setListaSucursales] = useState([]);
    const [buscarPersonas, setBuscarPersonas] = useState(false);
    const [showFormulario, setShowFormulario] = useState(true);



    //campos de form
    //const [correo, setCorreo] = useState(proceso == 2 ? data.coreoElectronico : '');
    const [codVendedor, setCodVendedor] = useState(proceso == 2 ? data.codVendedor : '');
    const [identificacion, setIdentificacion] = useState(proceso == 2 ? data.identificacion : '');
    const [nombre, setNombre] = useState(proceso == 2 ? data.nombre + " " + data.primerApellido + " " + data.segundoApellido : '');
    const [fechaContratacion, setfechaContratacion] = useState(proceso == 2 ? data.fechaContratacion.replace('T00:00:00', '') : '');

    //variables de combo box
    const [idSucursal, setIdSucursal] = useState(proceso == 2 ? data.idSucursal : 0);
    const [idPersona, setidPersona] = useState(proceso == 2 ? data.idPersona : 0);

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListadoDeSucursales();
    }, []);

    //llenado de combo box
    const ObtenerListadoDeSucursales = async () => {
        const Sucursales = await ObtenerSucursales();
        if (Sucursales !== undefined ) {
            setListaSucursales(Sucursales);
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
                idPersona: idPersona,
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
   
    const onChangeCodVendedor = (e) => setCodVendedor(e.target.value);
    const onChangeIdentificacion = (e) => setIdentificacion(e.target.value.replace(/[^0-9]/g, ""));
    const onChangefechaContratacion = (e) => setfechaContratacion(e.target.value);
    const onChangeNombre = (e) => setNombre(e.target.value);


    return (
        <>
            {showFormulario && (
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <Row>
                    <InputText id='txt-codVendedor' label='Código de Vendedor:' type='text' placeholder='Ingrese el código de vendedor' value={codVendedor}
                        onChange={onChangeCodVendedor} mensajeValidacion="El código de vendedor es requerido" className="col-md-4"  />

                        <InputText id='txt-nombre' label='Nombre:' type='text' value={nombre}
                            onChange={onChangeNombre}    mensajeValidacion="El nombre del vendedor es requerido" placeholder='Nombre del vendedor' className="col-md-4" onClick={onClickBuscarPersona} />

                        <InputText id='txt-identificacion' label='Identificación:' type='text' value={identificacion}
                            onChange={onChangeIdentificacion} mensajeValidacion="La identificación es requerida" className="col-md-4" readOnly />
                </Row>              
                <Row>
                    <InputText id='txt-fecContratacion' label='Fecha de Contratación:' type='date' placeholder='Ingrese la fecha de contratación' value={fechaContratacion}
                        onChange={onChangefechaContratacion} mensajeValidacion="La fecha es requerida" className="col-md-4" />

                    <ComboBox data={listaSucursales} label="Sucursales" controlId="sel-idSucursal" onChange={onChangeSucursal} value={idSucursal} optionValue="idSucursal" optionLabel="nombreSucursal" indicacion="Seleccione la Sucursal" classGroup="col-md-5" />
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