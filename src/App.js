import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Board from './board';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/board/*" element={<Board />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;