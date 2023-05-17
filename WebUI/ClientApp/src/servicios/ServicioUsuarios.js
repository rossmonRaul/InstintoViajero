import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "usuario";
const controladorPlantas = "planta";
const controladorRol = "rol";
const controladorTipos = "tiposidentificacion";

export const AgregarUsuario = async (data) => {
    const url = `${controlador}/insertarusuario`;
    return await ProcesarDatosApi('POST', url, data);
}

export const ActualizarUsuario = async (data) => {
    const url = `${controlador}/actualizarusuario`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const InactivarUsuario = async (id) => {
    const url = `${controlador}/eliminarusuario?idUsuario=${id}`;
    return await ProcesarDatosApi('DELETE', url);
}

export const ObtenerUsuarios = async () => {
    const url = `${controlador}/ObtenerUsuarios`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerUsuarioPorId = async (id) => {
    const url = `${controlador}/ObtenerDetalleUsuarioId/${id}`;
    return await ProcesarDatosApi('GET', url);
}

export const ObtenerPlantas = async () => {
    const url = `${controladorPlantas}/ObtenerPlantas`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerRoles = async () => {
    const url = `${controladorRol}/ObtenerRoles`;
    return await ProcesarDatosApi('GET', url);
}


export const ObtenerTiposIdentificacion = async () => {
    const url = `${controladorTipos}/ObtenerTiposIdentificacion`;
    return await ProcesarDatosApi('GET', url);
}

export const ActualizarContrasenhaTemporal = async (data) => {
    const url = `${controlador}/actualizarcontrasenhatemporal`;
    return await ProcesarDatosApi('PUT', url, data);
}

export const ActualizarContrasenha = async (data) => {
    const url = `${controlador}/actualizarcontrasenha?idUsuario=${data.idUsuario}&contrasena=${data.contrasena}`;
    return await ProcesarDatosApi('PUT', url);
}
