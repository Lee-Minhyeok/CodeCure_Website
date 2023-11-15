import styled from 'styled-components';

export const Ti = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:25px;
  margin-bottom:50px;

  p {
    width: 650px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    border: 3px solid black;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Fi = styled.div`
  margin-bottom:5px;
  display:flex;

  .filter_title {
    margin-left:200px;
  }
  .filter_sort {
    margin-left:600px;
  }
  .total {
    margin-left:40px;
  }
`;
export const Ta = styled.table`
  border-collapse: collapse;
  margin:auto;
  width:75%;

  thead {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  
    th {
      width: 100px;
      font-size:20px;
      padding: 15px;
  
      &.title {
        width: 700px;
      }
    }
  }
  tfoot {
    border-bottom:2px solid black;
  }
`;
export const Tr = styled.tr`
  td {
    text-align: center;
    padding: 15px;
    width: 100px;
    border-bottom: 1px solid black;
  
    &.text_title {
      width: 700px;
      text-align: left;
    }
  }
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;
export const Nt = styled.div`
  cursor: pointer;
  margin-left:1250px;
  margin-top : 15px;
  background-color: skyblue;
  border : 1px solid black;
  border-radius: 10px;
  padding : 5px;
  width: 50px;
  text-align: center;
`;
export const Pg = styled.div`
  display:flex;
  margin-top:30px;
  justify-content: center;

  div {
    cursor: pointer;
    margin-right:5px;
    margin-left:5px;
    border:1px solid cornflowerblue;
    border-radius: 5px;
    font-weight: bold;
    font-size:20px;
    color:white;
    background-color: cornflowerblue;
    width:25px;
    height:25px;
    text-align: center;
  }

  .active {
    border:1px solid darkblue;
    background-color: darkblue;
  }
`;