const env = 'production';
const serverAddr =
	env === 'production'
		? 'https://isakgranqvist.com/api'
		: 'http://localhost:8081/api';

export const GET = async (endpoint: string, signal: AbortSignal) => {
	const response = await fetch(serverAddr + endpoint, {
		method: 'GET',
		signal: signal,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};

export const POST = async (endpoint: string, body: Record<string, any>) => {
	const response = await fetch(serverAddr + endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	return await response.json();
};
