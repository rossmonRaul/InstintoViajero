import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import user from '../../images/user.png';
import { Link } from "react-router-dom";

const TopbarViajero = ({ toggleSidebar, CerrarSession }) => {

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
    const [nombreUsuario, setnombreUsuario] = useState("");
    const [rol, setRol] = useState("");

    useEffect(() => {
        ObtenerNombreUsuario();
        ObtenerRol();
    }, []);

    const ObtenerNombreUsuario = () => {
        let usuario = JSON.parse(sessionStorage.getItem("data_usuario"));
        setnombreUsuario(usuario.nombre + " " + usuario.primerApellido);

    }

    const ObtenerRol = () => {
        let rol = JSON.parse(sessionStorage.getItem("data_usuario"));
        setRol(rol.descripcion);

    }
    return (
        <Navbar
            color="light"
            light
            className="navbar shadow-sm p-3 mb-5 bg-white rounded"
            expand="md"
        >
            <Button color="info" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>
                <Nav className="ml-auto" navbar>

                    <div href="#"><img src={user} style={{ objectFit: "contain", paddingLeft: "7px", paddingRight: "7px" }} className="img-user" /> </div>
                    <div className="mb-2" style={{ fontWeight: "700", color: "white", paddingRight: "30px", paddingTop: "6px" }} href="#">{nombreUsuario}</div>
                    <Button id="logout" onClick={() => CerrarSession()}>Cerrar Sesión</Button>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default TopbarViajero;
