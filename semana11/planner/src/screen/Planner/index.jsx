import React, { useState, useEffect } from 'react';
import { createTasks, getTasks } from '../../services/ApiRequest';
import Header from '../Header';
import ToDoArea from '../ToDoArea';

 const Planner = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState([])
    const [day, setDay] = useState()
    
    useEffect(() => {   
        getTasks(setTasks) 
    }, [tasks]);

    const inputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleDay = (event) => {
        setDay(event.target.value)
    }

    const newTask = async () => {
        if((inputValue.trim() !== '') && day){
            const body = {text: inputValue, day: day}
            createTasks(body)
            setInputValue('')
        }else{
            setInputValue('')
            alert('preencha os campos')
            //colocar no HTML
        }
    }

     return (  
         <>
            <Header
                inputChange={inputChange}
                inputValue={inputValue}
                selectChange={handleDay}
                selectValue={day}
                clickAdd={newTask}
            />
            <ToDoArea listTasks={tasks}/>
        </>
        );
 }
  
 export default Planner;