import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
); 

export const BarChart = ({title, data}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: title,
          },
        },
    };


    return(
        <>
            <Bar id="grafico" options={options} data={data} />
        </>
    )
}

export const LineChart = ({ title, label, values }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    const data = {
        labels: label,
        datasets: [{
            label: 'Dias',
            backgroundColor: "rgb(133, 193, 233)",
            borderColor: "rgb(46, 134, 193)",
            data: values
        }]
    }

    return (
        <>
            
            <Line id="graficoCemento" options={options} data={data} />
        </>
    )
}