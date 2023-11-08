import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css'

function SignUp() {
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
            <div className="signup_box">
                <h2>회원가입</h2>
                <form method="post" id="signup_form">
                    <p>아이디</p>
                    <div className="idcheckbutton">
                        <input type="text" name="id" placeholder="아이디 입력 (특수문자 제외 알파벳 6~20자)"></input>
                        <button type="button" name="idcheck" onClick='checkId()'>중복 확인</button>
                        <input type="hidden" name="id_nocheck" value="0"></input>
                    </div>
                    <p>비밀번호</p>
                    <input type="password" name="pw" placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)"></input>
                    <p>비밀번호 확인</p>
                    <input type="password" name="pwcheck" placeholder="비밀번호를 다시 입력하세요."></input>
                    <p>이름</p>
                    <input type="text" name="name" placeholder="이름을 입력하세요."></input>
                    <p>전화번호</p>
                    <input type="text" name="phone" placeholder="휴대폰 번호 입력 ( ' - ' 제외하고 입력)"></input>
                    <input type="submit" value="가입하기"></input>
                </form>
            </div>
        </div>
    );
}

export default SignUp;