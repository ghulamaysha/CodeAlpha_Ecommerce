const API = 'http://localhost:5000/api';

// Login function
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (!email || !password) {
        message.innerHTML = '<p class="error">Sab fields fill karo!</p>';
        return;
    }

    try {
        const response = await fetch(`${API}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            message.innerHTML = '<p class="success">Login ho gaya! Redirect ho raha hai... ✅</p>';
            setTimeout(() => window.location.href = 'index.html', 1500);
        } else {
            message.innerHTML = `<p class="error">${data.message}</p>`;
        }
    } catch (err) {
        message.innerHTML = '<p class="error">Server se connect nahi ho paya!</p>';
    }
}

// Register function
async function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (!name || !email || !password) {
        message.innerHTML = '<p class="error">Sab fields fill karo!</p>';
        return;
    }

    try {
        const response = await fetch(`${API}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            message.innerHTML = '<p class="success">Account ban gaya! Login karo ✅</p>';
            setTimeout(() => window.location.href = 'login.html', 1500);
        } else {
            message.innerHTML = `<p class="error">${data.message}</p>`;
        }
    } catch (err) {
        message.innerHTML = '<p class="error">Server se connect nahi ho paya!</p>';
    }
}