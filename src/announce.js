import React from 'react';
import { Link } from 'react-router-dom';
import './Board.css';
import Menubar from './menubar.js';

function Announce() {
  return (
    <div className="Board">
      <Menubar />
      <div className="title">
        <br></br>
        <p className="title_p">공지사항</p>
        <br></br>
      </div>
      <div className="filter">
        <div className="filter_title">
          <form method="get">
            <select>
              <option value="name">제목</option>
              <option value="writer">작성자</option>
              <option value="content">본문</option>
            </select>
            <input type="text" name="search" size="30" placeholder="검색어를 입력하세요" />
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
      </div>
      <div className="table">
        <table>
          <thead>
              <tr className="table_head">
                <th>번호</th>
                <th width="700">제목</th>
                <th width="100">글쓴이</th>
                <th width="100">조회수</th>
                <th width="100">작성 날짜</th>
              </tr>
          </thead>
          <tfoot>
            <tr className="table_foot"></tr>
          </tfoot>
          <tbody>
              <tr className="table_body">
                <td width="100">105</td>
                <td id="title" width="700">제목1</td>
                <td width="100">OOO</td>
                <td width="100">50</td>
                <td width="100">2023.10.21</td>
              </tr>
              <tr className="table_body">
                <td width="100">105</td>
                <td id="title" width="700">제목1</td>
                <td width="100">OOO</td>
                <td width="100">50</td>
                <td width="100">2023.10.21</td>
              </tr>
              <tr className="table_body">
                <td width="100">105</td>
                <td id="title" width="700">제목1</td>
                <td width="100">OOO</td>
                <td width="100">50</td>
                <td width="100">2023.10.21</td>
              </tr>
              <tr className="table_body">
                <td width="100">105</td>
                <td id="title" width="700">제목1</td>
                <td width="100">OOO</td>
                <td width="100">50</td>
                <td width="100">2023.10.21</td>
              </tr>
              <tr className="table_body">
                <td width="100">105</td>
                <td id="title" width="700">제목1</td>
                <td width="100">OOO</td>
                <td width="100">50</td>
                <td width="100">2023.10.21</td>
              </tr>
          </tbody>
        </table>
      </div>
      <div className="newText">
        글쓰기
      </div>
      <div className="pageNumber">
        <div id="number_active">
          &lt;
        </div>
        <div id="number_active">
          1
        </div>
        <div id="number">
          2
        </div>
        <div id="number">
          3
        </div>
        <div id="number">
          4
        </div>
        <div id="number">
          5
        </div>
        <div id="number_active">
          &gt;
        </div>
      </div>
    </div>
  );
}

export default Announce;