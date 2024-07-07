import React from "react";
import './css/Login.css';

const Login = () => {
    
    return (
        <div className="login-page">
            <div className="login-box">
                <h1>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <button type="button" className="register-button" onClick={() => window.location.href = '/register'}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
