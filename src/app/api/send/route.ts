import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, offer, message } = body;

        // Basic validation
        if (!name || !email || !offer || parseFloat(offer) < 420) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Grok-420 Offers <onboarding@resend.dev>', // Default testing domain. User needs to verify domain to change this.
            to: ['emil9030@gmail.com'],
            replyTo: email,
            subject: `NEW OFFER: $${offer} from ${name}`,
            html: `
                <h1>New Domain Offer Received</h1>
                <p><strong>Offer Amount:</strong> $${offer}</p>
                <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background: #f9f9f9;">
                    <h3>Contact Details:</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <hr />
                    <h3>Message:</h3>
                    <p>${message || 'No message provided.'}</p>
                </div>
                <p style="font-size: 12px; color: #888;">This email was sent from the grok-420.com contact form.</p>
            `,
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server Internal Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
