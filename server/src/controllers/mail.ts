import { Request, Response } from 'express';
import sgMail from '@sendgrid/mail';

import { env } from '../config';

import { ResponseBody, EmailRequestBody } from './controllers.types';

sgMail.setApiKey(env.SENDGRID_API_KEY);

export const sendMail = async (
	req: Request<undefined, ResponseBody, EmailRequestBody>,
	res: Response
) => {
	const msg = {
		to: env.SENDGRID_SENDER_EMAIL,
		from: env.SENDGRID_SENDER_EMAIL,
		subject: 'Mail from contact form - isakgranqvist.com',
		html: `
            <div>
                <h3>${req.body.email}</h3>
                <h4>${req.body.name}</h4>
                <p>${req.body.message}</p>
            </div>
        `,
	};

	try {
		await sgMail.send(msg);

		return res.json({
			message: 'Message sent',
			success: true,
			data: null,
		});
	} catch {
		return res.json({
			message: 'Server error',
			success: false,
			data: null,
		});
	}
};
