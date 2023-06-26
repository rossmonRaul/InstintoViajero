import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { ComboBox } from '../../components/combobox';
import { InputText, InputNumber } from '../../components/inputs';
import { ObtenerRoles } from '../../servicios/ServicioComisiones';


const Formulario = ({ labelButton, data, proceso, onClickProcesarComision, mensaje }) => {
    const [listaRoles, setListaRoles] = useState([]);

    //campos de form
    const [descripcion, setDescripcion] = useState(proceso == 2 ? data.descripcion : '');
    const [porcentajeComision, setPorcentajeComision] = useState(proceso == 2 ? data.porcentajeComision : '');


    //variables de combo box
    const [idRol, setIdRol] = useState(proceso == 2 ? data.idRol : 0);


    const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListadoDeRoles();
    }, []);


    //llenado de combo box
    const ObtenerListadoDeRoles = async () => {
        const roles = await ObtenerRoles();
        if (roles !== undefined) {
            setListaRoles(roles);
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
                idRol: idRol == 0 ? listaRoles[0].idRol : idRol,
                descripcion: descripcion,
                porcentajeComision: porcentajeComision,
            }
            onClickProcesarComision(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form
    const onChangeRol = (event) => {
        setIdRol(event.target.value);
    }
    const onChangeDescripcion = (e) => setDescripcion(e.target.value);
    const onChangePorcentajeComision = (e) => setPorcentajeComision(e.target.value);


    return (
        <>
            {
                <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                    <Row>
                        <ComboBox data={listaRoles} label="Rol" controlId="sel-rol" onChange={onChangeRol} value={idRol} optionValue="idRol" optionLabel="descripcion" mensajeValidacion="El rol es requerido" indicacion="Seleccione el rol" classGroup="col-md-6" />
                       
                        <InputNumber id='txt-porcentajeComision' label='Porcentaje(%):' step={0.01} min={0.00} max={99.99}  placeholder='Ingrese el porcentaje de comisión' value={porcentajeComision}
                            onChange={onChangePorcentajeComision} mensajeValidacion="Porcentaje requerido" className="col-md-6" />
                    </Row>
                    <Row>
                        <InputText id='txt-descripcion' label='Descripcion:' type='text' placeholder='Ingrese la descripción' value={descripcion}
                            onChange={onChangeDescripcion} mensajeValidacion="La descripción es requerida" maxLength={100} className="col-md-12" />

                    </Row>
                    <br />
                    {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                    <div className='text-right'>
                        <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                    </div>

                </Form>
            }
        </>
    )
}

export default Formulario;