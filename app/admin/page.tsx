"use client";
import React, { useState, ChangeEvent } from 'react';
import './admin.css';
import aonLogo from '../../public/AON_logo.svg';
import settingIcon from '../../public/settings.svg';
import homeIcon from '../../public/home.svg';
import Image from 'next/image';
import ModalDialog from '@/components/modal';

type FormData = {
    ARIBA_Host: string;
    ARIBA_Realm: string;
    ARIBA_User: string;
    ARIBA_PasswordAdapter: string;
    ARIBA_APIKey: string;
    ARIBA_Token_API_URL: string;
    ARIBA_PendingApprovables_URL: string;
    ARIBA_Taskdetails_URL: string;
    ARIBA_Taskdetails_APIKey: string;
};

const AdminPanel: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        ARIBA_Host: '',
        ARIBA_Realm: '',
        ARIBA_User: '',
        ARIBA_PasswordAdapter: '',
        ARIBA_APIKey: '',
        ARIBA_Token_API_URL: '',
        ARIBA_PendingApprovables_URL: '',
        ARIBA_Taskdetails_URL: '',
        ARIBA_Taskdetails_APIKey: ''
    });
    const [isSubmit, setISumbit] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitForm = () => {
        setISumbit(true);
        console.log(formData);
    }


    const ConfimationModal: React.FC = () => {
        return (
            <div className='confirm-dialog'>
                <div className='title'>Save changes</div>
                <div className='content'>Are you sure you want save your changes?</div>
                <div className='footer'>
                    <button className='cancel-btn' onClick={() => { setISumbit(false) }}>Cancel</button>
                    <button className='save-btn'>Save</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="admin-container">
                <header className="header">
                    <Image src={aonLogo} alt="SAP AON" />
                    <Image src={homeIcon} alt="Home" className='homeIcon' />
                </header>
                <h3 className="title">ADMIN PANEL SETUP FOR AON SERVICES</h3>
                <div className="mainBox">
                    <div className="slp-config-container">
                        <div className="leftBox">
                            <div className="slp-config">
                                <Image src={settingIcon} alt='settings icon' />
                                <span>SLP CONFIGURATION</span>
                            </div>
                        </div>
                        <div className='configuration-items'>
                            <div className="config active">
                                <p>Additional Content 1</p>
                            </div>
                            <div className="config">
                                <p>Additional Content 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightColumn">
                        <div className="rightBox">
                            <div className="tabs">
                                <div className="tab active">ARIBA CONFIGURATION</div>
                                <div className="tab">GOVERNMENT PORTAL CONFIGURATION</div>
                            </div>
                        </div>
                        <div className="formBox">
                            <div className="searchContainer">
                                <div className="searchBoxWithImage">
                                    <input
                                        type="text"
                                        className="searchBox"
                                        placeholder="Search"
                                    />
                                </div>
                                <span className="configText">
                                    Configuration valid for https://Lorem ipsum dolor sit amet
                                </span>
                            </div>
                            <form className="form">
                                {Object.keys(formData).map((key, index) => (
                                    <div key={key} className="formGroup">
                                        <label htmlFor={key}>{key.replace(/_/g, ' ')}</label>
                                        <input
                                            type="text"
                                            id={key}
                                            name={key}
                                            value={formData[key as keyof FormData]}
                                            onChange={handleChange}
                                            disabled={index === 0}
                                            className={index === 0 ? "default" : ""}
                                        />
                                    </div>
                                ))}
                            </form>
                            <div className="saveButtonContainer">
                                <button className="saveButton" onClick={() => { submitForm() }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            {isSubmit && <ModalDialog content={<ConfimationModal />} toggleModal={setISumbit} />}
        </>
    );
};
export default AdminPanel;