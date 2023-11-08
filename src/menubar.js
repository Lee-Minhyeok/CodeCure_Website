import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

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

const Menubar = () => {

    return (
        <div className="menu">
            <div className="logo">
                <Link to="/" className="main_link">
                    <img alt="codecure_logo" src="/images/logo.png" width="100px" height="100px"/>
                </Link>
            </div>
            <Link to="/introduce"><Menu>소개</Menu></Link>
            <Link to="/announce"><Menu>공지</Menu></Link>
            <Link to="/board"><Menu>게시판</Menu></Link>
            <Link to="/QnA"><Menu>Q&A</Menu></Link>
            <div className="login">
                <Link to="/login" className="login_link">로그인</Link>
            </div>
        </div>
    )
};

export default Menubar;