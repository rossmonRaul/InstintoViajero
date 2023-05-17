import { Form } from 'react-bootstrap';
import React from 'react';


export const ComboBox = ({ data, indicacion,label, id, text, value, onChange, mensajeValidacion, optionValue, optionLabel , classGroup  }) => {

    const ObtenerOptions = () => {
        return data.map((option, index) => {
            return <option key={index} value={option[optionValue]}>{option[optionLabel]}</option>
        })
    }

    return (
        <>
            <Form.Group className={classGroup} controlId={id}>
                <Form.Label>{label}</Form.Label>
                <br/>
                <Form.Control as="select" value={value} onChange={onChange}  size="sm"  required >
                    <option value="">{indicacion}</option>
                    {
                        ObtenerOptions()  
                } 
             </Form.Control>
                <Form.Text className="text-muted">{text}</Form.Text>
                 <Form.Control.Feedback type="invalid">{mensajeValidacion}</Form.Control.Feedback>
            </Form.Group>      
        </>
    );
}