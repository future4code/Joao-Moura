import React from 'react'
import {useHistory} from 'react-router-dom'
import { goToUserForm, goBack } from '../../Router/goToPages'

const DetailTripPage = () => {
    const history = useHistory()
    return (
        <>
            <h2>Detalhes da Viagem</h2>
            <button onClick={()=> goToUserForm(history)}>Pagina de formulario</button>
            <button onClick={()=> goBack(history)} >Voltar</button>
        </>
    )
}

export default DetailTripPage