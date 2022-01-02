import { validateEmail } from '../email';
import { ErrorModel } from '../error';

import { ContactModel } from './contact.model';

export const contactSchema = (data: ContactModel): ErrorModel | null => {
	const { email, name, message } = data;

	if (!email)
		return { message: 'Please enter an email', reason: 'string.empty' };

	if (!validateEmail(email))
		return {
			message: 'Please a valid email address',
			reason: 'string.invalid',
		};

	if (!email.trim().length)
		return { message: 'Please enter an email', reason: 'string.empty' };

	if (!name)
		return { message: 'Please enter your name', reason: 'string.empty' };

	if (!name.trim().length)
		return { message: 'Please enter your name', reason: 'string.empty' };

	if (!message)
		return { message: 'Please enter a message', reason: 'string.empty' };

	if (!message.trim().length)
		return { message: 'Please enter a message', reason: 'string.empty' };

	return null;
};
