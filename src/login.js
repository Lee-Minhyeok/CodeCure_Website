import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import Menubar from './menubar.js';

function Login() {
    return (
        <div className="Board">
            <Menubar />
            <div className="login_box">
                <h2>Login</h2>
                <form method="post" id="login_form">
                    <input type="text" name="id" placeholder="ID"></input>
                    <input type="password" name="pw" placeholder="Password"></input>
                    <Link to="/signup" className="signup_link">회원가입</Link>
                    <input type="submit" value="로그인"></input>
                </form>
            </div>
        </div>
    );
}

export default Login;