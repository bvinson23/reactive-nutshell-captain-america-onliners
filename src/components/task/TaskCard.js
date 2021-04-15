import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
// import { completeTask } from "../../modules/TaskManager"
import "./TaskCard.css"




export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask}) => {
  const history = useHistory();
  return (
    <div className="TaskCard">
    <Link to={`/tasks/${task.id}/edit`}>
        <button>✏️</button>
    </Link>
    <button type="button" onClick={() => handleDeleteTask(task.id)}>❎</button>
     <h3><span className="card-name">
          {task.name}
        </span></h3>
    <input type="checkbox" onClick={() => handleCompleteTask(task)}></input>
    </div>
  );
};

