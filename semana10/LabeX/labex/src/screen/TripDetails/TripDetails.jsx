import React from 'react'
import { Container } from 'rsuite'
import styled from 'styled-components'

const TripDetails = (props) => {
    //const {name, description, planet, durationInDays, date}= props.data
    return(
        <>
        <p>detalhes da viagem</p>
        <DetailsContent>
            <Details>
                <h2>name</h2>
                <h3>planet dia date</h3>
                <p>description</p>
                <small>Duração da viagem: durationInDays dias</small>
            </Details>
        </DetailsContent>
        </>
    )
}

export default TripDetails

const DetailsContent = styled.div `
background-color: #ffa;
display: flex;
align-items: center;
margin: 10px;
`
const Details = styled.div `
background-color: #cff;
width: 30%;
height:450px;
padding: 10px;
box-sizing: border-box;
`