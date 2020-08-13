import React from 'react'
import './CampoCompartilhar.css'

export function CampoCompartilhar (props) {
    return (
        // retirar className
        <div className={'comment-social-media'}> 
            <img src={props.imgInstagram} alt={'Instagram'} onClick={props.onClickCampo}/>
            <img src={props.imgFacebook} alt={'Facebook'} onClick={props.onClickCampo}/>
            <img src={props.imgTwitter} alt={'Twitter'} onClick={props.onClickCampo}/>
        </div>
    )

}