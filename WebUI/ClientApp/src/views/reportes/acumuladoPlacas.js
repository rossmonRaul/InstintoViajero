import React from 'react';
import '../../styles/producciondiaria.css';
import { BarChart } from './grafico';
import jsPDF from "jspdf";

const AcumuladoPlacas = ({ data }) => {

    const onClickExportarAPdf = (e) => {
        const newCanvas = document.querySelector('#grafico');
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
                {<BarChart title={"ACUMULADO DE PLACAS "} data={data} id="grafico"  />}
                <br />
                <br />
                <button className="btn btn-info"  onClick={() => onClickExportarAPdf()}>Exportar a PDF</button>

                <br />
                <br />
            </div>

        </>

    );
}

export default AcumuladoPlacas;