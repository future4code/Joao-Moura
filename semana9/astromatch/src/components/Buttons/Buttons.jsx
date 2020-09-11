import React from 'react';
import {ButtonContainer} from './styled'


export default function Buttons(props) {
	return (
		<ButtonContainer>
			<button onClick={props.onClickhandleProfile}>X</button>
			<button onClick={props.onClickChoose}>❤</button>
		</ButtonContainer>
	);
}
