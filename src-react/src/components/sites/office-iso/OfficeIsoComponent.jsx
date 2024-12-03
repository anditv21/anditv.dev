import React, { useState } from 'react';
import '../../../assets/styles/main.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getISOLink } from '../../../app/userControler';

const OfficeIsoComponent = () => {
    const [version, setVersion] = useState('not-selected');
    const [language, setLanguage] = useState('not-selected');
    const [year, setYear] = useState('not-selected');

    const handleSubmit = (event) => {
        event.preventDefault();


        if (year === 'not-selected' || version === 'not-selected' || language === 'not-selected') {
            alert('Please choose a year, version, and language.');
            return;
        }

        getISOLink(version.toString(), language.toString());
    };

    return (
        <div>
            <center>
                <br />
                <div className="content-center">
                    <h2>Office ISO Download</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <b>Select Office Year:</b>
                            <br />
                            <select
                                id="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            >
                                <option value="not-selected">Select an Office year</option>
                                <option value="2013">Office 2013</option>
                                <option value="2019">Office 2019</option>
                                <option value="2021">Office 2021</option>
                            </select>
                        </div>
                        <div>
                            <b>Select Office Version:</b>
                            <br />
                            <select
                                id="version"
                                value={version}
                                onChange={(e) => setVersion(e.target.value)}
                            >
                                <option value="not-selected">Select an Office version</option>


                                {year === '2013' && (
                                    <>
                                        <option value="HomeStudent2013Retail">Office 2013 Home & Student</option>
                                        <option value="HomeBusiness2013Retail">Office 2013 Home & Business</option>
                                        <option value="Professional2013Retail">Office 2013 Professional</option>
                                        <option value="ProjectStd2013Retail">Office 2013 Project Standard</option>
                                        <option value="ProjectPro2013Retail">Office 2013 Project Professional</option>
                                        <option value="VisioStd2013Retail">Office 2013 Visio Standard</option>
                                        <option value="VisioPro2013Retail">Office 2013 Visio Professional</option>
                                    </>
                                )}

                                {year === '2019' && (
                                    <>
                                        <option value="HomeStudent2019Retail">Office 2019 Home & Student</option>
                                        <option value="HomeBusiness2019Retail">Office 2019 Home & Business</option>
                                        <option value="Professional2019Retail">Office 2019 Professional</option>
                                        <option value="ProPlus2019Retail">Office 2019 Professional Plus</option>
                                        <option value="ProjectStd2019Retail">Project 2019 Standard</option>
                                        <option value="ProjectPro2019Retail">Project 2019 Professional</option>
                                        <option value="VisioStd2019Retail">Visio 2019 Standard</option>
                                        <option value="VisioPro2019Retail">Visio 2019 Professional</option>
                                        <option value="O365HomePremRetail">Office 365 Home Premium</option>
                                        <option value="O365BusinessRetail">Office 365 Business</option>
                                        <option value="O365ProPlusRetail">Office 365 Professional Plus</option>
                                    </>
                                )}

                                {year === '2021' && (
                                    <>
                                        <option value="HomeStudent2021Retail">Office 2021 Home & Student</option>
                                        <option value="HomeBusiness2021Retail">Office 2021 Home & Business</option>
                                        <option value="Professional2021Retail">Office 2021 Professional</option>
                                        <option value="ProPlus2021Retail">Office 2021 Professional Plus</option>
                                    </>
                                )}
                            </select>
                        </div>
                        <div>
                            <b>Select Office Language:</b>
                            <br />
                            <select
                                id="language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="not-selected">Select an Office language.</option>
                                <option value="en-US">English</option>
                                <option value="de-DE">German</option>
                                <option value="es-ES">Spanish (Spain)</option>
                                <option value="fr-FR">French</option>
                                <option value="it-IT">Italian</option>
                                <option value="nl-NL">Dutch</option>
                                <option value="pl-PL">Polish</option>
                                <option value="pt-PT">Portuguese (Portugal)</option>
                                <option value="ro-RO">Romanian</option>
                                <option value="tr-TR">Turkish</option>
                            </select>
                        </div>
                        <input type="submit" value="Download ISO"></input>
                    </form>
                </div>
            </center>
        </div>
    );
};

export default OfficeIsoComponent;
