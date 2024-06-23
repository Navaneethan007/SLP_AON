import React from "react";
import { } from 'chart.js';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
} from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    Title,);

export const DoughnutChart: React.FC = () => {
    const data = {
        datasets: [
            {
                label: 'Total',
                data: [850, 150, 1000],
                backgroundColor: ['#30B401', '#B40C01', '#0298EC']
            },
        ],
    };
    // const plugins = [{
    //     id: 'custom_canvas_background_color',
    //     beforeInit: function (chart: any) {
    //         const { width } = chart;
    //         const { height } = chart;
    //         const { ctx } = chart;
    //         ctx.restore();
    //         const fontSize = (height / 160).toFixed(2);
    //         ctx.font = `${fontSize}em sans-serif`;
    //         ctx.textBaseline = 'top';
    //         const text = "23";
    //         const textX = Math.round((width - ctx.measureText(text).width) / 2);
    //         const textY = height / 2;
    //         ctx.fillText(text, textX, textY);
    //         ctx.save();
    //     }
    // }]
    return <Doughnut data={data} />;
}

export const BarChart: React.FC = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };
    const data = {
        datasets: [
            {
                label: '',
                data: [750],
                backgroundColor: '#0298EC',
            }
        ],
    };

    return <Bar options={options} data={data} />;
}

export const PieChart: React.FC = () => {
    const data = {
        datasets: [
            {
                label: 'Supplier Evaluation',
                data: [52, 7],
                backgroundColor: ['#0298EC', '#30B401'],
            },
        ],
    };
    return <Pie data={data} />;
}

export const HorizontalBarChart: React.FC = () => {
    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            }
        },
    };

    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [450],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [150],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data} />
}