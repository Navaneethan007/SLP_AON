'use client'
import React from 'react';
import Image from 'next/image';
import { BarChart, DoughnutChart, HorizontalBarChart, PieChart } from '@/components/chartsComponent';
import './dashboard.css';
import AONLogo from '../../public/AON_logo.svg';
import addOnLogo from '../../public/addOn.svg';
import sourcingLogo from '../../public/sourcing.svg';
import buyingLogo from '../../public/buying.svg';
import commerceLogo from '../../public/commerce-automation.svg';
import contractLogo from '../../public/contract-management.svg';
import userIcon from '../../public/userIcon.svg';
import lineChart from '../../public/line-chart.svg';
import pyramidChart from '../../public/pyramid-chart.svg';
import panelSetupSvg from '../../public/panel-setup.svg';
import logoutSvg from '../../public/logout.svg';
import Link from 'next/link';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="topBar">
                <div className='flex items-center justify-center'>
                    <Image src={AONLogo} alt="SAP AON" />
                    <h1>Dashboard</h1>
                </div>
                <div className="search flex items-center justify-center">
                    <input type="text" placeholder="Search..." />
                    <Image src={userIcon} alt="Account" />
                </div>
            </div>
            <div className="container">
                <nav className="nav">
                    <ul>
                        <li className="active"><Link href={'/addon'}><Image src={addOnLogo} alt="SLP ADDON" width={20} /> SLP ADDON</Link></li>
                        <li><a href="#"><Image src={sourcingLogo} alt="SOURCING" width={20} /> SOURCING</a></li>
                        <li><a href="#"><Image src={buyingLogo} alt="BUYING & INVOICING" width={20} /> BUYING & INVOICING</a></li>
                        <li><a href="#"><Image src={commerceLogo} alt="COMMERCE AUTOMATION" width={20} /> COMMERCE AUTOMATION</a></li>
                        <li><a href="#"><Image src={contractLogo} alt="CONTRACT MANAGEMENTS" width={20} /> CONTRACT MANAGEMENTS</a></li>
                    </ul>
                    <div className="nav-action adminSetup text-xs">
                        <Image src={panelSetupSvg} alt="admin icon" />
                        <a href="#">ADMIN PANEL SET UP</a></div>
                    <div className="nav-action logout">
                        <Image src={logoutSvg} alt="admin icon" />
                        <a href="#">Logout</a>
                    </div>
                </nav>
                <main className="main">
                    <section className="cardSection">
                        <div className="smallCard">
                            <Link href={'/addon'}>
                                <Image src={addOnLogo} alt="SLP ADDON" />
                                <h3>SLP ADDON</h3>
                            </Link>
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
                                <Link href={'/addon'}>More Info</Link>
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
                                <div className='graph py-7'>
                                    <Image src={pyramidChart} alt="pyramid chart" />
                                </div>
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
                                <div className='graph my-5'>
                                    <Image src={lineChart} alt="line chart" />
                                </div>
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
                                <div className='graph'>
                                    <HorizontalBarChart />
                                </div>
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
