import React, { useEffect, useState } from "react";
import { AutenticarUsuario } from '../../servicios/ServicioAutenticacion';
import { ActualizarContrasenha } from '../../servicios/ServicioUsuarios';
import { ObtenerDatosDeUsuario } from '../../utils/utilidades'

import FormLogin from "./formLogin";
import FormActualizacion from "./formActualizacion";

import logo from '../../images/logo.webp';
import '../../styles/login.css';


const Login = ({ ValidarSesionActiva }) => {
    const [mensaje, setMensaje] = useState('');
    const [formActivo, setFormActivo] = useState(1)

    useEffect(() => {
        ValidarPrimeraSesionUsuario();
    })
    const IniciarSesion = async(data) => {
        const {token, expiration, usuario} = await AutenticarUsuario(data);
        if(token != null){
            setMensaje(""); 
            const jsonUsuario = JSON.parse(usuario);
            sessionStorage.setItem("token_key", token);
            sessionStorage.setItem("token_expiration", expiration);
            sessionStorage.setItem("data_usuario", usuario);
            if(jsonUsuario.esPrimeraSesion == 1)
                setFormActivo(2);
            else
                ValidarSesionActiva()
        }else{
            setMensaje("Usuario o contraseña incorrectos");                
        }
    }

    const ProcesarContrasenha = async (data) => {
        setMensaje(""); 
       if(data.contrasena == data.contrasenhaConfirmada){
            const usuario = ObtenerDatosDeUsuario();
            data.idUsuario = usuario.idUsuario;
            const resultado = await ActualizarContrasenha(data);
            if(resultado.indicador == 0){
                usuario.esPrimeraSesion = null;
                sessionStorage.setItem("data_usuario", JSON.stringify(usuario));
                ValidarSesionActiva();
            }                
            else
                setMensaje(resultado.mensaje);      
        }else
            setMensaje("Las contraseñas no coinciden");        
    }

    const ValidarPrimeraSesionUsuario = () => {
        const usuario = ObtenerDatosDeUsuario();
        if(usuario !== null && usuario !== undefined)
            if(usuario.esPrimeraSesion == 1)
                setFormActivo(2);
    }

    return(
        <div id="login">
            <br/><br/>
            <div className="container-login">
                <div className="content-login">
                    <div className="layout">   
                        <div >
                            <img src={logo} className="logo-login"/>
                        </div>
                        <div>
                            {formActivo === 1 ? 
                            <FormLogin IniciarSesion={IniciarSesion} mensaje={mensaje} />   
                            : <FormActualizacion  ActualizarContrasenha={ProcesarContrasenha} mensaje={mensaje} />}                    
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Login;