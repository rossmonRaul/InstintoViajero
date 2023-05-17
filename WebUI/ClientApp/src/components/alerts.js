import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export const AlertDismissible = ({variant, encabezado, mensaje, setShow}) => {
    return(
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            <p>{mensaje}</p>
        </Alert>
    )
}