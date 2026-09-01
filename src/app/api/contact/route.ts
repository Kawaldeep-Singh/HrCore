import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP environment variables are missing. Simulating successful email send for now.");
      // In a real environment, this should probably return an error if you want to enforce it.
      // For development, we just pretend it worked.
      return NextResponse.json({ success: true, message: 'Simulated email sent' }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Where to send the contact form emails
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
          body { font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
          .header { background-color: #060d10; color: #ffffff; padding: 35px 40px; text-align: center; border-bottom: 5px solid #16a34a; }
          .header h1 { margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1.5px; }
          .content { padding: 45px 40px; }
          .content h2 { color: #111827; font-size: 22px; margin-top: 0; margin-bottom: 30px; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px; }
          .info-group { margin-bottom: 25px; }
          .label { display: block; font-size: 13px; text-transform: uppercase; color: #6b7280; font-weight: 700; margin-bottom: 8px; letter-spacing: 0.5px; }
          .value { font-size: 16px; color: #1f2937; background-color: #f9fafb; padding: 15px 18px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 0; word-wrap: break-word; font-weight: 500; }
          .message-box { background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 25px; border-radius: 0 8px 8px 0; margin-top: 10px; }
          .message-box p { margin: 0; color: #166534; font-size: 16px; line-height: 1.7; }
          .footer { background-color: #f9fafb; padding: 25px; text-align: center; color: #9ca3af; font-size: 14px; border-top: 1px solid #e5e7eb; font-weight: 500; }
        </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>HR CORE</h1>
            </div>
            <div class="content">
              <h2>New Lead / Enquiry Received 🚀</h2>
              
              <div class="info-group">
                <span class="label">Full Name</span>
                <p class="value">${name}</p>
              </div>
              
              <div class="info-group">
                <span class="label">Email Address</span>
                <p class="value"><a href="mailto:${email}" style="color: #16a34a; text-decoration: none;">${email}</a></p>
              </div>
              
              <div class="info-group">
                <span class="label">Phone Number</span>
                <p class="value">${phone || '<span style="color:#aaa;font-style:italic;">Not provided</span>'}</p>
              </div>
              
              <div class="info-group" style="margin-top: 35px;">
                <span class="label">Message / Requirement</span>
                <div class="message-box">
                  <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              This is an automated message from the HR Core Website Form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
