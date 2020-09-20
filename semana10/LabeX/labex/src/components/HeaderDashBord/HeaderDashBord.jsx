import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { goToDashBord, goToLogin, goToDashBordForm} from '../../Router/goToPages';

const HeaderDashBord = (props) => {
     const history = useHistory()

    return(
        <Header>
                <h1>DashBord</h1>
                <NavMenu>
                    <Link onClick={()=>goToDashBord(history)}>Viagens</Link>
                    <Link onClick={()=>goToDashBordForm(history)}>Nova Viagem</Link>
                </NavMenu>
                <BntLogout onClick={()=>goToLogin(history)}>logout</BntLogout>
        </Header>
    )
}

export default HeaderDashBord

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

const BntLogout = styled.button`
    padding: 10px;
    background-color: #868686;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 10px;
    :hover {
        color: #F00;
        background-color: #fff;
    }
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