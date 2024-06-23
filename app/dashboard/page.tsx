'use client'
import React from 'react';
import Image from 'next/image';
import './dashboard.css';
import AONLogo from '../../public/AON_logo.svg';
import addOnLogo from '../../public/addOn.svg';
import sourcingLogo from '../../public/sourcing.svg';
import buyingLogo from '../../public/buying.svg';
import commerceLogo from '../../public/commerce-automation.svg';
import contractLogo from '../../public/contract-management.svg';
import userIcon from '../../public/userIcon.svg';
import { BarChart, DoughnutChart, PieChart } from '@/components/chartsComponent';

const data1 = [{ name: 'A', value: 100 }, { name: 'B', value: 300 }];
const data2 = [{ name: 'Jan', value: 400 }, { name: 'Feb', value: 300 }, { name: 'Mar', value: 200 }];
const data3 = [{ name: 'Total', value: 750 }];
const data4 = [{ name: 'Approved', value: 850 }, { name: 'Rejected', value: 150 }];
const data5 = [{ name: 'Surveys Available', value: 52 }, { name: 'Surveys Attended', value: 7 }];
const data6 = [{ name: 'Qualified', value: 350 }, { name: 'Disqualified', value: 150 }];

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="topBar">
                <Image src={AONLogo} alt="SAP AON" />

                <h1>Dashboard</h1>

                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <Image src={userIcon} alt="Account" />
                </div>
            </div>
            <div className="container">
                <nav className="nav">
                    <ul>
                        <li className="active"><a href="#"><Image src={addOnLogo} alt="SLP ADDON" width={20} /> SLP ADDON</a></li>
                        <li><a href="#"><Image src={sourcingLogo} alt="SOURCING" width={20} /> SOURCING</a></li>
                        <li><a href="#"><Image src={buyingLogo} alt="BUYING & INVOICING" width={20} /> BUYING & INVOICING</a></li>
                        <li><a href="#"><Image src={commerceLogo} alt="COMMERCE AUTOMATION" width={20} /> COMMERCE AUTOMATION</a></li>
                        <li><a href="#"><Image src={contractLogo} alt="CONTRACT MANAGEMENTS" width={20} /> CONTRACT MANAGEMENTS</a></li>
                    </ul>
                    <div className="adminSetup"><a href="#">ADMIN PANEL SET UP</a></div>
                    <div className="logout"><a href="#">Logout</a></div>
                </nav>
                <main className="main">
                    <section className="cardSection">
                        <div className="smallCard">
                            <Image src={addOnLogo} alt="SLP ADDON" />
                            <h3>SLP ADDON</h3>
                        </div>
                        <div className="smallCard">

                            <Image src={sourcingLogo} alt="SOURCING" />
                            <h3>SOURCING</h3>
                        </div>
                        <div className="smallCard">

                            <Image src={buyingLogo} alt="BUYING & INVOICING" />
                            <h3>BUYING & INVOICING</h3>
                        </div>
                        <div className="smallCard">

                            <Image src={commerceLogo} alt="COMMERCE AUTOMATION" />
                            <h3>COMMERCE AUTOMATION</h3>
                        </div>
                        <div className="smallCard">

                            <Image src={contractLogo} alt="CONTRACT MANAGEMENTS" />
                            <h3>CONTRACT MANAGEMENTS</h3>
                        </div>
                    </section>
                    <h2 className="todo">TO DO</h2>
                    <section className="todoSection">
                        <div className="bigCard">
                            <div><h3>Supplier Request</h3></div>
                            <div className='graphSection'>
                                <div className='graph'>
                                    <DoughnutChart />
                                </div>
                                <div className='graphContent'>
                                    <p>Total Validation</p>
                                    <span>1000</span>
                                </div>
                            </div>
                            <div className='desc'>
                                <p>Search by dates to know validation of approved and rejected</p>
                                <a href='/'>More Info</a>
                            </div>
                        </div>
                        <div className="bigCard">
                            <div><h3>Supplier Registration</h3></div>
                            <div className='graphSection'>
                                <div className='graph'>
                                    <BarChart />
                                </div>
                                <div className='graphContent'>
                                    <p>Total No.of Supplier Registration</p>
                                    <span>750</span>
                                </div>
                            </div>
                            <div className='desc'>
                                <a href='/'>More Info</a>
                            </div>
                        </div>
                        <div className="bigCard">
                            <div><h3>Supplier Evaluation</h3></div>
                            <div className='graphSection'>
                                <div className='graph'>
                                    <PieChart />
                                </div>
                                <div className='graphContent'>
                                    <p>Total Surveys available</p>
                                    <span>52</span>
                                    <p>Total Surveys attended</p>
                                    <span>07</span>
                                </div>
                            </div>
                            <div className='desc'>
                                <a href='/'>More Info</a>
                            </div>
                        </div>
                        <div className="bigCard">
                            <div><h3>Supplier Qualification</h3></div>
                            <div className='graphSection'>
                                <div className='graph'></div>
                                <div className='graphContent'>
                                    <p>Total No.of Qulaified</p>
                                    <span>350</span>
                                    <p>Total No.of Disqualified</p>
                                    <span>150</span>
                                </div>
                            </div>
                            <div className='desc'>
                                <a href='/'>More Info</a>
                            </div>
                        </div>
                        <div className="bigCard">
                            <div><h3>Supplier Integration</h3></div>
                            <div className='graphSection'>
                                <div className='graph'></div>
                                <div className='graphContent'>
                                    <p>Overall performance of suppliers</p>
                                </div>
                            </div>
                            <div className='desc'>
                                <a href='/'>More Info</a>
                            </div>
                        </div>
                        <div className="bigCard">
                            <div><h3>Rescan</h3></div>
                            <div className='graphSection'>
                                <div className='graph'></div>
                                <div className='graphContent'>
                                    <p>Total Approved</p>
                                    <span>450</span>
                                    <p>Total Rejected</p>
                                    <span>150</span>
                                </div>
                            </div>
                            <div className='desc'>
                                <a href='/'>More Info</a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
