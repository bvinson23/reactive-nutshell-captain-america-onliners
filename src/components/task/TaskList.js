import React, { useState, useEffect } from 'react';
//!need to import task card once finished
import { getAllTasks, deleteTask } from '../../modules/TaskManager';
import { useHistory } from 'react-router-dom'
import { TaskCard } from "./TaskCard"

export const TaskList = () => {

    //?this will allow us to update the dom any time changes are made to "tasks"
    const [tasks, setTasks] = useState([]);
    //? i think this allows react to save the previous page we were on, then set it to a button so that it will always take you back to your previous page after hitting it. 
    const history = useHistory();


    //?this will give us the ability to delete with in this function
    const handleDeleteTask = id => {
        deleteTask(id)
        .then(() => getAllTasks().then(setTasks))
    };


    //TODO not sure here
    const getTasks = () =>{
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        })
    };


    //TODO no damn clue
    useEffect(() => {
        getTasks();
      }, []);


      return (
          <>
          <section className="taskSectionContent"></section>
          <h3>Hello</h3>
          <div className="taskContainerCards">
          {tasks.map(task =>
          <TaskCard
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask} />)}
          </div>
          </>      
          );


};