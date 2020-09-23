import React from 'react';

const Select = (props) => {
    return(
        <select onChange={props.selectChange} value={props.selectValue} required>
            <option value={'domingo'}>Domingo</option>
            <option value={'segunda'}>Segunda-feira</option>
            <option value={'terca'}>Terça-feira</option>
            <option value={'quarta'}>Quarta-feira</option>
            <option value={'quinta'}>Quinta-feira</option>
            <option value={'sexta'}>Sexta-feira</option>
            <option value={'sabado'}>Sábado</option>
        </select>
    )
}

export default Select