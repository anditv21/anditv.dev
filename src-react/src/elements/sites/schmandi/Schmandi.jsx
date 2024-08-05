import React from 'react';
import HeaderComponent from '../../../components/core/Header';
import SchmandiComponent from '../../../components/sites/schmandi/Schmandi';

export default function WebhookSiteComponent() {
    return (
        <>
            <HeaderComponent activeTab={5} />

            <main>
                <SchmandiComponent />
            </main>
        </>
    );
}
