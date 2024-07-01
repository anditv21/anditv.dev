import { useState, useEffect } from 'react';
import Avatar from '../../assets/images/avatar.webp';
import star from '../../assets/images/icons/star.svg';
import code from '../../assets/images/icons/code.svg';
import { getGithubStars } from '../../app/userControler';

export default function MeInformationsComponent() {
    const [panelStars, setPanelStars] = useState('0');
    const [schmandiStars, setSchmandiStars] = useState('0');
    const panelRepoName = 'panel';
    const schmandiRepoName = 'schmandi';

    useEffect(() => {
        const fetchPanelStars = async () => {
            const stars = await getGithubStars(panelRepoName);
            if (stars) setPanelStars(stars);
        };

        const fetchSchmandiStars = async () => {
            const stars = await getGithubStars(schmandiRepoName);
            if (stars) setSchmandiStars(stars);
        };

        fetchPanelStars();
        fetchSchmandiStars();
    }, []);

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
                        <img
                            className="avatar"
                            src={Avatar}
                            alt="avatar"
                            width="150"
                            height="150"
                        />
                    </a>
                    <br />
                    <h1>
                        anditv<i className="dot">.</i>
                        <i>dev</i>
                    </h1>
                </div>
            </center>
            <center>
                <div className="projects-sector content-center">
                <div className="project-card">
                        <h3 className="title">
                            <a href="https://anditv.dev/sites/commits/">
                                <img
                                    src={code}
                                    height="20"
                                    width="20"
                                    loading="lazy"
                                    alt="code icon"
                                />{' '}
                                panel
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/anditv21/panel/blob/main/count.py#L1"
                                rel="noreferrer"
                            ></a>
                            <br />
                            <div className="lines-of-code-container">
                                <a
                                    target="_blank"
                                    href="https://github.com/anditv21/panel/blob/main/count.py#L1"
                                    rel="noreferrer"
                                >
                                    <span className="lines-of-code-tag">
                                        lines
                                    </span>
                                    <span className="lines-of-code-number">
                                        21k
                                    </span>
                                </a>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag open-source">Open-Source</div>
                            <div className="tag php">PHP</div>
                            <div className="tag js">JS</div>
                            <div className="tag python">Python</div>
                        </div>
                        <img
                            src={star}
                            height="20"
                            width="20"
                            loading="lazy"
                            alt="star icon"
                        />
                        <span id="star-count">{panelStars}</span>
                        <p className="description">
                            🔧 User management panel with several themes &amp;
                            API Examples
                        </p>
                    </div>
                    <div className="project-card">
                        <h3 className="title">
                            <a href="https://github.com/anditv21/schmandi">
                                <img
                                    src={code}
                                    height="20"
                                    width="20"
                                    loading="lazy"
                                    alt="code icon"
                                />{' '}
                                schmandi
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/anditv21/panel/blob/main/count.py#L1"
                                rel="noreferrer"
                            ></a>
                            <br />
                            <div className="lines-of-code-container">
                                    <span className="lines-of-code-tag">
                                        lines
                                    </span>
                                    <span className="lines-of-code-number">
                                        1.7k
                                    </span>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag-alt open-source">Open-Source</div>
                            &nbsp;
                            <div className="tag-alt python">Python</div>
                        </div>
                        <img
                            src={star}
                            height="20"
                            width="20"
                            loading="lazy"
                            alt="star icon"
                        />
                        <span id="star-count">{schmandiStars}</span>
                        <p className="description">
                        Just another discord.py bot
                        </p>
                    </div>
                    <div className="project-card">
                        <h3 className="title">
                            <i className="fas fa-code" aria-hidden="true"></i>
                            <a
                                target="_blank"
                                href="https://anditv.dev/sites/average"
                                rel="noreferrer"
                            >
                                average
                            </a>
                            <br />
                            <div className="lines-of-code-container">
                                <span className="lines-of-code-tag">lines</span>
                                <span className="lines-of-code-number">
                                    25.7k
                                </span>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag closed-source">
                                closed-source
                            </div>
                            <div className="tag php">PHP</div>
                            <div className="tag js">JS</div>
                            <div className="tag python">Python</div>
                        </div>
                        <p className="description">
                            Websites &amp; Bot of average
                        </p>
                    </div>
                </div>
            </center>
        </>
    );
}
