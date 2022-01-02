import { GetRequestOptions, PostRequestOptions } from './http.types';

const serverAddr = process.env.REACT_APP_SERVER_ADDR + '/api';

export const GET = async (options: GetRequestOptions) => {
	const { endpoint, signal } = options;

	const response = await fetch(serverAddr + endpoint, {
		method: 'GET',
		mode: 'no-cors',
		signal,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};

export const POST = async (options: PostRequestOptions) => {
	const { endpoint, signal, body } = options;

	const response = await fetch(serverAddr + endpoint, {
		method: 'POST',
		mode: 'no-cors',
		signal,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};
