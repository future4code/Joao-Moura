import React from 'react';
import Form from '../Form';
import {HeaderContainer} from  './styled'
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


