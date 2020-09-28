import React from 'react';
import Select from '../../components/Select';

const Form = (props) => {

    return(
        <div>
            <label>Nova tarefa</label>
            <input 
                onChange={props.inputChange}
                value={props.inputValue} 
                placeholder={"tarefa"}
            />
            <Select selectChange={props.selectChange} selectValue={props.selectValue}/>
            <button onClick={props.clickAdd}>Criar tarefa</button>
        </div>
    )

}

export default Form