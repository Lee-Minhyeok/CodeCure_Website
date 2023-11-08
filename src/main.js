import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Main(props) {
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
			<div className="main">
				<h3>메인페이지</h3>
				<Link to="/announce">공지사항</Link><br></br>
				<Link to="/board">게시판</Link><br></br>
				<Link to="/QnA">Q&A</Link><br></br>
				<Link to="/login">로그인</Link><br></br>
			</div>
		</div>
	);
};

export default Main;