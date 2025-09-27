// Vercel serverless function for handling contact form submissions
// Uses SendGrid integration from blueprint:javascript_sendgrid
import { MailService } from '@sendgrid/mail';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const mailService = new MailService();

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate environment variable
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not set');
      return res.status(500).json({ 
        success: false, 
        message: 'Email service configuration error' 
      });
    }

    // Set up SendGrid
    mailService.setApiKey(process.env.SENDGRID_API_KEY);

    // Parse and validate request body
    const formData: ContactFormData = req.body;
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission from DevWorks Website</h2>
      <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      <p><strong>Project Type:</strong> ${formData.projectType}</p>
      <p><strong>Budget Range:</strong> ${formData.budget}</p>
      
      <h3>Project Details:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>This email was sent from the DevWorks website contact form.</em></p>
    `;

    const emailText = `
New Contact Form Submission from DevWorks Website

From: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}

Project Details:
${formData.message}

---
This email was sent from the DevWorks website contact form.
    `;

    // Send email
    await mailService.send({
      to: 'sohailharoon.b@gmail.com',
      from: 'devworks@gmail.com', // This should be a verified sender in SendGrid
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      text: emailText,
      html: emailHtml,
    });

    console.log('Email sent successfully to sohailharoon.b@gmail.com');

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
}