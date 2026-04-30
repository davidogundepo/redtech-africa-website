import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const clientNotificationHtml = (data: {
  name: string;
  email: string;
  organisation: string;
  serviceInterest: string;
  message: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry — REDtech Africa Consulting</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1ee;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;border-radius:12px 12px 0 0;text-align:center;">
              <img src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fredtech_v2.png?alt=media&token=37749e94-dba2-4ba6-8e80-283b7d74bda2" alt="REDtech Africa" width="60" height="60" style="object-fit:contain;margin-bottom:16px;display:block;margin-left:auto;margin-right:auto;" />
              <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0;letter-spacing:-0.5px;">REDtech Africa Consulting</h1>
              <p style="color:#8e5e42;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:8px 0 0;">New Website Enquiry</p>
            </td>
          </tr>

          <!-- Service Badge -->
          <tr>
            <td style="background-color:#8e5e42;padding:14px 40px;text-align:center;">
              <span style="color:#ffffff;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${data.serviceInterest}</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;border-radius:0 0 12px 12px;">

              <p style="color:#555;font-size:14px;margin:0 0 32px;line-height:1.6;">A new enquiry has been submitted via the REDtech Africa website. Here are the details:</p>

              <!-- Details -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ede8;">
                    <p style="color:#888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 4px;">Full Name</p>
                    <p style="color:#1a1a1a;font-size:16px;font-weight:600;margin:0;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ede8;">
                    <p style="color:#888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 4px;">Email Address</p>
                    <p style="margin:0;"><a href="mailto:${data.email}" style="color:#8e5e42;font-size:15px;text-decoration:none;">${data.email}</a></p>
                  </td>
                </tr>
                ${data.organisation ? `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ede8;">
                    <p style="color:#888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 4px;">Organisation</p>
                    <p style="color:#1a1a1a;font-size:15px;margin:0;">${data.organisation}</p>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ede8;">
                    <p style="color:#888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 4px;">Service Interest</p>
                    <p style="color:#1a1a1a;font-size:15px;font-weight:600;margin:0;">${data.serviceInterest}</p>
                  </td>
                </tr>
                ${data.message ? `
                <tr>
                  <td style="padding:12px 0;">
                    <p style="color:#888;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 8px;">Message</p>
                    <p style="color:#333;font-size:15px;line-height:1.7;margin:0;background:#f9f7f5;border-left:3px solid #8e5e42;padding:12px 16px;border-radius:0 8px 8px 0;">${data.message.replace(/\n/g, '<br>')}</p>
                  </td>
                </tr>` : ''}
              </table>

              <!-- Reply CTA -->
              <div style="margin-top:32px;text-align:center;">
                <a href="mailto:${data.email}?subject=Re: Your enquiry to REDtech Africa Consulting" style="display:inline-block;background-color:#8e5e42;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.5px;">Reply to ${data.name.split(' ')[0]} →</a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="color:#aaa;font-size:12px;margin:0;">© ${new Date().getFullYear()} REDtech Africa Consulting · <a href="https://redtechafrica.com" style="color:#8e5e42;text-decoration:none;">redtechafrica.com</a></p>
              <p style="color:#ccc;font-size:11px;margin:6px 0 0;">Lekki Phase 1, Lagos · Old Bond Street, Mayfair, London</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const userConfirmationHtml = (name: string, serviceInterest: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We've received your message — REDtech Africa</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ee;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1ee;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;border-radius:12px 12px 0 0;text-align:center;">
              <img src="https://firebasestorage.googleapis.com/v0/b/icdatinnovation.appspot.com/o/redtech_africa_websitee_v2%2Fredtech_v2.png?alt=media&token=37749e94-dba2-4ba6-8e80-283b7d74bda2" alt="REDtech Africa" width="60" height="60" style="object-fit:contain;margin-bottom:16px;display:block;margin-left:auto;margin-right:auto;" />
              <h1 style="color:#ffffff;font-size:22px;font-weight:700;margin:0;">REDtech Africa Consulting</h1>
              <p style="color:#8e5e42;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:8px 0 0;">Message Received</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;border-radius:0 0 12px 12px;">
              <h2 style="color:#1a1a1a;font-size:24px;font-weight:700;margin:0 0 16px;">Thank you, ${name.split(' ')[0]}.</h2>
              <p style="color:#555;font-size:15px;line-height:1.7;margin:0 0 24px;">We've received your enquiry regarding <strong style="color:#8e5e42;">${serviceInterest}</strong> and will be in touch shortly. Our team typically responds within one business day.</p>

              <div style="background:#f9f7f5;border-left:4px solid #8e5e42;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 32px;">
                <p style="color:#333;font-size:14px;line-height:1.7;margin:0;font-style:italic;">"RAC closes the gap — through resourcing, education, and digital advisory built from 15+ years on the inside."</p>
              </div>

              <p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 8px;">In the meantime, you can explore our work at:</p>
              <p style="margin:0 0 32px;"><a href="https://redtechafrica.com" style="color:#8e5e42;font-size:15px;font-weight:600;text-decoration:none;">redtechafrica.com →</a></p>

              <div style="text-align:center;">
                <a href="https://redtechafrica.com/services" style="display:inline-block;background-color:#8e5e42;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;">Explore Our Services →</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="color:#aaa;font-size:12px;margin:0;">© ${new Date().getFullYear()} REDtech Africa Consulting · <a href="https://redtechafrica.com" style="color:#8e5e42;text-decoration:none;">redtechafrica.com</a></p>
              <p style="color:#ccc;font-size:11px;margin:6px 0 0;">If you didn't submit this form, you can safely ignore this email.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, organisation, serviceInterest, message } = req.body;

  if (!name || !email || !serviceInterest) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // 1. Send notification to RAC team
    await resend.emails.send({
      from: 'RAC — REDtech Africa Consulting <hello@momms.co.uk>',
      to: ['olu@redtechafrica.com'],
      cc: ['david.oludepo@gmail.com'],
      replyTo: email,
      subject: `New Enquiry: ${serviceInterest} — ${name}`,
      html: clientNotificationHtml({ name, email, organisation, serviceInterest, message }),
    });

    // 2. Send confirmation to the user
    await resend.emails.send({
      from: 'RAC — REDtech Africa Consulting <hello@momms.co.uk>',
      to: [email],
      subject: `We've received your message — REDtech Africa Consulting`,
      html: userConfirmationHtml(name, serviceInterest),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
