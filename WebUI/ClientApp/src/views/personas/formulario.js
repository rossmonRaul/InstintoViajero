import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
import { useForm } from 'react-hook-form'
import { ComboBox } from '../../components/combobox';
import { InputSelectHookForm, InputsFormsReactHook } from '../../components/Forms/InputsFormsReactHook';

import { ObtenerTiposIdentificacion } from '../../servicios/ServicioPersonas';
import { InputSelectDirecciones } from '../../components/Direcciones/direcciones';

const Formulario = ({ labelButton, data, proceso, onClickProcesarPersona, mensaje }) => {

    if (proceso === 1) {
        data = {}
    }
    
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            Identificacion: data?.identificacion,
            Nombre: data?.nombre,
            primerApellido: data?.primerApellido,
            segundoApellido: data?.segundoApellido,
            idProvincia: data?.idProvincia,
            idCanton: data?.idCanton,
            idDistrito: data?.idDistrito,
            profesion: data?.profesion,
            fechaNacimiento: data?.fechaNacimiento ? data.fechaNacimiento.replace('T00:00:00', '') : '', 
            direccion: data?.direccion,
            idTipoIdentificacion: data?.idTipoIdentificacion
        }
    });
    const [isSummit, setIsSummit] = useState(false);

    const [listaTiposIdentificacion, setListaTiposIdentificacion] = useState([]); 

    //campos de form
    //const [identificacion, setIdentificacion] = useState(proceso == 2 ? data.identificacion : '');
    //const [nombre, setNombre] = useState(proceso == 2 ? data.nombre : '');
    //const [primerApellido, setPrimerApellido] = useState(proceso == 2 ? data.primerApellido : '');
    //const [segundoApellido, setSegundoApellido] = useState(proceso == 2 ? data.segundoApellido : '');
    const [idProvincia, setProvincia] = useState(proceso == 2 ? data.idProvincia : '');
    const [idCanton, setCanton] = useState(proceso == 2 ? data.idCanton : '');
    const [idDistrito, setDistrito] = useState(proceso == 2 ? data.idDistrito : '');
    //const [profesion, setProfesion] = useState(proceso == 2 ? data.profesion : '');
    //const [fechaNacimiento, setfechaNacimiento] = useState(proceso == 2 ? data.fechaNacimiento.replace('T00:00:00', '') : '');
    //const [direccion, setDireccion] = useState(proceso == 2 ? data.direccion : '');

    //variables de combo box
    const [idTiposIdentificacion, setidTiposIdentificacion] = useState(proceso == 2 ? data.idTipoIdentificacion : 0);

    //const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListadoDeTiposID();
    }, []);
    //useEffect(() => {
    //    ObtenerListadoDeTiposID();
    //}, [idTiposIdentificacion]);

    //llenado de combo box
    const ObtenerListadoDeTiposID = async () => {
        const tiposIdentificacion = await ObtenerTiposIdentificacion();
       // console.log(tiposIdentificacion);
        if (tiposIdentificacion !== undefined) {
            setListaTiposIdentificacion(tiposIdentificacion);
        }
    }

    const onClickAceptar = (event) => {
        const updatedEvent = {
            ...event,
            idTipoIdentificacion: idTiposIdentificacion === 0 ? listaTiposIdentificacion[0].idTipoIdentificacion : idTiposIdentificacion
        };
        console.log(updatedEvent);
        onClickProcesarPersona(updatedEvent);
    };
    //envio de datos
    //const onClickAceptar = (event) => {
    //    const form = event.currentTarget;
    //    if (form.checkValidity() === false) {
    //        event.preventDefault();
    //        event.stopPropagation();
    //    } else {
    //        const data = {
    //            profesion: profesion,
    //            idTipoIdentificacion: idTiposIdentificacion == 0 ? listaTiposIdentificacion[0].idTipoIdentificacion : idTiposIdentificacion,
    //            identificacion: identificacion,
    //            nombre: nombre,
    //            primerApellido: primerApellido,
    //            segundoApellido: segundoApellido,
    //            fechaNacimiento: fechaNacimiento,
    //            direccion: direccion,
    //        }
    //        onClickProcesarPersona(data);
    //    }
    //    setValidated(true);
    //    event.preventDefault();
    //}



    //eventos del form
    //const onChangeTiposIdentificacion = (event) => {
    //    setidTiposIdentificacion(event.target.value);
    //    if (event.target.value != "") {
    //        if (errors?.IdTipoIdentificacion) {
    //            errors.IdTipoIdentificacion.type = undefined;
    //        }
    //    }
    ////    setidTiposIdentificacion(event.target.value);
    //}
    const onChangeTiposIdentificacion = (event) => {
        setidTiposIdentificacion(event.target.value);
        console.log(idTiposIdentificacion);
    }

    //const onChangeIdentificacion = (e) => setIdentificacion(e.target.value.replace(/[^0-9]/g, ""));
    //const onChangeNombre = (e) => setNombre(e.target.value);
    //const onChangePrimerApellido = (e) => setPrimerApellido(e.target.value);
    //const onChangeSegundoApellido = (e) => setSegundoApellido(e.target.value);
    //const onChangeFechaNacimiento = (e) => setfechaNacimiento(e.target.value);
    //const onChangeDireccion = (e) => setDireccion(e.target.value);
    //const onChangeProfesion = (e) => setProfesion(e.target.value);

    const handleManualValidation = async () => {
        const isValid = await trigger();
        if (!isValid) {
            setIsSummit(true)
        }
    };

    return (
        <>
           
            <Form onSubmit={handleSubmit(onClickAceptar)}>
                <Row>
                    <ComboBox className="form-control custom-select-sm" controlId="sel-tipoIdentificacion" label="Tipo de Identificación" data={listaTiposIdentificacion}
                        onChange={onChangeTiposIdentificacion} value={idTiposIdentificacion} indicacion="Seleccione el tipo de identificación" optionValue="idTipoIdentificacion" optionLabel="descripcion" classGroup="col-md-4" />

                    <InputsFormsReactHook id='txt-identificacion' label='Identificación:' type='text' placeholder='Ingrese la identificación'  maxLength={15}
                        mensajeValidacion="La identificación es requerida" classDiv="col-md-4"
                        errors={errors?.Identificacion?.type}
                        isSummit={isSummit}
                        register={{ ...register('Identificacion', { required: true }) }}                    />
                    <InputsFormsReactHook id='txt-fecNacimiento' label='Fecha de Nacimiento:' type='date' placeholder='Ingrese la fecha de nacimiento'
                        mensajeValidacion="La fecha es requerida" classDiv="col-md-4"
                        errors={errors?.fechaNacimiento?.type}
                        isSummit={isSummit}
                        register={{ ...register('fechaNacimiento', { required: true }) }} />
                </Row>
                <Row>
                    <InputsFormsReactHook id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre'  
                        mensajeValidacion="El nombre es requerido" maxLength={50} classDiv="col-md-4"
                        errors={errors?.Nombre?.type}
                        isSummit={isSummit}
                        register={{ ...register('Nombre', { required: true }) }}/>
                    <InputsFormsReactHook id='txt-primerApellido' label='Primer Apellido:' type='text' placeholder='Ingrese el primer apellido' 
                        mensajeValidacion="El apellido es requerido" maxLength={50} classDiv="col-md-4"
                        errors={errors?.primerApellido?.type}
                        isSummit={isSummit}
                        register={{ ...register('primerApellido', { required: true }) }}/>

                    <InputsFormsReactHook id='txt-segundoApellido' label='Segundo Apellido:' type='text' placeholder='Ingrese el segundo apellido' 
                        mensajeValidacion="El apellido es requerido" classDiv="col-md-4"
                        errors={errors?.segundoApellido?.type}
                        isSummit={isSummit}
                        register={{ ...register('segundoApellido', { required: true }) }}/>
                </Row>
                <Row>                  
                    <InputsFormsReactHook id='txt-profesion' label='Profesión u oficio :' type='text' placeholder='Ingrese la profesión u oficio' 
                        mensajeValidacion="La profesión  u oficio es requerido" maxLength={100} classDiv="col-md-4"
                        errors={errors?.profesion?.type}
                        isSummit={isSummit}
                        register={{ ...register('profesion', { required: true }) }}/>
                    <InputsFormsReactHook id='txt-direccion' label='Dirección de Habitación:' type='text' placeholder='Ingrese la dirección' 
                        mensajeValidacion="La dirección es requerida" maxLength={200} className="col-md-8"
                        errors={errors?.direccion?.type}
                        isSummit={isSummit}
                        register={{ ...register('direccion', { required: true }) }}/>
                </Row>
                <Row>
                    <InputSelectDirecciones
                        className="form-control custom-select"
                        valueProvincia={idProvincia}
                        valueCanton={idCanton}
                        valueDistrito={idDistrito}
                        registerProvincias={{ ...register('IdProvincia', { required: true }) }}
                        registerCantones={{ ...register('IdCanton', { required: true }) }}
                        registerDistritos={{ ...register('IdDistrito', { required: true }) }}
                        errorsProvincias={errors?.IdProvincia?.type}
                        errorsCantones={errors?.IdCanton?.type}
                        errorsDistritos={errors?.IdDistrito?.type}
                        isSummit={isSummit}
                        classGroup="col-md-4" />

                </Row> 
                <br />
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" onClick={handleManualValidation} size="sm">{labelButton}</Button>
                </div>

                

            </Form>
        </>
    )
}

export default Formulario;