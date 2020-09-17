import React, {useEffect, useState}from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import HeaderDashBord from '../../components/HeaderDashBord/HeaderDashBord'

import {goToLogin,goToDashBord} from '../../Router/goToPages'
import FormDashBord from '../FormDashBord/FormDashBord'
import TripPage from '../TripPage/TripPage'

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

    
    const logout = () => {
        localStorage.clear();
        goToLogin(history)
    }

    
    return (
        <DashBordContainer>
            <TripPage/>
        </DashBordContainer>
    )
}

export default DashBordPage

const DashBordContainer = styled.div`
background-color: #EEE;
width: 100%;
height: 100%;
box-sizing: border-box;
`



