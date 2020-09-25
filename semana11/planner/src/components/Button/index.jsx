import React from 'react';
import styled from 'styled-components'

const Button = (props) => {
    return(
        <button onClick={props.click}>{props.name}</button>
    )
}

export default Button

// const Btn = styled.button `
// font-size: 10px;
// padding: 5px;
// `
