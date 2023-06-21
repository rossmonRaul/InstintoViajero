import React, { useRef, useEffect } from "react";
import { Alert } from "reactstrap";
import { CSSTransition } from "react-transition-group";
import '../styles/alerts.css';

export const AlertDismissible = ({ indicador, encabezado, mensaje, setShow }) => {
    const ref = useRef(null);
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
        <CSSTransition ref={ref} in={true} classNames="fade" timeout={1000} unmountOnExit>
            <div className="alert-container">
                <div className="alert-modal">
                    <Alert color={getVariant()} isOpen={true} toggle={() => setShow(false)}>
                        <h5 className="alert-heading">{getTitle()}</h5>
                        <p className="alert-message">{mensaje}</p>
                    </Alert>
                </div>
            </div>
        </CSSTransition>
    );
};
