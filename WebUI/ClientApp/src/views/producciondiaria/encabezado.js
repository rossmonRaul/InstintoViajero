import React, { useEffect, useState } from 'react';
import { Row, Col} from "react-bootstrap";
import { InputText } from '../../components/inputs';
import { ComboBox } from '../../components/combobox';
import logo from '../../images/logo.webp';
import brick from '../../images/brick.png';
import '../../styles/producciondiaria.css';
import { ObtenerDatosDeUsuario } from '../../utils/utilidades';



const Encabezado = ({ listaProductos, listaPlantas, horaInicio, sethoraInicio, horaFinal, sethoraFinal, idProducto, setidProducto, idPlanta, setidPlanta, fecha, setfecha }) => {
    const [planta, setPlanta] = useState("");
    const [rol, setRol] = useState("");
    const [fechaActual, setFechaActual] = useState("");

    const ObtenerFechaActual = () => {
        const today = new Date();
        const dia = today.getDate().toString().padStart(2, '0');
        const mes = (today.getMonth() + 1).toString().padStart(2, '0');
        const date = `${dia}/${mes}/${today.getFullYear()}`;
        //validar si ya hay un encabezado de produccion ese día sin terminar
        setFechaActual(date);
        
       
    }

    const ObtenerFechaMaxima = () => {
        const today = new Date();
        const dia = today.getDate().toString().padStart(2, '0');
        const mes = (today.getMonth() + 1).toString().padStart(2, '0');
        const date = `${today.getFullYear()}-${mes}-${dia}`;
      
    
        return date;
    }

    const ObtenerPlanta = async () => {
        let usuario = await ObtenerDatosDeUsuario();
        setPlanta(usuario.nombrePlanta);
        setRol(usuario.descripcion);
       
    }

 
    useEffect(() => {
        ObtenerFechaActual();
        ObtenerPlanta();
    }, []);

    const onChangeHoraInicio = (e) => sethoraInicio(e.target.value);
    const onChangeHoraFinal = (e) => sethoraFinal(e.target.value);
    const onChangeIdProducto = (e) => setidProducto(e.target.value);
    const onChangePlanta = (e) => setPlanta(e.target.value);
    const onChangeIdPlanta = (e) => setidPlanta(e.target.value);
    const onChangeFecha = (e) => setfecha(e.target.value );

    return (
        <>
            <Row >
                <Col className="title-col" >
                    <h1 className="title-producciondiaria" >Producción Diaria</h1>
                </Col>
                <Col>
                    <img src={logo} className="logo-encabezado" />
                </Col>
            </Row>

            <hr />
            <br />
            <div className="encabezado-container">
                <Row>
                    <Col>
                       
                        
                        {rol === "Administrador" ?
                            <ComboBox data={listaPlantas} label="Planta" controlId="sel-idPlanta" onChange={onChangeIdPlanta} value={idPlanta} optionValue="idPlanta" optionLabel="nombrePlanta"  indicacion="Seleccione la planta" />
                            : <InputText id='txt-planta' label='Planta:' type='text' placeholder={planta} disabled="disabled" />
                        }
                     
                       
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                        {rol === "Administrador" ?
                            <InputText id='txt-fecha' label='Fecha:' type='date' placeholder='Ingrese la fecha' value={fecha}
                                onChange={onChangeFecha} max={ObtenerFechaMaxima()}  />
                           
                          
                           
                            : <InputText id='txt-fecha' label='Fecha:' type='text' value={fechaActual}
                                disabled="disabled" />
                        }

                        
                        
                    </Col>
                    <Col>
                        <InputText id='txt-horaInicio' label='Hora Inicio:' type='time' placeholder='Digite la fecha de inicio'
                            value={horaInicio} onChange={onChangeHoraInicio} />
                    </Col>
                    <Col>
                        <InputText id='txt-horaParo' label='Hora Paro:' type='time' placeholder='Digite la fecha final' value={horaFinal}
                            onChange={onChangeHoraFinal} />
                    </Col>

                </Row>

            </div>


            <hr />
            <div className="producto-container">
                <div>
                    
                    <div className="producto-left" >
                        <ComboBox className="form-control" controlId="sel-idProducto" data={listaProductos} label="Producto" onChange={onChangeIdProducto} value={idProducto} optionValue="idProducto" optionLabel="nombreProducto" indicacion="Seleccione el producto" />
                    </div>
                    <div className="producto-right">
                        <img src={brick} className="producto-icon" />
                    </div>
                </div>
            </div>

        </>

    );
}

export default Encabezado;