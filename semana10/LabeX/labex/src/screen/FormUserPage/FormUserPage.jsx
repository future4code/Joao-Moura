import React from 'react'
import {useHistory} from 'react-router-dom'
import { goBack } from '../../Router/goToPages'

const FormUserPage = () => {
    const history = useHistory()
    return (
        <>
            <h2>Form</h2>
            <button onClick={()=> goBack(history)}>back</button>
        </>
    )
}

export default FormUserPage