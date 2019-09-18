import React from 'react';
import Task from './Task'

const Tasks = (props) => {
  const tasksList = props.tasks.map(task =>
    <li className="task-list">
      <Task
        key={task.id}
        id={task.id}
        name={task.name}
        deleteTask={props.deleteTask}
      />
    </li>)

    return (
    <div className="tasks-box">
      <h1>{props.goal.title}</h1>
      <label><strong>GOALS</strong></label>
      <p>{props.goal.description}</p>
      <strong>TASKS</strong>
      <ul>
        {tasksList}
      </ul>
    </div>
  );
}


export default Tasks;
