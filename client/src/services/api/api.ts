import { ContactModel } from 'models';

import { GET, POST } from '../http';

export const getProjects = async (signal?: AbortSignal) =>
	await GET({ endpoint: '/projects', signal });

export const postContact = async (body: ContactModel, signal?: AbortSignal) =>
	await POST({
		endpoint: '/contact',
		body,
		signal,
	});
