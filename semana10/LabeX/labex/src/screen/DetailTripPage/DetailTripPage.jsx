import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import TripCard from '../../components/TripCard.jsx/TripCard'
import { goToUserForm, goBack } from '../../Router/goToPages'
import { getTrip } from '../../services/requestApi'


const DetailTripPage = () => {
    const history = useHistory()
    const [tripList, setTripList] = useState([])

    useEffect(()=>{
        getTrip(setTripList)
    },[])

    const seeDetails = () =>{

    }

    return (
        <TripContainer>
            <p> Viagens</p>
            <TripGrid>

                {tripList.map( (trip, indice) =>{
                    return (
                        <TripCard
                            key={indice}
                            data={trip}
                            click={seeDetails}
                        />
                    )

                })}

            </TripGrid>
            <button onClick={()=> goToUserForm(history)}>Pagina de formulario</button>
            <button onClick={()=> goBack(history)} >Voltar</button>
        </TripContainer>
    )
}

export default DetailTripPage

const TripContainer = styled.div`
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TripGrid = styled.div`
background-color: #cff;
display:flex;
flex-wrap: wrap;
justify-content: center;
`