import { NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const smsMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

        const { sid } = await client.messages.create({
            body: smsMessage,
            to: process.env.ADMIN_PHONE_NUMBER!,
            from: process.env.TWILIO_PHONE_NUMBER!,
        });

        return NextResponse.json({ success: true, sid });
    } catch (error) {
        console.error('Error sending SMS:', error);
        return NextResponse.json(
            { error: 'Failed to send SMS' },
            { status: 500 }
        );
    }
}
