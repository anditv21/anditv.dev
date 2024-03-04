import HeaderComponent from '../../../components/core/Header';
import ProjectsComponent from '../../../components/sites/projects/ProjectsComponent';

export default function ProjectsSiteComponent() {
    return (
        <>
            <HeaderComponent activeTab={3} />

            <main>
                <ProjectsComponent />
            </main>
        </>
    );
}
