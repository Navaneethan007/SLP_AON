"use client";
import React, { useState } from "react";
import { SupplierGrid } from "@/components/supplierGrid";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './addon.css';
import AONLogo from '../../public/AON_logo.svg';
import { SupplierRequestMapper } from "@/utils/supplierRequestMapper";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Supplier validation chart',
        },
    },
};


export default function Home() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type') || "registration";
    const [fromDate, setFromDate] = React.useState<Dayjs | null>(null);
    const [toDate, setToDate] = React.useState<Dayjs | null>(null);
    const labels = ['Date', '', '', '', ''];
    const [data, setData] = useState<ISupplierData[]>([]);
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Rejected',
                data: [150, 0, 0, 0, 0],
                backgroundColor: '#B40C01',
            },
            {
                label: 'Approved',
                data: [850, 0, 0, 0, 0],
                backgroundColor: '#30B401',
            }
        ],
    };

    React.useEffect(() => {
        fetch('https://aonapi.azurewebsites.net/SupplierApprovalRequest/GetAllSupplierApprovalRequest')
            .then((res) => res.json())
            .then((d) => setData(SupplierRequestMapper(d)));
    }, []);

    return (
        <div className="addOnContainer">
            <div className="headerContainer">
                <Image src={AONLogo} alt="AON Logo" />
                <div className="date">
                    {/* <div>
            <label>Last Refresh :  </label>
            <span>dd: mm: yyyy     00 : 00</span>
          </div> */}
                    <div className="datePickerContainer">
                        <label>From :</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker
                                    value={fromDate}
                                    onChange={(date) => setFromDate(date)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <label>To :</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker
                                    value={toDate}
                                    onChange={(date) => setToDate(date)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
            <div className="detailsCard">
                <div className="card">
                    <div>TOTAL SUPPLIERS VALIDATED</div>
                    <div className="total">1000</div>
                </div>
                <div className="card">
                    <div>TOTAL APPROVED</div>
                    <div className="approved">850</div>
                </div>
                <div className="card">
                    <div>TOTAL REJECTED</div>
                    <div className="rejected">150</div>
                </div>
                <div className="graph">
                    <Bar options={options} data={chartData} />
                </div>
            </div>
            <SupplierGrid supplierData={data} gridType={type} />
            <div className="submitBtn">
                <button>Submit</button>
            </div>
        </div>
    );
}
