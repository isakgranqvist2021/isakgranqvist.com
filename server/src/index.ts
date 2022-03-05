import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import { env } from './config';
import { sendMail } from './controllers';

const app = express();

app.use(cors());
app.use(express.json());

app.use('*', (req: Request, res: Response, next: NextFunction) => {
	console.log(`${req.method} ${req.originalUrl} ${Date.now()}`);

	return next();
});

app.post('/api/contact', sendMail);

app.listen(env.NODE_PORT, () => {
	console.log(`Server listening on ${env.NODE_HOST}:${env.NODE_PORT}`);
});
