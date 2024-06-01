import React, { useState } from 'react';
import { deleteWebhook } from '../../../app/userControler';
import Avatar from '../../../assets/images/avatar.webp';
import '../../../assets/styles/main.css';

export default function WebhookComponent() {
    const [webhook, setWebhook] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await deleteWebhook(webhook);
            setMessage({
                type: 'success',
                content: 'Webhook deleted successfully',
            });
        } catch (error) {
            setMessage({ type: 'error', content: 'Error deleting webhook' });
            console.error('Error deleting webhook:', error);
        }
    };

    const handleInputChange = (event) => {
        setWebhook(event.target.value);
    };

    return (
        <>
            <script
                src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
                type="text/javascript"
            ></script>
            <center>
                <br />
                <div className="content-center">
                    <a
                        href="https://github.com/anditv21/anditv.dev"
                        target="_blank"
                        aria-label="GitHub Link"
                        rel="noreferrer"
                    >
                        <link rel="preload" href={Avatar} as="image" />
                        <img
                            className="avatar"
                            src={Avatar}
                            alt="avatar"
                            width="150"
                            height="150"
                        />
                    </a>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            autoComplete="off"
                            type="text"
                            name="url"
                            id="deleteurl"
                            value={webhook}
                            onChange={handleInputChange}
                            className="custom-input"
                            placeholder="Insert url here"
                        />
                        <br />
                        <button className="custom-button" type="submit">
                            Delete Webhook
                        </button>
                    </form>
                    {message && (
                        <p
                            style={{
                                color:
                                    message.type === 'success'
                                        ? 'green'
                                        : 'red',
                            }}
                        >
                            {message.content}
                        </p>
                    )}
                    <p style={{ color: 'white' }}>
                        What is a{' '}
                        <a
                            style={{
                                color: 'aqua',
                                textDecoration: 'underline',
                            }}
                            href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            discord webhook?
                        </a>
                    </p>
                    <br />
                </div>
            </center>
        </>
    );
}
