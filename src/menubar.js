import React, { useEffect }from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.h1`
    cursor: pointer;
    margin-top:50px;
    margin-right:150px;

    &:hover {
    color:red;
    transition:transform 0.3s;
    transform:scale(1.2);
    }
`
const Div = styled.div`
    max-height: 100vh;
    overflow: auto;
    width:1510px;
    margin: 0 auto;
    display:flex;
    align-items:center;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;

    a {
        color: black;
        text-decoration: none;
    }
`
const Logo = styled.div`
    cursor: pointer;
    margin-top:35px;
    margin-right:200px;
    margin-left:100px;
`
const Login = styled.div`
    cursor: pointer;
    width:"80px";
    border-radius:20px;
    font-size:20px;
    padding:15px;
    margin-top:30px;
    margin-left:30px;
    background-color: gray;
    font-weight: bold;

    a {
        color: white;
        text-align: center;
        text-decoration: none;
        transition:transform 0.5s;
        display:flex;

        &:hover {
            transform:scale(1.2);
        }
    }
    
    &:active {
        background-color: skyblue;
    }
`

function Menubar() {
    return (
        <Div>
            <Logo>
                <Link to="/">
                    <img alt="codecure_logo" src="/images/logo.png" width="100px" height="100px"/>
                </Link>
            </Logo>
            <Link to="/introduce"><Menu>소개</Menu></Link>
            <Link to="/announce"><Menu>공지</Menu></Link>
            <Link to="/board"><Menu>게시판</Menu></Link>
            <Link to="/QnA"><Menu>Q&A</Menu></Link>
            <Login>
                <Link to="/login">로그인</Link>
            </Login>
        </Div>
    )
};

export default Menubar;