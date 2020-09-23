import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Form = (props) => {

    return(
        <>
            <Input 
                inputChange={props.inputChange}
                value={props.value}
            />
            <Select selectDay={props.selectDay}/>
            <Button name={"Criar tarefa"} click={props.clickAdd}/>
            <Button name={"Apagar tudo"} click={props.clickClean}/>
        </>
    )

}

export default Form