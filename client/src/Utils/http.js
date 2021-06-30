const env = 'production';
const serverAddr = env === 'production' ? 'https://isakgranqvist.com/api' : 'http://localhost:8081/api';

async function GET(url, signal) {
    const response = await fetch(serverAddr + url, {
        method: 'GET',
        signal: signal,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await response.json();
}

async function POST(url, body) {
    const response = await fetch(serverAddr + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
}

const exports = { GET, POST };
export default exports;