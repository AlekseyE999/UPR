const connection = 'https://localhost:7229';

async function login(login, password) {
    const response = await fetch(`${connection}/login`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            login: login,
            password: btoa(password),
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return { status: response.status, data: (response.status === 200 ? await response.json() : {}) };
}

async function getUserTasks(jwt) {
    const response = await fetch(`${connection}/user/tasks`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
    return { status: response.status, data: (response.status === 200 ? await response.json() : {}) };
}

export { login };