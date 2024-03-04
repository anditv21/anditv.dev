import HeaderComponent from '../../../components/core/Header';
import IpInfoComponent from '../../../components/sites/ipinfo/InfoComponent';

export default function IpSiteComponent() {
    return (
        <>
            <HeaderComponent activeTab={2} />

            <main>
                <IpInfoComponent />
            </main>
        </>
    );
}
