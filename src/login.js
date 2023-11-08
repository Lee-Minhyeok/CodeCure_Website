import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

function Login() {
    return (
        <div className="Board">
            <div className="menu">
                <div className="logo">
                    <Link to="/" className="main_link">
						<img alt="codecure_logo" src="/images/logo.png" width="100px" height="100px"/>
					</Link>
                </div>
                <h1>소개</h1>
                <Link to="/announce"><h1>공지</h1></Link>
                <Link to="/board"><h1>게시판</h1></Link>
                <Link to="/QnA"><h1>Q&A</h1></Link>
                <div className="login">
                    <Link to="/login" className="login_link">로그인</Link>
                </div>
            </div>
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