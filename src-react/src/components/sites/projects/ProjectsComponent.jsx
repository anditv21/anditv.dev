import { useState, useEffect } from 'react';
import { getGithubStars } from '../../../app/userControler';
import star from '../../../assets/images/icons/star.svg';
import code from '../../../assets/images/icons/code.svg';

export default function ProjectsComponent() {
    const [gitStars, setGitStats] = useState('0');

    useEffect(() => {
        getGithubStars()
            .then((stars) => {
                if (stars) setGitStats(stars);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <center>
                <div className="projects-sector content-center">
                    <h2 style={{ color: 'white' }}>My main Projects</h2>
                    <div className="project-card" tabIndex="10">
                        <h3 className="title">
                            <a href="https://anditv.dev/sites/commits/">
                                <img
                                    src={code}
                                    height="20"
                                    width="20"
                                    loading="lazy"
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
                        <img src={star} height="20" width="20" loading="lazy" />
                        <span id="star-count">{gitStars}</span>
                        <p className="description">
                            🔧 User management panel with several themes &amp;
                            API Examples
                        </p>
                    </div>
                    <div className="project-card" tabIndex="11">
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
