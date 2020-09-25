import React from 'react';

const Select = (props) => {
    return(
        <select data-testid={"selectDay"} onChange={props.selectChange} value={props.selectValue} required>
            <option data-testid={"0"} value={''}>--selecione-dia--</option>
            <option data-testid={"1"} value={'Domingo'}>Domingo</option>
            <option data-testid={"2"} value={'Segunda-Feira'}>Segunda-Feira</option>
            <option data-testid={"3"} value={'Terça-Feira'}>Terça-Feira</option>
            <option data-testid={"4"} value={'Quarta-Feira'}>Quarta-Feira</option>
            <option data-testid={"5"} value={'Quinta-Feira'}>Quinta-Feira</option>
            <option data-testid={"6"} value={'Sexta-Feira'}>Sexta-Feira</option>
            <option data-testid={"7"} value={'Sábado'}>Sábado</option>
        </select>
    )
}

export default Select