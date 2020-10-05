import React from 'react'
import {Card,Info} from './styled'


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
