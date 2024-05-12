import React, { useState } from 'react';
import '../../../assets/styles/main.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getISOLink } from '../../../app/userControler';


const OfficeIsoComponent = () => {
  const [version, setVersion] = useState('');
  const [language, setLanguage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    getISOLink(version, language);
  };

  return (
    <div>
      <center>
      <h2>Office ISO Download</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <b>Select Office Version:</b><br/>
          <select id="version" value={version} onChange={(e) => setVersion(e.target.value)}>
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
          </select>
        </div>
        <div>
        <b>Select Office Langauge:</b><br/>
          <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en-EN">English</option>
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
        <input type="submit"></input>
      </form>
      </center>
    </div>
  );
};

export default OfficeIsoComponent;
