import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ToDoArea from '../ToDoArea';
 const Planner = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])
    const [day, setDay] = useState()


    const inputChange = (event) => {
        setInputValue(event.target.value)
    }

    const newTask = () => {
        setTasks([inputValue, ...tasks])
        setInputValue('')
        console.log(tasks)
    }

    const cleanTasks = () => {
        setTasks([])
        console.log(tasks)
    }

    const handleDay = (event) => {
        setDay(event.target.value)
    }
    console.log(day)

     return (  
         <>
            <Header
                inputChange={inputChange}
                inputValue={inputValue}
                clickAdd={newTask}
                clickClean={cleanTasks}
                selectChange={handleDay}
                selectValue={day}
            />
            <ToDoArea />
        </>
     );
 }
  
 export default Planner;