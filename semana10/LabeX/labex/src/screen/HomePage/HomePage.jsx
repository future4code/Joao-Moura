import React from 'react'
import { useHistory } from 'react-router-dom';
import {goToUserForm} from '../../Router/goToPages'
import TripPage from '../TripPage/TripPage';

const HomePage = () => {
    const history = useHistory()

    return (
        <>
            <h2>Viagens</h2>
            <TripPage handleClick={()=>goToUserForm(history)}/>
        </>
    )
}

export default HomePage