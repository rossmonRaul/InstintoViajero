import React, { useEffect } from "react";
import { Alert } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import '../styles/alerts.css';

export const AlertDismissible = ({ indicador, encabezado, mensaje, setShow }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [setShow]);

    const getVariant = () => {
        if (indicador === 0) {
            return "success";
        } else if (indicador === 1) {
            return "danger";
        } else if (indicador === 2) {
            return "primary";
        }
        return "info";
    };

    const getTitle = () => {
        if (encabezado) {
            return encabezado;
        }
        else if (indicador === 0) {
            return "Exitoso";
        } else if (indicador === 1) {
            return "Error";
        } 
        return "Alerta";
    };

    return (
        <CSSTransition in={setShow} timeout={1000} classNames="alert-transition" unmountOnExit>
            <div className="alert-container">
                <div className="alert-modal">
                    <Alert color={getVariant()} isOpen={true} toggle={() => setShow(false)}>
                        <h5 className="alert-heading">{getTitle()}</h5>
                        <div className="alert-message">{mensaje}</div>
                    </Alert>
                </div>
            </div>
        </CSSTransition>
    );
};
