import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { changePageTitle } from '../../app/userControler';
import 'bootstrap/dist/css/bootstrap.min.css';

const tabTitles = {
    1: 'Home',
    2: 'IP-Info',
    3: 'Projects',
    4: 'Webhook Deleter',
    5: 'About',
};

const tabLinks = {
    1: '/',
    2: '/sites/ipinfo',
    3: '/sites/projects',
    4: '/sites/webhookdeleter',
    5: '/sites/about',
};

const HeaderComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const activeTab = Object.values(tabLinks).indexOf(location.pathname) + 1;
        changePageTitle(`anditv.dev | ${tabTitles[activeTab]}`);
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
            <Link to="/" className={`navbar-brand ${isMobileMenuOpen ? 'd-none' : ''}`}>
                    anditv.dev
                </Link>

                <div className="d-lg-none">
                    <button
                        className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
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
                            {/* Use a white hamburger icon */}
                            &#9776;
                        </span>
                    </button>
                </div>

                <div className={`d-none d-lg-block ${isMobileMenuOpen ? 'd-none' : ''}`}>
                    <ul className="nav nav-pills justify-content-center">
                        {[1, 2, 3, 4, 5].map((tab) => (
                            <li className="nav-item" key={tab}>
                                <Link
                                    to={tabLinks[tab]}
                                    className={
                                        location.pathname === tabLinks[tab]
                                            ? 'nav-link active'
                                            : 'nav-link nav-link-new'
                                    }
                                    onClick={() => handleClick(tabLinks[tab])}
                                >
                                    {tabTitles[tab]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav d-lg-none">
                        {[1, 2, 3, 4, 5].map((tab) => (
                            <li className="nav-item" key={tab}>
                                <Link
                                    to={tabLinks[tab]}
                                    className={
                                        location.pathname === tabLinks[tab]
                                            ? 'nav-link active'
                                            : 'nav-link nav-link-new'
                                    }
                                    onClick={() => handleClick(tabLinks[tab])}
                                >
                                    {tabTitles[tab]}
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
