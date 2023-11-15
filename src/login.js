import React from 'react'
import { Link } from 'react-router-dom';
//import './login.css'
import Menubar from './menubar.js';
import styled from 'styled-components';

const Lb = styled.div`
    margin: 100px auto;
    bottom: 30%;
    width: 450px;
    height: 350px;
    padding: 40px;
    box-sizing: border-box;

    h2 {
        font-size: 25px;
        color:darkblue;
        margin-bottom: 20px;
    }
    a {
        text-decoration: none;
        font-weight: bold;
        font-size:smaller;
        color : black;
    }
`
const In = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: lightgrey;

    &::placeholder {
        color: grey;
    }

    &[type="submit"] {
        cursor: pointer;
        color: white;
        font-size: 16px;
        font-weight: bold;
        background-color: darkblue;
        margin-top: 10px;
    }
`

function Login() {
    return (
        <>
            <Menubar />
            <Lb>
                <h2>Login</h2>
                <form method="post" id="login_form">
                    <In type="text" name="id" placeholder="ID"></In>
                    <In type="password" name="pw" placeholder="Password"></In>
                    <Link to="/signup">회원가입</Link>
                    <In type="submit" value="로그인"></In>
                </form>
            </Lb>
        </>
    );
}

export default Login;