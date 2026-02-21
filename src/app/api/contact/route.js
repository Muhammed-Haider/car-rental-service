import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, phone, email, message } = await request.json();

  // Basic validation
  if (!name || !phone || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // More specific validation (e.g., email format)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
  }

  // In a real application, you would now:
  // 1. Save the data to a database (e.g., using Prisma or MongoDB)
  // 2. Send an email notification (e.g., using Nodemailer or Resend)

  console.log('Contact form submitted:', { name, phone, email, message });

  return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' });
}
