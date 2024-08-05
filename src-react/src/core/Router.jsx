import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../elements/home/Home';
import ErrorPage from './error-page';
import IP_Info from '../elements/sites/ipinfo/IPInfo';
import WebhookDeleter from '../elements/sites/webhookdeleter/WebhookDeleter';
import About from '../elements/sites/about/About';
import OfficeISO from '../elements/sites/office-iso/Office';
import Schmandi from '../elements/sites/schmandi/Schmandi.jsx';
import { useEffect } from 'react';
import AudioHitMarker from '../components/core/Audio';


export default function RouterManager() {
    useEffect(
        () => {
            document.documentElement.style.cursor = "url('https://i.ibb.co/X2Jkz6r/image.png'), default";

            document.addEventListener("click", AudioHitMarker);

            return () => {
                document.removeEventListener("click", AudioHitMarker);
            };
    }, []);

    return (
        <>
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
        </>
    );
}
