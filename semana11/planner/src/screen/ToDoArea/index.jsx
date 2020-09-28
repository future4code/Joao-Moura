import React from 'react';
import ColumnPlanner from '../../components/ColumnPlanner';
import {Container} from './styled'

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

