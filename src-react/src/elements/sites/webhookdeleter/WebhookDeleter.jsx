import React from 'react';
import HeaderComponent from '../../../components/core/Header';
import WebhookComponent from '../../../components/sites/webhookdeleter/WebhookComponent';

export default function WebhookSiteComponent() {
    return (
        <>
            <HeaderComponent activeTab={4} />

            <main>
                <WebhookComponent />
            </main>
        </>
    );
}
