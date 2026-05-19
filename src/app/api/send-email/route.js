import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { formData, formType } = body;

    // Create a formatted email body
    const emailBody = `
📧 NEW FORM SUBMISSION - ${formType}
==========================================

📅 Date: ${new Date().toLocaleString()}
🏷️  Form Type: ${formType}

📋 Form Data:
${Object.entries(formData)
  .map(([key, value]) => {
    // Format field names nicely
    const formattedKey = key
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return `• ${formattedKey}: ${value}`;
  })
  .join('\n')}

==========================================
🔗 Website: WTB DXB Car Rental Service
📧 Sent To: iamhaider072@gmail.com
    `;

    // Log the email content (in production, you'd send this via email service)
    console.log('📧 Email Content:', emailBody);
    
    // For demo purposes, we'll just log it
    // In production, you would integrate with an email service like:
    // - Resend, SendGrid, Nodemailer, AWS SES, etc.
    
    // Example with Resend (uncomment and configure if you have Resend):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@wtdxb.com',
      to: 'iamhaider072@gmail.com',
      subject: `🚗 New ${formType} Submission - WTB DXB`,
      html: `<pre>${emailBody}</pre>`
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully!' 
    });

  } catch (error) {
    console.error('❌ Error processing form submission:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit form' 
    }, { status: 500 });
  }
}
