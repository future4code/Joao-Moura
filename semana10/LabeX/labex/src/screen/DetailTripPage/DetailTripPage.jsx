import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import TripCard from '../../components/TripCard.jsx/TripCard'
import { goToUserForm, goBack } from '../../Router/goToPages'


const DetailTripPage = () => {
    const history = useHistory()
    return (
        <TripContainer>
            <p> Viagens</p>
            <TripGrid>
                <TripCard/>
            </TripGrid>
            <button onClick={()=> goToUserForm(history)}>Pagina de formulario</button>
            <button onClick={()=> goBack(history)} >Voltar</button>
        </TripContainer>
    )
}

export default DetailTripPage

const TripContainer = styled.div`
background-color: #fff;
`
const TripGrid = styled.div`
background-color: #cff;
`