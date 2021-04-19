import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import "./TaskCard.css"




export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask}) => {
  const history = useHistory();
  return (
    <div className="TaskCard">
        <div className="buttonHolder">
    <Link to={`/tasks/${task.id}/edit`}>
        <button className="cardButton">✏️</button>
    </Link>
    <button type="button" className="cardButton" onClick={() => handleDeleteTask(task.id)}>❎</button>
    </div>
    <div className="contentHolder">
     <h3><span className="card-name">
          {task.name}
        </span></h3>
        <h3><span className="card-date">
          {task.date}
        </span></h3>
        </div>
        <label className="switch">
        <input type="checkbox" onClick={() => handleCompleteTask(task)}></input>
            <span className="slider round"></span>
        </label>
    </div>
  );
};

