import HeaderComponent from '../../../components/core/Header';
import AboutComponent from '../../../components/sites/about/AboutComponent';



export default function AboutSiteComponent() {
    return (
        <>
            <HeaderComponent activeTab={5} />

            <main>
                <AboutComponent />
            </main>
        </>
    );
}
