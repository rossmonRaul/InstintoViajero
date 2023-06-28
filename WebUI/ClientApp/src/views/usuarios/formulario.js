import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { InputSelect, InputText } from '../../components/inputs';
import { ComboBox } from '../../components/combobox';
import { ObtenerSucursales, ObtenerRoles, ObtenerTiposIdentificacion } from '../../servicios/ServicioUsuarios';

const Formulario = ({ labelButton, data, proceso, onClickProcesarUsuario, mensaje }) => {
    const [listaSucursales, setListaSucursales] = useState([]);
    const [listaTiposIdentificacion, setListaTiposIdentificacion] = useState([]);
    const [listaRoles, setListaRoles] = useState([]);

    //campos de form
    const [correo, setCorreo] = useState(proceso == 2 ? data.coreoElectronico : '');
    const [contrasenaTemporal, setContrasenaTemporal] = useState('');
    const [identificacion, setIdentificacion] = useState(proceso == 2 ? data.identificacion : '');
    const [nombre, setNombre] = useState(proceso == 2 ? data.nombre : '');
    const [primerApellido, setPrimerApellido] = useState(proceso == 2 ? data.primerApellido : '');
    const [segundoApellido, setSegundoApellido] = useState(proceso == 2 ? data.segundoApellido : '');
    const [fechaNacimiento, setfechaNacimiento] = useState(proceso == 2 ? data.fechaNacimiento.replace('T00:00:00', '') : '');
    const [direccion, setDireccion] = useState(proceso == 2 ? data.direccion : '');
    const [telefono, setTelefono] = useState(proceso == 2 ? data.telefono : '');

    //variables de combo box
    const [idSucursal, setIdSucursal] = useState(proceso == 2 ? data.idSucursal : 0);
    const [idRol, setIdRol] = useState(proceso == 2 ?data.idRol : 0);
    const [idTiposIdentificacion, setidTiposIdentificacion] = useState(proceso == 2 ? data.idTipoIdentificacion : 0);

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        ObtenerListadoDeSucursales();
        ObtenerListadoDeTiposID();
        ObtenerListadoDeRoles();
    }, []);

    //llenado de combo box
    const ObtenerListadoDeSucursales = async () => {
        const Sucursales = await ObtenerSucursales();
        if (Sucursales !== undefined ) {
            setListaSucursales(Sucursales);
        }
    }

    const ObtenerListadoDeRoles = async () => {
        const roles = await ObtenerRoles();
        if (roles !== undefined) {
            setListaRoles(roles);
        }
    }

    const ObtenerListadoDeTiposID = async () => {
        const tiposIdentificacion = await ObtenerTiposIdentificacion();
        if (tiposIdentificacion !== undefined) {
            setListaTiposIdentificacion(tiposIdentificacion);
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
                idSucursal: idSucursal == 0 ? listaSucursales[0].idSucursal : idSucursal,
                coreoElectronico: correo,
                contrasenaTemporal: contrasenaTemporal,
                idRol: idRol == 0 ? listaRoles[0].idRol : idRol,
                idTipoIdentificacion: idTiposIdentificacion == 0 ? listaTiposIdentificacion[0].idTipoIdentificacion : idTiposIdentificacion,
                identificacion: identificacion,
                nombre: nombre,
                primerApellido: primerApellido,
                segundoApellido: segundoApellido,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                telefono: telefono,
            }
            onClickProcesarUsuario(data);
        }
        setValidated(true);
        event.preventDefault();
    }


    //eventos del form
    const onChangeSucursal = (event) => {
        setIdSucursal(event.target.value);
    }

    const onChangeRol = (event) => {
        setIdRol(event.target.value);
    }

    const onChangeTiposIdentificacion = (event) => {
        setidTiposIdentificacion(event.target.value);
    }

    const onChangeCorreo = (e) => setCorreo(e.target.value);
    const onChangeContrasenha = (e) => setContrasenaTemporal(e.target.value);
    const onChangeIdentificacion = (e) => setIdentificacion(e.target.value.replace(/[^0-9]/g, ""));
    const onChangeNombre = (e) => setNombre(e.target.value);
    const onChangePrimerApellido = (e) => setPrimerApellido(e.target.value);
    const onChangeSegundoApellido = (e) => setSegundoApellido(e.target.value);
    const onChangeFechaNacimiento = (e) => setfechaNacimiento(e.target.value);
    const onChangeDireccion = (e) => setDireccion(e.target.value);
    const onChangeTelefono = (e) => setTelefono(e.target.value);

    return (
        <>
            <Form noValidate validated={validated} onSubmit={onClickAceptar}>
                <Row>
                   
                    <ComboBox className="form-control custom-select-sm"  controlId="sel-tipoIdentificacion" label="Tipo de Identificación"  data={listaTiposIdentificacion}
                        onChange={onChangeTiposIdentificacion} value={idTiposIdentificacion} indicacion="Seleccione el tipo de identificación" optionValue="idTipoIdentificacion" optionLabel="descripcion" classGroup="col-md-5" />

                    <InputText id='txt-identificacion' label='Identificación:' type='text'  placeholder='Ingrese la identificación' value={identificacion}
                        text='Identificación.' onChange={onChangeIdentificacion} mensajeValidacion="La identificación es requerida" className="col-md-4" readOnly={proceso == 2}  />
                </Row>
                <Row>
                    <InputText id='txt-nombre' label='Nombre:' type='text' placeholder='Ingrese el nombre' value={nombre}
                        text='Nombre.' onChange={onChangeNombre} mensajeValidacion="El nombre es requerido" className="col-md-4" />
                    <InputText id='txt-primerApellido' label='Primer Apellido:' type='text' placeholder='Ingrese el primer apellido' value={primerApellido}
                        text='Primer Apellido.' onChange={onChangePrimerApellido} mensajeValidacion="El campo es requerido" className="col-md-4" />

                    <InputText id='txt-segundoApellido' label='Segundo Apellido:' type='text' placeholder='Ingrese el segundo apellido' value={segundoApellido}
                        text='Segundo Apellido.' onChange={onChangeSegundoApellido} mensajeValidacion="El campo es requerido" className="col-md-4" />
                </Row>
                <Row>
                    <InputText id='txt-contrasenha' label='Fecha de Nacimiento:' type='date' placeholder='Ingrese la fehca de nacimiento' value={fechaNacimiento}
                        text='Fecha de Nacimiento.' onChange={onChangeFechaNacimiento} mensajeValidacion="El campo es requerido" className="col-md-4" />

                    <InputText id='txt-contrasenha' label='Teléfono:' type='tel' placeholder='Ingrese el teléfono' value={telefono}
                        text='Teléfono.' onChange={onChangeTelefono} mensajeValidacion="El campo es requerido" />
                </Row>
                <Row>
                    <InputText id='txt-correo' label='Dirección:' type='text' placeholder='Ingrese la dirección' value={direccion}
                        text='Dirección exacta.' onChange={onChangeDireccion} mensajeValidacion="El campo es requerido" className="col-md-10" />
                </Row>
                <Row>
                    <ComboBox data={listaSucursales} label="Sucursales" controlId="sel-idSucursal" onChange={onChangeSucursal} value={idSucursal} optionValue="idSucursal" optionLabel="nombreSucursal" indicacion="Seleccione la Sucursal" classGroup="col-md-5" />
                    <ComboBox data={listaRoles} label="Rol" controlId="sel-rol" onChange={onChangeRol} value={idRol} optionValue="idRol" optionLabel="descripcion" indicacion="Seleccione el rol" classGroup="col-md-5" />
                </Row>
                <br />
                <Row>
                    <InputText id='txt-correo' label='Correo eléctronico:' type='email' placeholder='Ingrese el correo' value={correo}
                        text='Correo eléctronico.' onChange={onChangeCorreo} mensajeValidacion="El correo es requerido" className="col-md-6" />
                    {proceso == 1 ?
                        <InputText id='txt-contrasenha' label='Contraseña:' type='password' placeholder='Ingrese la contraseña' value={contrasenaTemporal}
                            text='Contraseña temporal.' onChange={onChangeContrasenha} mensajeValidacion="La contraseña es requerida" className="col-md-4" />
                        : ""}
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

export default Formulario;