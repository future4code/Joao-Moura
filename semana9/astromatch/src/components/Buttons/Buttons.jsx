import React ,{useState, useEffect}from 'react';
import styled from 'styled-components'

export default function Buttons (props) {

  return (
      <ButtonContainer>
        <button onClick={props.onClickhandleProfile}>X</button>
        <button onClick={props.onClickChoose}>❤</button>
      </ButtonContainer>
  );
}


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;

  button {
    color: #F00;
    font-size: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #F00;
    outline: none;
    cursor: pointer;
    transition: background 500ms;
    :hover {
      background-color: #F00;
      color: #FFF;
    }
  }

  button:nth-child(2){
    color: #0F0;
    border: 1px solid #0F0;
    :hover {
      background-color: #0F0;
      color: #FFF;
    }
  }
  
`