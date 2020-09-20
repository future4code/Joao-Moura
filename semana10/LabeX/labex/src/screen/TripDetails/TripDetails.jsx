import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {getTripDetail} from '../../services/requestApi'
import styled from 'styled-components'
import { goToLogin } from '../../Router/goToPages'


const TripDetails = (props) => {
    const [ trip, setTrip ] = useState({})
    const [ candidates, setCandidates ] = useState([])
    const [ contentInfo, setContentInfo] = useState(false)
    const [ candidate, setCandidate] = useState({})
    const parm = useParams()
    const history = useHistory()


    useEffect(() => {
        const token = window.localStorage.getItem("token");
    
        if (token) {
            getTripDetail(setTrip, setCandidates, parm.id)
        } else {
            goToLogin(history)
        }

    }, [history]);

    const info = (index) => {
        setCandidate(candidates[index])
        setContentInfo(!contentInfo)
    }

   
    return(
        <>
        <p>detalhes da viagem</p>
        <DetailsContent>
            <Details>
                <h1>Viagem</h1>
                <h2># {trip.name}</h2>
                <h3>{trip.planet} dia: {trip.date}</h3>
                <p>{trip.description}</p>
                <small>Duração da viagem: {trip.durationInDays} dias</small>
                {/* <button onClick={tripDelete}></button> */}
            </Details>

            <CandidatesList>
                <h1>Candidatos</h1>
                {candidates.map((candidate, index)=>{
                    return<Item onClick={()=>info(index)}>{candidate.name}</Item>
                })}
            </CandidatesList>

            {contentInfo && 
                <CandidateInfo>
                    <h1>Informações</h1>
                    <p>{candidate.name}</p>
                    <p>{candidate.age}</p>
                    <p>{candidate.country}</p>
                    <p>{candidate.profession}</p>
                    <p>{candidate.applicationText}</p>
                </CandidateInfo>
            }

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
const CandidatesList = styled.div `
background-color: #caf;
width: 30%;
height:450px;
padding: 10px;
box-sizing: border-box;
`
const Item = styled.p `
background-color: #fff;
width: 90%;
padding: 10px;
box-sizing: border-box;
cursor: pointer;
:hover{
    background-color: #eee;
}
`
const CandidateInfo = styled.div `
background-color: #1af;
width: 30%;
height:450px;
padding: 10px;
box-sizing: border-box;
`