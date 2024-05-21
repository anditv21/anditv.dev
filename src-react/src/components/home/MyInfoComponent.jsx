import React from 'react';
import Avatar from '../../assets/images/avatar.webp';

export default function MeInformationsComponent() {
    return (
        <>
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
                        <img className="avatar" src={Avatar} alt="avatar" />
                    </a>
                    <br />
                    <h1>
                        anditv<i className="dot">.</i>
                        <i>dev</i>
                    </h1>
                </div>
            </center>
        </>
    );
}
