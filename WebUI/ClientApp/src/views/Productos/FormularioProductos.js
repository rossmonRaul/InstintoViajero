import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
//import useForm from '../../components/useForm';
import { useForm } from 'react-hook-form'
import { ObtenerTiposProductos } from '../../servicios/ServicioProductos';
import { InputSelectHookForm, InputsFormsReactHook } from '../../components/Forms/InputsFormsReactHook';
import { InputSelectDirecciones } from '../../components/Direcciones/direcciones';

const FormularioProducto = ({ labelButton, data, proceso, onClickProcesar, mensaje }) => {
    
    if(proceso === 1) {
        data = {}
    }
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            Nombre: data?.nombre,
            CodProducto: data?.codProducto,
            IdTipo: data?.idTipo
        }
    });
    const [isSummit, setIsSummit] = useState(false);
    //variables de combo box
    const [listaTiposProductos, setListaTiposProductos] = useState([]);
    const [idTipoProducto, setIdTipoProducto] = useState(proceso == 2 ? data.idTipo : 0);

    useEffect(() => {
        ObtenerListadoDeTiposProductos();
    }, []);
    useEffect(() => {
        ObtenerListadoDeTiposProductos();        
    }, [idTipoProducto]);

    //llenado de combo box
    const ObtenerListadoDeTiposProductos = async () => {
        const tiposProductos = await ObtenerTiposProductos();
        if (tiposProductos !== undefined) {
            setListaTiposProductos(tiposProductos);
        }
    }

    const onChangeTiposProducto = async (event) => {        
        setIdTipoProducto(event.target.value);
        if (event.target.value != "") {
            if (errors?.IdTipo)
            {
                errors.IdTipo.type = undefined;
            }
        }
    }

    const onClickAceptar = (event) => {
        console.log(event);
        onClickProcesar(event);        
    }

    const handleManualValidation = async () => {        
        const isValid = await trigger();
        if (!isValid) {
            setIsSummit(true)
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onClickAceptar)}>

                <Row >
                    <InputSelectHookForm className="form-control custom-select"
                        controlId="sel-tipoProducto"
                        label="Tipo de Producto"
                        data={listaTiposProductos}
                        onChange={onChangeTiposProducto}
                        value={idTipoProducto}
                        mensajeValidacion={"Seleccione un tipo de producto"}
                        register={{ ...register('IdTipo', { required: true }) }}
                        optionValue="id" 
                        errors={errors?.IdTipo?.type}
                        isSummit={isSummit}                       
                        optionLabel="desTipoProducto"
                        classGroup="col-md-4" />

                    <InputsFormsReactHook
                        classDiv={"col-md-4"}                       
                        label='Descripción Producto:'
                        placeholder='Descripción Producto'
                        mensajeValidacion="La descripción producto es requerida"
                        errors={errors?.Nombre?.type}
                        isSummit={isSummit}
                        register={{ ...register('Nombre', { required: true }) }}
                    />
                    <InputsFormsReactHook
                        classDiv={"col-md-4"}                       
                        label='Codigo de Producto:'
                        placeholder='Codigo de Producto'
                        mensajeValidacion="El Codigo de Producto es Requerido"
                        errors={errors?.CodProducto?.type}
                        isSummit={isSummit}
                        register={{ ...register('CodProducto', { required: true }) }}
                    />
                </Row>

                 <Row>
                    <InputSelectDirecciones 
                        className="form-control custom-select" 
                        valueProvincia={0}
                        valueCanton={1}
                        valueDistrito={1}
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

export default FormularioProducto;