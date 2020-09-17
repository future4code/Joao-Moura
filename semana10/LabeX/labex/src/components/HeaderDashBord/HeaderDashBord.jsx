import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import { goToLogin, goToUserForm} from '../../Router/goToPages';

const HeaderDashBord = (props) => {
    // const history = useHistory()

    // const teladeViagens = () => {
    //     history.push("/dashbord/form")
    // }
    
    return(
        <Header>
                <h1>DashBord</h1>
                <NavMenu>
                    {/* <button onClick={teladeViagens}>Viagens</button> */}

                    <NavLink to='/dashbord'>Viagens</NavLink>
                    <NavLink to='/dashbord/form'>Nova Viagem</NavLink>
                    <NavLink to='/'>Solicitações</NavLink>
                </NavMenu>
                <BntLogout onClick={props.clickLogout}>logout</BntLogout>
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

const NavLink = styled(Link)`
font-size:22px;
padding: 3px;
color: #fff;
text-decoration: none;
:hover {
    background: #fff;
    color: #000;
}
`