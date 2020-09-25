import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Form = (props) => {

    return(
        <>
            <Input 
                inputChange={props.inputChange}
                inputValue={props.inputValue}
            />
            <Select selectChange={props.selectChange} selectValue={props.selectValue}/>
            <button onClick={props.clickAdd}>Criar tarefa</button>
        </>
    )

}

export default Form