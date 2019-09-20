import React, {Component} from 'react';
import Task from './Task'



  class Tasks extends Component {
    render() {
      const { tasks, deleteTask} = this.props
      // const goalTasks = tasks.filter(task => task.goalId === goalId)
      //
      const taskList = tasks.map((task, index) => {
        return <Task key={index} task={task} deleteTask={deleteTask} />
      })

      return (
        <div>
          <ul>
            {taskList}
          </ul>
        </div>
      )
    }
    }

export default Tasks;
