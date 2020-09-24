import React, { useEffect, useState } from 'react';
import ColumnPlanner from '../../components/ColumnPlanner';
import styled from 'styled-components'

const ToDoArea = (props) => {
    const {listTasks, setListTasks} = useState(props.listTasks)
    const {tasksDomingo, setTasksDomingo} = useState([])
    const {tasksSegunda, setTasksSegunda} = useState([])
    const {tasksTerca, setTasksTerca} = useState([])

    useEffect(() => {
      {listTasks.length > 0 && listTasks.map((task)=>{
            switch(task.day){
                case "domingo":
                    setTasksDomingo([task, ...tasksDomingo])
                    break
                case "segunda":
                    setTasksSegunda([task, ...tasksSegunda])
                    break
                case "terca":
                    setTasksTerca([task, ...tasksTerca])
                    break
                case "quarta":
                    break
                case "quinta":
                    break
                case "sexta":
                    break
                case "sabado":
                    break
            }
        })}
    }, []);



    return ( 
        <Container>
            <ColumnPlanner name={"Domingo"} tasks={tasksDomingo}/>
            <ColumnPlanner name={"Segunda-Feira"} tasks={tasksSegunda}/>
            <ColumnPlanner name={"Terça-Feira"} tasks={tasksTerca}/>
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
