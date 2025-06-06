import React, { useEffect, useState } from 'react';
import ReactIcon from '../../../assets/images/icons/react.svg';
import ViteIcon from '../../../assets/images/icons/vite.svg';
import JsIcon from '../../../assets/images/icons/javascript.svg';
import HeartIcon from '../../../assets/images/icons/heart.svg';
import GitHubIcon from '../../../assets/images/icons/github.svg';
import MailIcon from '../../../assets/images/icons/mail.svg';
import DiscordIcon from '../../../assets/images/icons/discord.svg';

import '../../../assets/styles/main.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const COOKIE_NAME = 'clickCount';

const getClickCountFromCookie = () => {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${COOKIE_NAME}=`))
        ?.split('=')[1];
    return cookieValue ? parseInt(cookieValue, 10) : 0;
};

export default function AboutComponent() {
    const [clickCount, setClickCount] = useState(getClickCountFromCookie());

    useEffect(() => {
        // Initialize tooltips if Bootstrap is available
        if (window.bootstrap) {
            const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltips.forEach((tooltip) => new window.bootstrap.Tooltip(tooltip));
        }

        // Update click count on document click
        const handleDocumentClick = () => {
            setClickCount(getClickCountFromCookie());
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const tooltipTextGitHub = 'Visit GitHub';
    const tooltipTextMail = 'Send an email';
    const tooltipTextDiscord = 'Connect on Discord';

    return (
        <>
            <center>
                <br />
                <a
                    href="https://speedtest.anditv.dev"
                    target="_blank"
                    className="custom-button"
                    rel="noreferrer"
                >
                    Take a speedtest
                </a>
                <br />
                <div className='about-container'>
                    <br />
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-github">{tooltipTextGitHub}</Tooltip>}
                    >
                        <a href='https://github.com/anditv21/' target='_blank' rel="noreferrer">
                            <img src={GitHubIcon} height="45" width="45" data-bs-toggle="tooltip" />
                        </a>
                    </OverlayTrigger>
                    <br />
                    <br />
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-mail">{tooltipTextMail}</Tooltip>}
                    >
                        <a href='mailto:andi@anditv.dev' rel="noreferrer">
                            <img src={MailIcon} height="45" width="45" data-bs-toggle="tooltip" />
                        </a>
                    </OverlayTrigger>
                    <br />
                    <br />
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-discord">{tooltipTextDiscord}</Tooltip>}
                    >
                        <a target='_blank' href='discord://-/users/1368283238283345991' rel="noreferrer">
                            <img src={DiscordIcon} height="45" width="45" data-bs-toggle="tooltip" loading="lazy" />
                        </a>
                    </OverlayTrigger>
                    <br />
                    <br />
                    {/* Click count message */}
                    <p className="click-count-message">You clicked {clickCount} times on this website, in case you are wondering.</p>
                </div>

                <div className="built-with">
                    <h3 style={{ color: 'white' }}>This page is built with</h3>
                    <a href='https://react.dev/' target='_blank' rel="noreferrer"><img src={ReactIcon} height="45" width="45" loading="lazy" /></a>
                    <a href='https://vite.dev/' target='_blank' rel="noreferrer"><img src={ViteIcon} height="45" width="45" loading="lazy" /></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel="noreferrer"><img src={JsIcon} height="45" width="45" loading="lazy" /></a>
                    <img src={HeartIcon} height="45" width="45" loading="lazy" />
                </div>
            </center>
        </>
    );
}
