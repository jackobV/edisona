import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    const { jmeno, prijimeni, email, tel, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'your-smtp-host.com',
        port: 587,
        secure: false,
        auth: {
            user: 'your-email@example.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@example.com',
        to: 'recipient-email@example.com',
        subject: `New message from ${jmeno} ${prijimeni}`,
        text: `Name: ${jmeno} ${prijimeni}\nEmail: ${email}\nTel: ${tel}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email', error: error });
    }
}
