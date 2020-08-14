import { Component } from "react"

import React from 'react'

export function IconeSave (props){
    return(
        <div className={'header-icon-save'}>
            <img 
                src={props.icone} 
                alt={'Icone'}
                onClick={props.onClickSave}
            />
        </div>
    )
}