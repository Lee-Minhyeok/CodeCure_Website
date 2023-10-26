import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

function Main(props) {
	return (
		<div className="main">
			<h3>메인페이지</h3>
			<ul>
				<Link to="/board"><li>공지사항</li></Link>
			</ul>
		</div>
	);
};

export default Main;