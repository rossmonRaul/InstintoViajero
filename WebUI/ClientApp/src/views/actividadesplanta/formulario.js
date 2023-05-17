import React, { useEffect,useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { InputSelect, InputText } from '../../components/inputs';
import { ObtenerPlantas } from '../../servicios/ServicioPlanta';
import { TextArea } from '../../components/textarea';

const Formulario = ({ labelButton, data, proceso, onClickProcesarActividadPlanta, mensaje }) => {
    const [Observacion, setObservacion] = useState(proceso == 2 ? data.observacion  : '');
    const [idPlanta, setidPlanta] = useState(0);
    const [listaPlantas, setListaPlantas] = useState([]);
    const [validated, setValidated] = useState(false);


    useEffect(() => {
        ObtenerListadoDePlantas();
    }, []);

    const ObtenerListadoDePlantas = async () => {
        const plantas = await ObtenerPlantas();
        if (plantas !== undefined) {
            setListaPlantas(plantas);
            setidPlanta(plantas[0].idPlanta);
        }
    }

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || idPlanta == "") {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                observacion: Observacion,
                idPlanta: idPlanta
            }
            onClickProcesarActividadPlanta(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    const onChangeObservacion = (e) => setObservacion(e.target.value);
    const onChangeidPlanta = (e) => setidPlanta(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <TextArea id='txt-nombre' label='Observación:' type='text' placeholder='Ingrese la observación' value={Observacion}
                    text='Observación.' onChange={onChangeObservacion} mensajeValidacion="La observación es requerida" />
                
                <InputSelect className="form-control" controlId="sel-idPlanta" label="Id Planta" data={listaPlantas} onChange={onChangeidPlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta" />
                <br />
                
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                </div>
            </Form>
        </>
    )
}

export default Formulario