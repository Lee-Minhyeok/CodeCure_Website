import React from 'react'
//import './signup.css'
import { Link } from 'react-router-dom';
import Menubar from './menubar.js';
import { D } from './Board_style.js';
import styled from 'styled-components';


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bu2 = styled.button`
    background-color: darkblue;
    color: white;
    font-weight: bold;
    width: 6rem;
    height: 25px;
    padding: 5px 6px;
    margin-left: 5px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: yellow;
    }
`;

const Sb = styled.div`
    width: 500px;
    padding: 40px;
    box-sizing: border-box;
    font-weight: bold;

    /* ... (other styles) */

    h2 {
        font-size: 25px;
        color: darkblue;
    }

    /* ... (other styles) */
`;

function FindPW() {
    return (
        <D>
            <Menubar />
            <h1 style={{ color: 'darkblue', textAlign: "center", fontSize: "60px" }}>CodeCure</h1>
            <form method="post">
                <Div>
                    <Sb>
                        <Div>
                            <input type="text" name="id" placeholder="학번 입력"></input>
                            <Bu2 type="button" name="idcheck" onClick='idCheck()'>확인</Bu2>
                            <input type="hidden" name="id_nocheck" value="0"></input>
                        </Div>
                        <p>이름 : {}</p>
                        <p>전화번호 : {}</p>
                        {/* 인증번호 */}
                        <Bu2 type="button" name="idcheck" onClick='idCheck()'>인증번호 전송</Bu2>
                    </Sb>
                </Div>
            </form>
        </D>
    );
}

export default FindPW;
