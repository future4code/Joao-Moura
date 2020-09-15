import React from 'react'
import {useHistory} from  'react-router-dom'
import {goToDashBord} from '../../Router/goToPages'

const LoginPage = () => {
    const history = useHistory()
    return (
        <>
            <p>Login</p>
            <button onClick={()=> goToDashBord(history)}>Entra</button>
        </>
    )
}

export default LoginPage