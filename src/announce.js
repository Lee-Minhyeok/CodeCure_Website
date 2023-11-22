import React from 'react';
import { Link } from 'react-router-dom';
import { D, Ti, Fi, Ta, Tr, Nt, Pg } from './Board_style.js';
//import './Board.css';
import Menubar from './menubar.js';

function Announce() {
  return (
    <D>
      <Menubar />
      <Ti>
        <br></br>
        <p>공지사항</p>
        <br></br>
      </Ti>
      <Fi>
        <div className="filter_title">
          <form method="get">
            <select>
              <option value="name">제목</option>
              <option value="writer">작성자</option>
              <option value="content">본문</option>
            </select>
            <input type="text" name="search" size="30" placeholder="검색어를 입력하세요"/>
            <button>검색</button>
          </form>
        </div>
        <div className="filter_sort">
          <form method="get">
            <select>
              <option value="view">조회수 순</option>
              <option value="new">최신 순</option>
              <option value="old">오래된 순</option>
            </select>
          </form>
        </div>
        <div className="total">
          Total - 건
        </div>
      </Fi>
      <Ta>
        <thead>
            <tr>
              <th>번호</th>
              <th className="title">제목</th>
              <th>글쓴이</th>
              <th>조회수</th>
              <th>작성 날짜</th>
            </tr>
        </thead>
        <tfoot>
          <tr></tr>
        </tfoot>
        <tbody>
            <Tr>
              <td>105</td>
              <td className="text_title">제목1</td>
              <td>OOO</td>
              <td>50</td>
              <td>2023.10.21</td>
            </Tr>
            <Tr>
              <td>105</td>
              <td className="text_title">제목1</td>
              <td>OOO</td>
              <td>50</td>
              <td>2023.10.21</td>
            </Tr>
            <Tr>
              <td>105</td>
              <td className="text_title">제목1</td>
              <td>OOO</td>
              <td>50</td>
              <td>2023.10.21</td>
            </Tr>
            <Tr>
              <td>105</td>
              <td className="text_title">제목1</td>
              <td>OOO</td>
              <td>50</td>
              <td>2023.10.21</td>
            </Tr>
            <Tr>
              <td>105</td>
              <td className="text_title">제목1</td>
              <td>OOO</td>
              <td>50</td>
              <td>2023.10.21</td>
            </Tr>
        </tbody>
      </Ta>
      <Nt><Link to="/newpost">글쓰기</Link></Nt>
      <Pg>
        <div className="active">&lt;</div>
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div className="active">&gt;</div>
      </Pg>
    </D>
  );
}

export default Announce;