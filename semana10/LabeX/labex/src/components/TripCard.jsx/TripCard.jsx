import React from 'react'
import styled from 'styled-components'


const TripCard = (props) => {
    const {name, description, planet, durationInDays, date}= props.data
    return(
        <Card>
            <img src="https://picsum.photos/350/270" onClick={props.handleClick} id={props.tripID}/>
            <Info>
                <h2>{name}</h2>
                <h3>{planet} dia {date}</h3>
                <p>{description}</p>
                <small>Duração da viagem: {durationInDays} dias</small>
            </Info>
        </Card>
    )
}

export default TripCard

const Card = styled.div `
width: 370px;
height: 300px;
background-color: rgba(0,0,0,0.9);
margin: 20px;
position: relative;

    h2 {
        position: absolute;
        padding: 5px;
        top: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.5);
    }

img {
    width: 100%;
    height: 60%;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
}
`
const Info = styled.div `
width: 100%;
height: 30%;
padding: 5px 10px;

color:#fff;

`
