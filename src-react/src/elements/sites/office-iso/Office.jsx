import React from 'react';
import HeaderComponent from '../../../components/core/Header';
import OfficeIsoComponent from '../../../components/sites/office-iso/OfficeIsoComponent';

export default function WebhookSiteComponent() {
    return (
        <>
            <HeaderComponent activeTab={5} />

            <main>
                <OfficeIsoComponent />
            </main>
        </>
    );
}
