import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	render() {
		return (
		<div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.props.valor}
				onChange={this.props.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
		)
	}
}
