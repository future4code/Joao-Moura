import React from 'react';
import ColumnPlanner from '../../components/ColumnPlanner';
import styled from 'styled-components'

const ToDoArea = (props) => {

    return ( 
        <Container>
            <ColumnPlanner name={"Domingo"} tasks={props.listTasks}/>
            <ColumnPlanner name={"Segunda-Feira"} tasks={props.listTasks}/>
            <ColumnPlanner name={"Terça-Feira"} tasks={props.listTasks}/>
            <ColumnPlanner name={"Quarta-Feira"} tasks={props.listTasks}/>
            <ColumnPlanner name={"Quinta-Feira"} tasks={props.listTasks}/>
            <ColumnPlanner name={"Sexta-Feira"} tasks={props.listTasks}/>
            <ColumnPlanner name={"Sábado"} tasks={props.listTasks}/>
         </Container>
     );
}
 
export default ToDoArea;

const Container = styled.section `
background-color: #2A9D8F;
display: flex;
height: 80vh;
justify-content: space-evenly;
color: #F8FFE5;
`
