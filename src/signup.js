import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css'
import Menubar from './menubar.js';

function SignUp() {
    return (
        <div className="Board">
            <Menubar />
            <div className="signup_box">
                <h2>회원가입</h2>
                <form method="post" id="signup_form">
                    <p>아이디</p>
                    <div className="idcheckbutton">
                        <input type="text" name="id" placeholder="아이디 입력 (특수문자 제외 알파벳 6~20자)"></input>
                        <button type="button" name="idcheck" onClick='idCheck()'>중복 확인</button>
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