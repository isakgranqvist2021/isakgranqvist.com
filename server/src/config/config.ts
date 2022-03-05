import 'dotenv/config';

export const env = {
	NODE_PORT: process.env.NODE_PORT,
	NODE_HOST: process.env.NODE_HOST,
	NODE_ENV: process.env.NODE_ENV,
	SENDGRID_API_KEY: process.env.SENDGRID_API_KEY as string,
	SENDGRID_SENDER_EMAIL: process.env.SENDGRID_SENDER_EMAIL as string,
};
