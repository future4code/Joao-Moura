import React, {useEffect}from 'react'
import {useHistory} from 'react-router-dom'
import {DashBordContainer} from './styled'
import {goToLogin, goToDetail} from '../../Router/goToPages'
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




