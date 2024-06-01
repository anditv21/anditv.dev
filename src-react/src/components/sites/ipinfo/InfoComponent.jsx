import React, { useState } from 'react';
import { getIpInfo } from '../../../app/userControler';
import Avatar from '../../../assets/images/avatar.webp';
import IpInformationComponent from '../../util/ipInformations';
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
        <center>
            <br />
            <div className="content-center">
                <a
                    href="https://github.com/anditv21/anditv.dev"
                    target="_blank"
                    aria-label="GitHub Link"
                    rel="noreferrer"
                >
                    <link rel="preload" href={Avatar} as="image" />
                    <img
                        className="avatar"
                        src={Avatar}
                        alt="avatar"
                        width="150"
                        height="150"
                    />
                </a>
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

                {ipInformations && (
                    <IpInformationComponent ipInformations={ipInformations} />
                )}
            </div>
        </center>
    );
}
