
export const ObtenerDatosDeUsuario = () => {
    const jsonUsuario = sessionStorage.getItem("data_usuario");
    return JSON.parse(jsonUsuario);
}

export const ObtenerTokenUsuario = () => {
    const expiracion = sessionStorage.getItem("token_expiration");
    const token = sessionStorage.getItem("token_key");
    return {
        expiracion: expiracion,
        token: token
    };
}