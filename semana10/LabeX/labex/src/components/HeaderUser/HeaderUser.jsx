import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToHome, goToUserForm, goToLogin} from '../../Router/goToPages';
import {Header, NavMenu, Link} from './styled.js'

const HeaderUser = (props) => {
    const history = useHistory()

    return(
        <Header>
                <h1>LabeX - Viagens Espaciais</h1>
                <NavMenu>
                    <Link onClick={()=>goToHome(history)}>Viagens</Link>
                    <Link onClick={()=>goToUserForm(history)}>Cadastre-se</Link>
                    <Link onClick={()=>goToLogin(history)}>Login</Link>
                </NavMenu>
        </Header>
    )
}

export default HeaderUser
