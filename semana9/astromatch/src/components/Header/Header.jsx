import React from 'react';
import {HeaderContainer, Logo, Icon} from './styled'
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
