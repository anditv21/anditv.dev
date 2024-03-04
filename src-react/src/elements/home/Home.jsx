import HeaderComponent from '../../components/core/Header';
import MyInfoComponent from '../../components/home/MyInfoComponent';

export default function Home() {
    return (
        <>
            <HeaderComponent activeTab={1} />

            <main>
                <MyInfoComponent />
            </main>
        </>
    );
}
