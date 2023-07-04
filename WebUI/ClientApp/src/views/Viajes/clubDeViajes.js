import React, { useEffect, useState } from 'react';

import { Button, Card, Container, Row, Col, Form} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form'

import { BuscarPersona } from '../../components/buscarPersona';
import '../../styles/clubDeViaje.css'
import { Grid } from '../../components/grid';
import { ObtenerCuotas } from '../../servicios/ServicioCuotas';
import { InputSelectHookForm, InputsFormsReactHook, TexAreaFormsReactHook } from '../../components/Forms/InputsFormsReactHook';

const ClubDeViajesComponet = (proceso = 1, data) => {

    const listaTiposDeCuenta = [
        {
            "value": "C",
            "DscTipoCuenta": "Credito",
        },
        {
            "value": "D",
            "DscTipoCuenta": "Debito",
        },
    ];

    //const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    
    const { register: register, handleSubmit: handleSubmit, formState: { errors: errors }, trigger: trigger } = useForm();
    const { register: registerComentario, handleSubmit: handleSubmitComentario, formState: { errors: errorsComentario }, trigger: triggerComentario } = useForm();
    
    const [isSummit, setIsSummit] = useState(false);

    const encabezado = [
        { id: 'idCuota', name: 'idCuota', selector: row => row.idCuota, head: "id", omit: true },
        { id: 'Codigo', name: 'Código', selector: row => row.codigo, head: "Código", sortable: true },
        { id: 'CuotaSemanal', name: 'Cuota Semanal', selector: row => `₡${row.cuotaSemanal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, head: "Cuota Semanal", sortable: true },
        { id: 'Monto', name: 'Monto', selector: row => `₡${row.monto.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, head: "Monto", sortable: true },
        { id: 'Estado', name: 'Estado', selector: row => row.estado, head: "Estado", sortable: true }
    ]

    const encabezadoComentarios = [
        { id: 'id', name: 'Serie', selector: row => row.id, head: "Serie",sortable: true },
        { id: 'DscComentario', name: 'Descripción Comentario', selector: row => row.DscComentario, head: "DscComentario", sortable: true },        
        
    ]
    const [listaDeCuotas, setListaDeCuotas] = useState([]);
    const [pendiente, setPendiente] = useState(false);
    const [filaSeleccionadaCuotas, setFilaSeleccionadaCuotas] = useState({});
    
    const [listaDeComentarios, setListaDeComentarios] = useState([]);
    const [pendienteComentarios, setPendienteComentarios] = useState(false);
    const [filaSeleccionadaComentarios, setFilaSeleccionadaComentarios] = useState({});

    const [personaSeleccionada, setPersonaSeleccionada] = useState({});
    const [buscarPersonas, setBuscarPersonas] = useState(false);
    const [showFormulario, setShowFormulario] = useState(true);

    useEffect(() => {
        ObtenerListadoDeCuotas();
    }, []);


    const ObtenerListadoDeCuotas = async () => {
        setPendiente(true);
        setListaDeCuotas(await ObtenerCuotas());
        setPendiente(false);
    }


    const onClickCerrarBuscarPersonas = () => {
        setBuscarPersonas(false);
        setShowFormulario(true);
    }
    const onClickAceptarBuscarPersonas = (persona) => {        
        setPersonaSeleccionada({...persona})
        setBuscarPersonas(!buscarPersonas);
    }

    const onClickBuscarPersona = () => {
            setBuscarPersonas(!buscarPersonas);
            setShowFormulario(false);
    }
   const onClickSeleccionarFilaCuotas = (fila) => {
        setFilaSeleccionadaCuotas(fila);
    }
   const onClickSeleccionarFilaComentarios = (fila) => {        
        setFilaSeleccionadaComentarios(fila);

    }

    const handleManualValidationComentarios = async () => {
        const isValid = await triggerComentario();
        if (!isValid) {
            setIsSummit(true)
        }
    };
    const handleSubmitComentarios = async (data) => {
        console.log(data);
        setListaDeComentarios([...listaDeComentarios, {
            id: listaDeComentarios.length + 1,
            DscComentario: data.DscComentario
        }]);
    };

    const [TipoCuenta, setTipoCuenta] = useState(proceso == 2 ? data.IdTipoCuenta : 0);

    const onChangeTipoCuenta = async (event) => {        
        setTipoCuenta(event.target.value);
        if (event.target.value != "") {
            if (errors?.IdTipoCuenta)
            {
                errors.IdTipoCuenta.type = undefined;
            }
        }
    }


    return (
        <>        
        <div className='d-flex justify-content-end'>


        <Button variant="primary" onClick={onClickBuscarPersona} className="mr-1 mb-2">
                <FontAwesomeIcon icon={faSearch}  className="mr-2" />
                Buscar Cliente
        </Button>
        </div>

        <div className='d-flex justify-content-around'>
        <Card className="card-container" style={{ width: '70rem' }}>
            <Card.Body>
                <Card.Title>Cliente: 
                    { personaSeleccionada.idPersona != null ? `  ${personaSeleccionada.identificacion} `: ""}                
                </Card.Title>
                
                <Container className='d-Grid align-content-center'>
                        <Row className="mt-4">
                            <Col>
                            <h4>Información del Cliente</h4>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            
                            <Col md={4}>
                            <label htmlFor="nombre"><b>Nombre:</b></label>
                            <p id="nombre">{personaSeleccionada.nombre}</p>
                            </Col>
                            <Col md={4}>
                            <label htmlFor="apellido"><b>Primer Apellido:</b></label>
                            <p id="apellido">{personaSeleccionada.primerApellido}</p>
                            </Col>
                            <Col md={4}>
                            <label htmlFor="apellido"><b>Segundo Apellido:</b></label>
                            <p id="apellido">{personaSeleccionada.segundoApellido}</p>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                        </Row>
                        <Row className="mt-4">
                            <Col md={4}>
                            <label htmlFor="apellido"><b>Identificación:</b></label>
                            <p id="apellido">{personaSeleccionada.identificacion}</p>
                            </Col>
                            <Col md={4}>
                            <label htmlFor="Telefono"><b>Telefono:</b></label>
                            <p id="Telefono">850425698</p>
                            </Col>
                            <Col md={4}>
                            <label htmlFor="Email"><b>Email:</b></label>
                            <p id="Email">ejemplio@gmail.com</p>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                            <label htmlFor="direccion"><b>Dirección:</b></label>
                            <p id="direccion">Provincia, Canton, Distrito, otras señas</p>
                            </Col>
                        </Row>
                        
                </Container>
            </Card.Body>
        </Card>

        

        <Card className="card-container" style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title className="card-title">Información de la Cuenta</Card.Title>
                <Container className='d-Grid align-content-center'>
                    <Row className="mt-4">
                        <Col md={6}>
                        {/* <label htmlFor="numTarjeta"><b>Número de Tarjeta:</b></label>
                        <p id="numTarjeta">**** **** **** 1234</p> */}
                        <InputsFormsReactHook
                            classDiv={"col-md-12"}                       
                            label='Número de Tarjeta:'
                            placeholder='Número de Tarjeta'
                            mensajeValidacion="El Número de Tarjeta es requerido"
                            errors={errors?.NumCuenta?.type}
                            isSummit={isSummit}
                            register={{ ...register('NumCuenta', { required: true }) }}
                        />
                        </Col>
                        <Col md={6}>
                        {/* <label htmlFor="Vencimiento"><b>Vencimiento:</b></label>
                        <p id="Vencimiento">12/25</p> */}
                         <InputsFormsReactHook
                            classDiv={"col-md-12"}                       
                            label='Vencimiento:'
                            placeholder='Vencimiento'
                            mensajeValidacion="El Vencimiento es requerido"
                            errors={errors?.FecVenceCuenta?.type}
                            isSummit={isSummit}
                            register={{ ...register('FecVenceCuenta', { required: true }) }}
                        />
                        </Col>                    
                    </Row>
                    <Row className="mt-4">
                        <Col md={6}>
                        {/* <label htmlFor="numTarjeta"><b>Emisor:</b></label>
                        <p id="numTarjeta">BAC</p> */}
                        <InputsFormsReactHook
                            classDiv={"col-md-12"}                       
                            label='Emisor:'
                            placeholder='Emisor'
                            mensajeValidacion="El Emisor es requerido"
                            errors={errors?.Emisor?.type}
                            isSummit={isSummit}
                            register={{ ...register('Emisor', { required: true }) }}
                        />
                        </Col>
                        <Col md={6}>
                        {/* <label htmlFor="Vencimiento"><b>Tipo Tarjeta:</b></label>
                        <p id="Vencimiento">Credito</p> */}
                        <InputSelectHookForm className="form-control custom-select"
                            controlId="sel-tipoProducto"
                            label="Tipo Cuenta"
                            data={listaTiposDeCuenta}
                            onChange={onChangeTipoCuenta}
                            value={TipoCuenta}
                            mensajeValidacion={"Seleccione un Tipo Cuenta"}
                            register={{ ...register('IdTipoCuenta', { required: true }) }}
                            optionValue="id" 
                            errors={errors?.IdTipoCuenta?.type}
                            isSummit={isSummit}                       
                            optionLabel="DscTipoCuenta"
                            classGroup="col-md-12" 
                        />
                        </Col>                    
                    </Row>
                    <Row className="mt-4">
                     
                        <Col md={6}>
                        <label htmlFor="Vencimiento"><b>Linea Emisora:</b></label>
                        <p id="Vencimiento">Master Card</p>
                        </Col>                    
                        <Col md={6}>
                        <label htmlFor="Vencimiento"><b>Frecuencia de Pago:</b></label>
                        <p id="Vencimiento">Semanal</p>
                        </Col>                    
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        </div>

        <div className='d-flex justify-content-around mt-3'>
        <Card className="card-container" style={{ width: '70rem' }}>
            <Card.Body>
                <Card.Title className="card-title">Información de la General</Card.Title>
                <Container className='d-Grid align-content-center'>
                    <Row className="mt-4">
                        <Col md={3}>
                        <label htmlFor="numTarjeta"><b>Benficiario:</b></label>
                        <p id="numTarjeta">Juan Jose Chacon Chacon</p>
                        </Col>
                        <Col md={3}>
                        <label htmlFor="Vencimiento"><b>Cedula:</b></label>
                        <p id="Vencimiento">12/25</p>
                        </Col>
                        <Col md={3}>
                        <label htmlFor="Vencimiento"><b>Email:</b></label>
                        <p id="Vencimiento">12/25</p>
                        </Col>
                        <Col md={3}>
                        <label htmlFor="Vencimiento"><b>Profesion u Oficio:</b></label>
                        <p id="Vencimiento">12/25</p>
                        </Col>                       
                    </Row>
                    <Row className="mt-4">
                        <Col md={12}>
                        <span>Seleccione el tipo de cuota</span>
                            <Grid
                                gridHeading={encabezado}
                                gridData={listaDeCuotas}
                                selectableRows={true}
                                pending={pendiente}
                                setFilaSeleccionada={onClickSeleccionarFilaCuotas}
                                idBuscar="id" />
                        </Col>                      
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        <Card className="card-container" style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Title className="card-title">Bitacora de Comentarios</Card.Title>
                <Container className='d-Grid align-content-center'>
                    <Form onSubmit={handleSubmitComentario(handleSubmitComentarios)}>
                    <Row className="mt-4">
                        <TexAreaFormsReactHook
                            type={""}
                            rows={3}
                            classDiv={"col-md-8"}
                            id='txt-Comentarios'
                            label='Comentarios:'
                            placeholder='Comentarios'
                            errors={errorsComentario?.DscComentario?.type}                        
                            mensajeValidacion=""
                            isSummit={isSummit}
                            register={{ ...registerComentario('DscComentario', { 
                                required: true,                            
                                maxLength: 1000
                                })
                            }}
                        />      
                        <Button             
                        className='d-flex align-self-end mb-3'                
                            variant="primary" 
                            type="submit" 
                            style={{height: "37px"}}
                            onClick={handleManualValidationComentarios} 
                            size="sm">Agregar Comentario</Button>       
                    </Row>
                    </Form>     
                    <Row className="mt-4">
                        <Col md={12}>
                        <span>Listado de Comentarios</span>
                            <Grid
                                gridHeading={encabezadoComentarios}
                                gridData={listaDeComentarios}
                                selectableRows={true}
                                pending={pendienteComentarios}
                                setFilaSeleccionada={onClickSeleccionarFilaComentarios}
                                idBuscar="id" />
                        </Col>                      
                    </Row>
                </Container>
            </Card.Body>
        </Card>
        </div>
        <BuscarPersona show={buscarPersonas} handleClose={onClickCerrarBuscarPersonas} handleAceptar={onClickAceptarBuscarPersonas} className='' tamano="lg">
            <h5>Personas buscador</h5>
        </BuscarPersona>

        </>
    )
}

export default ClubDeViajesComponet;