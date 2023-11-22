import React from 'react';
import { D } from './Board_style.js';
import Menubar from './menubar.js';
import styled from 'styled-components';

const Ba = styled.div`
    display: flex;
    background-color: skyblue;
    border: 1px solid skyblue;
    border-radius: 100px;
    margin-top: 50px;
    margin-left: 250px;
    margin-right: 250px;
`
const Fo = styled.form`
    padding: 5px;
    margin: 10px;

    select {
        background-color: skyblue;
        font-size: 20px;
        border:none;
        
        &.category {
            margin-left: 50px;
        }
    }
`
const P = styled.p`
    padding: 5px;
    margin: 10px 15px;
    font-size: 20px;

    &.bold {
        font-weight: bold;
    }
    &.tilted {
        font-style: italic;
    }
    &.underscore {
        text-decoration: underline;
    }
`
const Im = styled.img`
    padding: 5px;
    margin: 10px 15px;
    width: 20px;
    height: 30px;
`

function Newpost() {
    return (
        <D>
            <Menubar />
            <Ba>
                <Fo method="get">
                    <select className="category">
                        <option>카테고리</option>
                        <option value="announce">공지사항</option>
                        <option value="board">게시판</option>
                        <option value="qna">Q&A</option>
                    </select>
                </Fo>
                <Fo method="get">
                    <select>
                        <option>첨부파일</option>
                        <option value="image">사진</option>
                        <option value="painting">그림</option>
                        <option value="file">파일</option>
                    </select>
                </Fo>
                <Fo method="get">
                    <select>
                        <option>글꼴</option>
                        <option value="nanum">나눔고딕</option>
                        <option value="gulim">굴림</option>
                        <option value="newmmyungjo">신명조</option>
                    </select>
                </Fo>
                <Fo method="get">
                    <select>
                        <option>크기</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                    </select>
                </Fo>
                <P className="bold">B</P>
                <P className="tilted">B</P>
                <P className="underscore">B</P>
                <Im alt="left" src="/images/left.png"/>
                <Im alt="left" src="/images/center.png"/>
                <Im alt="left" src="/images/right.png"/>
            </Ba>
        </D>
    );
}

export default Newpost;