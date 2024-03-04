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
                        <img className="avatar" src={Avatar} alt="avatar" />
                    </a>
                    <br />
                    <h1>
                        anditv<i className="dot">.</i>
                        <i>dev</i>
                    </h1>
                    <a href="https://discord.com/users/854024514781315082/">
                        <img
                            src="https://lanyard.cnrad.dev/api/854024514781315082?bg=0d1117"
                            height="180"
                            width="auto"
                        />
                    </a>
                </div>
            </center>
        </>
    );
}
