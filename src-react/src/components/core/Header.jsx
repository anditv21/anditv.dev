import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { changePageTitle } from '../../app/userControler';
import 'bootstrap/dist/css/bootstrap.min.css';

const tabsData = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'IP-Info', link: '/sites/ipinfo' },
    { id: 3, title: 'Projects', link: '/sites/projects' },
    { id: 4, title: 'Webhook Deleter', link: '/sites/webhookdeleter' },
    { id: 5, title: 'Office-ISO', link: '/sites/office-iso' },
    { id: 6, title: 'About', link: '/sites/about' },
];

const HeaderComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const activeTab = tabsData.find(
            (tab) => tab.link === location.pathname,
        );
        if (activeTab) {
            changePageTitle(`anditv.dev | ${activeTab.title}`);
        }
    }, [location.pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClick = (urlPath) => {
        navigate(urlPath);
        setMobileMenuOpen(false);
    };

    return (
        <div className="container">
            <header className="d-flex justify-content-between align-items-center py-3">
                <Link
                    to="/"
                    className={`navbar-brand ${
                        isMobileMenuOpen ? 'd-none' : ''
                    }`}
                >
                    anditv.dev
                </Link>

                <div className="d-lg-none">
                    <button
                        className={`navbar-toggler ${
                            isMobileMenuOpen ? 'collapsed' : ''
                        }`}
                        type="button"
                        onClick={toggleMobileMenu}
                        style={{
                            borderRadius: '50%', // Make the button round
                            backgroundColor: 'transparent', // Remove background color
                            border: 'none', // Remove border
                            color: '#fff', // Set icon color to white
                            padding: '8px 12px',
                        }}
                    >
                        <span className="navbar-toggler-icon">
                            {}
                            &#9776;
                        </span>
                    </button>
                </div>

                <div
                    className={`d-none d-lg-block ${
                        isMobileMenuOpen ? 'd-none' : ''
                    }`}
                >
                    <ul className="nav nav-pills justify-content-center">
                        {tabsData.map((tab) => (
                            <li className="nav-item" key={tab.id}>
                                <Link
                                    to={tab.link}
                                    className={
                                        location.pathname === tab.link
                                            ? 'nav-link active'
                                            : 'nav-link nav-link-new'
                                    }
                                    onClick={() => handleClick(tab.link)}
                                >
                                    {tab.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className={`collapse navbar-collapse ${
                        isMobileMenuOpen ? 'show' : ''
                    }`}
                >
                    <ul className="navbar-nav d-lg-none">
                        {tabsData.map((tab) => (
                            <li className="nav-item" key={tab.id}>
                                <Link
                                    to={tab.link}
                                    className={
                                        location.pathname === tab.link
                                            ? 'nav-link active'
                                            : 'nav-link nav-link-new'
                                    }
                                    onClick={() => handleClick(tab.link)}
                                >
                                    {tab.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default HeaderComponent;
