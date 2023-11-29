import React, { useState} from 'react'
import { Link } from 'react-router-dom';
//import './login.css'
import Menubar from './menubar.js';
import { D } from './Board_style.js';
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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`id: ${username}, password: ${password}`);

        const request = {
            id: username,
            password: password
        }

        fetch("http://34.64.206.72:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        })
        .then((response) => {
            if(response.ok) {
                return response.text();
            }
            throw new Error(e);
        })
        .then((data) => {
            console.log(data);
            alert(data);
            if("success" === data){
                window.location.href = "/";
            }
        })
    };

    return (
        <D>
            <Menubar />
            <Lb>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} id="login_form">
                    <In type="text" name="id" value={username} placeholder="ID" onChange={(e) => setUsername(e.target.value)}></In>
                    <In type="password" name="pw" value={password} placeholder="Password"  onChange={(e) => setPassword(e.target.value)}></In>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/findPW">&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 찾기</Link>
                    <In type="submit" value="로그인"></In>
                </form>
            </Lb>
        </D>
    );
}

export default Login;