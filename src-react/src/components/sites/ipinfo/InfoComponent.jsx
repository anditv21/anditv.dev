import React, { useState } from 'react';
import { getIpInfo } from '../../../app/userControler';
import Avatar from '../../../assets/images/avatar.webp';
import IpIformationComponent from '../../util/ipInformations';
import '../../../assets/styles/main.css';

export default function IpInfoComponent() {
    const [ipAddress, setIpAddress] = useState('');
    const [ipInformations, setIpInformations] = useState(undefined);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setIpInformations(await getIpInfo(ipAddress));
        } catch (error) {
            console.error('Error fetching IP info:', error);
        }
    };

    const handleInputChange = (event) => {
        setIpAddress(event.target.value);
    };

    return (
        <>
            <center>
                <div className="me-container">
                    <a href="https://anditv.dev/" aria-label="main site">
                        <img className="avatar" src={Avatar} alt="avatar" />
                    </a>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                        autoComplete="off"
                        type="text"
                        name="ip_address"
                        value={ipAddress}
                        onChange={handleInputChange}
                        className="custom-input"
                        placeholder="Insert your IP here"
                    />
                    <br />
                    <button className="custom-button" type="submit">
                        Get IP-Infos
                    </button>
                </form>
                <br />
            </center>

            {ipInformations && (
                <IpIformationComponent ipInformations={ipInformations} />
            )}
        </>
    );
}
