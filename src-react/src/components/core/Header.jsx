import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { changePageTitle } from '../../app/userControler';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/main.css';

const tabsData = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'IP-Info', link: '/sites/ipinfo' },
    { id: 3, title: 'Webhook Deleter', link: '/sites/webhookdeleter' },
    { id: 4, title: 'Office-ISO', link: '/sites/office-iso' },
    { id: 5, title: 'About', link: '/sites/about' }
]

const HeaderComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const activeTab = tabsData.find(
            (tab) => tab.link === location.pathname,
        );
        if (activeTab) {
            changePageTitle(`anditv.dev | ${activeTab.title}`);
        }
    }, [location.pathname]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClick = (urlPath) => {
        navigate(urlPath);
        setMobileMenuOpen(false);
    };

    const hours = currentTime.getHours() % 12 || 12;
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const ampm = currentTime.getHours() >= 12 ? 'pm' : 'am';

    return (
<div className="container">
    <header className="d-flex justify-content-between align-items-center py-3">
        <div>
            <Link to="/" className={`navbar-brand ${isMobileMenuOpen ? 'd-none' : ''}`}>
                <p className="title">anditv<i className="dot">.</i><i>dev</i></p>
            </Link>
        </div>
        <div className="nav-container">
            {/* Navbar Links for Larger Screens */}
            <div className={`d-none d-lg-block ${isMobileMenuOpen ? 'd-none' : ''}`}>
                <ul className="nav nav-pills">
                    {tabsData.map((tab) => (
                        <li className="nav-item" key={tab.id}>
                            <Link to={tab.link} className={location.pathname === tab.link ? 'nav-link active' : 'nav-link nav-link-new'} onClick={() => handleClick(tab.link)}>
                                {tab.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {/* Toggle Button for Mobile */}
        <div className="d-lg-none">
            <button className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`} type="button" onClick={toggleMobileMenu} style={{ /* styles */ }}>
                <span className="navbar-toggler-icon">&#9776;</span>
            </button>
        </div>
        {/* Mobile Navbar Links */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav d-lg-none">
                {tabsData.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                        <Link to={tab.link} className={location.pathname === tab.link ? 'nav-link active' : 'nav-link nav-link-new'} onClick={() => handleClick(tab.link)}>
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
