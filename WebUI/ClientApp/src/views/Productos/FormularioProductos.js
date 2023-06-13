import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
import useForm from '../../components/useForm';
import { ObtenerTiposProductos } from '../../servicios/ServicioProductos';

const FormularioProducto = ({ labelButton, data, proceso, onClickProcesar, mensaje }) => {
    const [listaTiposProductos, setListaTiposProductos] = useState([]);

    //campos de form
    
    const [CodProducto, setCodProducto] = useState(proceso == 2 ? data.codProducto : '');
    const [nombre, setNombre] = useState(proceso == 2 ? data.nombre : '');

    //variables de combo box
    const [idTipoProducto, setIdTipoProducto] = useState(proceso == 2 ? data.idTipo : 0);

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListadoDeTiposProductos();
    }, []);
    useEffect(() => {
        ObtenerListadoDeTiposProductos();
        console.log("Entro");
    }, [idTipoProducto]);

    //llenado de combo box
    const ObtenerListadoDeTiposProductos = async () => {
        const tiposProductos = await ObtenerTiposProductos();
        if (tiposProductos !== undefined) {
            setListaTiposProductos(tiposProductos);
        }
    }

    //envio de datos
    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                
                CodProducto: CodProducto,
                Nombre: nombre,
                IdTipo: idTipoProducto,
                
            }
            onClickProcesar(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    //eventos del form
    const onChangeTiposProducto = (event) => {
        console.log(event.target.value);
        setIdTipoProducto(event.target.value);
    }

    const onChangeCodProducto = (e) => setCodProducto(e.target.value);
    const onChangeNombre = (e) => setNombre(e.target.value);
    

    return (
        <>
       
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <Row>
                    <InputSelect className="form-control custom-select-sm" 
                        controlId="sel-tipoProducto" 
                        label="Tipo de Producto" 
                        data={listaTiposProductos}
                        onChange={onChangeTiposProducto} 
                        value={idTipoProducto} 
                        optionValue="id" 
                        optionLabel="desTipoProducto" 
                        classGroup="col-md-4" />

                    <InputText 
                        id='txt-nombre' 
                        label='Descripción Producto:' 
                        type='text' 
                        placeholder='Descripción Producto' 
                        value={nombre}
                        onChange={onChangeNombre} 
                        mensajeValidacion="La descripción producto es requerida" 
                        className="col-md-4" 
                        />
                    <InputText 
                        id='txt-CodProducto' 
                        label='Codigo de Producto:' 
                        type='text' 
                        placeholder='Codigo de Producto' 
                        value={CodProducto}
                        onChange={onChangeCodProducto} 
                        mensajeValidacion="El Codigo del producto es requerida" 
                        className="col-md-4" 
                        />
                </Row>
              
                <br />
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>

            </Form>
        </>
    )
}

export default FormularioProducto;