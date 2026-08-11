import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Resend API key is not configured on the server. Please set RESEND_API_KEY in your environment variables.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'rhythmpahwa14@gmail.com';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; color: #111;">
          <h2 style="border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Collaboration Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f7f7f7; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 15px;">${message}</div>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin-top: 25px;" />
          <p style="font-size: 12px; color: #666;">Sent from Rhythm Pahwa's Portfolio Contact Form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email.' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
