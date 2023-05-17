import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from '../../images/logo.webp';
import user from '../../images/user.png';

const Layout = ({ CerrarSession }) => {
    const [linkActive, setLinkActive] = useState(window.location.pathname.replace('/', ''));
    const [nombreUsuario, setnombreUsuario] = useState("");
    const [rol, setRol] = useState("");


    const ActivarLink = (to) => {
        setLinkActive(to);
    }

    useEffect(() => {
        ObtenerNombreUsuario();
        ObtenerRol();
    }, []);

    const ObtenerNombreUsuario = () => {
        let usuario = JSON.parse(sessionStorage.getItem("data_usuario"));
        setnombreUsuario(usuario.nombre + " " + usuario.primerApellido);

    }

    const ObtenerRol= () => {
        let rol = JSON.parse(sessionStorage.getItem("data_usuario"));
        setRol(rol.descripcion);

    }


    return (
        <>
            <div className="wrapper">
                <div className="body-overlay"></div>
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3><img src={logo} className="img-fluid" style={{ width: "150px" }} /><span></span></h3>
                    </div>
                    <div className="menu-list">
                    <ul className="list-unstyled components">
                        {rol === "Inspector" || rol === "Administrador" ?
                            <li className={linkActive === 'producciondiaria' ? 'active' : ''}>
                                <Link className={`dashboard`} to="/producciondiaria" onClick={() => ActivarLink('producciondiaria')}>{' '}<span>Producción Diaria</span></Link>
                            </li>
                            : ""
                        }
                        {rol === "Administrador" ?
                            <li className={linkActive === 'planta' ? 'active' : ''}>
                                <Link className={`dashboard`} to="/planta" onClick={() => ActivarLink('planta')}>{' '}<span>Plantas</span></Link>
                            </li>
                            : ""
                        }
                        {rol === "Inspector" || rol === "Administrador" ?
                            <li className={linkActive === 'actividadplanta' ? 'active' : ''}>
                                <Link className={`dashboard`} to="/actividadplanta" onClick={() => ActivarLink('actividadplanta')}>{' '}<span>Actividad de plantas</span></Link>
                            </li>
                            : ""
                        }
                        {rol === "Administrador" ? 
                        <li className={linkActive === 'producto' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/producto" onClick={() => ActivarLink('producto')}>{' '}<span>Productos</span></Link>
                        </li>
                            : ""
                        }
                            {rol === "Administrador" || rol === "Inspector" ? 
                        <li className={linkActive === 'controldecalidad' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/controldecalidad" onClick={() => ActivarLink('controldecalidad')}>{' '}<span>Control de calidad</span></Link>
                        </li>
                            : ""
                        }
                        {rol === "Administrador" ?
                            <li className={linkActive === 'tipomaterial' ? 'active' : ''}>
                                <Link className={`dashboard`} to="/tipomaterial" onClick={() => ActivarLink('tipomaterial')}>{' '}<span>Tipos de materiales</span></Link>
                            </li>
                            : ""
                        }
                        {rol === "Administrador" ? 
                        <li className={linkActive === 'usuarios' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/usuarios" onClick={() => ActivarLink('usuarios')}>{' '}<span>Usuarios</span></Link>
                        </li>
                        : ""
                        }
                        {rol === "Administrador" ?
                            <li className={linkActive === 'reportes' ? 'active' : ''}>
                                <Link className={`dashboard`} to="/reportes" onClick={() => ActivarLink('reportes')}>{' '}<span>Reportes</span></Link>
                            </li>
                            : ""}
                    </ul>
                    </div>
                </nav>


                <div id="content">
                    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#005CB8" }} >                    
                        <Container fluid>                          
                            <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "#005CB8" }} />
                            <div className="user-info">
                                <h1 style={{ fontWeight: "700", color: "white" }} href="#">{nombreUsuario}</h1>
                                <Nav.Link href="#" ><Button id="logout" onClick={() => CerrarSession()}>Cerrar Sesión</Button></Nav.Link>
                            </div>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav>
                                   
                                    <div className="menu-responsive">
                                        <ul className="list-unstyled components">
                                            {rol === "Inspector" || rol === "Administrador" ?
                                                <li className={linkActive === 'producciondiaria' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/producciondiaria" onClick={() => ActivarLink('producciondiaria')}>{' '}<span>Producción Diaria</span></Link>
                                                </li>
                                                : ""
                                            }
                                        
                                            {rol === "Administrador" ?
                                                <li className={linkActive === 'planta' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/planta" onClick={() => ActivarLink('planta')}>{' '}<span>Plantas</span></Link>
                                                </li>
                                                : ""
                                            }
                                            {rol === "Inspector" || rol === "Administrador" ?
                                                <li className={linkActive === 'actividadplanta' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/actividadplanta" onClick={() => ActivarLink('actividadplanta')}>{' '}<span>Actividad de plantas</span></Link>
                                                </li>
                                                : ""
                                            }
                                            {rol === "Administrador" ?
                                                <li className={linkActive === 'producto' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/producto" onClick={() => ActivarLink('producto')}>{' '}<span>Productos</span></Link>
                                                </li>
                                                : ""
                                            }
                                            {rol === "Inspector" || rol === "Administrador" ?
                                                <li className={linkActive === 'controldecalidad' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/controldecalidad" onClick={() => ActivarLink('controldecalidad')}>{' '}<span>Control de calidad</span></Link>
                                                </li>
                                                : ""
                                            }
                                            {rol === "Administrador" ?
                                                <li className={linkActive === 'tipomaterial' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/tipomaterial" onClick={() => ActivarLink('tipomaterial')}>{' '}<span>Tipos de materiales</span></Link>
                                                </li>
                                                : ""
                                            }
                                            {rol === "Administrador" ?
                                                <li className={linkActive === 'usuarios' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/usuarios" onClick={() => ActivarLink('usuarios')}>{' '}<span>Usuarios</span></Link>
                                                </li>
                                                : ""
                                            }
                                            {rol === "Administrador" ?
                                                <li className={linkActive === 'reportes' ? 'active' : ''}>
                                                    <Link className={`dashboard`} to="/reportes" onClick={() => ActivarLink('reportes')}>{' '}<span>Reportes</span></Link>
                                                </li>
                                                : ""}
                                        </ul>
                                    </div>
                                    <hr/>
                                    <div className="user-responsive">
                                    <Nav.Link href="#"><img src={user} style={{ objectFit: "contain" }} className="img-user" /> </Nav.Link>                            
                                    <Nav.Link style={{ fontWeight: "700", color: "white" }} href="#">{nombreUsuario}</Nav.Link>
                                    <Nav.Link href="#" ><Button id="logout" onClick={() => CerrarSession()}>Cerrar Sesión</Button></Nav.Link>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>


                    <div className="main-content" style={{ height: "100%" }}>
                        <Outlet />
                    </div>
                </div>
            </div>

            <style type="text/css">
                {`
                    #logout {
                        background-color: #dc3545 !important
                    }
                `}
            </style>
        </>
    )
};

export default Layout;
