import { NextResponse } from 'next/server';

export async function GET() {
  // This endpoint helps debug environment variable issues
  const envCheck = {
    SMTP_HOST: process.env.SMTP_HOST || 'NOT SET',
    SMTP_PORT: process.env.SMTP_PORT || 'NOT SET',
    SMTP_SECURE: process.env.SMTP_SECURE || 'NOT SET',
    SMTP_USER: process.env.SMTP_USER ? 'SET' : 'NOT SET',
    SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'NOT SET',
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL ? 'SET' : 'NOT SET',
    SMTP_TO_EMAIL: process.env.SMTP_TO_EMAIL ? 'SET' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV || 'NOT SET',
  };

  console.log('Environment Variables Check:', envCheck);

  return NextResponse.json({
    message: 'Environment variables check',
    env: envCheck,
    timestamp: new Date().toISOString()
  });
}
