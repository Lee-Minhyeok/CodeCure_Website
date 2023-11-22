import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Menubar from './menubar.js';
import { D } from './Board_style.js';
import styled from 'styled-components';

const Ed = styled.form`
    margin: 45px auto;
    width: 1000px;
    height: 800px;
`
const Tt = styled.input`
    padding: 10px;
    margin-left: 10px;
    border: none;
    font-size: 30px;
    width: 950px;
`
const Bt = styled.button`
    cursor: pointer;
    font-weight: bold;
    background-color: skyblue;
    border: 1px solid black;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    margin-top:50px;

    &:hover {
        color: red;
    }
    &:first-child {
        margin-left: 850px;
        margin-right: 15px;
    }
`

function Newpost() {
    return (
        <D>
            <Menubar />
            <Ed>
                <Tt type="text" name="title" placeholder="제목을 입력하세요"></Tt>
                <hr />
                <ReactQuill 
                    style={{ height: "50%" }}
                    theme="snow"
                />
                <span>
                    <Bt>임시 저장</Bt>
                </span>
                <Bt>완료</Bt>
            </Ed>
        </D>
    );
}

export default Newpost;