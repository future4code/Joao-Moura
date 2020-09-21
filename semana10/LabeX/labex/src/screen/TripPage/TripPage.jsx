import React, { useEffect, useState } from 'react'
import TripCard from '../../components/TripCard.jsx/TripCard'
import { getTrip } from '../../services/requestApi'
import {TripGrid,TripContainer} from './styled'


const TripPage = (props) => {
    const [tripList, setTripList] = useState([])

    useEffect(()=>{
        getTrip(setTripList)
    },[])
   
    return (
        <TripContainer>
            <TripGrid>

                {tripList.map( (trip) =>{
                    return (
                        <TripCard
                            key={trip.id}
                            tripID={trip.id}
                            data={trip}
                            handleClick={props.handleClick}
                        />
                    )

                })}

            </TripGrid>
        </TripContainer>
    )
}

export default TripPage

