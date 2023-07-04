import React from 'react';
import { Form } from "react-bootstrap"

export const InputsFormsReactHook = ({        
    label,
    type,
    id,
    register,
    placeholder, 
    onInput,   
    step = "any",
    mensajeValidacion,
    className,
    readOnly = false,    
    isSummit = false,
    classDiv,
    errors }) => {
    return (
        <>
            <div className={"mb-3 " + classDiv}>
                <label htmlFor="txtname" className="form-label ml-1">
                  <b>{label}</b>
                </label>             
                <input   
                    id={id}                 
                    //onInput={onInput}
                    step={step}
                    className={`form-control ${errors != undefined ? 'is-invalid' : '' } ${errors  == undefined && isSummit ? 'is-valid' : '' }  ` + className}
                    readOnly={readOnly}                    
                    placeholder={placeholder}
                    type={type}                    
                    {...register}
                    
                />
                <div className="invalid-feedback">
                
                {errors === 'required' && <small>{mensajeValidacion}</small>}
                {errors === 'maxLength' && <small>No cumple con el máximo de caracteres</small>}
                {errors === 'minLength' && <small>No cumple con el mínimo de caracteres</small>}
                </div>
            </div>    
        </>
    )
}


export const InputSelectHookForm = ({ className, 
    controlId, label, data, onChange, isSummit, errors, value, mensajeValidacion,register, optionValue, optionLabel, classGroup}) => {
    const ObtenerOptions = (value) => {
      
        return data.map((option, index) => {
            return <option  selected={value == option[optionValue] ? true : false} 
            key={index} value={option[optionValue]}>{option[optionLabel]}</option>
        })
    }
    
    return (
        <Form.Group controlId={controlId} className={classGroup}>
            <Form.Label>{label}</Form.Label>
            <Form.Select 
                {...register}
                className={ `${errors != undefined ? 'is-invalid' : '' } ${errors  == undefined && isSummit ? 'is-valid' : '' } ` + className} 
                size="sm" 
                onChange={onChange} 
                defaultValue={value}
                >
               
                {<option key={""} value={""}>{"Seleccione una opción..."}</option>}                
                {ObtenerOptions(value)}
            </Form.Select>
            <div className="invalid-feedback">
                
                {errors === 'required' && <small>{mensajeValidacion}</small>}
                {errors === 'maxLength' && <small>No cumple con el máximo de caracteres</small>}
                {errors === 'minLength' && <small>No cumple con el mínimo de caracteres</small>}
            </div>
        </Form.Group>
    )
}


export const TexAreaFormsReactHook = ({        
    label,
    type,
    id,
    rows,
    register,
    placeholder,    
    mensajeValidacion,
    className,
    readOnly = false,    
    isSummit = false,
    classDiv,
    errors }) => {
    return (
        <>
            <div className={"mb-3 " + classDiv}>
                <label htmlFor="txtname" className="form-label ml-1">
                  {label}
                </label>             
                <textarea
                    rows={rows}   
                    id={id}                 
                    className={`form-control ${errors != undefined ? 'is-invalid' : '' } ${errors  == undefined && isSummit ? 'is-valid' : '' }  ` + className}
                    readOnly={readOnly}                    
                    placeholder={placeholder}
                    type={type}                    
                    {...register}
                    
                />
                <div className="invalid-feedback">
                
                {errors === 'required' && <small>{mensajeValidacion}</small>}
                {errors === 'maxLength' && <small>No cumple con el máximo de caracteres</small>}
                {errors === 'minLength' && <small>No cumple con el mínimo de caracteres</small>}
                </div>
            </div>    
        </>
    )
}