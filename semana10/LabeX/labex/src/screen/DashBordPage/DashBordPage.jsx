import React, {useEffect}from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import {goToLogin,goToDashBord} from '../../Router/goToPages'
import DetailTripPage from '../DetailTripPage/DetailTripPage'

const DashBordPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        
        if (token) {
            goToDashBord(history)
        } else {
            goToLogin(history)
        }
        
    }, [history]);

    const fetchData =() => {

    }
    
    const logout = () => {
        localStorage.clear();
        goToLogin(history)
    }
    
    return (
        <DashBordContainer>
            <Header>
                <h1>DashBord</h1>
                <NavMenu>
                    <p>Viagens</p>
                    <p>Nova Viagen</p>
                    <p>solicitadas</p>
                </NavMenu>
                <BntLogout onClick={logout}>logout</BntLogout>
            </Header>
        <Body>
            <DetailTripPage/>
            
        </Body>
    </DashBordContainer>
    )
}

export default DashBordPage

const DashBordContainer = styled.div`
background-color: #EEE;
height: 100vh;
width: 100vw;
box-sizing: border-box;

`
const Header = styled.header`
background-color: #66f;
height: 15%;
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
    p {
        font-size:22px;
        cursor: pointer;
        padding: 3px;

        :hover{
            background-color: #fff;
            color: #000;
        }
    }
`


const Body = styled.div`

`


