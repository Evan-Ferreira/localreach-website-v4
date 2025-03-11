import React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = async ({
    name,
    email,
    phone,
    message,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h2
            style={{
                color: '#333',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
            }}
        >
            Local Reach Contact Form
        </h2>

        <div style={{ marginTop: '20px' }}>
            <p style={{ margin: '10px 0' }}>
                <strong>Name:</strong> {name}
            </p>
            <p style={{ margin: '10px 0' }}>
                <strong>Email:</strong> {email}
            </p>
            <p style={{ margin: '10px 0' }}>
                <strong>Phone:</strong> {phone}
            </p>
            <div style={{ margin: '20px 0' }}>
                <strong>Message:</strong>
                <p
                    style={{
                        backgroundColor: '#f5f5f5',
                        padding: '15px',
                        borderRadius: '5px',
                        marginTop: '5px',
                    }}
                >
                    {message}
                </p>
            </div>
        </div>

        <div
            style={{
                marginTop: '30px',
                paddingTop: '20px',
                borderTop: '1px solid #ddd',
                fontSize: '12px',
                color: '#666',
            }}
        >
            <p>This is an automated message from your website contact form.</p>
        </div>
    </div>
);
