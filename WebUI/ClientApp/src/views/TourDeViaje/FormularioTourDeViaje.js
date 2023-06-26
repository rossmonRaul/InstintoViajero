import React, {useState} from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { InputSelectHookForm, InputsFormsReactHook, TexAreaFormsReactHook } from '../../components/Forms/InputsFormsReactHook';

const FormularioTourDeViaje = ({ labelButton, data, proceso, onClickProcesar }) => {
    if(proceso === 1) {
        data = {}
    }

    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {            
            Descripcion: data?.descripcion,            
            Observaciones: data?.observaciones,            
            Precio: data?.precio,            
            FechaSalida: data?.fechaSalida,
            FechaLLegada: data?.fechaLLegada
        }
    });
    
    const [isSummit, setIsSummit] = useState(false);

    const onClickAceptar = (event) => {        
        onClickProcesar({ ...event });     
    }
    const handleManualValidation = async () => {
        const isValid = await trigger();
        if (!isValid) {
            setIsSummit(true)
        }
    };

    return (
        <>
            <Form  className='flex-row justify-content-center' onSubmit={handleSubmit(onClickAceptar)}>
                <Row className='m-2'>
                    <InputsFormsReactHook
                        id='txt-Descripcion'
                        label='Descripción:'
                        classDiv={"col-md-6"}
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
                    <InputsFormsReactHook
                        id='txt-Precio'
                        type={"number"}
                        label='Precio Total:'
                        classDiv={"col-md-6"}
                        placeholder='Precio Total'
                        errors={errors?.Precio?.type}
                        mensajeValidacion="La descripción es requerida"
                        isSummit={isSummit}
                        register={{ ...register('Precio', { 
                            required: true,                            
                            })
                        }}
                    />
                </Row>  
                <Row className='m-2'>
                    <InputsFormsReactHook
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
                    
                    <TexAreaFormsReactHook
                        type={""}
                        rows={3}
                        classDiv={"col-md-12"}
                        id='txt-Observaciones'
                        label='Observaciones Generales:'
                        placeholder='Observaciones Generales'
                        errors={errors?.Observaciones?.type}                        
                        mensajeValidacion=""
                        isSummit={isSummit}
                        register={{ ...register('Observaciones', {                             
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

export default FormularioTourDeViaje;
