import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToDashBord, goToLogin, goToDashBordForm} from '../../Router/goToPages';
import {Header, NavMenu, Link, BntLogout} from "./styled"

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
