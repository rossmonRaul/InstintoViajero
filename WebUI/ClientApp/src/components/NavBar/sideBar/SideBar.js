import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,  
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.webp';
import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header" style={{ backgroundColor: "#005CB8" }}>
        <h3><img src={logo} className="img-fluid" style={{ width: "150px" }} /><span></span></h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        
        <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem>
        <SubMenu title="Catalogos" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/reportes"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Reportes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Sucursal",
      target: "sucursal",
    },
    {
      title: "Usuarios",
      target: "usuarios",
    },
    {
      title: "Productos",
      target: "productos",
    },
  ],
];

export default SideBar;
