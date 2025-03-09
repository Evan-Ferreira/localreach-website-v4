import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../_components/navbar/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'localreach@thelocalreach.ca',
            to: ['evanjfer@gmail.com'],
            subject: 'Local Reach Contact Form',
            react: await EmailTemplate({ name, email, phone, message }),
        });

        if (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
