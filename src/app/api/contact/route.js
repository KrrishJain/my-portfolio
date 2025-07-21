import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Explicit environment variable mapping with fallbacks
    const smtpConfig = {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: (process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      fromEmail: process.env.SMTP_FROM_EMAIL,
      toEmail: process.env.SMTP_TO_EMAIL,
    };

    // Log the actual configuration being used (remove sensitive data)
    console.log('SMTP Configuration:', {
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      user: smtpConfig.user ? `${smtpConfig.user.substring(0, 3)}***` : 'NOT SET',
      pass: smtpConfig.pass ? 'SET' : 'NOT SET',
      fromEmail: smtpConfig.fromEmail ? `${smtpConfig.fromEmail.substring(0, 3)}***` : 'NOT SET',
      toEmail: smtpConfig.toEmail ? `${smtpConfig.toEmail.substring(0, 3)}***` : 'NOT SET'
    });

    // Check if critical environment variables are set
    if (!smtpConfig.user || !smtpConfig.pass || !smtpConfig.fromEmail || !smtpConfig.toEmail) {
      const missing = [];
      if (!smtpConfig.user) missing.push('SMTP_USER');
      if (!smtpConfig.pass) missing.push('SMTP_PASS');
      if (!smtpConfig.fromEmail) missing.push('SMTP_FROM_EMAIL');
      if (!smtpConfig.toEmail) missing.push('SMTP_TO_EMAIL');
      
      console.error('Missing critical environment variables:', missing);
      return NextResponse.json(
        { error: 'Server configuration error', details: `Missing: ${missing.join(', ')}` },
        { status: 500 }
      );
    }

    // Create transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
      // Add additional options for better compatibility
      tls: {
        rejectUnauthorized: false // This helps with some hosting providers
      },
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    });

    // Test the connection with more detailed error reporting
    try {
      console.log(`Attempting to connect to ${smtpConfig.host}:${smtpConfig.port}`);
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
        response: verifyError.response
      });
      return NextResponse.json(
        { 
          error: 'SMTP connection failed', 
          details: verifyError.message,
          config: `Trying to connect to ${smtpConfig.host}:${smtpConfig.port}`
        },
        { status: 500 }
      );
    }

    // Email content for you (receiving the contact form submission)
    const mailOptions = {
      from: smtpConfig.fromEmail,
      to: smtpConfig.toEmail, // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #6c757d; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: smtpConfig.fromEmail,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>Best regards,<br>Krish Jain</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    try {
      console.log('Sending notification email...');
      await transporter.sendMail(mailOptions);
      console.log('Notification email sent successfully');
      
      console.log('Sending auto-reply email...');
      await transporter.sendMail(autoReplyOptions);
      console.log('Auto-reply email sent successfully');
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email', details: emailError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
