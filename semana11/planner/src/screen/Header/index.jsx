import React from 'react';
import Form from '../Form';
import styled from 'styled-components'

const Header = (props) => {
    return ( 
        <HeaderContainer>
            <Form
                inputChange={props.inputChange}
                inputValue={props.inputValue}
                selectChange={props.selectChange}
                selectValue={props.selectValue}
                clickAdd={props.clickAdd}
            />
    </HeaderContainer>
     );
}
 
export default Header;

const HeaderContainer = styled.div `
width: 100%;
height: 100px;
background-color: #4E4187;
display: flex;
justify-content: center;
align-items: center;
color: #F8FFE5;
`

