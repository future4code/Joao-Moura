import React from 'react';
import {deleteTasks}from '../../services/ApiRequest'
import {BtnDelete,Column,Task} from './styled'

const ColumnPlanner = (props) => {
    const tasks = props.tasks

    const cleanTasks = (id) => {
        deleteTasks(id)
    }

    const renderTask = () =>{
        if(tasks.length > 0 ){
            return (tasks.map((task)=>{
                return (
                    task.day === props.name && 
                    <Task key={task.id}>
                        <p data-testid={props.name}>{task.text}</p>
                        <BtnDelete onClick={()=>cleanTasks(task.id)}>Excluir</BtnDelete>
                    </Task>
                )
            }))
        }
    }

    return ( 
        <Column>
            <h3>{props.name}</h3>
            {renderTask()}
        </Column>
     );
}
 
export default ColumnPlanner;

