import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../elements/home/Home';
import ErrorPage from './error-page';
import IP_Info from '../elements/sites/ipinfo/IPInfo';
import WebhookDeleter from '../elements/sites/webhookdeleter/WebhookDeleter';
import About from '../elements/sites/about/About';
import OfficeISO from '../elements/sites/office-iso/Office';
import Schmandi from '../elements/sites/schmandi/Schmandi.jsx';
import AudioHitMarker from '../components/core/Audio';

const COOKIE_NAME = 'clickCount';

const getClickCountFromCookie = () => {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${COOKIE_NAME}=`))
        ?.split('=')[1];
    return cookieValue ? parseInt(cookieValue, 10) : 0;
};

const setClickCountToCookie = (count) => {
    document.cookie = `${COOKIE_NAME}=${count}; path=/;`;
};

export default function RouterManager() {
    useEffect(() => {
        document.documentElement.style.cursor = "url('https://i.ibb.co/X2Jkz6r/image.png'), default";

        const handleDocumentClick = () => {
            let clickCount = getClickCountFromCookie();
            clickCount += 1;
            setClickCountToCookie(clickCount);
            AudioHitMarker();
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path="/sites/ipinfo"
                    element={<IP_Info />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path="/sites/webhookdeleter"
                    element={<WebhookDeleter />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path="/sites/about"
                    element={<About />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path="/sites/office-iso"
                    element={<OfficeISO />}
                    errorElement={<ErrorPage />}
                />
                <Route
                    path="/projects/schmandi"
                    element={<Schmandi />}
                    errorElement={<ErrorPage />}
                />
            </Routes>
        </Router>
    );
}
