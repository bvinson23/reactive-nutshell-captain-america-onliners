import React, { useState, useEffect } from "react"
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager" //!fix
import "./TaskForm.css"
import { useHistory, useParams } from 'react-router-dom'

export const TaskEditForm = () => {
    const [task, setTask] = useState({ name: "" });
    const [isLoading, setIsLoading] = useState(false);

    const {taskId} = useParams();
    const history = useHistory();

    const handleFieldChange = o => {
        const stateToChange = { ...task };
        stateToChange[o.target.id] = o.target.value;
        setTask(stateToChange);
    };

    const updateExistingTask = o => {
        o.preventDefault()
        setIsLoading(true);

        const editedTask = {
            id: task.id,
            name: task.name,
            userId: task.userId
        }

        updateTask(editedTask)
            .then(() => history.push("/tasks")
            )
        }

        useEffect(() => {
            getTaskById(TaskId)
              .then(task => {
                settask(task);
                setIsLoading(false);
              });
          }, []);

          return (
            <>
              <form>
                <fieldset>
                  <div className="formgrid">
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="name"
                      value={task.name}
                    />
                    <label htmlFor="name">Task Name</label>
        
                    <input
                      type="text"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="breed"
                      value={task.name}
                    />
                    <label htmlFor="breed">Breed</label>
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
