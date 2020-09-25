import React from 'react';
import Select from '../../components/Select';

const Form = (props) => {

    return(
        <>
            <label>Nova tarefa</label>
            <input 
                onChange={props.inputChange}
                value={props.inputValue} 
                placeholder={"tarefa"}
            />
            <Select selectChange={props.selectChange} selectValue={props.selectValue}/>
            <button onClick={props.clickAdd}>Criar tarefa</button>
        </>
    )

}

export default Form