import React ,{useState, useEffect}from 'react';
import styled from 'styled-components'

import peopleIcon from '../../assets/people.ico'



export default function Header(props) {

  return (
      <HeaderContainer page={props.myPage}>
        <h1>AstroMatch</h1>
        <img src={peopleIcon} onClick={props.switchPages}/>
      </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  display: flex;
  justify-content: ${props=> props.page === 1? 'flex-start': 'flex-end'};
  align-items: center;
  position: relative;
  border-bottom: 1px solid #aaa;
  margin-bottom: 10px;
  padding: 10px;

  h1 {
    margin: 5px;
    font-size: 25px;
    color: #555;
    position: absolute;
    right: 100px;
  }

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    :hover{
        width: 33px;
        height: 33px;
    }
  }
`