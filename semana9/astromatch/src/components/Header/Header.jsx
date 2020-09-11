import React ,{useState, useEffect}from 'react';
import styled from 'styled-components'

import peopleIcon from '../../assets/people.ico'
import logo from '../../assets/logo.png'



export default function Header(props) {

  return (
      <HeaderContainer page={props.myPage}>
        <Logo src={logo}/>
        <Icon src={peopleIcon} onClick={props.switchPages}/>
      </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  display: flex;
  justify-content: ${props=> props.page === 2? 'flex-start': 'flex-end'};
  align-items: center;
  position: relative;
  border-bottom: 1px solid #aaa;
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
`
const Logo = styled.img`
    margin: 5px;
    width: 180px;
    height: 90px;
    position: absolute;
    right: 90px;
`
const Icon = styled.img`
    width: 32px;
    height: 32px;
    cursor: pointer;
    :hover{
        width: 33px;
        height: 33px;
    }
`