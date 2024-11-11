'use server';

import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.HOSTINGER_EMAIL,
    pass: process.env.HOSTINGER_PASSWORD,
  },
  tls: { ciphers: 'TLSv1.2' },
  requireTLS: true,
  debug: true,
});

export async function submitContactForm(values) {
  try {
    // Send email using nodemailer
    await transporter.sendMail({
      from: process.env.HOSTINGER_EMAIL,
      to: process.env.HOSTINGER_EMAIL,
      subject: `New Contact Form Submission - ${values.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Phone:</strong> ${values.phone}</p>
        <p><strong>Service:</strong> ${values.service}</p>
        <p><strong>Message:</strong> ${values.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}
