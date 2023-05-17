import React, { useEffect, useState } from 'react';
import '../../styles/producciondiaria.css';
import { LineChart } from './grafico';
import jsPDF from "jspdf";

const CementoPorUnidad = ({ labels, datasets  }) => {

    const [dataGrafico, setdataGrafico] = useState([]);

    //hooks

    useEffect(() => {
    }, []);
    const onClickExportarAPdfCemento = (e) => {
        const newCanvas = document.querySelector('#graficoCemento');
        const newCanvasImg = newCanvas.toDataURL("image/png", 1.0);
        const doc = new jsPDF('landscape');
        doc.setFontSize(20);
        doc.text(15, 15, "Instinto Viajero");
        doc.addImage(newCanvasImg, 'PNG', 10, 10, 280, 150);
        doc.save('new-canvas.pdf');
    }

    return (
        <>
            <div className="container">
                <br />
                <br />
                <div >
                { <div id="rptContent">
                        <LineChart id="graficoCemento" title={"CEMENTO EN Kg POR UNIDAD DE "} label={labels} values={datasets} style={{ backgroundColor: "white"}} />
                    </div>}
                </div>
                <br />
                <br />
                <button className="btn btn-info" onClick={() => onClickExportarAPdfCemento()}>Exportar a PDF</button>
                <br />
                <br />
            </div>

        </>

    );
}

export default CementoPorUnidad;