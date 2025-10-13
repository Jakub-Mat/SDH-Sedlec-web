import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual authentication logic
        if (form.username === 'admin' && form.password === 'password') {
            setError('');
            // Redirect or set logged-in state here
            alert('Login successful!');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Přihlášení</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Uživatelské jméno:
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Heslo:
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            style={{ width: '100%', padding: 8, marginTop: 4 }}
                            required
                        />
                    </label>
                </div>
                {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
                <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;