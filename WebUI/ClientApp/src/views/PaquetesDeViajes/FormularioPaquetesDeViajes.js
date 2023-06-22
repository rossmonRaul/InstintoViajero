import React, {useState} from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { InputSelectHookForm, InputsFormsReactHook } from '../../components/Forms/InputsFormsReactHook';

const FormularioPaquetesDeViajes = ({ labelButton, data, proceso, onClickProcesar }) => {
    if(proceso === 1) {
        data = {}
    }
   const selectsSINO = [
        {
            "value": true,
            "option": "SI",
        },
        {
            "value": false,
            "option": "NO",
        },
    ];
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {            
            Descripcion: data?.descripcion,
            ObservacionesGenerales: data?.observacionesGenerales,
            PrecioTotal: data?.precioTotal,
            CantidadCampos: data?.cantidadCampos,
            TieneRegalias: data?.tieneRegalias,
            TieneDescuentos: data?.tieneDescuentos,
            FechaSalida: data?.fechaSalida,
            FechaLLegada: data?.fechaLLegada
        }
    });
    
    const [isSummit, setIsSummit] = useState(false);
    const [valueTieneRegalias, setValueTieneRagalias] = useState(proceso == 2 ? data.tieneRegalias ? 1 : 0 : "");
    const [valueTieneDescuentos, setValueTieneDescuentos] = useState(proceso == 2 ? data.tieneDescuentos ? 1 : 0 : "");

    const onClickAceptar = (event) => {
        onClickProcesar({ ...event });     
    }
    const handleManualValidation = async () => {
        const isValid = await trigger();
        if (!isValid) {
            setIsSummit(true)
        }
    };

    const onChangeRegalias = async (event) => {        
        setValueTieneRagalias(event.target.value);
        if (event.target.value != "") {
            if (errors?.TieneRegalias)
            {
                errors.TieneRegalias.type = undefined;
            }
        }
    }
    const onChangeDescuentos = async (event) => {        
        setValueTieneDescuentos(event.target.value);
        if (event.target.value != "") {
            if (errors?.TieneDescuentos)
            {
                errors.TieneDescuentos.type = undefined;
            }
        }
    }

    return (
        <>
            <Form  className='flex-row justify-content-center' onSubmit={handleSubmit(onClickAceptar)}>
                <Row className='m-2'>
                    <InputsFormsReactHook
                        //className="input-form-hook"
                        id='txt-Descripcion'
                        label='Descripción:'
                        classDiv={"col-md-12"}
                        placeholder='Descripción'
                        errors={errors?.Descripcion?.type}
                        mensajeValidacion="La descripción es requerida"
                        isSummit={isSummit}
                        register={{ ...register('Descripcion', { 
                            required: true,
                            maxLength: 100
                            })
                        }}
                    />
                </Row>   
                <Row className='m-2'>
                    <InputsFormsReactHook
                        //className="input-form-hook"
                        id='txt-PrecioTotal'
                        type={"number"}
                        label='Precio Total:'
                        classDiv={"col-md-6"}
                        placeholder='Precio Total'
                        errors={errors?.PrecioTotal?.type}
                        mensajeValidacion="La descripción es requerida"
                        isSummit={isSummit}
                        register={{ ...register('PrecioTotal', { 
                            required: true,                            
                            })
                        }}
                    />
                    <InputsFormsReactHook
                        //className="input-form-hook"
                        id='txt-CantidadCampos'
                        type={"number"}
                        classDiv={"col-md-6"}
                        label='Cantidad de Pasajeros:'
                        placeholder='Cantidad de Pasajeros'
                        errors={errors?.CantidadCampos?.type}                        
                        mensajeValidacion="Cantidad de Pasajeros Requeridos"
                        isSummit={isSummit}
                        register={{ ...register('CantidadCampos', {  
                            required: true
                            })
                        }}
                    />
                </Row>    
                <Row className='m-2'>
                    <InputSelectHookForm className="form-control custom-select"
                            controlId="sel-TieneRegalias"
                            label="¿Tiene Regalias?"
                            data={selectsSINO}
                            onChange={onChangeRegalias}
                            value={valueTieneRegalias}
                            mensajeValidacion={"Seleccione un valor..."}
                            register={{ ...register('TieneRegalias', { required: true }) }}
                            optionValue="value" 
                            errors={errors?.TieneRegalias?.type}
                            isSummit={isSummit}                       
                            optionLabel="option"
                            classGroup="col-md-6" />
                    <InputSelectHookForm className="form-control custom-select"
                            controlId="sel-TieneDescuentos"
                            label="¿Tiene Descuentos?"
                            data={selectsSINO}
                            onChange={onChangeDescuentos}
                            value={valueTieneDescuentos}
                            mensajeValidacion={"Seleccione un valor..."}
                            register={{ ...register('TieneDescuentos', { required: true }) }}
                            optionValue="value" 
                            errors={errors?.TieneDescuentos?.type}
                            isSummit={isSummit}                       
                            optionLabel="option"
                            classGroup="col-md-6" />
                </Row>

                <Row className='m-2'>
                    <InputsFormsReactHook
                        //className="input-form-hook"
                        type={"Date"}
                        classDiv={"col-md-6"}
                        id='txt-FechaSalida'
                        label='Fecha de Salida:'
                        placeholder='Fecha de Salida'
                        errors={errors?.FechaSalida?.type}
                        mensajeValidacion="La Fecha de Salida es requerida"
                        isSummit={isSummit}
                        register={{ ...register('FechaSalida', { 
                            required: true,                            
                            })
                        }}
                    />
                    <InputsFormsReactHook
                        //className="input-form-hook"
                        id='txt-FechaLlegada'
                        classDiv={"col-md-6"}
                        type={"Date"}
                        label='Fecha de Llegada:'
                        placeholder='Fecha de Llegada'
                        errors={errors?.FechaLlegada?.type}                        
                        mensajeValidacion="La Fecha de Llegada es requerida"
                        isSummit={isSummit}
                        register={{ ...register('FechaLlegada', {  
                            required: true
                            })
                        }}
                    />
                </Row> 
                <Row className='m-2'>
                    
                    <InputsFormsReactHook
                        //className="input-form-hook"
                        type={""}
                        classDiv={"col-md-12"}
                        id='txt-ObservacionesGenerales'
                        label='Observaciones Generales:'
                        placeholder='Observaciones Generales'
                        errors={errors?.ObservacionesGenerales?.type}                        
                        mensajeValidacion=""
                        isSummit={isSummit}
                        register={{ ...register('ObservacionesGenerales', {                             
                            maxLength: 1000
                            })
                        }}
                    />
                </Row>
                <div className='text-right'>
                    <Button variant="primary" type="submit" onClick={handleManualValidation} size="sm">{labelButton}</Button>
                </div>
            </Form>
        </>
    )
}

export default FormularioPaquetesDeViajes;
