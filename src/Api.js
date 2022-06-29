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

async function addUserTask(jwt, task) {
    const response = await fetch(`${connection}/user/tasks`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
    return { status: response.status, data: (response.status === 201 ? await response.json() : {}) };
}

async function removeUserTasks(jwt, tasksIds) {
    const response = await fetch(`${connection}/user/tasks`, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(tasksIds),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
    return { status: response.status };
}

async function updateUserTasks(jwt, updates) {
    const response = await fetch(`${connection}/user/tasks`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(updates),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
    return { status: response.status };
}

async function getUserFirms(jwt) {
    const response = await fetch(`${connection}/user/firms`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
    return { status: response.status, data: (response.status === 200 ? await response.json() : {}) };
}

async function getUserUnits(jwt) {
    const response = await fetch(`${connection}/user/units`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    });
    return { status: response.status, data: (response.status === 200 ? await response.json() : {}) };
}

export { login, getUserTasks, addUserTask, removeUserTasks, updateUserTasks, getUserFirms, getUserUnits };