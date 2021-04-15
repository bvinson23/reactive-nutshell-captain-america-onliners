import React, { useState, useEffect } from "react"
import { } from "../../modules/TaskManager" //!fix
import "./TaskForm.css"
import { useHistory, useParams } from 'react-router-dom'

export const TaskEditForm = () => {
    const [task, setTask] = useState({ name: "" });
    //doesnt allow for multiple clicks
    const [isLoading, setIsLoading] = useState(false);

    //? uses task ID in the useEffect function below
    const {taskId} = useParams();
    //! idk
    const history = useHistory();

    //? every time you type in the input box, it creates a new state
    const handleFieldChange = o => {
        const stateToChange = { ...task };
        stateToChange[o.target.id] = o.target.value;
        setTask(stateToChange);
    };

    //? keeps the page from reloading (preventdefault)
    const updateExistingTask = o => {
        o.preventDefault()
        setIsLoading(true);

        //? taking in existing fields and allow us to swap out what already exists. only works with use effect below it.
        const editedTask = {
            id: task.id,
            name: task.name,
            userId: task.userId
        }

        //! idk
        updateTask(editedTask)
            .then(() => history.push("/tasks")
            )
        }

        //? runs once the page loads, allows the page to change dynamically?
        useEffect(() => {
            getTaskById(TaskId)
              .then(task => {
                setTask(task);
                setIsLoading(false);
              });
          }, []);

          //? constructs the HTML to place in the dom.
          return (
            <>
              <form>
                <fieldset>
                  <div className="formgrid">
                  <label htmlFor="name">Task Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="name"
                      value={task.name}
                    />
                  </div>
                  <div className="alignRight">
                    <button
                      type="button" disabled={isLoading}
                      onClick={updateExistingTask}
                      className="btn btn-primary"
                    >Submit</button>
                  </div>
                </fieldset>
              </form>
            </>
          );



}
