import React, {useEffect, useState}from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import {goToLogin, goToDashBord, goToDetail} from '../../Router/goToPages'
import TripPage from '../TripPage/TripPage'

const DashBordPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token");
    
        if (token) {
            history.push('/dashbord')
        } else {
            goToLogin(history)
        }
    }, [history]);


    const details = (event) =>{
            goToDetail(history, event.target.id)
    }

    
    return (
        <DashBordContainer>
            <h2>Viagens</h2>
            <TripPage handleClick={details}/>
        </DashBordContainer>
    )
}

export default DashBordPage

const DashBordContainer = styled.div`
background-color: #fff;
width: 100%;
height: 100%;
box-sizing: border-box;
`



