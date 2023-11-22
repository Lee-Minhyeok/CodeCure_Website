import styled from 'styled-components';



export const M = styled.div`
    font-size: 15px;
    text-align: center;
    margin-top: -150px;
    height: 1000px;
    border: 1px solid green;
    width: 280px;
`
export const A = styled.div`
    border: 1px solid red;
    width: 280px;
`
// 이거 왜 안먹는지 border로 해봤는데도 안되고, div처럼 먹음
export const Search = styled.input`
    border: 1px solid red;
    width: 580px;
    
    margin: 10px 320px;
    padding: 10px;
    font-size: 20px;
    
    padding-right: 200px;

`;

export const Slogan = styled.div`
    border: 1px solid blue;
    width: 500px;
    margin: 0 320px;
    margin-top: -240px;
    padding : 200px;
`

export const Visit = styled.div`
    border: 5px solid pink;
    width: 270px;
    margin-top: -800px;
`
export const Calender = styled.div`
    border: 2px solid black;
    width: 280px;
    margin-top: -50px;
    height: 300px;
`

// export const Week = styled.div`
//     border: 2px solid red;
//     border-radius: 100px;
//     width: 20px;
//     text-align: center;
//     height: 20px;
// `

export const Search_btn = styled.button`
    border: 1px solid red;
    padding: 14px;
    margin-left: -300px;
    cursor: pointer;
`