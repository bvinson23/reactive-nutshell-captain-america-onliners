
import React, { useState } from "react"
import { addTask } from "../../modules/TaskManager" 
import { useHistory } from "react-router-dom"
// import "./TaskForm.css"

export const TaskForm = () => {
    const [task, setTask] = useState({ name: "", date: "" });
    //? doesnt allow for multiple clicks
    const [isLoading, setIsLoading] = useState(false);

    //! idk
    const history = useHistory();

    //? every time you type in the input box, it creates a new state
    const handleFieldChange = o => {
        const stateToChange = { ...task };
        stateToChange[o.target.id] = o.target.value;
        setTask(stateToChange);
    };

    const handleAddTask = (evt) => {
        evt.preventDefault()
        setIsLoading(true)
        const taskName = task.name
        const taskDate = task.date
        if (taskName === "" || taskDate === "") {
            window.alert("Fill out the form to proceed. NOW")
        } else {
            addTask(task)
            .then(() => history.push("/tasks"))
        }
    }
    
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
                    <input
                      type="date"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="date"
                      value={task.date}
                    />
                    <input
                      type="hidden"
                      required
                      className="form-control"
                      onChange={handleFieldChange}
                      id="isNotCompleted"
                      value={task.isCompleted = false}
                    />
                  </div>
                  <div className="alignRight">
                    <button
                      type="button" disabled={isLoading}
                      onClick={handleAddTask}
                      className="btn btn-primary"
                    >Submit</button>
                  </div>
                </fieldset>
              </form>
            </>
          );



}
