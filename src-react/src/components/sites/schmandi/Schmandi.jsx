import React, { useEffect } from 'react';
import schmandiAvatar from '../../../assets/images/schmandi.webp';
import schmandiProfile from '../../../assets/images/schmandiProfile.webp';

import '../../../assets/styles/main.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutComponent() {
    useEffect(() => {
        // Initialize tooltips if Bootstrap is available
        if (window.bootstrap) {
            const tooltips = document.querySelectorAll(
                '[data-bs-toggle="tooltip"]',
            );
            tooltips.forEach(
                (tooltip) => new window.bootstrap.Tooltip(tooltip),
            );
        }
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert(`Copied command to clipboard!`);
            })
            .catch((err) => {
                console.error('Failed to copy command: ', err);
            });
    };

    return (
        <>
            <center>
                <br />
                <br />
                <div className="about-container">
                    <br />
                    <h1>schmandi</h1>
                    <p>
                        A discord bot to improve server management, greet new
                        members, <br />
                        enhance user interaction, but also has fun and utility
                        features.
                    </p>
                    <a
                        href="https://github.com/anditv21/schmandi"
                        target="_blank"
                        aria-label="GitHub Link"
                        rel="noreferrer"
                    >
                        <img
                            className="avatar"
                            src={schmandiAvatar}
                            alt="schmandiAvatar"
                            width="150"
                            height="150"
                        />
                    </a>
                    <br />
                    <a
                        className="custom-button"
                        href="https://discord.com/oauth2/authorize?client_id=882754721289474048"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Add To Server
                    </a>
                </div>
                <br />
                <div className="role-select-container">
                    <img src={schmandiProfile} alt="schmandiProfile" />
                    <div className="role-select-content">
                        <h1>TRY NOW</h1>
                        <span>Click to copy a command and try it out!</span>
                        <div className="role-select-buttons">
                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        '</bombastic_side_eye:1150516291787034655>',
                                    )
                                }
                            >
                                Bombastic side eye
                            </button>
                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        '</cat:1232735760025911327>',
                                    )
                                }
                            >
                                Random cat gif
                            </button>
                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        '</clone_emote:1232743318505521318>',
                                    )
                                }
                            >
                                Clone a Emoji
                            </button>
                            <button
                                onClick={() =>
                                    copyToClipboard('</yt:1256354835238879433>')
                                }
                            >
                                YT Download
                            </button>
                            <button
                                onClick={() =>
                                    copyToClipboard(
                                        '</roll:1150516291334062147>',
                                    )
                                }
                            >
                                Roll a dice
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </>
    );
}
