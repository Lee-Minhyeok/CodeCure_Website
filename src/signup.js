import React from 'react'
import { Link } from 'react-router-dom';
//import './signup.css'

function SignUp() {
    return (
        <div className="Board">
            <div className="menu">
                <div className="logo">
                    <img alt="codecure_logo" src="/images/logo.png" width="100px" height="100px"/>
                </div>
                <h1>소개</h1>
                <h1>공지</h1>
                <h1>게시판</h1>
                <h1>Q&A</h1>
                <div className="login">
                    <Link to="/login" className="login_link">로그인</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;