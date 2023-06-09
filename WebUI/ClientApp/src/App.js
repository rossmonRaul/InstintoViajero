import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";

import Layout from './views/home/layout'

import Sucursal from './views/sucursal'
import Usuarios from './views/usuarios';
import Contrasena from './views/actualizarcontrasena';
import Reportes from './views/reportes';
import Personas from './views/personas';


import { ObtenerTokenUsuario } from './utils/utilidades';
import { ObtenerDatosDeUsuario } from './utils/utilidades';

import Login from './views/login';
import './custom.css'


import SideBar from './components/NavBar/sideBar/SideBar';
import Content from './views/home/Content';
import Home from './views/home';

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
    const [sidebarIsOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  
    return (
        <>
            {sesionActiva ?
                    <BrowserRouter>
                        <div className="App wrapper">
                            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                            <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} rol={rol}  CerrarSession={CerrarSession} />
                        </div>

                       {/*  <Routes>
                      
                            <Route path="/" element={<Layout CerrarSession={CerrarSession} />}>
                                <Route index element={<Home />} />
                                { rol=== "Administrador" ? <Route path="sucursal" element={<Sucursal />} /> : ""}
                                {rol === "Administrador" ? <Route path="usuarios" element={<Usuarios />} /> : ""}
                                <Route path="contrasena" element={<Contrasena />} />
                                {rol === "Administrador" ? <Route path="reportes" element={<Reportes />} /> : ""}
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Route>
                        </Routes> */}

                    </BrowserRouter>
               
                :
                <Login ValidarSesionActiva={ValidarSesionActiva} />
            }
        </>
    );
}

export default App;

