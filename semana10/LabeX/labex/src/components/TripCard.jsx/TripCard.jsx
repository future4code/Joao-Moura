import React from 'react'
import styled from 'styled-components'


const TripCard = () => {
    return(
        <Card onClick={props.seeDetails}>
            <img src="https://picsum.photos/350/270" />
            <Info>
                <h2>Nome da viagem</h2>
                <p>informações da viagem
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </Info>
        </Card>
    )
}

export default TripCard

const Card = styled.div `
width: 350px;
height: 270px;
background-color: #a2a2a2;

img {
    width: 100%;
    height: 65%;
}
`
const Info = styled.div `
width: 100%;
height: 30%;

color:#fff;
`
