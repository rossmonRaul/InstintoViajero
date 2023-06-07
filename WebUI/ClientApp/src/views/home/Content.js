import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import TopbarViajero from "../../components/NavBar/TopBar";
import Sucursal from "../sucursal";
import Reportes from "../reportes";
import Usuarios from "../usuarios";
import Home from ".";





const Content = ({ sidebarIsOpen, toggleSidebar, rol, CerrarSession }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <TopbarViajero toggleSidebar={toggleSidebar} CerrarSession={CerrarSession} />
    <Routes>
      <Route exact path="/" element={<Home />}  component={() => "index"} />
      
      
      
      { rol=== "Administrador" ? <Route exact path="/sucursal" element={<Sucursal />} component={() => "sucursal"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/usuarios" element={<Usuarios />} component={() => "usuarios"} /> : ""}
      { rol=== "Administrador" ? <Route exact path="/reportes" element={<Reportes />} component={() => "reportes"} /> : ""}

      
      
    </Routes>
  </Container>
);

export default Content;
