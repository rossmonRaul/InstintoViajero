import React, {useState} from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { InputsFormsReactHook } from '../../components/Forms/InputsFormsReactHook';

const FormularioFormasDePago = ({ labelButton, data, proceso, onClickProcesar }) => {
    if(proceso === 1) {
        data = {}
    }
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            CodFormaDePago: data?.codFormaDePago,
            Descripcion: data?.descripcion
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
            <Form  onSubmit={handleSubmit(onClickAceptar)}>
                <Row>
                    <InputsFormsReactHook
                        className="input-form-hook"                        
                        label='Codigo Forma de Pago:'
                        placeholder='Codigo Forma de Pago'
                        mensajeValidacion="El Codigo es requerido"                        
                        errors={errors?.CodFormaDePago?.type}
                        isSummit={isSummit}
                        register={{ ...register('CodFormaDePago', { 
                            required: true,
                            maxLength: 50,
                            minLength: 3
                            }) 
                        }}
                    />
                    <InputsFormsReactHook
                        className="input-form-hook"
                        id='txt-CodFormaDePago'
                        label='Descripción:'
                        placeholder='Descripción Forma de Pago'
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
                <div className='text-right'>
                    <Button variant="primary" type="submit" onClick={handleManualValidation} size="sm">{labelButton}</Button>
                </div>
            </Form>
        </>
    )
}

export default FormularioFormasDePago;
