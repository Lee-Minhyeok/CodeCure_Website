import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Announce from './announce';
import Board from './board';
import QnA from './QnA';
import Login from './login';
import SignUp from './signup';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/announce/*" element={<Announce />}></Route>
					<Route path="/board/*" element={<Board />}></Route>
					<Route path="/QnA/*" element={<QnA />}></Route>
					<Route path="/login/*" element={<Login />}></Route>
					<Route path="/signup/*" element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;