import React from 'react';
import styled from 'styled-components'

const Button = (props) => {
    return(
        <Btn onClick={props.click}>{props.name}</Btn>
    )
}

export default Button

const Btn = styled.button `
font-size: 10px;
padding: 5px;
`
