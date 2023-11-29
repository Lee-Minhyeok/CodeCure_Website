import React from 'react';
import { Link } from 'react-router-dom';
import { D } from './Board_style.js';
//import './main.css';
import Menubar from './menubar.js';
import {M} from './main_style.js';
import {A} from './main_style.js';
import {Search} from './main_style.js';
import {Slogan} from './main_style.js';
import {Visit} from './main_style.js';
import {Calender} from './main_style.js';
import {SearchBtn} from './main_style.js';
// import {Week} from './main_style.js';

function Main() {
	return (
		<D>
			<Menubar />
			<Search placeholder="검색어를 입력하세요"/>
			<SearchBtn >
				입력
			</SearchBtn>
			<Calender>
				<div className="app">
					<h1>Calendar</h1>
						{/* <div>1</div>
						<div>2</div>
						<div class="1st_week">3</div>
						<div class="1st_week">4</div>
						<div class="1st_week">5</div>
						<div class="1st_week">6</div>
						<div class="1st_week">7</div> */}
					<img src="/Users/kimgeunyoung/CodeCure_Website/src/calender.png" alt = "img"></img>
				</div>
			</Calender>
			<Slogan>
				CodeCure
			</Slogan>
			
			<M>
				<div class="upcoming_box">
					<A className="upcoming">다가올 일정</A>
					<A className="upcoming">10/9 한글날</A>
                    <A className="upcoming">10/23 중간고사</A>
                    <A className="upcoming">12/25 성탄절</A>
				</div>
			</M>
			<Visit>
				<div>
					Today 방문자 수
				</div>
			</Visit>
		</D>
	);
};

export default Main;