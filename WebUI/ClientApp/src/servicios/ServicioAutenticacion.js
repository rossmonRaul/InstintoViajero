import { ProcesarDatosApi } from "../api/ApiFetch";
const controlador = "login";

export const AutenticarUsuario = async (data) => {
    const url = `${controlador}/iniciarsesionusuario?usuario=${data.usuario}&contrasena=${data.contrasena}`;
    return await ProcesarDatosApi('GET', url);
}