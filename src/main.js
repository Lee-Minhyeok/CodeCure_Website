import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Main(props) {
	return (
		<div className="main">
			<h3>메인페이지</h3>
			<Link to="/board"><li>공지사항</li></Link>
			<Link to="/login"><li>로그인</li></Link>
		</div>
	);
};

export default Main;