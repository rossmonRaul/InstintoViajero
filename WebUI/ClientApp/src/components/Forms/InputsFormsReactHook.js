import React, {useState} from 'react';

export const InputsFormsReactHook = ({        
    label,
    type,
    register,
    placeholder,    
    mensajeValidacion,
    className,
    readOnly = false,    
    isSummit = false,
    errors }) => {
    return (
        <>
            <div className={"input-group mb-3 m-4 "}>
                <label htmlFor="txtname" className="form-label ml-1">
                  {label}
                </label>             
                <input                    
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
