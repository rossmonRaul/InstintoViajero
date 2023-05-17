import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ObtenerGrupoMateriales } from '../../servicios/ServicioTipoMateriales';
import { InputText, InputSelect } from '../../components/inputs'

const Formulario = ({ labelButton, data, proceso, onClickProcesarTipoMaterial, mensaje }) => {
    const [nombre, setnombre] = useState(proceso == 2 ? data.nombre : '');
    const [descripcion, setDescripcion] = useState(proceso == 2 ? data.descripcion : '');
    const [unidadMedida, setUnidadMedida] = useState(proceso == 2 ? data.unidadMedida : '');
    const [grupoMaterial, setgrupoMaterial] = useState(proceso == 2 ? data.idGrupoMaterial : '');

    const [validated, setValidated] = useState(false);

    const [listaGrupoMaterial, setListaGrupoMaterial] = useState([]);
    const [listaUnidadMedida, setListaUnidadMedida] = useState([]);

    useEffect(() => {
        ObtenerListadoDeUnidades();
        ObtenerListadoDeGruposMaterial();
    }, []);

    const ObtenerListadoDeGruposMaterial = async () => {
        const grupos = await ObtenerGrupoMateriales();
        if (grupos !== undefined) {
            setListaGrupoMaterial(grupos);
            setgrupoMaterial(grupos[0].idGrupoMaterial);
        }
    }
    const ObtenerListadoDeUnidades = async () => {

        const unidadMedida = [
            {
                
                "UnidadMedida": "ton"
            },
            {
               
                "UnidadMedida": "kg"
            },
            {
                
                "UnidadMedida": "L"
            }];
        if (unidadMedida !== undefined) {
            setListaUnidadMedida(unidadMedida);
            setUnidadMedida(unidadMedida[0].UnidadMedida);
        }
    }



    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                nombre: nombre,
                descripcion: descripcion,
                //estado: estado,
                unidadMedida: unidadMedida,
                idGrupoTipoMaterial: grupoMaterial

                //falta grupo tipo de material
            }
            onClickProcesarTipoMaterial(data);
        }
        setValidated(true);
        event.preventDefault();
    }

    const onChangeNombreTipoMaterial = (e) => setnombre(e.target.value);
    const onChangeDescripcion = (e) => setDescripcion(e.target.value);
    const onChangeGrupoMaterial = (e) => setgrupoMaterial(e.target.value);
    const onChangeUnidadMedida = (e) => setUnidadMedida(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre del Material' value={nombre}
                    text='Nombre del  Material.' onChange={onChangeNombreTipoMaterial} mensajeValidacion="El nombre es requerido" />

                <InputText id='txt-descripcion' label='Descripción:' type='text' placeholder='Ingrese la descripción del Material' value={descripcion}
                    text='Descripción del Material.' onChange={onChangeDescripcion} mensajeValidacion="La descripción es requerida" disabled />

                <InputSelect className="form-control" controlId="sel-unidadMedida" label="Unidad de Medida:" data={listaUnidadMedida} onChange={onChangeUnidadMedida} value={unidadMedida} optionValue="UnidadMedida" optionLabel="UnidadMedida" />

                <InputSelect className="form-control" controlId="sel-idGrupoMaterial" label="Tipo de Material" data={listaGrupoMaterial} onChange={onChangeGrupoMaterial} value={grupoMaterial} optionValue="idGrupoMaterial" optionLabel="grupoTipoMaterial" />

                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}

                <br/>
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
            </Form>

        </>
    )
}

export default Formulario