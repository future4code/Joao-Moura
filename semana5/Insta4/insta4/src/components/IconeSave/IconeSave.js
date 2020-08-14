import { Component } from "react"

import React from 'react'
import styled from 'styled-components'

const SaveIcon = styled.div `
    justify-self: end;
    margin-right: 5px;
    cursor: pointer;
`

export function IconeSave (props){
    return(
        <SaveIcon>
            <img 
                src={props.icone} 
                alt={'Icone'}
                onClick={props.onClickSave}
            />
        </SaveIcon>
    )
}