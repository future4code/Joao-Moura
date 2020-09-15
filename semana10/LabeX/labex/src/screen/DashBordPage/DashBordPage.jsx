import React from 'react'
import {useHistory} from 'react-router-dom'

import {goToLogin} from '../../Router/goToPages'

const DashBordPage = () => {
    const history = useHistory()
    return (
        <>
            <p>DashBord</p>
            <button onClick={()=> goToLogin(history)}>logout</button>
        </>
    )
}

export default DashBordPage