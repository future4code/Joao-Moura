import React from 'react';
import Button from '../Button';
import styled from 'styled-components'

const ColumnPlanner = (props) => {
    return ( 
        <Column>
            <h3>{props.name}</h3>
            <Task>
                <p>tarefa</p>
                <Button name={"Concluir"} />
                <Button name={"Apagar"} />
            </Task>
        </Column>
     );
}
 
export default ColumnPlanner;

const Column = styled.div `
background-color: #59F;
width: 190px;
display:flex;
flex-direction: column;
align-items:center;
`
const Task = styled.div `
display:flex;
justify-content: space-around;
align-items: center;
width: 90%;
padding: 5px;
background-color: #d2d2d2;
font-size: 15px;
p{
    margin: 0;
    padding: 0;
}
`
