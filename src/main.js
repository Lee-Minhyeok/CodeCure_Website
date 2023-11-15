import React from 'react';
import { Link } from 'react-router-dom';
//import './main.css';
import Menubar from './menubar.js';
import styled from 'styled-components';

const M = styled.div`
	align-items: center;
`

function Main() {
	return (
		<>
			<Menubar />
			<M>
				<h3>메인페이지</h3>
				<Link to="/announce">공지사항</Link><br></br>
				<Link to="/board">게시판</Link><br></br>
				<Link to="/QnA">Q&A</Link><br></br>
				<Link to="/login">로그인</Link><br></br>
			</M>
		</>
	);
};

export default Main;