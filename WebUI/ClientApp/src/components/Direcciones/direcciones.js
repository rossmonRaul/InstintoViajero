import React, { useEffect, useMemo, useState } from 'react';
import { Form } from "react-bootstrap"
import {ObtenerCantonesService, ObtenerDistritosService, ObtenerProvinciasService} from '../../servicios/SevicioDirecciones';





export const InputSelectDirecciones =  ({ 
    className,          
    isSummit, 
    valueProvincia = 0, 
    valueCanton = 0, 
    valueDistrito = 0, 
    errorsProvincias,
    errorsCantones,
    errorsDistritos,
    registerProvincias,
    registerCantones, 
    registerDistritos,     
    classGroup }) => {

    const [provincia, setProvincia] = useState(valueProvincia);
    const [canton, setCanton] = useState(valueCanton);
    const [Distrito, setDistrito] = useState(valueDistrito);

    const [provincias, setProvincias] = useState([]);
    const [cantones, setCantones] = useState([]);
    const [distritos, setDistritos] = useState([]);
   
    const ConsultaDataDirecciones = async ()=> {
        const dataProvincias = await ObtenerProvinciasService();
        setProvincias([...dataProvincias])    
      
        /* if (provincia != null && provincia != "") {            
            console.log(provincia);
            const dataCantones = await ObtenerCantonesService(provincia);
            setCantones([...dataCantones])
        } */
        /* if (canton != null && canton != "") {            
            console.log(canton);
            const dataDistritos = await ObtenerDistritosService(canton);
            setDistritos([...dataDistritos])
        } */
    }

   
    

    useEffect(() => {
        ConsultaDataDirecciones();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


   

    const ObtenerProvincias = ()  => {        
        return provincias.map((option, index) => {
            return <option  selected={provincia == option["id_provincia"] ? true : false} 
            key={index} value={option["id_provincia"]}>{option["dsc_provincia"]}</option>
        });
    }
    const ObtenerCantones = () => {      
        return cantones.map((option, index) => {
            return <option  selected={canton == option["id_canton"] ? true : false} 
            key={index} value={option["id_canton"]}>{option["dsc_canton"]}</option>
        })
    }
    const ObtenerDistritos = () => {
        
        return distritos.map((option, index) => {
            return <option  selected={Distrito == option["id_distrito"] ? true : false} 
            key={index} value={option["id_distrito"]}>{option["dsc_distrito"]}</option>
        })
    }

    const OnChangeProvincias = async (event) => {
        
       console.log();
       setProvincia(event.target.value)
       const dataCantones = await ObtenerCantonesService(event.target.value);
       setCantones([...dataCantones])
       setCanton("")
    }
    
    const OnChangeCantones = async (event) => {
        console.log(event.target.value);
        setCanton(event.target.value)
        const dataDistritos = await ObtenerDistritosService(event.target.value);
        setDistritos([...dataDistritos])
        setDistrito("")
    }
    
    const OnChangeDistritos = async (event) => {
        setDistrito(event.target.value)
        
    }
    
    
    return (
        <>

            <Form.Group controlId={"id_provincias"} className={classGroup}>
                <Form.Label>{"Provincias"}</Form.Label>
                <Form.Select 
                    {...registerProvincias}
                    className={ `${errorsProvincias != undefined ? 'is-invalid' : '' } ${errorsProvincias  == undefined && isSummit ? 'is-valid' : '' } ` + className} 
                    size="sm" 
                    onChange={OnChangeProvincias} 
                    defaultValue={provincia}
                    >
                
                    {<option key={""} value={""}>{"Seleccione una opción..."}</option>}                
                    {ObtenerProvincias()}
                </Form.Select>
                <div className="invalid-feedback">
                    
                    {errorsProvincias === 'required' && <small>Seleccione una provincia</small>}
                    {errorsProvincias === 'maxLength' && <small>No cumple con el máximo de caracteres</small>}
                    {errorsProvincias === 'minLength' && <small>No cumple con el mínimo de caracteres</small>}
                </div>
            </Form.Group>

            <Form.Group controlId={"id_canton"} className={classGroup}>
                <Form.Label>{"Cantones"}</Form.Label>
                <Form.Select 
                    {...registerCantones}
                    className={ `${errorsCantones != undefined ? 'is-invalid' : '' } ${errorsCantones  == undefined && isSummit ? 'is-valid' : '' } ` + className} 
                    size="sm" 
                    onChange={OnChangeCantones} 
                    defaultValue={canton}
                    >
                
                    {<option key={""} value={""}>{"Seleccione una opción..."}</option>}                
                    {ObtenerCantones()}
                </Form.Select>
                <div className="invalid-feedback">
                    
                    {errorsCantones === 'required' && <small>Seleccione un canton</small>}
                    {errorsCantones === 'maxLength' && <small>No cumple con el máximo de caracteres</small>}
                    {errorsCantones === 'minLength' && <small>No cumple con el mínimo de caracteres</small>}
                </div>
            </Form.Group>

            <Form.Group controlId={"id_distritos"} className={classGroup}>
                <Form.Label>{"Distritos"}</Form.Label>
                <Form.Select 
                    {...registerDistritos}
                    className={ `${errorsDistritos != undefined ? 'is-invalid' : '' } ${errorsDistritos  == undefined && isSummit ? 'is-valid' : '' } ` + className} 
                    size="sm" 
                    onChange={OnChangeDistritos} 
                    defaultValue={Distrito}
                    >
                
                    {<option key={""} value={""}>{"Seleccione una opción..."}</option>}                
                    {ObtenerDistritos()}
                </Form.Select>
                <div className="invalid-feedback">
                    
                    {errorsDistritos === 'required' && <small>Seleccione un distrito</small>}
                    {errorsDistritos === 'maxLength' && <small>No cumple con el máximo de caracteres</small>}
                    {errorsDistritos === 'minLength' && <small>No cumple con el mínimo de caracteres</small>}
                </div>
            </Form.Group>

        </>
    )
}
