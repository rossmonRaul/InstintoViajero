import React, { useEffect,useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { InputSelect, InputText } from '../../components/inputs';
import { ObtenerPlantas, ObtenerControlDeCalidad, ObtenerProductos, AgregarControlDeCalidad, ActualizarControlDeCalidad, ObtenerControlDeCalidadPorId } from '../../servicios/ServicioControlDeCalidad';
import { TextArea } from '../../components/textarea';


const Formulario = ({ labelButton, data, proceso, onClickProcesarControlDeCalidad, mensaje }) => {
    const [Peso1, setPeso1] = useState(proceso == 2 ? data.peso1 : '');
    const [Peso2, setPeso2] = useState(proceso == 2 ? data.peso2 : '');
    const [Peso3, setPeso3] = useState(proceso == 2 ? data.peso3 : '');
    const [Largo, setLargo] = useState(proceso == 2 ? data.largo : '');
    const [Ancho, setAncho] = useState(proceso == 2 ? data.ancho : '');
    const [Espesor, setEspesor] = useState(proceso == 2 ? data.espesor : '');

    const [Turno, setTurno] = useState(proceso == 2 ? data.turno : '');
    const [Estatus, setEstatus] = useState(proceso == 2 ? data.estatus : '');

    const [idPlanta, setidPlanta] = useState(0);
    const [idProducto, setidProducto] = useState(0);

    const [listaPlantas, setListaPlantas] = useState([]);
    const [listaProductos, setListaProductos] = useState([]);
    const [listaTurno, setListaTurno] = useState([]);
    const [listaEstatus, setListaEstatus] = useState([]);

    const [validated, setValidated] = useState(false);


    useEffect(() => {
        ObtenerListadoDePlantas();
        ObtenerListadoDeProductos();
        ObtenerListadoDeTurno();
        ObtenerListadoDeEstatus();
    }, []);

    const ObtenerListadoDeEstatus = async () => {
        const estatus = [
            {
                "OpcionEstatus": 0,
                "Estatus" : "Satisfactorio"
            },
            {
                "OpcionEstatus": 0,
                "Estatus": "No satisfactorio"
            }];
        if (estatus !== undefined) {
            setListaEstatus(estatus);
            setEstatus(estatus[0].OpcionEstatus);
        }
    }

    const ObtenerListadoDeTurno = async () => {

        const turnos = [
            {
                "turno": "Turno 1"
            },
            {
                "turno": "Turno 2"
            }];
        if (turnos !== undefined) {
            setListaTurno(turnos);
            setTurno(turnos[0].turno);
        }
    }

    const ObtenerListadoDePlantas = async () => {
        const plantas = await ObtenerPlantas();
        if (plantas !== undefined) {
            setListaPlantas(plantas);
            setidPlanta(plantas[0].idPlanta);
        }
    }

    const ObtenerListadoDeProductos = async () => {
        const productos = await ObtenerProductos();
        if (productos !== undefined) {
            setListaProductos(productos);
            setidProducto(productos[0].idProducto);
        }
    }

    const onClickAceptar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || idPlanta == "") {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const data = {
                Peso1: Peso1,
                Peso2: Peso2,
                Peso3: Peso3,
                Largo: Largo,
                Ancho: Ancho,
                Espesor: Espesor,
                Turno: Turno,
                Estatus : Estatus === 0 ? true : false,
                idPlanta: parseInt(idPlanta),
                idProducto: parseInt(idProducto)
            }
            onClickProcesarControlDeCalidad(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    const onChangePeso1 = (e) => setPeso1(e.target.value);
    const onChangePeso2 = (e) => setPeso2(e.target.value);
    const onChangePeso3 = (e) => setPeso3(e.target.value);
    const onChangeLargo = (e) => setLargo(e.target.value);
    const onChangeAncho = (e) => setAncho(e.target.value);
    const onChangeEspesor = (e) => setEspesor(e.target.value);

    const onChangeTurno = (e) => setTurno(e.target.value);
    const onChangeEstatus = (e) => setEstatus(e.target.value);
    const onChangeidProducto = (e) => setidProducto(e.target.value);
    const onChangeidPlanta = (e) => setidPlanta(e.target.value );

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <Row>
                <Col>
                <InputSelect className="form-control" controlId="sel-idProducto" label="Producto" data={listaProductos} onChange={onChangeidProducto} value={idProducto} optionValue="idProducto" optionLabel="nombreProducto" />
                        <br />
                <InputText id='txt-peso1' label='Peso 1:' type='text' placeholder='Ingrese el peso 1' value={Peso1}
                    text='Peso 1.' onChange={onChangePeso1} mensajeValidacion="El peso es requerido" />
                  
                <InputText id='txt-peso2' label='Peso 2:' type='text' placeholder='Ingrese el peso 2' value={Peso2}
                            text='Peso 2.' onChange={onChangePeso2} mensajeValidacion="El peso es requerido" />
                        <InputText id='txt-peso3' label='Peso 3:' type='text' placeholder='Ingrese el peso 3' value={Peso3}
                            text='Peso 3.' onChange={onChangePeso3} mensajeValidacion="El peso es requerido" />

                    </Col>
                    <Col>
                        <InputSelect className="form-control" controlId="sel-idPlanta" label="Planta" data={listaPlantas} onChange={onChangeidPlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta" />
                
                        <br />
                <InputText id='txt-largo' label='Largo:' type='text' placeholder='Ingrese el largo' value={Largo}
                    text='Largo.' onChange={onChangeLargo} mensajeValidacion="El largo es requerido" />

                   
                <InputText id='txt-ancho' label='Ancho:' type='text' placeholder='Ingrese el ancho' value={Ancho}
                    text='Ancho.' onChange={onChangeAncho} mensajeValidacion="El ancho es requerido" />

                <InputText id='txt-espesor' label='Espesor:' type='text' placeholder='Ingrese el espesor' value={Espesor}
                    text='Espesor.' onChange={onChangeEspesor} mensajeValidacion="El espesor es requerido" />
                    </Col>
                    <Col>
                <InputSelect className="form-control" controlId="sel-turno" label="Turno" data={listaTurno} onChange={onChangeTurno} value={Turno} optionValue="turno" optionLabel="turno" />          
                        
                  <br />
                <InputSelect className="form-control" controlId="sel-estatus" label="Estatus" data={listaEstatus} onChange={onChangeEstatus} value={Estatus} optionValue="OpcionEstatus" optionLabel="Estatus" />
                    </Col>
                </Row>
                {mensaje !== "" ? <p className="text-info text-center">{mensaje}</p> : ""}
                
               
                <div className='text-right'>
                    <Button variant="primary" type="submit" size="sm">{labelButton}</Button>
                    </div>
                
            </Form>
        </>
    )
}

export default Formulario