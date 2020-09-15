import React from 'react'
import { useHistory } from 'react-router-dom';
import {goToDetailPage} from '../../Router/goToPages'

const HomePage = () => {
    const history = useHistory()

    return (
        <>
            <h2>Home</h2>
            <button onClick={()=> goToDetailPage(history)}>detail page</button>
        </>
    )
}

export default HomePage