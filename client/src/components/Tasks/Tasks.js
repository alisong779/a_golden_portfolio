import React, {Component} from 'react';
import Task from './Task'



  class Tasks extends Component {
    render() {
      const { tasks } = this.props

      const taskList = tasks.map((task, index) => {
        return <Task key={index} task={task} deleteTask={this.props.deleteTask} />
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
