import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import TopbarViajero from "../../components/NavBar/TopBar";
import Sucursal from "../sucursal";
import Reportes from "../reportes";
import Usuarios from "../usuarios";
import Personas from "../personas";
import Vendedores from "../vendedores";
import EstadosPlan from "../EstadosPlan";
import Comisiones from "../Comisiones";
import Plazos from "../plazos";
import Home from ".";
import ProductoComponet from "../Productos";
import FormasDePagoComponet from "../FormasDePago";
import Clientes from "../clientes/index";
import Roles from "../roles/index";





const Content = ({ sidebarIsOpen, toggleSidebar, rol, CerrarSession }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <TopbarViajero toggleSidebar={toggleSidebar} CerrarSession={CerrarSession} />
    <Routes>
      <Route exact path="/" element={<Home />}  component={() => "index"} />
      
      
      { rol === "Administrador" ? <Route exact path="/roles" element={<Roles />} component={() => "rol"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/sucursal" element={<Sucursal />} component={() => "sucursal"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/usuarios" element={<Usuarios />} component={() => "usuarios"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/reportes" element={<Reportes />} component={() => "reportes"} /> : ""}
      { rol === "Administrador" ? <Route exact path="/personas" element={<Personas />} component={() => "personas"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/Productos" element={<ProductoComponet />} component={() => "productos"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/FormasDePago" element={<FormasDePagoComponet />} component={() => "FormasDePago"} /> : ""}
      {rol === "Administrador" ? <Route exact path="/EstadosPlan" element={<EstadosPlan />} component={() => "EstadosPlan"} /> : ""}
      {rol === "Administrador" ? <Route exact path="/Comisiones" element={<Comisiones />} component={() => "Comisiones"} /> : ""}
      {rol === "Administrador" ? <Route exact path="/Plazos" element={<Plazos />} component={() => "Plazos"} /> : ""}

    
      {rol === "Administrador" ? <Route exact path="/vendedores" element={<Vendedores />} component={() => "vendedores"} /> : ""}
      { rol === "Administrador" ? <Route exact path="/clientes" element={<Clientes />} component={() => "clientes"} /> : ""}

      
    </Routes>
  </Container>
);

export default Content;
