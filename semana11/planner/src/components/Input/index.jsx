import React from 'react';

const Input = (props) => {
    return(
    <>
        <label>Nova tarefa</label>
        <input 
            onChange={props.inputChange}
            value={props.value} 
            placeholder={"tarefa"}
        />
    </>
    )
}

export default Input