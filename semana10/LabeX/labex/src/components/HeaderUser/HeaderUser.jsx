import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { goToHome, goToUserForm} from '../../Router/goToPages';

const HeaderUser = (props) => {
    const history = useHistory()

    return(
        <Header>
                <h1>LabeX - Viagens Espaciais</h1>
                <NavMenu>
                    <Link onClick={()=>goToHome(history)}>Viagens</Link>
                    <Link onClick={()=>goToUserForm(history)}>Cadastre-se</Link>
                </NavMenu>
        </Header>
    )
}

export default HeaderUser

const Header = styled.header`
background-color: #66f;
height: 100px;
width: 100%;
padding: 10px;
color: #fff;
display: flex;
justify-content: space-between;
align-items: flex-end;
position: relative;
`


const NavMenu = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
width: 30%;
height: 50%;

`

const Link = styled.p`
font-size:22px;
padding: 3px;
color: #fff;
text-decoration: none;
cursor: pointer;
:hover {
    background: #fff;
    color: #000;
}
`