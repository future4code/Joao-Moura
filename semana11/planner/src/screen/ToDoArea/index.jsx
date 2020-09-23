import React from 'react';
import ColumnPlanner from '../../components/ColumnPlanner';
import styled from 'styled-components'

const ToDoArea = (props) => {
    // const {} = props.tasksList
    return ( 
        <Container>
            <ColumnPlanner name={"Domingo"}/>
            <ColumnPlanner name={"Segunda-Feira"}/>
            <ColumnPlanner name={"Terça-Feira"}/>
            <ColumnPlanner name={"Quarta-Feira"}/>
            <ColumnPlanner name={"Quinta-Feira"}/>
            <ColumnPlanner name={"Sexta-Feira"}/>
            <ColumnPlanner name={"Sábado"}/>
         </Container>
     );
}
 
export default ToDoArea;

const Container = styled.section `
background-color: #aaa;
display: flex;
height: 80vh;
justify-content: space-evenly;
`
