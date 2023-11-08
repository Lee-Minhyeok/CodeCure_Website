import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import Menubar from './menubar.js';

function Main() {
	return (
		<div className="Board">
			<Menubar />
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