import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { personalName, email, clubName, phoneNumber, recipient } = body;

        // Create a transporter with custom SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'send.one.com',  // SMTP server from your image
            port: 465,             // SMTP port from your image
            secure: true,          // true for port 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: recipient,
            subject: `New Club Request: ${clubName}`,
            html: `
        <h1>New Club Registration Request</h1>
        <p><strong>Club Name:</strong> ${clubName}</p>
        <p><strong>Contact Person:</strong> ${personalName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
      `,
        });

        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
    }
}
