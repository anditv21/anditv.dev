import { useState, useEffect } from 'react';
import Avatar from '../../assets/images/avatar.webp';
import star from '../../assets/images/icons/star.svg';
import code from '../../assets/images/icons/code.svg';
import { getGithubStars } from '../../app/userControler';

const fetchStars = async (repoOwner, repoName, setStars) => {
    const stars = await getGithubStars(repoOwner, repoName);
    if (stars) setStars(stars);
};

export default function MeInformationsComponent() {
    const [panelStars, setPanelStars] = useState('0');
    const [schmandiStars, setSchmandiStars] = useState('0');
    const [leonardoWrapperStars, setLeonardoWrapperStars] = useState('0');
    const [commitLogStars, setCommitLogStars] = useState('0');

    useEffect(() => {
        const repositories = [
            { owner: 'anditv21', name: 'panel', setStars: setPanelStars },
            { owner: 'anditv21', name: 'schmandi', setStars: setSchmandiStars },
            {
                owner: 'theunkowndude',
                name: 'leonardoWrapper',
                setStars: setLeonardoWrapperStars,
            },
            {
                owner: 'dev-hoehle',
                name: 'simple-commit-log',
                setStars: setCommitLogStars,
            },
        ];

        const fetchAllStars = async () => {
            await Promise.all(
                repositories.map((repo) =>
                    fetchStars(repo.owner, repo.name, repo.setStars),
                ),
            );
        };

        fetchAllStars();
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
                                <span className="lines-of-code-tag">lines</span>
                                <span className="lines-of-code-number">
                                    1.7k
                                </span>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag-alt open-source">
                                Open-Source
                            </div>
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
                    <br />
                </div>
                <div className="projects-sector content-center">
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
                    <div className="project-card">
                        <h3 className="title">
                            <i className="fas fa-code" aria-hidden="true"></i>
                            <a
                                target="_blank"
                                href="https://github.com/anditv21/sharex-uploader"
                                rel="noreferrer"
                            >
                                sharex-uploader
                            </a>
                            <br />
                            <div className="lines-of-code-container">
                                <span className="lines-of-code-tag">lines</span>
                                <span className="lines-of-code-number">
                                    504
                                </span>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag-alt open-source">
                                Open-Source
                            </div>
                            &nbsp;
                            <div className="tag go">GO&nbsp;</div>
                            <div className="tag php">PHP</div>
                        </div>
                        <p className="description">
                            A basic sharex image/video uploader with discord
                            embeds. With GO or PHP server
                        </p>
                    </div>
                </div>
                <div className="projects-sector content-center">
                    <div className="project-card">
                        <h3 className="title">
                            <a href="https://github.com/theunkowndude/leonardoWrapper">
                                <img
                                    src={code}
                                    height="20"
                                    width="20"
                                    loading="lazy"
                                    alt="code icon"
                                />{' '}
                                leonardoWrapper
                            </a>
                            <a target="_blank" href="" rel="noreferrer"></a>
                            <br />
                            <div className="lines-of-code-container">
                                <span className="lines-of-code-tag">lines</span>
                                <span className="lines-of-code-number">
                                    N/A
                                </span>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag-alt open-source">
                                Open-Source
                            </div>
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
                        <span id="star-count">{leonardoWrapperStars}</span>
                        <p className="description">
                            Image Generation with Leonardo Library
                        </p>
                    </div>
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
                                simple-commit-log
                            </a>
                            <a target="_blank" href="" rel="noreferrer"></a>
                            <br />
                            <div className="lines-of-code-container">
                                <span className="lines-of-code-tag">lines</span>
                                <span className="lines-of-code-number">
                                    196
                                </span>
                            </div>
                        </h3>
                        <div className="tag-container">
                            <div className="tag-alt open-source">
                                Open-Source
                            </div>
                            &nbsp;
                            <div className="tag-alt php">PHP</div>
                        </div>
                        <img
                            src={star}
                            height="20"
                            width="20"
                            loading="lazy"
                            alt="star icon"
                        />
                        <span id="star-count">{commitLogStars}</span>
                        <p className="description">
                            Simple PHP script to retrieve and display latest
                            commits for a public GitHub repo.
                        </p>
                    </div>
                </div>
            </center>
        </>
    );
}
