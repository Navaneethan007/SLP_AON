"use client";
import React from "react";
import { SupplierGrid } from "@/components/supplierGrid";
import Image from "next/image";
import calendarSvg from '../public/calendar.svg';
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
  const [fromDate, setFromDate] = React.useState<Dayjs | null>(null);
  const [toDate, setToDate] = React.useState<Dayjs | null>(null);
  const labels = ['Date','','','',''];
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Rejected',
        data: [150,0,0,0,0],
        backgroundColor: '#B40C01',
      },
      {
        label: 'Approved',
        data: [850,0,0,0,0],
        backgroundColor: '#30B401',
      }
    ],
  };

  let data: SupplierData[] = [{
    dateModified: new Date().toLocaleDateString(),
    suppliedId: "SCAS001",
    supplierName: "firstName lastName",
    commodity: "BG",
    buyerName: "Buyer1",
    buyerDept: "Raw",
    type: "Rescan",
    status: "Selected",
    feedback: "View Report",
    region: "CHI"
  }, {
    dateModified: new Date().toLocaleDateString(),
    suppliedId: "SCAS001",
    supplierName: "firstName lastName",
    commodity: "BG",
    buyerName: "Buyer1",
    buyerDept: "Raw",
    type: "Rescan",
    status: "Rejected",
    feedback: "Error",
    region: "CHI"
  }, {
    dateModified: new Date().toLocaleDateString(),
    suppliedId: "SCAS001",
    supplierName: "firstName lastName",
    commodity: "BG",
    buyerName: "Buyer1",
    buyerDept: "Raw",
    type: "Rescan",
    status: "Selected",
    feedback: "View Report",
    region: "CHI"
  }, {
    dateModified: new Date().toLocaleDateString(),
    suppliedId: "SCAS001",
    supplierName: "firstName lastName",
    commodity: "BG",
    buyerName: "Buyer1",
    buyerDept: "Raw",
    type: "Rescan",
    status: "Rejected",
    feedback: "Error",
    region: "CHI"
  }, {
    dateModified: new Date().toLocaleDateString(),
    suppliedId: "SCAS001",
    supplierName: "firstName lastName",
    commodity: "BG",
    buyerName: "Buyer1",
    buyerDept: "Raw",
    type: "Rescan",
    status: "Selected",
    feedback: "View Report",
    region: "CHI"
  }, {
    dateModified: new Date().toLocaleDateString(),
    suppliedId: "SCAS001",
    supplierName: "firstName lastName",
    commodity: "BG",
    buyerName: "Buyer1",
    buyerDept: "Raw",
    type: "Rescan",
    status: "Rejected",
    feedback: "Error",
    region: "CHI"
  }];
  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <div className="date">
          <div>
            <label>Last Refresh :  </label>
            <span>dd: mm: yyyy     00 : 00</span>
          </div>
          <div className="datePickerContainer">
            {/* <Image src={calendarSvg} alt="calendar svg" /> */}
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
      <div className="content">
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
        <SupplierGrid supplierData={data} />
      </div>
    </div>
  );
}
