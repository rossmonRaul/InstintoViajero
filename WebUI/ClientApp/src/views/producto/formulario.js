import React, { useEffect,useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { InputSelect, InputText } from '../../components/inputs';
import { ObtenerGrupoProductos } from '../../servicios/ServicioProducto';


const Formulario = ({ labelButton, data, proceso, onClickProcesarProducto, mensaje }) => {
    const [NombreProducto, setNombreProducto] = useState(proceso == 2 ? data.nombreProducto : '');
    const [DescripcionProducto, setDescripcionProducto] = useState(proceso == 2 ? data.descripcionProducto : '');
    const [Factor, setFactor] = useState(proceso == 2 ? data.factor : '');
    const [UnidadMedida, setUnidadMedida] = useState(proceso == 2 ? data.unidadMedida : '');
    const [IdGrupoProducto, setIdGrupoProducto] = useState(proceso == 2 ? data.idGrupoProducto : '');

    const [listaUnidades, setListaUnidades] = useState([]);
    const [listaGrupoProducto, setListaGrupoProducto] = useState([]);

    const [validated, setValidated] = useState(false);


    useEffect(() => {
        ObtenerListadoDeUnidades();
        ObtenerListadoDeGrupoProductos();
       
    }, []);

   

    const ObtenerListadoDeUnidades = async () => {

        const unidadMedida = [
            {

                "UnidadMedida": "und"
            },
            {

                "UnidadMedida": "m2"
            }];
        if (unidadMedida !== undefined) {
            setListaUnidades(unidadMedida);
            setUnidadMedida(unidadMedida[0].UnidadMedida);
        }
    }

    const ObtenerListadoDeGrupoProductos = async () => {
        const grupo = await ObtenerGrupoProductos();
        if (grupo !== undefined) {
            setListaGrupoProducto(grupo);
            setIdGrupoProducto(grupo[0].idGrupoProducto);
        }
    }

   

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                IdGrupoProducto: IdGrupoProducto,
                NombreProducto: NombreProducto,
                DescripcionProducto: DescripcionProducto,
                Factor: Factor,
                UnidadMedida: UnidadMedida,
            }
            
            onClickProcesarProducto(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    const onChangeNombreProducto = (e) => setNombreProducto(e.target.value);
    const onChangeDescripcionProducto = (e) => setDescripcionProducto(e.target.value);
    const onChangeFactor = (e) => setFactor(e.target.value);
    const onChangeUnidadMedida = (e) => setUnidadMedida(e.target.value);
    const onChangeIdGrupoProducto = (e) => setIdGrupoProducto(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
               
                  
                <InputText id='txt-nombre' label='Nombre del producto:' type='text' placeholder='Ingrese el el nombre del producto' value={NombreProducto} text='Nombre.' onChange={onChangeNombreProducto} mensajeValidacion="El nombre es requerido" />

                <InputText id='txt-descripcion' label='Descripción:' type='text' placeholder='Ingrese la descripción' value={DescripcionProducto} text='Descripción.' onChange={onChangeDescripcionProducto} mensajeValidacion="La descripción es requerida" />
                       
                <InputText id='txt-factor' label='Factor:' type='text' placeholder='Ingrese el factor' value={Factor}
                    text='Factor.' onChange={onChangeFactor} mensajeValidacion="El factor es requerido" />
 
                   
                <InputSelect className="form-control" controlId="sel-unidadMedida" label="Unidad de Medida" data={listaUnidades} onChange={onChangeUnidadMedida} value={UnidadMedida} optionValue="UnidadMedida" optionLabel="UnidadMedida" />          
                        
                  <br />
                <InputSelect className="form-control" controlId="sel-grupoProducto" label="Grupo de Producto" data={listaGrupoProducto} onChange={onChangeIdGrupoProducto} value={IdGrupoProducto} optionValue="idGrupoProducto" optionLabel="nombre" />
                    
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                
                <br />
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
                
            </Form>
        </>
    )
}

export default Formulario