// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // ✅ CORRECTED: Module name is now a string

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    // 1. Email to the Website Owner (You)
    const ownerMailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.OWNER_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email, // Makes replying easy
      html: `
        <h2>New Message from Your Website's Contact Form</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // 2. Confirmation Email to the User
    const userMailOptions = {
      from: `"Your Company Name" <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: `We've Received Your Message!`,
      html: `
        <h2>Thank you for contacting us, ${firstName}!</h2>
        <p>We have successfully received your message and will get back to you as soon as possible.</p>
        <p>Here is a copy of your submission:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; margin-left: 0;">
          <p>${message.replace(/\n/g, '<br>')}</p>
        </blockquote>
        <p>Best regards,</p>
        <p>The Team at Your Company Name</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}