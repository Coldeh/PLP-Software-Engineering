document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginPage = document.getElementById('login-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const logoutButton = document.getElementById('logout-button');
    const expenseData = document.getElementById('expense-data');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            loginPage.style.display = 'none';
            dashboardPage.style.display = 'block';
            loadDashboard();
        } else {
            alert('Login failed');
        }
    });

    logoutButton.addEventListener('click', () => {
        document.cookie = 'token=; Max-Age=0';
        dashboardPage.style.display = 'none';
        loginPage.style.display = 'block';
    });

    async function loadDashboard() {
        const response = await fetch('/api/expenses', {
            headers: { 'Authorization': `Bearer ${getCookie('token')}` }
        });
        if (response.ok) {
            const data = await response.json();
            expenseData.innerHTML = JSON.stringify(data, null, 2);
        } else {
            alert('Failed to load data');
        }
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});
