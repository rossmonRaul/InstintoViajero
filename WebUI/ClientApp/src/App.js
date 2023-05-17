import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from './views/home/layout'
import Home from './views/home/'
import Planta from './views/planta'
import TipoMaterial from './views/tipomateriales'
import ActividadPlanta from './views/actividadesplanta'
import Usuarios from './views/usuarios';
import ControlDeCalidad from './views/controldecalidad';
import Producto from './views/producto';
import Contrasena from './views/actualizarcontrasena';
import ProduccionDiaria from './views/producciondiaria';
import Reportes from './views/reportes';
import { ObtenerTokenUsuario } from './utils/utilidades';
import { ObtenerDatosDeUsuario } from './utils/utilidades';

import Login from './views/login';
import './custom.css'

const App = () => {
    const [sesionActiva, setSesionActiva] = useState(false);
    const [rol, setRol] = useState("");


    useEffect(() => {
        ValidarSesionActiva();

    }, []);

    const ValidarSesionActiva = () => {
        const fecha = new Date();
        const { expiracion, token } = ObtenerTokenUsuario();
        const usuario = ObtenerDatosDeUsuario();
        const tokenExpiration = new Date(expiracion);
        let usuarioValido = true;

        if (usuario !== null && usuario !== undefined) {
            if (usuario.esPrimeraSesion == 1) {
                usuarioValido = false;
            }
            setRol(usuario.descripcion);
        }
        setSesionActiva(usuarioValido && token !== null && fecha <= tokenExpiration ? true : false);
       
      

    }

    const CerrarSession = () => {
        setSesionActiva(false);
        sessionStorage.clear();
    }

    return (
        <>
            {sesionActiva ?
                <BrowserRouter>
                    <Routes>
                      
                        <Route path="/" element={<Layout CerrarSession={CerrarSession} />}>
                            <Route index element={<Home />} />
                            { rol=== "Administrador" ? <Route path="planta" element={<Planta />} /> : ""}
                            {rol === "Administrador" ? <Route path="tipomaterial" element={<TipoMaterial />} /> : ""}

                            <Route path="actividadplanta" element={<ActividadPlanta />} />
                            {rol === "Administrador" ? <Route path="usuarios" element={<Usuarios />} /> : ""}
                             <Route path="controldecalidad" element={<ControlDeCalidad />} /> 
                            {rol === "Administrador" ? <Route path="producto" element={<Producto />} /> : ""}
                            <Route path="contrasena" element={<Contrasena />} />
                            <Route path="producciondiaria" element={<ProduccionDiaria />} />
                            {rol === "Administrador" ? <Route path="reportes" element={<Reportes />} /> : ""}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                :
                <Login ValidarSesionActiva={ValidarSesionActiva} />
            }
        </>
    );
}

export default App;

