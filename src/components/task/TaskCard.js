import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'



export const TaskCard = ({ task }) => {
  const history = useHistory();
  return (
    <div className="card">
     <h3>Name: <span className="card-name">
          {task.name}
        </span></h3>
    </div>
  );
};