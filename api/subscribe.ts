import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // Notify RAC team of new subscriber
    await resend.emails.send({
      from: 'RAC — REDtech Africa Consulting <hello@momms.co.uk>',
      to: ['olu@redtechafrica.com'],
      cc: ['david.oludepo@gmail.com'],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;padding:32px;background:#1a1a1a;color:#fff;border-radius:12px;">
          <h2 style="color:#8e5e42;margin-top:0;">New Subscriber</h2>
          <p style="color:#ccc;">A new visitor subscribed to the REDtech Africa newsletter:</p>
          <p style="font-size:18px;color:#fff;font-weight:bold;">${email}</p>
          <hr style="border-color:#333;margin:24px 0;" />
          <p style="color:#888;font-size:12px;">© ${new Date().getFullYear()} REDtech Africa Consulting · redtechafrica.com</p>
        </div>
      `,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: 'RAC — REDtech Africa Consulting <hello@momms.co.uk>',
      to: [email],
      subject: "You're subscribed — REDtech Africa Consulting",
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:560px;margin:0 auto;background:#f4f1ee;padding:32px 16px;">
          <div style="background:#1a1a1a;padding:28px 32px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="color:#fff;font-size:20px;margin:0;">REDtech Africa Consulting</h1>
            <p style="color:#8e5e42;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:8px 0 0;">Subscribed</p>
          </div>
          <div style="background:#fff;padding:36px 32px;border-radius:0 0 12px 12px;">
            <h2 style="color:#1a1a1a;font-size:22px;margin:0 0 16px;">Welcome aboard. 🎉</h2>
            <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 24px;">You'll now receive exclusive insights on Africa's tech revolution, workforce trends, and RAC's latest thinking — straight to your inbox.</p>
            <div style="background:#f9f7f5;border-left:4px solid #8e5e42;padding:14px 18px;border-radius:0 8px 8px 0;margin:0 0 28px;">
              <p style="color:#333;font-size:14px;line-height:1.6;margin:0;font-style:italic;">"Closing the gap between the workforce you have and the results you need."</p>
            </div>
            <a href="https://redtechafrica.com" style="display:inline-block;background:#8e5e42;color:#fff;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;">Visit redtechafrica.com →</a>
          </div>
          <p style="color:#aaa;font-size:11px;text-align:center;margin-top:20px;">© ${new Date().getFullYear()} REDtech Africa Consulting · You're receiving this because you subscribed on our website.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
