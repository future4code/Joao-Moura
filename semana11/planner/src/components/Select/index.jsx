import React from 'react';

const Select = (props) => {
    return(
        <select onChange={props.selectChange} value={props.selectValue} required>
            <option value={''}>--selecione-dia--</option>
            <option value={'Domingo'}>Domingo</option>
            <option value={'Segunda-Feira'}>Segunda-Feira</option>
            <option value={'Terça-Feira'}>Terça-Feira</option>
            <option value={'Quarta-Feira'}>Quarta-Feira</option>
            <option value={'Quinta-Feira'}>Quinta-Feira</option>
            <option value={'Sexta-Feira'}>Sexta-Feira</option>
            <option value={'Sábado'}>Sábado</option>
        </select>
    )
}

export default Select