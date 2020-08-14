import React from 'react'
export function IconeCompartilhar(props){
    return(
        <div className={'icon-container'}>
            <img 
                src={props.icone} 
                alt={'Icone compartilhar'}
                onClick={props.onClickShare}
            />
        </div>
    )
}
