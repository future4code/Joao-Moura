import React ,{useState, useEffect}from 'react';
import styled from 'styled-components'

import peopleIcon from '../../assets/people.ico'



export default function Header(props) {

  
  
  return (
      <HeaderContainer>
        <h1>AstroMatch</h1>
        <img src={peopleIcon} onClick={props.switchPages}/>
      </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 5px;
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